import Dropdown from "./dropdown";

export default function Help({
  isDark = false,
  isSecondary = false,
}: {
  isDark?: boolean;
  isSecondary?: boolean;
}) {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-[36px] w-full">
      <Dropdown
        name="Help & Resources"
        items={["Help Center", "Financial Education"]}
        isDark={isDark}
        isSecondary={isSecondary}
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
        isDark={isDark}
        isSecondary={isSecondary}
      />
    </ul>
  );
}
