import * as React from "react";

import { twMerge } from "tailwind-merge";

export function LightView(props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div className={twMerge("p-32 text-neutral-800", props.className)}>
      {props.children}
    </div>
  );
}

export function DarkView(props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "dark bg-neutral-900 p-32 text-neutral-200",
        props.className
      )}
      style={{}}
    >
      {props.children}
    </div>
  );
}
