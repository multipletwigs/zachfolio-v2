import React from 'react';
import { BlogCardType } from 'lib/getBlogContent';
import Image from 'next/image';

const BlogCard = ({ props }: {props: BlogCardType}) => {
  return (
    <div>
      <Image
        priority
        width={300}
        height={300}
        alt={props.articleCover!}
        src={props.articleCover!}
      ></Image>

      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default BlogCard;
