import Tag from 'components/Tag';
import { useTheme } from 'next-themes';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import React from 'react';
import Image from 'next/image';

export interface BlogBlocks {
  type: string;
  content: any;
  blogTitle: string;
  blogDescription: string;
}

interface _TextType {
  content: string;
  link?: string;
}

interface _TextAnnotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface RichText {
  type: string;
  text: _TextType;
  annotations: _TextAnnotations;
}

// Style map specifically for rich_text elements
const _styleMap: any = {
  bold: 'font-bold',
  italic: 'italic',
  strikethrough: 'line-through',
  underline: 'underline',
  code: 'rounded-md dark:text-rose-400 font-mono text-blue-400'
};

const _constructClass = (annotations: _TextAnnotations) => {
  // Has to be an array because can utilize join with space separator
  let className = [];
  // Looping through each key and value and finding the correct style mapping
  for (const [key, value] of Object.entries(annotations)) {
    if (value) {
      className.push(_styleMap[key]);
    }
  }
  // Based on content can merge later with space
  return className.join(' ');
};

const _renderChildBlocks = (rich_text: RichText[], text_size?: string) => {
  const text_render = rich_text.map((richText: RichText, idx: number) => {
    const classes: string = _constructClass(richText.annotations);
    return richText.text.link ? (
      <span key={idx}>
        <Tag
          content={''}
          textColor={'text-blue-700 dark:text-cyan-300'}
          bgColor={'bg-blue-400/30 dark:bg-cyan-700/30'}
          link={{
            name: richText.text.content,
            href: richText.text.link
          }}
        />
      </span>
    ) : (
      <span className={`${classes} leading-9 ${text_size}`} key={idx}>
        {richText.text.content}
      </span>
    );
  });

  return text_render;
};

const BlockRender = (props: BlogBlocks) => {
  const { resolvedTheme } = useTheme();

  if (!props) {
    return <br />;
  }

  try {
    switch (props.type) {
      case 'heading_1':
        return (
          <h1 className="font-bold">
            {_renderChildBlocks(props.content.rich_text, 'text-2xl md:text-3xl')}
          </h1>
        );
      case 'paragraph':
        return <p>{_renderChildBlocks(props.content.rich_text, 'text-lg')}</p>;
      case 'callout':
        return (
          <div className="my-5 w-[100%] rounded-lg bg-slate-300/40 p-5 dark:bg-slate-400/40">
            <div className="mr-2 inline">{`${props.content.icon.emoji}`}</div>
            {_renderChildBlocks(props.content.rich_text)}
          </div>
        );
      case 'image':
        const imageSrc = props.content.file.url;
        const imageAlt = props.content.caption[0]
          ? props.content.caption[0].plain_text
          : 'Image describing blog';
        return (
          <img
            src={imageSrc}
            className="mx-auto my-5 rounded-lg"
            alt={imageAlt}
          />
        );
      case 'code':
        const codeText = props.content.rich_text[0].plain_text;
        return (
          <div className="my-5">
            <div
              className={
                'inline-block border-b border-b-slate-400 bg-slate-300/30 px-5 py-1 font-mono dark:border-b-orange-400 dark:bg-slate-900'
              }
            >
              {props.content.language.toUpperCase()}
            </div>
            <Highlight
              {...defaultProps}
              theme={resolvedTheme === 'dark' ? nightOwl : nightOwlLight}
              code={codeText}
              language={props.content.language}
            >
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={
                    'scrollbar overflow-x-scroll bg-slate-300/30 p-5 dark:bg-slate-900 max-h-[500px] overflow-y-scroll'
                  }
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} key={key} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        );
      case 'divider': {
        return <br />;
      }
      default:
        return <p>Block Unrecognized</p>;
    }
  } catch (e) {
    console.log(e);
    return <></>;
  }
};

export default BlockRender;
