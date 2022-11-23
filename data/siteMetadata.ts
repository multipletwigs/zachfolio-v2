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
    email: string 
    github: string
    githubHandle: string 
    linkedin: string 
    resume: string 
    locale: string
}

export const siteMetaData: MetaTypes = {
    title: 'Zach Khong - Student, full-stack developer, lifelong learner.',
    author: 'Zach Khong', 
    headerTitle: "Zach Khong's Portfolio", 
    description: "Hi, I'm Zach Khong. I'm a developer, and student at Monash University.",
    language: 'en-MY',
    siteUrl: 'https://zachfolio.info', 
    siteRepo: "",
    avatarImage: "/static/zach_khong.jpg", 
    avatarImage_2: "/static/eevee_zach.jpg",
    email: "mailto:lkho0007@student.monash.edu", 
    github:"https://github.com/multipletwigs",
    githubHandle: "@multipletwigs", 
    linkedin: "https://www.linkedin.com/in/zach-khong/",
    resume: 'public/static/Internship Resume (Khong Lap Hoe)-compressed.pdf',
    locale: 'en-MY'
}
