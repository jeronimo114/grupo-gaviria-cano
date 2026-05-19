"use client";

import { Fragment, type JSX } from "react";

type Props = {
  html: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

/**
 * Renders a translation string that may contain <em> and <br> tags.
 * Keeps the API safe — only those two tags are tokenized, the rest is escaped as text.
 */
export function RichText({ html, as: Tag = "span", className }: Props) {
  const parts = tokenize(html);
  return (
    <Tag className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </Tag>
  );
}

function tokenize(input: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const regex = /<em>([\s\S]*?)<\/em>|<br\s*\/?>/gi;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(input)) !== null) {
    if (match.index > last) {
      out.push(input.slice(last, match.index));
    }
    if (match[0].toLowerCase().startsWith("<em>")) {
      out.push(<em>{match[1]}</em>);
    } else {
      out.push(<br />);
    }
    last = match.index + match[0].length;
  }
  if (last < input.length) {
    out.push(input.slice(last));
  }
  return out;
}
