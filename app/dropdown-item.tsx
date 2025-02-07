import classNames from "classnames";
import { useState } from "react";

export default function DropdownItem({ item }: { item: string }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <li
      className={classNames("p-[8px]", "rounded-[4px]", {
        "bg-[rgb(177,228,227)]": isActive,
      })}
      onMouseEnter={(_) => setIsActive(true)}
      onMouseLeave={(_) => setIsActive(false)}
    >
      <a
        className={classNames(
          "text-[#13294b]",
          "block",
          "text-[14px]",
          "font-medium",
          "tracking-[.5px]",
          "cursor-pointer"
        )}
      >
        {item}
      </a>
    </li>
  );
}
