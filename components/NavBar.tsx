import NextLink from 'next/link';
import { useRouter } from "next/router";
import ColorModeToggle from "./colorModeToggle";

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
        <span className={`${isActive ? 'py-[1px] border-b-2 border-indigo-400' : 'capsize'}`}>
          {navTitle}
        </span>
      </a>
    </NextLink>
  )
}

const NavBar = () => {

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
        <ColorModeToggle/>
      </div>
    </div>
  )
}

export default NavBar