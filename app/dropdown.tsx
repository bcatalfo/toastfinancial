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
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <li
      className="h-[28px] relative flex items-center"
      onMouseEnter={(_) => setDropdownOpen(true)}
      onMouseLeave={(_) => setDropdownOpen(false)}
    >
      <a
        className={classNames(
          { "text-[rgb(177,228,227)]": isDropdownOpen },
          "block uppercase leading-[16.8px] pr-[12.54px] relative font-semibold text-[12px] tracking-[.5px]"
        )}
      >
        {name}
      </a>
      <ul
        className={classNames(
          { hidden: !isDropdownOpen },
          "absolute",
          "right-0",
          "top-[27.5px]",
          "w-[197.7px]",
          "bg-white",
          "rounded-[8px]",
          "p-[7px]",
          "shadow-[0px_8px_20px_rgba(0,0,0,0.15)]"
        )}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-[#13294b]">{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}
