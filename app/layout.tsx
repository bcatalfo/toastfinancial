import classNames from "classnames";
import "./global.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(poppins.className, "text-[14px]", "leading-[21px]")}
    >
      <body>{children}</body>
    </html>
  );
}
