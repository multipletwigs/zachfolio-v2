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
  'Article Genre': any;
}

interface ExternalBlogProperty {
  external: any
}


/**
 * Actual BlogCardContent and type 
 */
export interface BlogCardType{
    pageId: string,
    title: string,
    description: string,
    articleGenre: string, 
    articleCover?: string | null,
    date: string,
    last_edited: string
}

export const getBlogCardInfo = async (databaseId: string) => {

    // Filters a custom property which is completed/incomplete!
    const allDatabaseItems: QueryDatabaseResponse =
      await NotionClient.databases.query({ database_id: databaseId,
      filter:{
        "and":[
          {
            "property":"Article Status",
            "select":{
              "equals":"complete"
            }
          }
        ]
      } });
  
    const allBlogPages: PageObjectResponse[] =
      allDatabaseItems.results as PageObjectResponse[];
  
    const allBlogPageCardInfo: BlogCardType[] = allBlogPages.map((page: PageObjectResponse) => {
  
      // From the page object 
      const { created_time, last_edited_time } = page;

      // From the cover object
      const externalImage = page.cover ? page.cover as any as ExternalBlogProperty : null;

      // External image url 
      const coverURL = externalImage ? externalImage.external.url : null;

      console.log(coverURL)

      // From the property object
      const pageProperties = page.properties as any as NotionBlogProperty;
      const { Name, Description } = pageProperties;

      // Just in case I forget about the description. This is not done for the page title because the you must have a title for notion to create a page for you. 
      const articleDesc = Description.rich_text[0] ? Description.rich_text[0].plain_text : 'No Description';
  
      // The actual content that is needed is deeply nested within
      // Cannot transform created_time to date as it is non-serializable
      // Theo made a video about this which is interesting, type safety vs. serializability. 
      return {
        pageId: page.id,
        title: Name['title'][0].plain_text,
        description: articleDesc,
        articleGenre: pageProperties['Article Genre']['select']['name'], 
        articleCover:coverURL,
        date: created_time,
        last_edited: last_edited_time
      } as BlogCardType;
    });
    return allBlogPageCardInfo; 
  };


