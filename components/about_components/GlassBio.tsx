import { external_links } from 'components/Footer';
import React from 'react';

interface BiographyItem {
  key: string;
  desc: any;
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
    desc: 'Year 3 Semester 2 @ 86 WAM & 3.9 GPA'
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
  },
  {
    key: 'Socials',
    desc: (
      <div className="flex gap-5">
        {external_links.map((link) => {
          return (
            <a
              className="transition-all hover:text-cyan-300"
              href={link.href}
              key={link.name}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    )
  },
  // {
  //   key: 'Resume Download',
  //   desc: (
  //     <Tag
  //       content={'View Resume Here!'}
  //       textColor={'text-blue-700 dark:text-teal-400'}
  //       bgColor={'bg-blue-400/30 dark:bg-teal-700/30'}
  //       link={{
  //         href: '/static/resume.pdf',
  //         name: 'View my resume here! (Not updated)'
  //       }}
  //     ></Tag>
  //   )
  // }
];

const GlassBio = () => {
  return (
    <div className="border-1 rounded-3xl border-white bg-indigo-500/10 p-10 backdrop-blur-lg">
      <h3 className="mb-3 text-xl font-bold underline underline-offset-8">
        Biography?😶
      </h3>
      <table className="w-[100%] text-left">
        <thead>
          <tr>
            <th className="font-mono text-lg">Key:str</th>
            <th className="font-mono text-lg">Value:str</th>
          </tr>
        </thead>
        <tbody className="align-top">
          {BioGraphyItems.map((item) => {
            return (
              <tr key={item.key}>
                <td className="pt-5 font-bold">{item.key}</td>
                <td className="pt-5">{item.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GlassBio;
