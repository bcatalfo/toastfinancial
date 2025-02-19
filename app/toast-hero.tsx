export default function ToastHero() {
  return (
    <div className="flex flex-col lg:flex-row pb-[99px] h-[729px] lg:h-[560px]">
      <div className="pt-[40px] px-[16px] pb-[50px] lg:pt-[71px] lg:pr-0 lg:pb-0 lg:pl-[128px] z-1">
        <div>
          <h1>
            <span className="text-[40px] lg:text-[54px]">
              <b>
                Earn <span>4.40%</span> APY<sup>*</sup>
              </b>
            </span>
          </h1>
          <h1>With a high-yield savings account</h1>
        </div>
        <div>
          <ul>
            <li>Highly competitive rates **</li>
            <li>FDIC insured</li>
            <li>No monthly or hidden fees</li>
          </ul>
        </div>
        <div>
          <a>More details</a>
        </div>
        <div className="flex flex-col lg:flex-row items-start">
          <a className="flex self-center lg:relative py-[16px] px-[40px] text-[white] bg-[#1c8195] rounded-3xl mb-[12px] lg:mb-0 lg:mt-[25px] lg:mr-[32px] text-[16px] font-semibold min-w-[280px] lg:min-w-auto justify-center cursor-pointer">
            Open an account
          </a>
          <a className="flex self-center lg:relative py-[16px] px-[40px] text-[#1c8195] bg-transparent border border-solid border-[#1c8195] rounded-3xl mb-[12px] lg:mb-0 lg:mt-[25px] lg:mr-[32px] text-[16px] font-semibold min-w-[280px] lg:min-w-auto text-center justify-center cursor-pointer">
            Learn more
          </a>
        </div>
        <div className="w-full h-[45px]"></div>
      </div>
      <div className="w-full lg:w-[55%] absolute right-0 bottom-[48px] lg:top-0 lg:bottom-auto">
        <div>
          <picture>
            <source media="(min-width: 767px)" srcSet="/hero-bg-desktop.png" />
            <img
              src="/hero-bg.png"
              className="w-full relative right-0 lg:top-0"
              alt="Background Image"
            />
          </picture>
        </div>
      </div>
      <div className="z-2 bg-white w-[calc(100%-30px)] lg:max-w-[520px] my-0 mx-[15px] lg:my-[auto] lg:mr-0 lg:ml-[40px] pt-[31px] px-[20px] pb-[35px] lg:pt-[48.8px] lg:px-[50px] lg:pb-[61px] rounded-[20px] shadow-[0px_0px_30px_2px_rgba(0,0,0,0.2)]">
        <h2 className="text-[28px] lg:text-[36px] font-bold text-toast-black">
          Sign in
        </h2>
      </div>
    </div>
  );
}
