import React from 'react';
import { BlogCardType } from 'lib/getBlogContent';
import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';
import Tag from 'components/Tag';
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
        pathname: `/project/${blogName}`
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
            textColor={'text-blue-700 dark:text-teal-400'}
            bgColor={'bg-blue-400/30 dark:bg-teal-700/30'}
          ></Tag>
        </div>
        <h1 className="text-lg font-bold">{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
