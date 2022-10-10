import { useEffect, useState } from "react";
import NextLink from 'next/link';
import { siteMetaData } from "../data/siteMetadata";
import { useRouter } from "next/router";
import { useTheme } from 'next-themes'

interface NavItemType {
  href: string,
  navTitle: string,
}


const NavItem = ({ href, navTitle }: NavItemType) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink className={'p-10 hover:bg-slate-50'} href={href}>
      <a className={`${isActive ? 'font-bold p-3 hover:bg-slate-50/10' : 'font-normal text-gray-500 p-3 hover:bg-slate-50/10'}`}>
        <span className={`${isActive ? 'py-[1px] border-b-2 border-rose-400' : 'capsize'}`}>
          {navTitle}
        </span>
      </a>
    </NextLink>
  )
}


const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className={"relative"}>
      <div className="flex items-center justify-between max-w-6xl px-10 py-10 mx-auto">
        <div className="font-bold">zachfolio</div>
        <div className="invisible sm:space-x-10 sm:visible">
          <NavItem href={"/"} navTitle={"Home"}></NavItem>
          <NavItem href={"/blog"} navTitle="Blogs"></NavItem>
          <NavItem href={"/about"} navTitle="About Me"></NavItem>
          <NavItem href={"/contact"} navTitle="Contact Me"></NavItem>
        </div>
        <button aria-label="Toggle Color Mode" type="button"
          className="invisible sm:visible flex items-center justify-center 
           rounded-lg border-2 px-5 py-3 hover:bg-[#EAEDFF] transition-all duration-300 dark:hover:bg-black"
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }
          }>
          {
            mounted && (
              <div>
                {
                  resolvedTheme === 'dark' ?
                    <div className="flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                      Light Mode
                    </div> : <div className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                      Dark Mode</div>
                }
              </div>
            )
          }
        </button>
      </div>
    </div>
  )
}

export default NavBar