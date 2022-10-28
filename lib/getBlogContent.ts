import {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';
import { NotionClient } from './notion';

/**
 * The any types are due to the dynamic nature of Notion Page Properties.
 * I just needed a clearly named type for the property, hence any is used here. 
 */
interface NotionBlogProperty {
  Name: any;
  Description: any;
  'Article Status': any;
}

/**
 * Actual BlogCardContent and type 
 */
export interface BlogCardType{
    pageId: string,
    title: string,
    description: string,
    articleGenre: string, 
    date: string,
    last_edited: string
}

export const getBlogCardInfo = async (databaseId: string) => {
    const allDatabaseItems: QueryDatabaseResponse =
      await NotionClient.databases.query({ database_id: databaseId });
  
    const allBlogPages: PageObjectResponse[] =
      allDatabaseItems.results as PageObjectResponse[];
  
    const allBlogPageCardInfo: BlogCardType[] = allBlogPages.map((page: PageObjectResponse) => {
  
      // From the page object 
      const { created_time, last_edited_time } = page;

      // From the property object
      const pageProperties = page.properties as any as NotionBlogProperty;
      const { Name, Description } = pageProperties;
  
      // The actual content that is needed is deeply nested within
      return {
        pageId: page.id,
        title: Name['title'][0].plain_text,
        description: Description.rich_text[0].plain_text,
        articleGenre: pageProperties['Article Status']['select']['name'], 
        date: created_time,
        last_edited: last_edited_time
      } as BlogCardType;
    });
    return allBlogPageCardInfo; 
  };

// export const getBlogContent = async (pageId: string) => {
//   const pageResponse = await NotionClient.blocks.children.list({
//     block_id: pageId
//   });

//   const pageResults = pageResponse.results as BlockObjectResponse[];
//   const blogProps: BlogContentType[] = pageResults.map(
//     (block: BlockObjectResponse) => {
//       return {
//         id: block.id as string,
//         type: block.type as string
//       };
//     }
//   );
// };


