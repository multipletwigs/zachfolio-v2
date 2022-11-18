import type { InferGetStaticPropsType } from 'next';
import { siteMetaData } from '../data/siteMetadata';
import { Container } from '../layouts/Container';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { BlogCardType, getBlogCardInfo } from 'lib/getBlogContent';
import BlogCard from 'components/blog_components/BlogCard';
import GlassBio from 'components/about_components/GlassBio';
import ArticleGrid from 'components/ArticleGrid';
import FeaturedArticles from 'components/FeaturedArticles';

/*
Exporting getStaticProps will allow you to share a state in that is called in lib. 
Whatever that is returned as props here will be passed down into the component below. 

getStaticProps: allows for ISR, where we only want the server to generate the content following 
a caching mechanism. This way your API doesn't get called every time the site gets rendered. 
*/
export async function getStaticProps() {
  const HOURS = 1;
  const postItems: BlogCardType[] = await getBlogCardInfo(
    process.env.NOTION_BLOG_DB_ID as string,
    true
  );

  return {
    props: {
      postItems
    },
    revalidate: 60 * 60 * 60 * HOURS
  };
}

const Home = ({
  postItems
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <Container>
      <header>
        <hgroup className={'grid justify-items-center text-center'}>
          <div className="fixed -z-10 h-[800px] w-16 -translate-y-36 -rotate-45 rounded-full bg-gradient-to-r from-green-300 to-slate-300 blur-3xl dark:from-indigo-800 dark:to-slate-800"></div>
          <div className="-translate-y-50 fixed -z-10 h-[800px] w-16 translate-x-64 -rotate-45 rounded-full bg-gradient-to-r from-blue-300 to-slate-300 blur-3xl dark:from-blue-800 dark:to-slate-800"></div>
          <Image
            priority={true}
            src={siteMetaData.avatarImage}
            height={200}
            width={200}
            alt="Rounded Image of Zach Khong Lap Hoe"
            className="mb-5 h-40 w-40 rounded-full md:h-[200px] md:w-[200px]"
          ></Image>
          <h1 className="w-[90%] text-2xl font-bold md:text-4xl">
            Hi, I&apos;m
            <span className="text-indigo-400"> Zach Khong. </span>
            I&apos;m a developer, and a final year Computer Science student at
            Monash University.
          </h1>
          <p className="mt-5 w-[80%] text-lg font-medium sm:w-[80%] md:w-[80%] md:text-xl">
            An aspiring Software Engineer and UI Designer. Making your software
            look lively and wonderful, and dangerously practical. I'll create anything you possibly need.
          </p>
          <div className="flex gap-5 py-5">
            <button
              className=" rounded-lg border-2 border-transparent bg-slate-700 px-5 py-2 font-semibold text-slate-200 transition-colors duration-300 hover:outline"
              onClick={() => {
                router.push('/blog');
              }}
            >
              Explore What I Know
            </button>
            <button
              className=" rounded-lg border-2 border-transparent bg-slate-200 px-5 py-2 font-semibold text-slate-700 transition-all hover:bg-slate-400"
              onClick={() => {
                router.push('/about');
              }}
            >
              More About Me
            </button>
          </div>
        </hgroup>
        <div className="mt-20">
          <h1 className="w-[90%] text-2xl font-bold md:text-4xl">
            Check out my latest articles
          </h1>
          <p className="mt-5 w-[80%] text-lg font-medium sm:w-[80%] md:w-[80%] md:text-xl">
            I write about my experiences and what I&apos;m learning and
            creating.
          </p>
          <FeaturedArticles>
            <ArticleGrid postItems={postItems} />
          </FeaturedArticles>
        </div>
      </header>
    </Container>
  );
};

export default Home;
