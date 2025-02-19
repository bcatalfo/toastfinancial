export default function ToastHero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="pt-[40px] px-[16px] pb-[50px] lg:pt-[71px] lg:pr-0 lg:pb-0 lg:pl-[128px]">
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
          <a className="flex self-center lg:relative lg:mr-[32px] py-[16px] px-[40px] text-[white] bg-[#1c8195]">
            Open an account
          </a>
          <a className="flex self-center lg:relative py-[16px] px-[40px] text-[#1c8195] bg-transparent border border-solid border-[#1c8195]">
            Learn more
          </a>
        </div>
      </div>
      <div className="w-full lg:w-[55%]">
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
      <div>
        <h2>Sign in</h2>
      </div>
    </div>
  );
}
