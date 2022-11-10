import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Container } from '../layouts/Container';
import { SerifHeader } from 'components/SerifHeader';
import Image from 'next/future/image';
import { siteMetaData } from 'data/siteMetadata';
import GlassBio from 'components/about_components/GlassBio';
import WorkExpTable from 'components/about_components/WorkExpTable';

const self_intro = (
  <p className="my-4 text-justify text-lg dark:text-slate-200">
    I eventually got burnt out from memorization in Biology and ventured into a
    domain that I&apos;ve never even heard of before: Computer Science.
    <br />
    <br />
    Alright! Yes, my professional skills? I&apos;m a full stack developer, and I
    realized that I&apos;m rather good at UI/UX Designs and Front-end
    development. I call myself full stack as I work so closely with backend
    teams I sometimes write the backend myself. But what I love is still
    Frontend Development and design.
    <br />
    <br />
    I&apos;m currently leading a self-learning group called UReview, and since
    we have no work experience, everything that I know now is done through
    self-learning. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Facilis numquam laborum in accusantium veniam necessitatibus molestiae
    ducimus qui, repellendus rerum.
  </p>
);

const aboutContent = {
  name: 'ZACH KHONG',
  chi_name: '邝立浩',
  header: 'Everything I wanted to do in my life is to create what I want to',
  self_intro_p: self_intro,
  tech_exp_header: 'Technical Experiences',
  tech_exp_p:
    "I have been coding for a year or two now. I've racked up a lot of rudimentary knowledge in software engineering. Be it through assignments, hackathons, personal projects or school organizations, I spend a lot of time to hone my craft. I'll mention a few highlights :)"
};

const about: NextPage = () => {
  return (
    <Container>
      <SerifHeader
        title={'Who I am and what I want to be?'}
        footer_desc={'Everything about my professional career'}
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
          <h1 className="mt-5 text-left text-2xl text-teal-400 md:mt-0 md:text-right md:text-3xl">
            {aboutContent.header}
          </h1>
          {aboutContent.self_intro_p}
        </aside>
      </article>
      <section>
        <header className="mb-10">
          <h2 className={'text-2xl text-teal-400 md:text-3xl'}>
            {aboutContent.tech_exp_header}
          </h2>
          <p className="text-lg text-justify dark:text-slate-200">{aboutContent.tech_exp_p}</p>
        </header>
        <WorkExpTable />
      </section>
    </Container>
  );
};

export default about;
