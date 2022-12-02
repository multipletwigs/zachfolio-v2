import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Container } from '../layouts/Container';
import { SerifHeader } from 'components/SerifHeader';
import Image from 'next/future/image';
import { siteMetaData } from 'data/siteMetadata';
import GlassBio from 'components/about_components/GlassBio';
import WorkExpTable from 'components/about_components/WorkExpTable';
import Tag from 'components/Tag';

const self_intro = (
  <p className="mb-4 text-justify text-lg dark:text-slate-200">
    Hello there reader, a pleasure to meet you! My name is Zach Khong and
    I&apos;m a final year CS Student at Monash University Malaysia. Believe it or not, I only started coding during the start of the pandemic, and was on the path to pursue a Medicine degree before that. Fortunately, I did not go down that path as I realized that I was not enjoying what I was studying. After my Cambridge A-Levels exam, I have decided to take the leap of faith and try out coding, and boy, I&apos;m glad I did. Thanks CS50!
    <br />
    <br />
    I&apos;m currently interning at Estee Lauder Companies as a Software Engineer.
  </p>
);

const aboutContent = {
  name: 'ZACH KHONG',
  chi_name: '邝立浩',
  header: 'My life before now',
  self_intro_p: self_intro,
  tech_exp_header: 'Recent Projects',
  tech_exp_p:
    "I have been coding for a year or two now. I've racked up a lot of rudimentary knowledge in software engineering. Be it through assignments, hackathons, personal projects or school organizations, I spend a lot of time to hone my craft. I'll mention a few highlights :)"
};

const about: NextPage = () => {
  return (
    <Container>
      <SerifHeader
        title={'Who I am and what do I want to be?'}
        footer_desc={'Everything about my life'}
      />
      <div className="mt-5 md:mt-20">
        <GlassBio />
      </div>
      <article className={'my-20 flex flex-col justify-between md:flex-row'}>
        <header className={'flex flex-col'}>
          <h2 className={'text-2xl tracking-widest text-slate-400'}>
            {aboutContent.name}
            <br />
            {aboutContent.chi_name}
          </h2>
          <figure>
            <Image
              priority={true}
              src={siteMetaData.avatarImage_2}
              alt={
                'An image of Zach Khong taking a picture with a live size eevee plush'
              }
              width={300}
              height={300}
              className={'mt-5 h-[300px] w-[300px]'} //explicity setting height and width to prevent image from being stretched, due to important setting in tailwind.config.js
            />
            <figcaption className={'mt-4'}>
              — Me and live sized Eevee ?!
              <br />
              <cite>Animecon-2022</cite>
            </figcaption>
          </figure>
        </header>
        <aside className="flex flex-col md:w-[60%]">
          <h1 className="mt-5 text-left text-2xl font-semibold text-rose-400 dark:text-teal-400 md:mt-0 md:text-right md:text-3xl">
            {aboutContent.header}
          </h1>
          {aboutContent.self_intro_p}
        </aside>
      </article>
      <section>
        <header className="mb-10">
          <h2
            className={
              'text-2xl font-semibold text-rose-400 dark:text-teal-400 md:text-3xl'
            }
          >
            {aboutContent.tech_exp_header}
          </h2>
          <p className="text-justify text-lg dark:text-slate-200">
            {aboutContent.tech_exp_p}
          </p>
        </header>
        <WorkExpTable />
      </section>
    </Container>
  );
};

export default about;
