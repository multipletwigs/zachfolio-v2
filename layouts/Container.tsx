import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { siteMetaData } from 'data/siteMetadata';
import { PageTransition } from 'components/PageTransition';
import { useEffect, useState } from 'react';
import { BlogCardType, getBlogCardInfo } from 'lib/getBlogContent';
import { useQuery } from '@tanstack/react-query';
import ArticleGrid from 'components/ArticleGrid';
import FeaturedArticles from 'components/FeaturedArticles';
import useSWR from 'swr';

export function Container(props: any) {
  const { children, ...customMeta } = props;
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogCardType[]>([]);
  const router = useRouter();

  // const {data, error} = useSWR()

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['featuredBlogs'],
  //   queryFn: () =>
  //     getBlogCardInfo(process.env.NOTION_BLOG_DB_ID as string, true)
  // });

  // Each page will have a head element, meta tags are really important for SEO
  const page_meta = {
    title: siteMetaData.title,
    description: siteMetaData.description,
    githubHandle: siteMetaData.githubHandle,
    date: null,
    ...customMeta
  };

  // useEffect(() => {
  //   if (data) {
  //     setFeaturedBlogs(data);
  //   }
  // }, [data]);

  return (
    <div className={`min-h-screen max-w-full`}>
      <Head>
        <title>{page_meta.title}</title>
        <meta content={page_meta.description} name="description" />
        <meta
          name="google-site-verification"
          content="xzeYzuuxCS2qLIB-dqzoCdFT-Xm-QLT_Msl8ozh5944"
        />
        <meta
          property="og:url"
          content={`${siteMetaData.siteUrl}${router.asPath}`}
        />
      </Head>
      <NavBar />
      <main
        className={`mx-auto flex max-w-6xl flex-col justify-center px-5 sm:py-10 md:px-10`}
      >
        <PageTransition>{children}</PageTransition>
        <Footer/>
      </main>
    </div>
  );
}
