"use client";
import "@/styles/globals.css";
import "@/styles/vendors/menu.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";

const DMSans = localFont({
  src: "../fonts/DMSans-Bold.woff2",
  variable: "--font-DMSans",
});

const ClashDisplay = localFont({
  src: "../fonts/ClashDisplay-Medium.woff2",
  variable: "--font-clash-display",
});

const Raleway = localFont({
  src: "../fonts/Raleway-Bold.woff2",
  variable: "--font-raleway",
});

const SpaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Bold.woff2",
  variable: "--font-space-grotesk",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const jos_options = {
    passive: false,
    once: true,
    animation: "fade-up",
    timingFunction: "ease",
    threshold: 0,
    delay: 0.5,
    duration: 0.7,
    scrollDirection: "down",
    rootMargin: "0% 0% 15% 0%",
  };
  useEffect(() => {
    // JOS.init(jos_options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // JOS.refresh();
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <script>
          {`
            var script = document.createElement("script");
            script.id = "rum-script"; 
            script.dataset.projectid = "T4-80eed53fa0"; 
            script.type = "text/javascript"; 
            script.src = "https://gateway-api.sitebeacon.io/v1/sb-script";
            document.getElementsByTagName('body')[0].appendChild(script);
          `}
        </script>
      </head>
      <body
        className={`${DMSans.variable} ${ClashDisplay.variable} ${Raleway.variable} ${SpaceGrotesk.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
