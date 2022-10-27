import React from 'react';

interface Header {
  title: string;
}

/**
 * There is a trick done to this which is utilizing arbituary negative positioning of underline text. Leading is used to ensure enough line-height and the key is actually text-decoration-skip-ink, where we don't want underlines to be skipped for overlapping text.
 * @param prop Header title 
 * @returns JSX H1 tag
 */

const SerifHeader = (prop: Header) => {
  return (
    <h1 className="leading-1 select-none text-center font-serif text-lg underline decoration-indigo-200 decoration-[30px] underline-offset-[-15px] [text-decoration-skip-ink:none] dark:decoration-slate-700 sm:text-4xl sm:leading-[150%] md:text-6xl md:leading-[150%]">
      {prop.title}
    </h1>
  );
};

export default SerifHeader;
