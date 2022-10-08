import { Client } from "@notionhq/client"

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN
})

export const getDB = async (databaseID: string) => {
    const response = await notion.databases.query({
        database_id: databaseID,
    }); 
    return response.results; 
}

module.exports = { notion, getDB}; 

