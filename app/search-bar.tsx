export default function SearchBar() {
  return (
    <div className="mt-[12px] mx-[24px] mb-[46px] lg:m-0 relative lg:w-[343px]">
      <input
        placeholder="Search"
        className="bg-[hsla(0,0%,100%,0.25)] lg:bg-white w-full border-none lg:border-1 lg:border-solid lg:border-[#d0d3d4] placeholder:text-white lg:placeholder:text-[rgb(13,36,66)] text-white lg:text-black rounded-[56px] lg:rounded-3xl py-[16px] pr-[16px] pl-[44px] lg:py-[8px] lg:pr-[16px] lg:pl-[44px] text-[18px] lg:text-[14px] lg:focus:shadow-[0px_0px_30px_2px_rgba(0,0,0,0.2)] lg:focus:text-[18px]"
      ></input>
      <i className="absolute top-[16px] left-[16px] w-[24px] h-[24px] bg-[url(/search-mobile.svg)] lg:top-[10px] lg:left-[16px] lg:w-[20px] lg:h-[20px] lg:bg-[url(/search.svg)]"></i>
    </div>
  );
}
