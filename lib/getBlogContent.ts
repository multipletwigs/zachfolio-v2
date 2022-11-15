import {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';
import slugify from 'slugify';
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

/**
 * Actual BlogCardContent and type
 */
export interface BlogCardType {
  pageId: string;
  title: string;
  description: string;
  articleGenre: string;
  articleCover?: string | null;
  date: string;
  last_edited: string;
}

export const getBlogCardInfo = async (
  databaseId: string,
  featuredOnly: boolean = false
) => {
  // Filters a custom property which is completed/incomplete!

  const baseFilter = {
    and:[
      {
        property: 'Article Status',
        select: {
          equals: 'complete'
        }
      }
    ]
  }

  if(featuredOnly){
    baseFilter.and.push({
      property: 'Is Featured',
      select: {
        equals: "Featured"
      }
    })
  }

  const allDatabaseItems: QueryDatabaseResponse =
    await NotionClient.databases.query({
      database_id: databaseId,
      filter: baseFilter
    });

  const allBlogPages: PageObjectResponse[] =
    allDatabaseItems.results as PageObjectResponse[];

  const allBlogPageCardInfo: BlogCardType[] = allBlogPages.map(
    (page: PageObjectResponse) => {
      // From the page object
      const { created_time, last_edited_time } = page;

      // From the cover object
      const externalImage = page.cover
        ? page.cover.type === 'external'
          ? page.cover.external.url
          : page.cover.file.url
        : null;

      // From the property object, since the key is the name of the property
      const pageProperties = page.properties as any as NotionBlogProperty;
      const { Name, Description } = pageProperties;

      // Just in case I forget about the description. This is not done for the page title because the you must have a title for notion to create a page for you.
      const articleDesc = Description.rich_text[0]
        ? Description.rich_text[0].plain_text
        : 'No Description';

      // The actual content that is needed is deeply nested within
      // Cannot transform created_time to date as it is non-serializable
      // Theo made a video about this which is interesting, type safety vs. serializability.
      return {
        pageId: page.id,
        title: Name['title'][0].plain_text,
        description: articleDesc,
        articleGenre: pageProperties['Article Genre']['select']['name'],
        articleCover: externalImage,
        date: created_time,
        last_edited: last_edited_time
      } as BlogCardType;
    }
  );
  return allBlogPageCardInfo;
};

export const getBlogChildren = async (blogName: string) => {
  const allBlog = await getBlogCardInfo(
    process.env.NOTION_BLOG_DB_ID as string
  );
  const blogPage = allBlog.find(
    (blog) =>
      slugify(blog.title, {
        lower: true
      }) === blogName
  );

  // Getting results field from blocks.children.list
  const { results } = await NotionClient.blocks.children.list({
    block_id: blogPage?.pageId as string
  });

  // Getting relevant fields from results
  // Block here as type any is used to satisfy the dynamic nature of Notion Blocks
  const blogContent = results.map((block: any) => {
    const { type } = block as BlockObjectResponse;
    return {
      type: type,
      content: block[type] as any
    };
  });

  return {
    blogContent: blogContent,
    blogTitle: blogPage?.title as string,
    blogDescription: blogPage?.description as string
  };
};
