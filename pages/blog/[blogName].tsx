import BlockRender, {
  BlogBlocks
} from 'components/blog_components/BlockRender';
import { SerifHeader } from 'components/SerifHeader';
import Tag from 'components/Tag';
import { MetaTypes, siteMetaData } from 'data/siteMetadata';
import { Container } from 'layouts/Container';
import {
  BlogCardType,
  getBlogCardInfo,
  getBlogChildren
} from 'lib/getBlogContent';
import { GetStaticProps } from 'next/types';
import slugify from 'slugify';

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(siteMetaData.locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const BlogPage = (props: any) => {
  
  const blogMeta: MetaTypes = {
    ...siteMetaData,
    title: `Zach Khong | ${props.blogTitle}`, 
    description: props.blogMetaDesc,
  }

  return (
    <Container customMeta={blogMeta}>
      <SerifHeader
        title={props.blogTitle}
        footer_desc={props.blogDescription}
      />
      <div className="mt-5 inline-flex w-[100%] flex-col items-center">
        <Tag
          content={`Edited @ ${formatDate(
            props.blogUpdatedAt
          )} | Written @ ${formatDate(props.blogPublishedAt)}`}
          textColor={'text-blue-700 dark:text-indigo-300'}
          bgColor={'bg-blue-400/30 dark:bg-indigo-700/30'}
        ></Tag>
      </div>
      <div className="my-10">
        {props.content.map((block: BlogBlocks, idx: number) => {
          return <BlockRender {...block} key={idx} />;
        })}
      </div>
    </Container>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const data: BlogCardType[] = await getBlogCardInfo(
    process.env.NOTION_BLOG_DB_ID as string
  );

  // This tells next js what available paths are to be rendered
  const paths = data.map((item: BlogCardType) => {
    return {
      params: {
        blogName: slugify(item.title, {
          lower: true
        })
      }
    };
  });
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogName: string = context.params?.blogName as string;
  const pageContent = await getBlogChildren(blogName);

  return {
    props: {
      content: pageContent.blogContent,
      blogTitle: pageContent.blogTitle,
      blogDescription: pageContent.blogDescription,
      blogMetaDesc: pageContent.blogMetaDesc,
      blogPublishedAt: pageContent.blogPublishedDate,
      blogUpdatedAt: pageContent.blogUpdatedDate
    },
    revalidate: 30
  };
};
