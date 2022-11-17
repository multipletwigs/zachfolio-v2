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
import { siteMetaData } from 'data/siteMetadata';

const BlogCard = (props: BlogCardType) => {
  const blogName = slugify(props.title, {
    lower: true
  });

  const createdAt = new Date(props.date).toLocaleDateString(
    siteMetaData.locale,
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  return (
    <Link
      href={{
        pathname: `/blog/${blogName}`
      }}
    >
      <div className="transition-color flex w-full flex-col rounded-xl p-3 transition-all hover:bg-slate-500/40 md:w-[350px]">
        <Image
          priority
          width={400}
          height={400}
          alt={props.articleCover!}
          src={props.articleCover!}
        ></Image>
        <div className="my-2">
          <Tag
            content={`Published on ${createdAt}`}
            textColor={'text-teal-400'}
            bgColor={'bg-teal-700/30'}
          ></Tag>
        </div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
