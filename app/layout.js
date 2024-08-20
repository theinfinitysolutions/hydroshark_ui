import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileSidebar from "@/components/MobileSidebar";
import CartSidebar from "@/components/CartSidebar";
import ViewProductModal from "@/components/ViewProductModal";
import Head from "next/head";
import "normalize.css/normalize.css";
import Script from "next/script";
import AuthModal from "@/components/AuthModal";
import Salesiq from "@/components/salesiq";
import HydrosharkCoinsModal from "@/components/HydrosharkCoinsModal";
import Banner from "@/components/Banner";

const local = localFont({ src: "../public/ITCAvantGardePro-Md.otf" });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hydroshark - India's First Carbonated Hydration Drink",
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
          content="hydroshark, hydration, electrolytes, vitamins, healthy, energy drink, low sugar, energy, prime, gatorade, hell energy, cocacola, water, bisleri, drinks, carbonated, india, healthy, lifestyle, choice , water, soda, sparkling, water, health, fitness, wellness, beverage, energy, athletics, workout, hydration drinks, prime, gatorade"
        />
        <title>{"Hydroshark - India's First Carbonated Hydration Drink"}</title>
        <link rel="canonical" href="//www.hydroshark.in/" />
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
        <Banner />
        <Navbar />
        {children}
        <Footer />
        <MobileSidebar />
        <CartSidebar />
        <ViewProductModal />
        <AuthModal />
        <Salesiq
          widgetCode={
            "siq58c951d9aecb52ac7791205cd21142707ca89ec5d8df06da9ea518ad779cd2697d6da2850ce51517e23afa317171057a"
          }
          domain={"https://salesiq.zohopublic.in/widget"}
        />
        <HydrosharkCoinsModal />
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      </body>
    </html>
  );
}
