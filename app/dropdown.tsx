"use client";

import classNames from "classnames";
import { useState } from "react";
import DropdownItem from "./dropdown-item";

export default function Dropdown({
  name,
  items,
  isSecondary = false,
}: {
  name: string;
  items: string[];
  isSecondary?: boolean;
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <li
      className={classNames(
        "relative flex flex-col items-center",
        "lg:h-[28px] lg:flex-row"
      )}
      onMouseEnter={(_) => setDropdownOpen(true)}
      onMouseLeave={(_) => setDropdownOpen(false)}
    >
      <a
        className={classNames(
          { "text-[rgb(177,228,227)]": isDropdownOpen },
          { uppercase: !isSecondary },
          "block leading-[16.8px] pr-[12.54px] relative font-semibold text-[12px] tracking-[.5px]",
          { "bg-[url(/down-arrow.svg)]": !isDropdownOpen && !isSecondary },
          {
            "bg-[url(/secondary-down-arrow.svg)]":
              !isDropdownOpen && isSecondary,
          },
          { "bg-[url(/up-arrow.svg)]": isDropdownOpen && !isSecondary },
          {
            "bg-[url(/secondary-up-arrow.svg)]": isDropdownOpen && isSecondary,
          },
          "bg-no-repeat",
          "bg-[top_5.4px_right_0px]"
        )}
      >
        {name}
      </a>
      <ul
        className={classNames(
          { hidden: !isDropdownOpen },
          { "left-[-16px]": isSecondary },
          "bg-[#f4f5f5] flex flex-col",
          "lg:absolute lg:right-0 lg:top-[27.5px] lg:w-[197.7px] lg:bg-white lg:rounded-[8px] lg:p-[7px] lg:shadow-[0px_8px_20px_rgba(0,0,0,0.15)]"
        )}
      >
        {items.map((item, index) => (
          <DropdownItem key={index} item={item} />
        ))}
      </ul>
    </li>
  );
}
