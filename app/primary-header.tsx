export default function PrimaryHeader() {
  return (
    <div className="h-[64px] px-[80px] w-full flex bg-[#13294b] text-white">
      <ul className="font-semibold flex gap-x-[72px] items-center">
        <li className="bg-[url(/header-rain-image.svg)] h-full flex flex-row items-center relative">
          <a className="leading-[20px] tracking-[1px] uppercase after:bg-[linear-gradient(180deg,#59bec9,#007dba)] after:w-[2px] after:h-[44px] after:transform-[rotate(-90deg)] after:absolute after:top-[24px] after:left-[50%] after:rounded-[8px]">
            personal
          </a>
        </li>
        <li>
          <a className="leading-[17px] text-[12px] tracking-[1px] uppercase">
            business
          </a>
        </li>
      </ul>
    </div>
  );
}
