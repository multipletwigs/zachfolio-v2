import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

export interface LinkItem {
  name: string;
  href: string;
}


export interface TagProps {
  content: string;
  textColor: string;
  bgColor: string;
  link?: LinkItem;
}

const Tag = (tagProps: TagProps) => {
  return (
    <>
      {tagProps.link ? (
        // When using target="_blank", you must also set rel="noreferrer"
        // see https://mathiasbynens.github.io/rel-noopener/#recommendations
        <a href={tagProps.link.href} target="_blank" rel="noreferrer">
          <span
            className={`${tagProps.textColor} ${tagProps.bgColor} flex w-[fit-content] items-center gap-1 rounded-md px-3 py-1 text-center text-sm font-bold hover:underline`}
          >
            <FiExternalLink />
            {tagProps.link.name}
          </span>
        </a>
      ) : (
        <span
          className={`${tagProps.textColor} ${tagProps.bgColor} w-[fit-content] rounded-md px-3 py-1 text-center text-sm font-bold`}
        >
          {tagProps.content}
        </span>
      )}
    </>
  );
};

export default Tag;
