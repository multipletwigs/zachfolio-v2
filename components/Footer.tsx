import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'

export const external_links = [
  {
    name: 'github',
    href: 'https://github.com/multipletwigs',
    icon: <FiGithub size="1.5em" />,
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/zach-khong-942261207/',
    icon: <FiLinkedin size="1.5em" />,
  },
  {
    name: 'mail',
    href: 'mailto:lkho0007@student.monash.edu?subject=Mail from Zachfolio!',
    icon: <FiMail size="1.5em" />,
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/afewsadtwigs/',
    icon: <FiInstagram size="1.5em" />,
  }
]

const Footer = () => {
  return (
    <>
    <hr className="my-5"/>
      <footer className="mb-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between font-semibold justify-items-center items-center">
          <div>Made with 💖 by Zach Khong</div>
          <div className="flex gap-5">
            {
              external_links.map((link) => {
                return (
                  <a className="hover:text-cyan-300 transition-all" href={link.href} key={link.name}>
                    {link.icon}
                  </a>
                )
              })
            }
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer