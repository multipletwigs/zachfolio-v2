import { Client } from "@notionhq/client"
import { GetPageResponse, PageObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionBlogProps } from "pages/blog";

/**
 * String enums to satisfy the conversion to PageSelectProperty 
 */
export enum BlogStatusType{
    'Unfinished', 
    'Planning',
}

/**
 * Interfaces here represent the types denoted by notionhq/client object types
 * They are rather hard to decipher hence custom type conversions are needed 
 * to simplify the dev process. 
 */
interface PageStatusProperty{
    id: string,
    type: string,
    select: PageSelectProperty
}

interface PageSelectProperty{
    id: string,
    name: BlogStatusType,
    color: string,
}

export const notion = new Client({
    auth: process.env.NOTION_TOKEN as string
})

export const getDB = async (databaseID: string) => {
    const response: QueryDatabaseResponse = await notion.databases.query({
        database_id: databaseID,
    });

    const allPages = response.results as PageObjectResponse[] 

    const pageStatus: NotionBlogProps = {
        statuses: allPages.map((pageObj: PageObjectResponse) => {
            const pageStatus = pageObj.properties['Article Status'] as PageStatusProperty
            console.log(pageStatus)
            return pageStatus.select.name
        })
    }

    return pageStatus; 
}

module.exports = { notion, getDB };

