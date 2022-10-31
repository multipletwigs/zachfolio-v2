import React from 'react'

interface TagProps{
    content: string,
    textColor: string,
    bgColor: string,
}

const Tag = (tagProps: TagProps) => {
  return (
    <span className={`${tagProps.textColor} ${tagProps.bgColor} px-3 py-1 font-bold rounded-md shadow-lg text-sm text-center`}>{tagProps.content}</span>
  )
}

export default Tag