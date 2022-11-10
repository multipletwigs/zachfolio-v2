import React from 'react';
import { BlogCardType } from 'lib/getBlogContent';
import Image from 'next/image';

const BlogCard = ({ props }: {props: BlogCardType}) => {

  return (
    <div className="flex flex-col w-[300px] hover:bg-slate-500/40 p-3 rounded-xl transition-all transition-color">
      <Image
        priority
        width={300}
        height={300}
        alt={props.articleCover!}
        src={props.articleCover!}
      ></Image>
      <p>{props.date}</p>
      <h1 className="text-lg font-bold">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
