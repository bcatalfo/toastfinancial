import Dropdown from "./dropdown";

export default function Help({ isDark = false }: { isDark?: boolean }) {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-[36px]">
      <Dropdown
        name="Help & Resources"
        items={["Help Center", "Financial Education"]}
        isDark={isDark}
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
      />
    </ul>
  );
}
