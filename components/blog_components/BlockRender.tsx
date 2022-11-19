import { useTheme } from 'next-themes';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import React from 'react';

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

const _renderChildBlocks = (rich_text: RichText[]) => {
  const text_render = rich_text.map((richText: RichText, idx: number) => {
    const classes: string = _constructClass(richText.annotations);
    return (
      <span className={classes} key={idx}>
        {richText.text.content}
      </span>
    );
  });

  return text_render;
};

const BlockRender = (props: BlogBlocks) => {
  const { resolvedTheme } = useTheme();
  try {
    switch (props.type) {
      case 'heading_1':
        const h1Text = props.content.rich_text[0].plain_text;
        return <h1 className="text-xl font-bold md:text-3xl">{h1Text}</h1>;
      case 'paragraph':
        return (
          <p className="">{_renderChildBlocks(props.content.rich_text)}</p>
        );
      case 'callout':
        return (
          <div className="my-5 w-[100%] rounded-lg bg-slate-300/40 p-5 dark:bg-slate-400/40">
            <div className="mr-2 inline">{`${props.content.icon.emoji}`}</div>
            {_renderChildBlocks(props.content.rich_text)}
          </div>
        );
      case 'image':
        const imageSrc = props.content.file.url;
        const imageAlt = props.content.caption ? props.content.caption[0].plain_text : 'Image describing blog';
        return <img src={imageSrc} className="mx-auto rounded-lg my-5" alt={imageAlt} />;
      case 'code':
        const codeText = props.content.rich_text[0].plain_text;
        return (
          <>
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
                <pre className={'bg-slate-300/30 p-5 dark:bg-slate-900'}>
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
          </>
        );
      default:
        return <p>Block Unrecognized</p>;
    }
  } catch (e) {
    // This is a special case for line breaks, because props is undefined, props.type throws an error
    // Since there are no line breaks in Notion, catching it here so it can act as one
    return <br />;
  }
};

export default BlockRender;
