import * as React from 'react';

export interface ITitleProps {
    title?:string
}


export function Title (props: ITitleProps) {
  return (
    <h1>{props.title}</h1>
  );
}
