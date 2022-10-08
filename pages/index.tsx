import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { siteMetaData } from '../data/siteMetadata'
import { Container } from '../layouts/Container'

const Home: NextPage = () => {

  return (
    <Container>
      <header>
        <hgroup className={'grid justify-items-center text-center'}>
        <div className="w-16 h-[800px] -translate-y-36 ranslate-x-64 -rotate-45 fixed rounded-full bg-gradient-to-r from-green-300 to-slate-300 blur-3xl -z-10"></div>
        <div className="w-16 h-[800px] -translate-y-50 translate-x-64 -rotate-45 fixed rounded-full bg-gradient-to-r from-blue-300 to-slate-300 blur-3xl -z-10"></div>
          <img src={siteMetaData.avatarImage} height={200} width={200} className="rounded-full mb-6"></img>
          <h1 className="text-4xl font-bold w-[90%]">
            Hi, I'm  
            <span className="text-indigo-400"> Zach Khong. </span>
            I'm a developer, and a final year Computer Science student at Monash University.
          </h1>
          <p className="mt-5 text-xl font-medium w-[80%] sm:w-[80%] md:w-[80%]">An aspiring UI/UX Designer and Frontend Engineer. Making your software look lively and wonderful.</p>
          <div className='flex gap-5 py-5'>
            <button className=" bg-slate-700 text-slate-200 font-semibold px-5 py-2 rounded-lg border-2 border-transparent transition-all duration-300 hover:rounded-3xl hover:bg-slate-800">Explore What I Know</button>
            <button className=" bg-slate-200 text-slate-700 font-semibold px-5 py-2 rounded-lg border-2 border-transparent transition-all duration-300 hover:rounded-3xl hover:bg-slate-400">More About Me</button>
          </div>
        </hgroup>
      </header>
    </Container>
  )
}

export default Home
