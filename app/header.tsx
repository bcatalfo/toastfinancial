"use client";

import { useState } from "react";
import PrimaryHeader from "./primary-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  const [isSecondaryOpen, setSecondaryOpen] = useState(false);
  return (
    <div className="h-[128px]">
      <header className="bg-toast-black lg:bg-white w-full left-[50%] transform-[translate(-50%)] fixed lg:relative z-4 top-0 bottom-0 flex flex-col max-w-[1440px]">
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
