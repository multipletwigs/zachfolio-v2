import type { InferGetStaticPropsType } from 'next';
import { siteMetaData } from '../data/siteMetadata';
import { Container } from '../layouts/Container';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import { BlogCardType, getBlogCardInfo } from 'lib/getBlogContent';
import ArticleGrid from 'components/ArticleGrid';
import FeaturedArticles from 'components/FeaturedArticles';

const homeSpans = {
  zach_khong: (
    <span className="text-indigo-400">
      {' '}
      Zach Khong
    </span>
  ),
  monash_university_malaysia: (
    <a href="https://www.monash.edu.my/" rel="noreferrer" target="_blank" className="hover:underline hover:text-indigo-400">
      {' '}
      Monash University Malaysia{' '}
    </a>
  ),
  estee_lauder_companies: (
    <a href="https://www.elcompanies.com/en" rel="noreferrer" target="_blank" className="hover:underline hover:text-indigo-400">
      {' '}
      Estee Lauder Companies{' '}
    </a>
  )
};

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
            {homeSpans.zach_khong}.
            I&apos;m a final year Computer Science student at{' '}
            {homeSpans.monash_university_malaysia}
            and a SWE intern at{' '}
            {homeSpans.estee_lauder_companies}
          </h1>
          <p className="mt-5 w-[80%] text-lg font-medium sm:w-[80%] md:w-[80%] md:text-xl">
            An aspiring Software Engineer and UI Designer. Making your software
            look lively, and dangerously practical. Currently living in Frontend Development!
          </p>
          <div className="flex gap-5 py-5">
            <button
              className=" rounded-lg border-2 border-transparent bg-slate-700 px-5 py-2 font-semibold text-slate-200 transition-colors duration-300 hover:outline"
              onClick={() => {
                router.push('/project');
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
            Featured Projects!
          </h1>
          <p className="mt-5 w-[80%] text-lg font-medium sm:w-[80%] md:w-[80%] md:text-xl">
            A detailed list of projects that I have worked on, and am currently working on.
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
