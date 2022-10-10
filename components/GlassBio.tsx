import React from 'react'

interface BiographyItem{
    key: string, 
    desc: string 
}

const BioGraphyItems: BiographyItem[] = [
    {
        key: "Name", 
        desc: "Zach Khong Lap Hoe"
    },
    {
        key: "Age",
        desc: "21 Years Old"
    },
    {
        key: "Education",
        desc: "Bachelor's of Computer Science in Data Science"
    },
    {
        key: "University",
        desc: "Monash University Malaysia"
    },
    {
        key: "Year Level",
        desc: "Year 3 Semester 1 🎉 top 1% of cohort population"
    },
    {
        key: "Interests",
        desc: "Fullstack Development / UI-UX Design"
    },
    {
        key: "Country",
        desc: "🇲🇾 Malaysia"
    },
]


const GlassBio = () => {
  return (
    <div className="p-10 bg-indigo-500/10 backdrop-blur-lg border-1 border-white rounded-3xl">
        <h3 className="font-bold text-xl underline underline-offset-8 mb-3">Biography?😶</h3>
        <table className="table-auto text-left w-[100%]">
            <thead>
                <tr>
                    <th className="font-mono text-lg">Key:int</th>
                    <th className="pl-10 font-mono text-lg">Value:str</th>
                </tr>
            </thead>
            <tbody className="align-top">
                {
                    BioGraphyItems.map((item) => {
                        return (
                            <tr key={item.key}>
                                <td className="pt-5 font-bold">{item.key}</td>
                                <td className="pl-10 pt-5">{item.desc}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default GlassBio