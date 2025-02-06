import Image from "next/image";
import logo from "../public/Bread Logo.svg";
import Dropdown from "./dropdown";

export default function PrimaryHeader() {
  return (
    <div className="h-[64px] px-[80px] w-full flex bg-[#13294b] text-white items-center justify-between">
      <div className="h-full flex">
        <ul className="font-semibold flex gap-x-[72px] items-center">
          <li className="bg-[url(/header-rain-image.svg)] h-full flex flex-row items-center relative">
            <a className="cursor-pointer leading-[20px] tracking-[1px] uppercase after:bg-[linear-gradient(180deg,#59bec9,#007dba)] after:w-[2px] after:h-[44px] after:transform-[rotate(-90deg)] after:absolute after:top-[24px] after:left-[50%] after:rounded-[8px]">
              personal
            </a>
          </li>
          <li>
            <a className="cursor-pointer leading-[17px] text-[12px] tracking-[1px] uppercase">
              business
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className="cursor-pointer">
          <Image src={logo} alt="Logo image" />
        </a>
      </div>
      <div>
        <ul className="flex items-center gap-[36px]">
          <Dropdown
            name="Help & Resources"
            items={["Help Center", "Financial Education"]}
          />
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
