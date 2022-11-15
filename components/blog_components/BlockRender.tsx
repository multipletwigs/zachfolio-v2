import { SerifHeader } from 'components/SerifHeader';
import React from 'react';

export interface BlogBlocks {
  type: string;
  content: any;
  blogTitle: string;
  blogDescription: string;
}

const BlockRender = (props: BlogBlocks) => {
  try {
    switch (props.type) {
      case 'heading_1':
        const h1Text = props.content.rich_text[0].plain_text;
        return <h1 className="text-3xl font-bold">{h1Text}</h1>;
      case 'paragraph':
        const pText = props.content.rich_text[0].plain_text;
        return <p className="text-xl">{pText}</p>;
      case 'callout':
        const callOutText = props.content.rich_text[0].plain_text;
        return (
          <p className="w-[100%] my-5 rounded-lg bg-slate-400/40 p-5">{`${props.content.icon.emoji} ${callOutText}`}</p>
        );
      default:
        return <p>Block Unrecognized</p>;
    }
  } catch (e) {
    return <></>;
  }
};

export default BlockRender;
