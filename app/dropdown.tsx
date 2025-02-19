"use client";

import classNames from "classnames";
import { useState } from "react";
import DropdownItem from "./dropdown-item";
import useIsMobile from "./is-mobile";

export default function Dropdown({
  name,
  items,
  isSecondary = false,
  isDark = false,
  border = false,
}: {
  name: string;
  items: string[];
  isSecondary?: boolean;
  isDark?: boolean;
  border?: boolean;
}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <li
      className={classNames(
        "relative flex flex-col items-center",
        "lg:h-[28px] lg:flex-row",
        { "w-full lg:w-auto": isSecondary },
        { "border-solid border-b-[1px]": border },
        { "border-toast-black": border && isDark },
        { "border-[#dcdfe0]": border && !isDark }
      )}
      onMouseEnter={(_) => {
        if (!isMobile) {
          setDropdownOpen(true);
        }
      }}
      onMouseLeave={(_) => {
        if (!isMobile) {
          setDropdownOpen(false);
        }
      }}
      onClick={(_) => {
        if (isMobile) {
          setDropdownOpen(!isDropdownOpen);
        }
      }}
    >
      <a
        className={classNames(
          {
            "text-[rgb(177,228,227)]":
              (isDropdownOpen && !isSecondary) ||
              (isDropdownOpen && isSecondary && isDark),
          },
          {
            "text-[rgb(28,129,149)]": isDropdownOpen && !isDark && isSecondary,
          },
          { "text-toast-black": !isDropdownOpen && !isDark && isSecondary },
          { "text-white": !isDropdownOpen && isDark && isSecondary },
          {
            "lg:leading-[19.6px] lg:text-[14px] lg:w-auto lg:p-0": isSecondary,
          },
          { "w-full py-[28px] px-[20px] text-[18px]": isSecondary },
          "relative font-medium tracking-[.5px] lg:pr-[12.54px]",
          { "uppercase leading-[16.8px] block text-[12px]": !isSecondary },
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
          { "bg-[top_5.4px_right_0px]": !isSecondary },
          { "bg-[center_right_20px] lg:bg-[top_7.5px_right_0px]": isSecondary }
        )}
      >
        {name}
      </a>
      <ul
        className={classNames(
          { hidden: !isDropdownOpen },
          { "left-[-16px]": isSecondary },
          { "bg-[#f4f5f5] lg:bg-white": !isDark },
          { "bg-[#4e5f78]": isDark },
          "flex flex-col w-full",
          "lg:absolute lg:right-0 lg:top-[27.5px] lg:w-[197.7px] lg:bg-white lg:rounded-[8px] lg:p-[7px] lg:shadow-[0px_8px_20px_rgba(0,0,0,0.15)]",
          "z-1"
        )}
      >
        {items.map((item, index) => (
          <DropdownItem key={index} item={item} isDark={isDark} />
        ))}
      </ul>
    </li>
  );
}
