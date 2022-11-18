import { Popover } from '@headlessui/react'; 
import { BsThreeDots } from 'react-icons/bs';
import { TechExperienceType } from './TechExperienceData';

export const TagPopover = ({ exp }: { exp: TechExperienceType }) => {
  return (
    <Popover className="relative md:hidden">
      {({ open }) => (
        <>
          <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex h-8 w-8 p-2 items-center rounded-full bg-slate-300 dark:bg-slate-500  text-slate-700 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <BsThreeDots size="1.5em"/>
            </Popover.Button>
          <Popover.Panel className="absolute z-10 mt-3 w-60 -translate-x-[180px] transform px-4">
            <div className="flex flex-col gap-2 rounded-lg px-2 py-3 shadow-lg ring-1 ring-black ring-opacity-5 bg-slate-200  dark:bg-slate-700">
                <div className="font-bold pl-1 text-slate-900">Project Info</div>
              {exp.stack.map((tag) => {
                return tag;
              })}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
