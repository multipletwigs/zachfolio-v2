import React from 'react';
import { BlogCardType } from 'lib/getBlogContent';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import { Client } from '@notionhq/client';
import slugify from 'slugify';

const BlogCard = (props: BlogCardType) => {
  const blogName = slugify(props.title, {
    lower: true,
  }); 

  return (
    <Link
      href={{
        pathname: `/blog/${blogName}`
      }}
    >
      <div className="transition-color flex w-[300px] flex-col rounded-xl p-3 transition-all hover:bg-slate-500/40">
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
    </Link>
  );
};

export default BlogCard;

