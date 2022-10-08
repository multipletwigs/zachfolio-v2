import React from 'react'
import { getDB } from "../lib/notion"


const Footer = () => {
  // console.log(getDB(process.env.NEXT_PUBLIC_NOTION_DB as string))
  return (
    <>
    <hr className="my-10"/>
      <footer>
        <div>This is the footer content</div>
        <div className="flex justify-between font-semibold">
          <div>Made with love by Zach Khong</div>
          <div>© zachfolio 2022</div>
        </div>
      </footer>
    </>
  )
}

export default Footer