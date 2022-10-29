import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Container } from '../layouts/Container';
import { SerifHeader } from 'components/SerifHeader';
import Image from 'next/future/image';
import { siteMetaData } from 'data/siteMetadata';
import GlassBio from 'components/GlassBio';

const self_intro = (
  <p className="my-4 text-justify dark:text-slate-200 md:w-[60%]">
    Yup, that's me on the left (or above if you're on mobile), and I have made
    coding my life since I joined Monash University. Believe it or not, I wanted
    to become a doctor when I was in college (Methodist College). I was doing
    decent, but not exceptional. I eventually got burnt out from memorization in
    Biology and ventured into a domain that I've never even heard of before:
    Computer Science.
    <br />
    <br />
    I started off by taking Harvard's free CS50 Course, and since then I
    was hooked by the power of programming. It's quite literally a super power
    to code. Imagine a world where you can create anything, and this is the
    world of software I currently live in, making literally whatever I want.
    <br/>
    <br/>
    In Monash I'm lucky enough to meet peers and friends who are exceptionally talented, and I'm glad to be able to learn from them. Their drive for success is contagious, and I'm grateful that they are in my life.
    <br/>
    <br/>
    Alright! Yes, my professional skills? I'm a full stack developer, and I realized that I'm rather good at UI/UX Designs and Front-end development. I call myself full stack as I work so closely with backend teams I sometimes write the backend myself. But what I love is still Frontend Development and design. 
    <br/>
    <br/>
    I'm currently leading a self-learning group called UReview, and since we have no work experience, everything that I know now is done through self-learning, and I'm really happy to see how far I've come from doing basic HTML pages to writing fullstack applications and configuring deployment platforms like DigitalOcean. 
  </p>
);

const aboutContent = {
  name: 'ZACH KHONG',
  chi_name: '邝立浩',
  header: 'Everything I wanted to do in my life is to create what I want to',
  self_intro_p: self_intro
};

const about: NextPage = () => {
  return (
    <Container>
      <SerifHeader
        title={'Who I am and what I want to be?'}
        footer_desc={'Everything about my professional career'}
      ></SerifHeader>
      <article className={'mt-20'}>
        <header className={'flex flex-col justify-between md:flex-row'}>
          <h2 className={'text-2xl tracking-widest text-slate-400'}>
            {aboutContent.name}
            <br />
            {aboutContent.chi_name}
          </h2>
          <h1 className="mt-5 text-left text-xl text-rose-400 md:mt-0 md:w-[60%] md:text-right md:text-3xl">
            {aboutContent.header}
          </h1>
        </header>
        <aside className="flex flex-col justify-center md:flex-row md:justify-between">
          <figure>
            <Image
              src={siteMetaData.avatarImage_2}
              alt={
                'An image of Zach Khong taking a picture with a live size eevee plush'
              }
              width={300}
              height={300}
              className={'mt-5 h-[300px] w-[300px]'} //explicity setting height and width to prevent image from being stretched, due to important setting in tailwind.config.js
            />
            <figcaption className={'mt-4'}>
              — Me and live sized eevee?!, <cite>Animecon-2022</cite>
            </figcaption>
          </figure>
          {aboutContent.self_intro_p}
        </aside>
      </article>
      <GlassBio />
    </Container>
  );
};

export default about;
