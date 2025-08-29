import localFont from "next/font/local";

// --- Clash Display (multiple weights) ---
export const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

// --- Silka (regular + italic) ---
export const silka = localFont({
  src: [
    {
      path: "../../public/fonts/silka/silka-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/silka/silka-regularitalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-silka",
  display: "swap",
});
