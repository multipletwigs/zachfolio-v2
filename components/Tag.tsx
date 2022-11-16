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
        <a href={tagProps.link.href} target="_blank">
          <span
            className={`${tagProps.textColor} ${tagProps.bgColor} flex w-[fit-content] items-center gap-1 rounded-md px-3 py-1 text-center text-sm font-bold shadow-lg hover:underline`}
          >
            <FiExternalLink />
            {tagProps.link.name}
          </span>
        </a>
      ) : (
        <span
          className={`${tagProps.textColor} ${tagProps.bgColor} w-[fit-content] rounded-md px-3 py-1 text-center text-sm font-bold shadow-lg`}
        >
          {tagProps.content}
        </span>
      )}
    </>
  );
};

export default Tag;
