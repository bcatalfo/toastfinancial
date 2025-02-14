import Image from "next/image";
import logo from "../public/Bread Logo.svg";
import Dropdown from "./dropdown";
import Nav from "./nav";
import classNames from "classnames";

export default function PrimaryHeader({
  setSecondaryOpen,
}: {
  setSecondaryOpen: () => void;
}) {
  return (
    <div
      className={classNames(
        "h-[82px] px-[24px] w-full flex bg-[#13294b] text-white items-center justify-between",
        "lg:h-[64px] lg:px-[40px]",
        "xl:px-[80px]"
      )}
    >
      <div className="hidden lg:h-full lg:flex">
        <Nav />
      </div>
      <div>
        <a className="cursor-pointer">
          <Image src={logo} alt="Logo image" />
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center gap-[36px]">
          <Dropdown
            name="Help & Resources"
            items={["Help Center", "Financial Education"]}
          />
          <Dropdown
            name="About Us"
            items={[
              "About Toast Financial",
              "Careers",
              "News & Insights",
              "Sustainability",
              "Investors",
            ]}
          />
        </ul>
      </div>
      <div className="lg:hidden flex items-center">
        <div> Sign In</div>
        <div className="ml-[12px]">
          <button type="button" onClick={setSecondaryOpen}>
            Hamburger
          </button>
        </div>
      </div>
    </div>
  );
}
