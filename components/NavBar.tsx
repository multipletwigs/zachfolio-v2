import { Popover, Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import ColorModeToggle from './colorModeToggle';
import {GiHammerDrop, GiHamburgerMenu} from 'react-icons/gi';

interface NavItemType {
  href: string;
  navTitle: string;
}

const Example = () => {
  return (
    <div className="max-w-sm px-4 sm:hidden">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-xl w-10 h-10 bg-slate-400 px-3 py-2 text-slate-700 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <GiHamburgerMenu size="1.5em"/>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-[160px] px-4 w-60">
              <div className="flex flex-col rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-700">
                  <NavItem href={'/'} navTitle={'Home'} />
                  <NavItem href={'/blog'} navTitle="Blogs" />
                  <NavItem href={'/about'} navTitle="About Me" />
                  <NavItem href={'/contact'} navTitle="Contact Me" />
                  <ColorModeToggle/>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
}

const NavItem = ({ href, navTitle }: NavItemType) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink className={'p-10 hover:bg-slate-50'} href={href}>
      <a
        className={`${
          isActive
            ? 'p-3 font-bold hover:bg-slate-50/10'
            : 'p-3 font-normal text-gray-500 hover:bg-slate-50/10'
        }`}
      >
        <span
          className={`${
            isActive ? 'border-b-2 border-indigo-400 py-[1px]' : 'capsize'
          }`}
        >
          {navTitle}
        </span>
      </a>
    </NextLink>
  );
};

const NavBar = () => {
  return (
    <div className={'relative'}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-10">
        <div className="font-bold">zachfolio</div>
        <div className="invisible sm:visible sm:space-x-10">
          <NavItem href={'/'} navTitle={'Home'} />
          <NavItem href={'/blog'} navTitle="Blogs" />
          <NavItem href={'/about'} navTitle="About Me" />
          <NavItem href={'/contact'} navTitle="Contact Me" />
        </div>
        <Example/>
        <ColorModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
