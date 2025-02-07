"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Dropdown({
  name,
  items,
}: {
  name: string;
  items: string[];
}) {
  const [hidden, setHidden] = useState(true);
  return (
    <li
      className="h-[28px] relative flex items-center"
      onMouseEnter={(_) => setHidden(false)}
      onMouseLeave={(_) => setHidden(true)}
    >
      <a className="block uppercase leading-[16.8px] pr-[12.54px] relative font-semibold text-[12px] tracking-[.5px]">
        {name}
      </a>
      <ul className={classNames({ hidden: hidden })}>
        {items.map((item, index) => (
          <li key={index}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}
