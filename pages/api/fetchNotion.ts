import { Client } from "@notionhq/client"
import type { NextApiRequest, NextApiResponse } from 'next'

export const notion = new Client({
    auth: process.env.NOTION_TOKEN as string
})

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
) {
    return await notion.databases.query({
        database_id: process.env.NOTION_BLOG_DB_ID as string,
    }).then((response) => {
        res.statusCode = 200;
        res.end(JSON.stringify(response))
    });
}


