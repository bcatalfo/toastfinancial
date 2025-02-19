import Header from "./header";
import ToastHero from "./toast-hero";

export default function Page() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="relative z-1">
        <ToastHero />
      </div>
    </div>
  );
}
