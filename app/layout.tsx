import type { Metadata } from "next";
import { Baskervville, EB_Garamond, Gothic_A1, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "@/lib/site";

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

const gothicA1 = Gothic_A1({
  variable: "--font-gothic-a1",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: "400",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jia Qi",
    template: "%s | Jia Qi",
  },
  description:
    "Portfolio of Jia Qi, an NYU graduate in Computer Science, Data Science, and Business.",
  openGraph: {
    title: "Jia Qi",
    description:
      "Portfolio of Jia Qi, an NYU graduate in Computer Science, Data Science, and Business.",
    images: ["/images/profile-pic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baskervville.variable} ${gothicA1.variable} ${inter.variable} ${notoSerif.variable} ${ebGaramond.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
