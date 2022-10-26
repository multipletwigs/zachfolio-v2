import React from 'react'

interface PageHeader {
    title: string,
    desc: string 
}

const PageHeader = ({title, desc}: PageHeader) => {
  return (
    <header className="text-center py-3 font-sans">
        <h1 className="text-5xl font-medium text-indigo-400">{title}</h1>
        <h3 className="text">{desc}</h3>
    </header>
  )
}

export default PageHeader