import React from 'react';
import { BlogCardType } from 'lib/getBlogContent';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import { Client } from '@notionhq/client';
import slugify from 'slugify';
import Tag from 'components/Tag';
import { create } from 'domain';

const BlogCard = (props: BlogCardType) => {
  const blogName = slugify(props.title, {
    lower: true,
  }); 

  const createdAt = new Date(props.date).toLocaleString();

  return (
    <Link
      href={{
        pathname: `/blog/${blogName}`
      }}
    >
      <div className="transition-color flex w-full md:w-[350px] flex-col rounded-xl p-3 transition-all hover:bg-slate-500/40">
        <Image
          priority
          width={400}
          height={400}
          alt={props.articleCover!}
          src={props.articleCover!}
        ></Image>
        <div className="my-2">
          <Tag content={`Created at ${createdAt}`} textColor={'text-slate-300'} bgColor={'bg-slate-700'}></Tag>
        </div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p>{props.description}</p>
        <Tag content={props.articleGenre} textColor={'text-slate-300'} bgColor={'bg-slate-700'}></Tag>
      </div>
    </Link>
  );
};

export default BlogCard;

