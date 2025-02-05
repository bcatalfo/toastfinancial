import PrimaryHeader from "./primary-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  return (
    <header className="h-[128px]">
      <PrimaryHeader />
      <SecondaryHeader />
    </header>
  );
}
