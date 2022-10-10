import { Client } from "@notionhq/client"
import { GetPageResponse, PageObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN as string
})

export const getDB = async (databaseID: string) => {
    const response: QueryDatabaseResponse = await notion.databases.query({
        database_id: databaseID,
    });

    // Getting Page Ids 
    const dbPageObjs: string[] = response.results.map((pageObj: PageObjectResponse | PartialPageObjectResponse) => {
        return pageObj.id
    });

    console.log(dbPageObjs)

    // Getting Pages itself for titling 
    const pageTitles = dbPageObjs.map(async (pageId: string) => {
        const pageItem: GetPageResponse = await notion.pages.retrieve({ page_id: pageId })
        console.log(pageItem)

    })


    return dbPageObjs;
}

module.exports = { notion, getDB };

