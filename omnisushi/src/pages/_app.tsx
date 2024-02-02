import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { cx } from "@/utils";
import { Metadata } from "next";
import type { AppProps } from "next/app";
import { Inter, Manrope } from "next/font/google";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  icons: {
    icon: "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1703241070/favicon1_3b04c21efc.png",
    apple:
      "https://res.cloudinary.com/dl3qqfbrh/image/upload/v1703241082/faviconapple_1a04444b4c.png",
  },
};

// font for blog
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
// font for website
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      {/* header */}
      <Header />
      {/* content */}
      <Component
        className={cx(inter.variable, manrope.variable, "font-mr")}
        // className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark`}
        {...pageProps}
        key={router.route}
      />
      {/* footer */}
      <Footer />
    </>
  );
}
