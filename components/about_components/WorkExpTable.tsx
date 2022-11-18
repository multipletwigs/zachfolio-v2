import { Tab } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { TagPopover } from './TagPopover';
import { TechExperience } from './TechExperienceData';

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
                    selected ? 'bg-slate-300 dark:bg-slate-50/10' : 'bg-slate-200 dark:bg-slate-50/5'
                  } outline-none`
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
                      <TagPopover exp={exp} />
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
