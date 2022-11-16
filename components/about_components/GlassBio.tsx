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
  }
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
