import React from 'react';
import { BlogCardType } from 'lib/getBlogContent';
import Image from 'next/image';

const BlogCard = ({ props }: {props: BlogCardType}) => {
  return (
    <div className="">
      <Image
        priority
        width={300}
        height={300}
        alt={props.articleCover!}
        src={props.articleCover!}
        className={''}
      ></Image>
      <p>{props.date}</p>
      <h1 className="text-lg font-bold">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
