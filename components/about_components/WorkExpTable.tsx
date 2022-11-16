import { Popover, Tab } from '@headlessui/react';
import ColorModeToggle from 'components/colorModeToggle';
import Tag from 'components/Tag';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

interface TechExperienceType {
  name: string;
  description: string;
  link: string;
  stack: JSX.Element[];
}

const variant = {
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
      when: 'beforeChildren'
    }
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'linear',
      when: 'beforeChildren'
    }
  }
};

const TechExperience: TechExperienceType[] = [
  {
    name: 'UReview Monash',
    description:
      'A web application funded by the school that allows students to review their courses and lecturers. I am responsible for the fullstack development and DevOps for the site. Using technology like Angular, React, Django, Digital Ocean and more. I spend a lot of time on this project and I am proud of the work I have done. Currently revamping the site using a more modern stack with better design.',
    link: 'testing',
    stack: [
      <Tag
        content="November 2021 - Now"
        bgColor="bg-orange-400/30"
        textColor="text-orange-300"
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
        bgColor="bg-purple-400/30"
        textColor="text-purple-300"
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

export default function WorkExpTable() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5 px-2 sm:px-0 md:flex-row">
      <Tab.Group
        vertical
        selectedIndex={tabIndex}
        onChange={(index) => setTabIndex(index)}
        manual
      >
        <Tab.List className="flex w-full flex-row gap-3 rounded-xl md:w-[30%] md:flex-col md:p-1">
          {TechExperience.map((exp) => {
            return (
              <Tab
                key={exp.name}
                className={({ selected }) =>
                  `w-full rounded-xl p-3 text-center ${
                    selected ? 'bg-slate-50/10' : 'bg-slate-50/5'
                  }`
                }
              >
                {exp.name}
              </Tab>
            );
          })}
        </Tab.List>
        {/* Animate the transition between the tabs */}
        <Tab.Panels className="w-full py-2.5 md:px-5">
          {TechExperience.map((exp, idx) => {
            return (
              // I couldnt get headlessui's transitions to work
              // Hence I found a solution that uses AnimatePresence from framer
              // https://github.com/tailwindlabs/headlessui/discussions/1237
              // AnimatePresence is the best job here because panels are transitioned in and out through hide/shows
              <AnimatePresence exitBeforeEnter key={idx}>
                <Tab.Panel
                  as={motion.div}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  variants={variant}
                  key={exp.name}
                  className="text-left"
                >
                  <div className="flex flex-col justify-between md:flex-row md:items-center">
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold">{exp.name}</h1>
                      <Popover className="relative md:hidden">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={`
                ${open ? '' : 'text-opacity-90'}
                group text-slate-300 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                             Tags
                            </Popover.Button>
                            <Popover.Panel className="absolute z-10 mt-3 w-60 -translate-x-[180px] transform px-4">
                              <div className="flex flex-col rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-700 gap-2 px-2 py-3">
                                {exp.stack.map((tag) => {
                                  return tag;
                                })}
                              </div>
                            </Popover.Panel>
                          </>
                        )}
                      </Popover>
                    </div>
                    <div className="my-2 hidden gap-1 md:visible md:flex md:flex-row">
                      {exp.stack.map((tag) => {
                        return tag;
                      })}
                    </div>
                  </div>
                  <p className="mt-2 text-justify">{exp.description}</p>
                </Tab.Panel>
              </AnimatePresence>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
