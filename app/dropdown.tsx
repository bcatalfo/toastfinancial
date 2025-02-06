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
      onMouseEnter={(e) => setHidden(false)}
      onMouseLeave={(e) => setHidden(true)}
    >
      <a>{name}</a>
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
