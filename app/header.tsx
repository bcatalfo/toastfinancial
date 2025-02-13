"use client";

import { useState } from "react";
import PrimaryHeader from "./primary-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  const [isSecondaryOpen, setSecondaryOpen] = useState(false);
  return (
    <div className="h-[128px]">
      <header className="bg-white w-full left-[50%] transform-[translate(-50%)] fixed z-4 top-0 flex flex-col max-w-[1440px]">
        <PrimaryHeader
          setSecondaryOpen={() => setSecondaryOpen(!isSecondaryOpen)}
        />
        <SecondaryHeader isOpen={isSecondaryOpen} />
      </header>
    </div>
  );
}
