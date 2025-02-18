import classNames from "classnames";
import Dropdown from "./dropdown";

export default function Help({
  isDark = false,
  isSecondary = false,
}: {
  isDark?: boolean;
  isSecondary?: boolean;
}) {
  return (
    <ul
      className={classNames(
        "flex flex-col lg:flex-row items-center gap-0 lg:gap-[36px] w-full",
        { "bg-[#4e5f78] mb-[12px] mx-[24px] rounded-lg": isSecondary }
      )}
    >
      <Dropdown
        name="HELP & RESOURCES"
        items={["Help Center", "Financial Education"]}
        isDark={isDark}
        isSecondary={isSecondary}
      />
      <Dropdown
        name="ABOUT US"
        items={[
          "About Toast Financial",
          "Careers",
          "News & Insights",
          "Sustainability",
          "Investors",
        ]}
        isDark={isDark}
        isSecondary={isSecondary}
      />
    </ul>
  );
}
