import Tag from 'components/Tag';

export interface TechExperienceType {
  name: string;
  description: string;
  link: string;
  stack: JSX.Element[];
}

export const TechExperience: TechExperienceType[] = [
  {
    name: 'UReview Monash',
    description:
      'A web application funded by the school that allows students to review their courses and lecturers. I am responsible for the fullstack development and DevOps for the site. Using technology like Angular, React, Django, Digital Ocean and more. I spend a lot of time on this project and I am proud of the work I have done. Currently revamping the site using a more modern stack with better design.',
    link: 'testing',
    stack: [
      <Tag
        content="November 2021 - Now"
        bgColor="bg-orange-300/40 dark:bg-orange-400/30"
        textColor="text-orange-700 dark:text-orange-300"
        key="1"
      />
    ]
  },
  {
    name: 'Vaccu Monash',
    description:
      'A web application funded by the Monash School of Medicine to keep track of vaccine records mandatory for students for them to undergo their hospital shadow visits. I was responsible for Frontend Development, however I was still in training phase for the project, and before I could contribute anything significant to the project, it was handed over to the Official Monash Technology Team. I was able to learn a lot about React during this project.',
    link: 'testing',
    stack: [
      <Tag
        content="May 2022 - July 2022"
        bgColor="bg-purple-300/40 dark:bg-purple-400/30"
        textColor="text-purple-700 dark:text-purple-300"
        key="2"
      />
    ]
  },
  {
    name: 'Monash University',
    description:
      'This was where my coding journey began. My degree currently states Bachelors of Computer Science in Data Science, but my academic transcripts shows that I am currently taking core units from both paths. I study software design patters, Databases, Data Structures and Algorithms, Deep Learning, Malicious AI, Cybersecurity and more, as part of my degree. Currently working on a Video Captioning DL Model for my final year project.',
    link: 'testing',
    stack: [
      <Tag
        content="October 2020 - Now"
        bgColor="bg-orange-400/30 dark:bg-orange-400/30"
        textColor="text-orange-700 dark:text-orange-300"
        key="3"
      />,
      <Tag
        content="Graduating @ June 2023"
        bgColor="bg-orange-400/30 dark:bg-orange-400/30"
        textColor="text-orange-700 dark:text-orange-300"
        key="3"
      />,
      <Tag
        content="October 2020 - Now"
        bgColor="bg-slate-400/30 dark:bg-slate-400/30"
        textColor="text-slate-700 dark:text-slate-300"
        key="3"
        link={{
          href: 'https://www.monash.edu/',
          name: 'Blog Write-up!'
        }}
      />
    ]
  }
];
