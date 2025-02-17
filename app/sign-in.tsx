import classNames from "classnames";
import { useState } from "react";

export default function SignIn({ isSecondary }: { isSecondary: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className={classNames(
          { "bg-[rgb(28,129,149)] bg-[url(/down-arrow.svg)]": !isOpen },
          { "bg-[rgb(89,190,201)] bg-[url(/nav-signin-up-arrow.svg)]": isOpen },
          "bg-[bottom_14.5px_right_12px] bg-no-repeat lg:bg-[bottom_16.5px_right_24px] w-[88.54px] lg:w-[115px] py-[8px] px-[12px] lg:py-[10px] lg:pr-[36.54px] lg:pl-[24px] lg:pb-[10px] text-white font-bold rounded-[40px] text-left cursor-pointer"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        Sign In
      </button>
      {!isSecondary && (
        <div
          className={classNames({
            "fixed bg-[rgba(19,41,75,0.6)] w-full h-[calc(100vh-80px)] left-0 z-4 top-[80px] p-[24px]":
              isOpen,
          })}
        >
          <SignInDropdown isHidden={!isOpen} />
        </div>
      )}
      {isSecondary && <SignInDropdown isHidden={!isOpen} />}
    </div>
  );
}

export function SignInDropdown({ isHidden }: { isHidden: boolean }) {
  const [isPersonal, setIsPersonal] = useState(true);

  const items = isPersonal
    ? ["Credit Cards", "Savings", "Loans", "Business Sign In"]
    : ["Merchant Portal", "Personal Sign In"];
  return (
    <ul
      className={classNames(
        { hidden: isHidden },
        "flex flex-col lg:absolute lg:top-[48px] lg:right-0 bg-[rgb(244,245,245)] lg:bg-white rounded-lg lg:shadow-[0px_8px_20px_rgba(0,0,0,0.15)] py-[12px] lg:py-[8px]",
        "w-full lg:w-[200px]"
      )}
    >
      {items.map((name, index, arr) => (
        <li
          key={index}
          className={classNames(
            "px-[24px] lg:p-[8px]",
            { "py-[20px]": index != arr.length - 1 },
            { "pt-[32px] pb-[20px]": index == arr.length - 1 },
            { "mt-[12px] lg:mt-[8px] ": index == arr.length - 1 },
            {
              "border-t-[1px] border-solid border-[#d0d3d4] lg:border-none lg:before:w-[200px] lg:before:border-t-[1px] lg:before:border-solid lg:before:border-[#d0d3d4] lg:before:block lg:before:h-full lg:before:top-[-16px] lg:before:relative lg:before:right-[14.5px]":
                index == arr.length - 1,
            },
            "lg:my-0 lg:mx-[7px]",
            "hover:bg-[#b1e4e3] hover:rounded-sm"
          )}
        >
          {index != arr.length - 1 && (
            <a className="text-bread-black text-[18px] lg:text-[14px] font-medium leading-[24px] lg:leading-[19.6px] tracking-[.5px]">
              {name}
            </a>
          )}
          {index == arr.length - 1 && (
            <button
              type="button"
              className="bg-[url(/cross-link-arrow.svg)] bg-no-repeat bg-[top_7px_right_0px] lg:bg-[top_4.5px_right_0px] pr-[12.5px] text-bread-black border-none cursor-pointer font-medium leading-[24px] lg:leading-[140%] text-[18px] lg:text-[14px]"
              onClick={() => setIsPersonal(!isPersonal)}
            >
              {name}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
