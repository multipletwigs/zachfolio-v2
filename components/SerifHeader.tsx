import React from 'react';

interface Header {
  title: string;
  footer_desc: string;
  left_aligned?: boolean;
}

/**
 * There is a trick done to this which is utilizing arbituary negative positioning of underline text. Leading is used to ensure enough line-height and the key is actually text-decoration-skip-ink, where we don't want underlines to be skipped for overlapping text.
 * @param prop Header title
 * @returns JSX H1 tag
 */

export const SerifHeader = (prop: Header) => {
  return (
    <header
      className={`font-sans ${prop.left_aligned ? 'text-left' : 'text-center'}`}
    >
      <h1
        className={`leading-1 select-none pb-5 font-serif text-xl underline decoration-indigo-200 [text-decoration-skip-ink:none] dark:decoration-slate-700 sm:text-4xl sm:leading-[150%] decoration-[10px] underline-offset-[-5px] md:text-4xl md:leading-[150%] md:decoration-[20px] md:underline-offset-[-10px]`}
      >
        {prop.title}
      </h1>
      <p className="text-lg capitalize text-indigo-400 md:text-2xl">
        {prop.footer_desc}
      </p>
    </header>
  );
};
