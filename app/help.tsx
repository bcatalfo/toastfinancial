import Dropdown from "./dropdown";

export default function Help() {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-[36px]">
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
  );
}
