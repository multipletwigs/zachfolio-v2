import type { NextPage } from 'next';
import { siteMetaData } from '../data/siteMetadata';
import { Container } from '../layouts/Container';
import Image from 'next/future/image';
import GlassBio from 'components/about_components/GlassBio';

const Home: NextPage = () => {

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
            className="rounded-full mb-5"
          ></Image>
          <h1 className="w-[90%] text-4xl font-bold">
            Hi, I&apos;m
            <span className="text-indigo-400"> Zach Khong. </span>
            I&apos;m a developer, and a final year Computer Science student at
            Monash University.
          </h1>
          <p className="mt-5 w-[80%] text-xl font-medium sm:w-[80%] md:w-[80%]">
            An aspiring Software Developer and UI Designer. Making your software
            look lively and wonderful, and dangerously practical.
          </p>
          <div className="flex gap-5 py-5">
            <button className=" rounded-lg border-2 border-transparent bg-slate-700 px-5 py-2 font-semibold text-slate-200 transition-all duration-300 hover:rounded-3xl hover:bg-slate-800">
              Explore What I Know
            </button>
            <button className=" rounded-lg border-2 border-transparent bg-slate-200 px-5 py-2 font-semibold text-slate-700 transition-all duration-300 hover:rounded-3xl hover:bg-slate-400">
              More About Me
            </button>
          </div>
        </hgroup>
      </header>
    </Container>
  );
};

export default Home;
