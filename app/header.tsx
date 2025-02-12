"use client";

import { useState } from "react";
import PrimaryHeader from "./primary-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  const [isSecondaryOpen, setSecondaryOpen] = useState(false);
  return (
    <div className="h-[128px]">
      <header>
        <PrimaryHeader
          setSecondaryOpen={() => setSecondaryOpen(!isSecondaryOpen)}
        />
        <SecondaryHeader isOpen={isSecondaryOpen} />
      </header>
    </div>
  );
}
