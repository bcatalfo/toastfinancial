import Image from "next/image";
import logo from "../public/Bread Logo.svg";
import Dropdown from "./dropdown";
import Nav from "./nav";
import classNames from "classnames";
import SignIn from "./sign-in";

export default function PrimaryHeader({
  setSecondaryOpen,
  setSecondaryClosed,
  isSecondaryOpen,
}: {
  setSecondaryOpen: () => void;
  setSecondaryClosed: () => void;
  isSecondaryOpen: boolean;
}) {
  return (
    <div
      className={classNames(
        "border-b-2 [border-image-source:linear-gradient(90deg,#59bec9_0%,#007dba)] [border-image-slice:1]",
        "h-[82px] px-[24px] w-full flex bg-bread-black text-white items-center justify-between",
        "lg:border-none lg:border-b- lg:h-[64px] lg:px-[40px]",
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
        <div>
          <SignIn isSecondary={false} />
        </div>
        <div className="ml-[12px]">
          <button
            type="button"
            className={classNames(
              "bg-[url(/hamburger.svg)] w-[40px] h-[40px]",
              { hidden: isSecondaryOpen }
            )}
            onClick={setSecondaryOpen}
          ></button>
          <button
            type="button"
            className={classNames("bg-[url(/close.svg)] w-[40px] h-[40px]", {
              hidden: !isSecondaryOpen,
            })}
            onClick={setSecondaryClosed}
          ></button>
        </div>
      </div>
    </div>
  );
}
