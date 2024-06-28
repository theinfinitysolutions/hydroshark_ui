import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileSidebar from "@/components/MobileSidebar";
import Head from "next/head";

const local = localFont({ src: "../public/ITCAvantGardePro-Md.otf" });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hydroshark",
  description: "India's First Carbonated Hydration Drink",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="India's First Carbonated Hydration Drink"
        />
        <meta
          name="keywords"
          content="hydroshark, hydration, drink, carbonated, india, healthy, lifestyle, choice , water, soda, sparkling, water, health, fitness, wellness, beverage, energy, athletics, workout, hydration drinks, prime, gatorade"
        />
        <title>Hydroshark</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${local.className} w-screen max-w-screen`}>
        <Navbar />
        {children}
        <Footer />
        <MobileSidebar />
      </body>
    </html>
  );
}
