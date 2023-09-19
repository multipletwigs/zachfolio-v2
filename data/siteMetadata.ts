export interface MetaTypes {
    title: string;
    author: string;
    description: string;
    headerTitle: string;
    language: string 
    siteUrl: string 
    siteRepo: string 
    avatarImage: string 
    avatarImage_2: string 
    ogImage: string
    email: string 
    github: string
    githubHandle: string 
    linkedin: string 
    resume: string 
    locale: string
}

export const siteMetaData: MetaTypes = {
    title: 'Zachfolio 🐟',
    author: 'Zach Khong', 
    headerTitle: "Zach Khong's Portfolio", 
    description: "Design Engineer",
    language: 'en-MY',
    siteUrl: 'https://zachfolio.info', 
    siteRepo: "",
    avatarImage: "/static/zach_khong.jpg", 
    avatarImage_2: "/static/eevee_zach.jpg",
    ogImage: "/static/imageOg.png",
    email: "mailto:lkho0007@student.monash.edu", 
    github:"https://github.com/multipletwigs",
    githubHandle: "@multipletwigs", 
    linkedin: "https://www.linkedin.com/in/zach-khong/",
    resume: '/static/resume.pdf',
    locale: 'en-MY'
}
