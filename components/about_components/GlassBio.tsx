import React from 'react';

interface BiographyItem {
  key: string;
  desc: string;
}

const BioGraphyItems: BiographyItem[] = [
  {
    key: 'Name',
    desc: 'Zach Khong Lap Hoe'
  },
  {
    key: 'Age',
    desc: '21 Years Old'
  },
  {
    key: 'Education',
    desc: "Bachelor's of Computer Science in Data Science @ Monash University"
  },
  {
    key: 'Year Level',
    desc: 'Year 3 Semester 1 @ 85 WAM & 3.8 GPA'
  },
  {
    key: 'Interests',
    desc: 'Fullstack Engineering / UI-UX Design / Systems Design'
  },
  {
    key: 'Country',
    desc: '🇲🇾 Malaysia'
  },
  {
    key: 'Fluent Languages',
    desc: 'Chinese, English, Bahasa Malaysia, Verbal Cantonese'
  }
];

const GlassBio = () => {
  return (
    <div className="border-1 rounded-3xl border-white bg-indigo-500/10 p-10 backdrop-blur-lg">
      <h3 className="mb-3 text-xl font-bold underline underline-offset-8">
        Biography?😶
      </h3>
      <table className="w-[100%] table-auto text-left">
        <thead>
          <tr>
            <th className="font-mono text-lg">Key:str</th>
            <th className="pl-10 font-mono text-lg">Value:str</th>
          </tr>
        </thead>
        <tbody className="align-top">
          {BioGraphyItems.map((item) => {
            return (
              <tr key={item.key}>
                <td className="pt-5 font-bold">{item.key}</td>
                <td className="pl-10 pt-5">{item.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GlassBio;
