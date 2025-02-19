export default function ToastHero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <div>
          <h1>Earn 4.40% APY</h1>
          <h1>With a high-yield savings account</h1>
        </div>
        <div>
          <ul>
            <li>Highly competitive rates **</li>
            <li>FDIC insured</li>
            <li>No monthly or hidden fees</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <picture>
            <source media="(min-width: 767px)" srcSet="/hero-bg-desktop.png" />
            <img src="/hero-bg.png" />
          </picture>
        </div>
      </div>
    </div>
  );
}
