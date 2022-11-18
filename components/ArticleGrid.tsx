import { BlogCardType } from 'lib/getBlogContent';
import React from 'react'
import BlogCard from './blog_components/BlogCard';

const ArticleGrid = ({postItems}:{postItems: BlogCardType[]}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10">
      {postItems.map((postItem: BlogCardType, idx: number) => {
        return (
          <BlogCard
            {...postItem}
            key={idx}
          ></BlogCard>
        );
      })}
    </div>
  )
}

export default ArticleGrid