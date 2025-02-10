import Dropdown from "./dropdown";

export default function SecondaryHeader() {
  return (
    <div className="h-[66px] px-[80px] flex flex-row justify-between items-center">
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
            isUppercase={false}
            shiftRight={true}
          />
          <Dropdown
            name="Loans"
            items={["Debt Consolidation", "Buy Now, Pay Later"]}
            isUppercase={false}
            shiftRight={true}
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
            isUppercase={false}
            shiftRight={true}
          />
        </ul>
      </div>
      <div>Put search bar and sign in here</div>
    </div>
  );
}
