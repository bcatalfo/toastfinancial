import classNames from "classnames";
import { useState } from "react";

export default function SignIn({ isSecondary }: { isSecondary: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={classNames(
          { "bg-[rgb(28,129,149)]": !isOpen },
          { "bg-[rgb(89,190,201)]": isOpen },
          "bg-[url(/down-arrow.svg)] bg-[bottom_14.5px_right_12px] bg-no-repeat lg:bg-[bottom_16.5px_right_24px] w-[88.54px] lg:w-[115px] py-[8px] px-[12px] lg:py-[10px] lg:pr-[36.54px] lg:pl-[24px] lg:pb-[10px] text-white font-bold rounded-[40px] text-left cursor-pointer"
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
    </>
  );
}

export function SignInDropdown({ isHidden }: { isHidden: boolean }) {
  return (
    <ul
      className={classNames(
        { hidden: isHidden },
        "flex flex-col lg:absolute bg-[rgb(244,245,245)] lg:bg-white rounded-lg lg:shadow-[0px_8px_20px_rgba(0,0,0,0.15)]"
      )}
    >
      {["Credit Cards", "Savings", "Loans", "Business Sign In"].map((name) => (
        <li
          className={classNames(
            "py-[20px] px-[24px]",
            "lg:p-[8px] lg:my-0 lg:mx-[7px]"
          )}
        >
          <a className="text-bread-black">{name}</a>
        </li>
      ))}
    </ul>
  );
}
