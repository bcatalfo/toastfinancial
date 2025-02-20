"use client";

import classNames from "classnames";
import { useState } from "react";

export default function ChooseAccount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative mt-[15px]">
      <div className="mt-[16px] h-[48px]">
        <div
          className="cursor-pointer p-0 min-w-[303px] flex items-center justify-between bg-white border-[.5px] border-solid border-[#d5d5d5] shadow-[0px_0px_30px_2px_rgba(0,0,0,0.2)] rounded-3xl h-full relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="ml-[16px] text-[18px] leading-[24px]">
            Choose your account
          </h2>
          <span className="mr-[17px] content-[url(/signin-arrow-down.png)]"></span>
          <div
            className={classNames(
              { hidden: !isOpen },
              "min-w-[303px] w-full",
              "absolute top-[49px] right-0 left-0",
              "bg-white"
            )}
          >
            <ul>
              <li>
                <a>
                  <span>Credit Cards</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Toast Loans & Payments</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Toast Savings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
