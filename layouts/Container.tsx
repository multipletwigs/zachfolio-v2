import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { siteMetaData } from 'data/siteMetadata';
import { PageTransition } from 'components/PageTransition';

export function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  // Each page will have a head element, meta tags are really important for SEO
  const page_meta = {
    title: siteMetaData.title,
    description: siteMetaData.description,
    githubHandle: siteMetaData.githubHandle,
    date: null,
    ...customMeta
  };

  return (
    <div className={`min-h-screen`}>
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
        className={`mx-auto flex max-w-6xl flex-col justify-center px-10 sm:py-10`}
      >
        <PageTransition>
            {children}
        </PageTransition>
        <Footer></Footer>
      </main>
    </div>
  );
}
