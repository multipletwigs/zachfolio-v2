import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { siteMetaData } from '../data/siteMetadata'
import { Container } from '../layouts/Container'
import { getDB } from 'lib/notion'
import { PageObjectResponse, PartialPageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import GlassBio from 'components/GlassBio'


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

const Home: NextPage = (props: any) => {

  console.log(props.post)
  
  return (
    <Container>
      <header>
        <hgroup className={'grid justify-items-center text-center'}>
        <div className="w-16 h-[800px] -translate-y-36 -rotate-45 fixed rounded-full bg-gradient-to-r from-green-300 to-slate-300 blur-3xl -z-10 dark:from-indigo-800 dark:to-slate-800"></div>
        <div className="w-16 h-[800px] -translate-y-50 translate-x-64 -rotate-45 fixed rounded-full bg-gradient-to-r from-blue-300 to-slate-300 blur-3xl -z-10 dark:from-blue-800 dark:to-slate-800"></div>
          <img src={siteMetaData.avatarImage} height={200} width={200} className="rounded-full mb-6"></img>
          <h1 className="text-4xl font-bold w-[90%]">
            Hi, I'm  
            <span className="text-indigo-400"> Zach Khong. </span>
            I'm a developer, and a final year Computer Science student at Monash University.
          </h1>
          <p className="mt-5 text-xl font-medium w-[80%] sm:w-[80%] md:w-[80%]">An aspiring Software Developer and UI Designer. Making your software look lively and wonderful, and dangerously practical.</p>
          <div className='flex gap-5 py-5'>
            <button className=" bg-slate-700 text-slate-200 font-semibold px-5 py-2 rounded-lg border-2 border-transparent transition-all duration-300 hover:rounded-3xl hover:bg-slate-800">Explore What I Know</button>
            <button className=" bg-slate-200 text-slate-700 font-semibold px-5 py-2 rounded-lg border-2 border-transparent transition-all duration-300 hover:rounded-3xl hover:bg-slate-400">More About Me</button>
          </div>
        </hgroup>
      </header>
      <GlassBio/>
    </Container>
  )
}

export default Home
