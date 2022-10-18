import { getDB } from 'lib/notion';
import { NextPage } from 'next/types'
import React from 'react'
import { Container } from '../layouts/Container'

/*
Exporting getStaticProps will allow you to share a state in that is called in lib. 
Whatever that is returned as props here will be passed down into the component below. 

getStaticProps: allows for ISR, where we only want the server to generate the content following 
a caching mechanism. This way your API doesn't get called every time the site gets rendered. 
*/
export async function getStaticProps(){
  const post = await getDB(process.env.NOTION_BLOG_DB_ID as string); 

  return {
    props:{
      post
    }
  }
}


const blog: NextPage = (props: any) => {
  console.log(props.post)
  return (
    <Container>
        <div>Blog</div>
    </Container>
  )
}

export default blog; 