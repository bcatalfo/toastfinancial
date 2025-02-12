import Header from "./header";

export default function Page() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="relative z-1">
        <h1 className="font-bold underline text-3xl">
          Welcome to Toast Financial! Automatic deployment is working!
        </h1>
      </div>
    </div>
  );
}
