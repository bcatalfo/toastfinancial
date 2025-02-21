"use client";

import classNames from "classnames";
import { useState } from "react";

export default function ChooseAccount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative mt-[15px]">
      <div className="mt-[16px] h-[48px]">
        <div
          className={classNames(
            "cursor-pointer p-0 min-w-[303px] flex items-center justify-between bg-white border-[.5px] border-solid border-[#d5d5d5] shadow-[0px_0px_30px_2px_rgba(0,0,0,0.2)] rounded-3xl h-full relative",
            { "rounded-none rounded-t-3xl ": isOpen }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="ml-[16px] text-[18px] leading-[24px]">
            Choose your account
          </h2>
          <span
            className={classNames(
              "mr-[17px]",
              { "content-[url(/signin-arrow-down.png)]": !isOpen },
              { "content-[url(/signin-arrow-up.png)]": isOpen }
            )}
          ></span>
          <div
            className={classNames(
              { hidden: !isOpen },
              "min-w-[303px] w-full",
              "absolute top-[49px] right-0 left-0",
              "bg-white",
              "rounded-b-3xl",
              "shadow-[0px_8px_10px_rgba(78,92,111,0.058823529411764705),0px_20px_46px_rgba(78,92,111,0.10980392156862745)]"
            )}
          >
            <ul>
              {["Credit Cards", "Toast Loans & Payments", "Toast Savings"].map(
                (name, index, _) => (
                  <li key={index}>
                    <a className="pt-0 px-[16px] pb-[8px] mt-[8px] text-[18px] leading-[24px] block">
                      <span>{name}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
