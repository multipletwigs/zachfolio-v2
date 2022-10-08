import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>  
        </Head>
        <body className='bg-[#F5F6FB] dark:bg-gray-800'>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default Document