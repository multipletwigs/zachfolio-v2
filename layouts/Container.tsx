import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { siteMetaData } from "../data/siteMetadata";


export function Container(props: any){
    const { children, ...customMeta } = props; 
    const router = useRouter(); 

    // Each page will have a head element, meta tags are really important for SEO
    const page_meta = {
        title: siteMetaData.title, 
        description: siteMetaData.description, 
        githubHandle: siteMetaData.githubHandle, 
        date: null, 
        ...customMeta
    }

    return(
        <div className={`min-h-screen`}>
            <Head>
                <title>{page_meta.title}</title>
                <meta content={page_meta.description} name="description"/>
                <meta property="og:url" content={`${siteMetaData.siteUrl}${router.asPath}`}/>
            </Head>
            <NavBar/>
            <main className={`flex flex-col mx-auto max-w-6xl justify-center px-10`}>
                {children}
                <Footer></Footer>
            </main>
        </div>
    )
}