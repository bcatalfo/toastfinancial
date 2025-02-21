"use client";

import { useState } from "react";
import PrimaryHeader from "./primary-header";
import SecondaryHeader from "./secondary-header";
import classNames from "classnames";

export default function Header() {
  const [isSecondaryOpen, setSecondaryOpen] = useState(false);
  return (
    <div className="h-[80px] lg:h-[128px]">
      <header
        className={classNames(
          "bg-toast-black lg:bg-white w-full left-[50%] transform-[translate(-50%)] fixed lg:relative z-4 top-0 flex flex-col max-w-[1440px]",
          { "bottom-0 overflow-y-auto": isSecondaryOpen }
        )}
      >
        <PrimaryHeader
          setSecondaryOpen={() => setSecondaryOpen(true)}
          setSecondaryClosed={() => setSecondaryOpen(false)}
          isSecondaryOpen={isSecondaryOpen}
        />
        <SecondaryHeader isOpen={isSecondaryOpen} />
      </header>
    </div>
  );
}
