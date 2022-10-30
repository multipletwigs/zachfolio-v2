import { Tab } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

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
      when: 'beforeChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
}

const TechExperience: TechExperienceType[] = [
  {
    name: 'UReview Monash',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde at commodi laborum sequi quam nam voluptas officia voluptatem distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat in suscipit recusandae molestiae doloribus praesentium!',
    link: 'testing',
    stack: []
  },
  {
    name: 'Vaccu Monash',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis unde at commodi laborum sequi quam nam voluptas officia voluptatem distinctio.',
    link: 'testing',
    stack: []
  },
  {
    name: 'Monash Curriculum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident, rem eveniet ea culpa recusandae dolorem alias sapiente consequatur quia libero maiores doloremque praesentium dicta aspernatur rerum veniam eius numquam! Nobis possimus reprehenderit ratione ipsam non, assumenda nisi vero modi excepturi temporibus quasi, accusamus impedit quisquam ex animi in minus.',
    link: 'testing',
    stack: []
  }
];

export default function WorkExpTable() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex h-[450px] flex-col gap-5 px-2 sm:px-0 md:h-[300px] md:flex-row">
      <Tab.Group vertical selectedIndex={tabIndex} onChange={(index) => setTabIndex(index)} manual>
        <Tab.List className="flex w-full flex-row gap-3 rounded-xl p-1 md:w-[30%] md:flex-col">
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
        <Tab.Panels className="w-full py-2.5 px-5">
            {TechExperience.map((exp, idx) => {
            return (
              // I couldnt get headlessui's transitions to work
              // Hence I found a solution that uses AnimatePresence from framer
              // https://github.com/tailwindlabs/headlessui/discussions/1237
              <AnimatePresence exitBeforeEnter key={idx}>
                <Tab.Panel 
                as={motion.div}
                initial="hide"
                animate="show"
                exit="hide"
                variants={variant}
                key={exp.name} className="text-left md:text-right">
                  <h1 className="mb-5 text-2xl font-bold">{exp.name}</h1>
                  <p>{exp.description}</p>
                </Tab.Panel>
              </AnimatePresence>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
