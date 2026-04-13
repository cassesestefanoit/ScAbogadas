import { Playfair_Display, Inter, Raleway } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"],
});