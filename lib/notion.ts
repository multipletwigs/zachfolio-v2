import { Client } from '@notionhq/client';

/**
 * String enums to satisfy the conversion to PageSelectProperty
 * Whilst also keeping types to be more explicit instead of just string
 */
export enum BlogStatusType {
  SCHOOL = 'School',
  PERSONAL = 'Personal'
}

// Notion API key
export const NotionClient = new Client({
  auth: process.env.NOTION_TOKEN as string
});
