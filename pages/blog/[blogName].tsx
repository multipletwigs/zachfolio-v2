import BlockRender, {
  BlogBlocks
} from 'components/blog_components/BlockRender';
import { SerifHeader } from 'components/SerifHeader';
import { Container } from 'layouts/Container';
import {
  BlogCardType,
  getBlogCardInfo,
  getBlogChildren
} from 'lib/getBlogContent';
import { GetStaticProps } from 'next/types';
import slugify from 'slugify';

const BlogPage = (props: any) => {
  return (
    <Container>
      <SerifHeader
        title={props.blogTitle}
        footer_desc={props.blogDescription}
      />
      {props.content.map((block: BlogBlocks, idx: number) => {
        return <BlockRender {...block} key={idx} />;
      })}
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
      blogDescription: pageContent.blogDescription
    }
  };
};
