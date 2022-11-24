import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import { siteMetaData } from 'data/siteMetadata';
import { PageTransition } from 'components/PageTransition';

const ImageOG = ({
  title,
  description,
  image,
  url
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) => {
  return (
    <Head>
      {/* Twitter OG */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@multipletwigs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Facebook OG */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* LinkedIn OG */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Head>
  );
};

export function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  // Each page will have a head element, meta tags are really important for SEO
  const page_meta = {
    title: props.customMeta?.title || siteMetaData.title,
    description: props.customMeta?.description || siteMetaData.description,
    ...customMeta
  };

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
      </Head>
      <ImageOG
        title={page_meta.title}
        description={page_meta.description}
        image={`${siteMetaData.siteUrl}/api/ogImage`}
        url={`${siteMetaData.siteUrl}${router.asPath}`}
      />
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
