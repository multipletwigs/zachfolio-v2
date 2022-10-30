import BlogCard from 'components/BlogCard';
import { SerifHeader } from 'components/SerifHeader';
import { BlogCardType, getBlogCardInfo } from 'lib/getBlogContent';
import Image from 'next/image';
import { InferGetStaticPropsType } from 'next/types';
import React from 'react';
import { Container } from '../../layouts/Container';

/*
Exporting getStaticProps will allow you to share a state in that is called in lib. 
Whatever that is returned as props here will be passed down into the component below. 

getStaticProps: allows for ISR, where we only want the server to generate the content following 
a caching mechanism. This way your API doesn't get called every time the site gets rendered. 
*/
export async function getStaticProps() {
  const postItems: BlogCardType[] = await getBlogCardInfo(
    process.env.NOTION_BLOG_DB_ID as string
  );

  return {
    props: {
      postItems
    },
    revalidate: 10
  };
}

/**
 * The type of props must be of InferGetStaticPropsType<typeof getStaticProps>
 * This allows your TypeScript from getStaticProps to be inferred. You shouldn't
 * try to explicitly type this.
 */
const blog = ({
  postItems
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <SerifHeader
        title={'A documentation about my life.'}
        footer_desc={'EVERYTHING I KNOW ABOUT'}
      />
      {postItems.map((postItem: BlogCardType, idx: number) => {
        return (
          <BlogCard
            key={idx}
            props={postItem}
          ></BlogCard>
        );
      })}
      {/* <div>{postItems[0].title}</div> */}
    </Container>
  );
};

export default blog;
