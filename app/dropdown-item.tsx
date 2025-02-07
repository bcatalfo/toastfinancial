import classNames from "classnames";
import { useState } from "react";

export default function DropdownItem({
  index,
  item,
}: {
  index: number;
  item: string;
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <li
      key={index}
      onMouseEnter={(_) => setIsActive(true)}
      onMouseLeave={(_) => setIsActive(false)}
    >
      <a
        className={classNames(
          "text-[#13294b]",
          "block",
          "text-[14px]",
          "font-medium",
          {
            "bg-[rgb(177,228,227)]": isActive,
          }
        )}
      >
        {item}
      </a>
    </li>
  );
}
