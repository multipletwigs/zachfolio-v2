import { SerifHeader } from 'components/SerifHeader';
import React from 'react';

export interface BlogBlocks {
  type: string;
  content: any;
  blogTitle: string;
  blogDescription: string;
}

const BlockRender = (props: BlogBlocks) => {
  try{
    switch (props.type) {
      case 'heading_1':
        const h1Text = props.content.rich_text[0].plain_text;
        return (<h1>{h1Text}</h1>);
      case 'paragraph':
        const pText = props.content.rich_text[0].plain_text;
        return (<p>{pText}</p>);
      default:
        return (<p>Block Unrecognized</p>)
    }
  }
  catch (e) {
    return (<></>)
  }
};

export default BlockRender;
