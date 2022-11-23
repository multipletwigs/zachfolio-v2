import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { siteMetaData } from 'data/siteMetadata';
import { PageTransition } from 'components/PageTransition';
import { useState } from 'react';
import { BlogCardType } from 'lib/getBlogContent';

export function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  // Each page will have a head element, meta tags are really important for SEO
  const page_meta = {
    title: props.customMeta?.title || siteMetaData.title,
    description: props.customMeta?.description || siteMetaData.description,
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
        {/* Was having issues with google security */}
        <meta
          name="google-site-verification"
          content="xzeYzuuxCS2qLIB-dqzoCdFT-Xm-QLT_Msl8ozh5944"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:url"
          content={`${siteMetaData.siteUrl}${router.asPath}`}
        />
        {/* Twitter is a bit special, for twitter:image to work, give the meta tag a NAME property instead of PROPERTY property */}
        <meta name="twitter:card" content="https://zachkhong.vercel.app/api/ogImage"></meta>
      </Head>
      <NavBar />
      <main
        className={`mx-auto flex max-w-6xl flex-col justify-center px-5 sm:py-10 md:px-10`}
      >
        <PageTransition>{children}</PageTransition>
        <Footer />
      </main>
    </div>
  );
}
