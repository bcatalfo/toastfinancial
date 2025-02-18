import classNames from "classnames";

export default function Nav() {
  return (
    <ul
      className={classNames(
        "gap-0 w-full justify-around flex items-center font-semibold",
        "lg:gap-x-[72px]"
      )}
    >
      <li
        className={classNames(
          "justify-center",
          "bg-[url(/header-rain-image.svg)] bg-no-repeat h-full flex flex-row items-center relative"
        )}
      >
        <a className="cursor-pointer leading-[20px] tracking-[1px] uppercase text-white text-[18px] lg:text-[14px] after:bg-[linear-gradient(180deg,#59bec9,#007dba)] after:w-[2px] after:h-[44px] after:transform-[rotate(-90deg)] after:absolute after:top-[30px] lg:after:top-[24px] after:left-[50%] after:rounded-[8px]">
          personal
        </a>
      </li>
      <li>
        <a className="cursor-pointer leading-[17px] text-[18px] lg:text-[12px] tracking-[1px] uppercase text-white">
          business
        </a>
      </li>
    </ul>
  );
}
