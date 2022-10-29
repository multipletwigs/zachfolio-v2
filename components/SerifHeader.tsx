import React from 'react';
import {HiFire} from 'react-icons/hi';

interface Header {
  title: string;
  footer_desc: string; 
}

/**
 * There is a trick done to this which is utilizing arbituary negative positioning of underline text. Leading is used to ensure enough line-height and the key is actually text-decoration-skip-ink, where we don't want underlines to be skipped for overlapping text.
 * @param prop Header title 
 * @returns JSX H1 tag
 */

export const SerifHeader = (prop: Header) => {
  return (
    <header className="font-sans">
      <h1 className="leading-1 select-none text-center font-serif text-lg pb-5 underline decoration-indigo-200 decoration-[20px] underline-offset-[-10px] [text-decoration-skip-ink:none] dark:decoration-slate-700 sm:text-4xl sm:leading-[150%] md:text-4xl md:leading-[150%]">
        {prop.title}
      </h1>
      <p className="capitalize text-center text-indigo-400 text-2xl">{prop.footer_desc}</p>
    </header>
  );
};
