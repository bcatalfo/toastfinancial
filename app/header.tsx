import PrimaryHeader from "./primary-header";
import SecondaryHeader from "./secondary-header";

export default function Header() {
  return (
    <div className="h-[128px]">
      <header>
        <PrimaryHeader />
        <SecondaryHeader />
      </header>
    </div>
  );
}
