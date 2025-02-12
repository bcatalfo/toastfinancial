import Dropdown from "./dropdown";
import classNames from "classnames";

export default function SecondaryHeader({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={classNames(
        { hidden: !isOpen },
        "flex flex-col",
        "lg:h-[66px] lg:px-[80px] lg:flex lg:flex-row lg:justify-between lg:items-center"
      )}
    >
      <div>
        <ul className="flex gap-[36px]">
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
      <div>Put search bar and sign in here</div>
    </div>
  );
}
