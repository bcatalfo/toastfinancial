import Dropdown from "./dropdown";
import classNames from "classnames";
import Nav from "./nav";
import SignIn from "./sign-in";

export default function SecondaryHeader({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={classNames(
        { hidden: !isOpen },
        "flex flex-col bg-bread-black",
        "lg:bg-white lg:h-[66px] lg:px-[80px] lg:flex lg:flex-row lg:justify-between lg:items-center"
      )}
    >
      <div
        className={classNames(
          "flex w-full h-[73px] px-[24px] py-0",
          "lg:hidden"
        )}
      >
        <Nav />
      </div>
      <div>
        <ul
          className={classNames(
            "flex flex-col bg-white mx-[24px] mb-[12px] rounded-lg",
            "lg:gap-[36px] lg:flex-row lg:m-0 lg:rounded-none"
          )}
        >
          <Dropdown
            name="Credit Cards"
            items={[
              "Explore Credit Cards",
              "Activate Credit Card",
              "Toast Cashback Card",
              "Toast Rewards Card",
            ]}
            isSecondary={true}
          />
          <Dropdown
            name="Loans"
            items={["Debt Consolidation", "Buy Now, Pay Later"]}
            isSecondary={true}
          />
          <Dropdown
            name="Savings"
            items={[
              "What We Offer",
              "High-Yield Savings Account",
              "Certificates of Deposit",
              "IRAs: Retirement Savings & CDs",
              "Forms & Documents",
            ]}
            isSecondary={true}
          />
        </ul>
      </div>
      <div className="hidden lg:flex lg:gap-[36px]">
        <div>Search Bar</div>
        <div>
          <SignIn isSecondary={true} />
        </div>
      </div>
    </div>
  );
}
