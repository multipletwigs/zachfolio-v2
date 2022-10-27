import { Client } from "@notionhq/client"
import { GetPageResponse, PageObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlogProps } from "pages/blog";

/**
 * String enums to satisfy the conversion to PageSelectProperty
 * Whilst also keeping types to be more explicit instead of just string 
 */
export enum BlogStatusType{
    SCHOOL = 'School', 
    PERSONAL = 'Personal',
}

/**
 * Interfaces here represent the types denoted by notionhq/client object types
 * They are rather hard to decipher hence custom type conversions are needed 
 * to simplify the dev process. 
 * Obtained from notionhq types
 */
interface PageStatusProperty{
    id: string,
    type: string,
    select: PageSelectProperty
}

/**
 * Obtained from notionhq types
 */
interface PageSelectProperty{
    id: string,
    name: BlogStatusType,
    color: string,
}

export const notion = new Client({
    auth: process.env.NOTION_TOKEN as string
})

/**
 * 
 * @param databaseID 
 * @returns All the blog genres
 */
export const getDB = async (databaseID: string) => {
    const response: QueryDatabaseResponse = await notion.databases.query({
        database_id: databaseID,
    });

    const allPages = response.results as PageObjectResponse[] 

    const pageStatus: NotionBlogProps = {
        statuses: allPages.map((pageObj: PageObjectResponse) => {
            const pageStatus = pageObj.properties['Article Status'] as PageStatusProperty
            return pageStatus.select.name
        })
    }

    return pageStatus; 
}

module.exports = { notion, getDB };

