import React from 'react'

const Footer = () => {
  // console.log(getDB(process.env.NEXT_PUBLIC_NOTION_DB as string))
  return (
    <>
    <hr className="my-5"/>
      <footer className="mb-10">
        <div className="flex justify-between font-semibold">
          <div>Made with 💖 by Zach Khong</div>
          <div>© zachfolio 2022</div>
        </div>
      </footer>
    </>
  )
}

export default Footer