import { BlogStatusType, getDB } from 'lib/notion';
import { InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next/types';
import React from 'react';
import { Container } from '../layouts/Container';

export interface NotionBlogProps {
  statuses: string[];
}

/*
Exporting getStaticProps will allow you to share a state in that is called in lib. 
Whatever that is returned as props here will be passed down into the component below. 

getStaticProps: allows for ISR, where we only want the server to generate the content following 
a caching mechanism. This way your API doesn't get called every time the site gets rendered. 
*/
export async function getStaticProps() {
  const post: NotionBlogProps = await getDB(process.env.NOTION_BLOG_DB_ID as string);

  return {
    props: {
      post
    },
    revalidate: 3600, 
  };
}

/**
 * The type of props must be of InferGetStaticPropsType<typeof getStaticProps>
 * This allows your TypeScript from getStaticProps to be inferred. You shouldn't
 * try to explicitly type this. 
 */
const blog = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const allStatus: string[] = post.statuses;
  console.log(post.statuses)
  return (
    <Container>
      <div>Blog</div>
      <div>All blog statuses</div>
      {allStatus.map((status: string, idx: number) => {
        return <div key={idx}>{status}</div>;
      })}
    </Container>
  );
};

export default blog;
