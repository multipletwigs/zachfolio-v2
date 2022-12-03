import Tag from 'components/Tag';

export interface TechExperienceType {
  name: string;
  description: string;
  stack: JSX.Element[];
}

export const TechExperience: TechExperienceType[] = [
  {
    name: 'Rust and Tauri',
    description:
      'Every Software Engineer should learn a low-level programming language. Rust just seems like the logical choice here right now, and Tauri is what I would be using to create mini-projects along the way. I emphaize a lot on Developer Experience, and with better memory management than C++ and a more modern syntax, Rust seems like the perfect choice for me. Through this I will also be able to understand the common limitations of other similar low-level languages that is solved by Rust (ahem, googled, hopefully I will be able to defend this statement when I learn enough).',
    stack: [
      <Tag
        content="December 2022 - Now"
        bgColor="bg-orange-300/40 dark:bg-orange-400/30"
        textColor="text-orange-700 dark:text-orange-300"
        key="1"
      />,
      <Tag
        content={''}
        bgColor="bg-slate-400/30 dark:bg-slate-400/30"
        textColor="text-slate-700 dark:text-slate-300"
        link={{
          name: 'The Rust Book',
          href: 'https://doc.rust-lang.org/book/'
        }}
        key="1"
      ></Tag>
    ]
  },
  {
    name: 'SEO for better reach',
    description:
      'The reason why I created this personal portfolio and blog site was to make it accessible to anyone at all, and have it gain attention all around the globe. This means that I have to optimize my pages for SEO and ensure that I consistently rank well for the keywords that I want to target. Hence, I have created this site in Next.js for its SSR capabilities which generates contentful HTML on 1st resource request. This means that Google Web Crawlers are able to scan through written content. It is still a long way ahead before I can fully optimize the whole site.',
    stack: [
      <Tag
        content="November 2022 - Now"
        bgColor="bg-purple-300/40 dark:bg-purple-400/30"
        textColor="text-purple-700 dark:text-purple-300"
        key="2"
      />
    ]
  },
  {
    name: 'Leetcode',
    description:
      'Yes, leetcode, your ticket to a good company that only hires the best. It is obvious that LC is being used as a candidate filter. Hence, I try to do as many LC problems as I can using whatever algorithm knowledge that I have at the moment. Every problem on LC could be solved using brute-force, which is why I spend a lot of time researching on the best time-complexity to solve a problem. Not only that, but even if I do solve a problem with a satifying time-complexity, it is important to ponder on potential solutions that could be even better, as that is the basis of continuous improvement.',
    stack: [
      <Tag
        content="October 2022 - Now"
        bgColor="bg-orange-400/30 dark:bg-orange-400/30"
        textColor="text-orange-700 dark:text-orange-300"
        key="3"
      />
    ]
  }
];
