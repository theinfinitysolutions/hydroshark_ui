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
import dynamic from "next/dynamic";
import TawkToComponent from "@/components/TawkToComponent";
import AddUserAddressModal from "@/components/AddUserAddressModal";
import GlobalLoader from "@/components/GlobalLoader";
import ConfirmModals from "@/components/ConfirmModals";
import ViewOrderDetailsModal from "@/components/ViewOrderDetailsModal";
import ReviewModal from "@/components/ReviewModal";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import CartCTA from "@/components/CartCTA";
import RetryPaymentModal from "@/components/RetryPaymentModal";

const local = localFont({ src: "../public/ITCAvantGardePro-Md.otf" });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hydroshark - India's First Caffeine Free Energy Drink",
  description: "India's First Caffeine Free Energy Drink",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="India's First Caffeine Free Energy Drink"
        />
        <meta
          name="keywords"
          content="hydroshark, hydration, electrolytes, vitamins, healthy, energy drink, low sugar, energy, prime, gatorade, hell energy, cocacola, water, bisleri, drinks, carbonated, india, healthy, lifestyle, choice , water, soda, sparkling, water, health, fitness, wellness, beverage, energy, athletics, workout, hydration drinks, prime, gatorade"
        />
        <title>{"Hydroshark - India's First Caffeine Free Energy Drink"}</title>
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
        {/* <Salesiq
          widgetCode={
            "siq58c951d9aecb52ac7791205cd21142707ca89ec5d8df06da9ea518ad779cd2697d6da2850ce51517e23afa317171057a"
          }
          domain={"https://salesiq.zohopublic.in/widget"}
        /> */}
        <HydrosharkCoinsModal />
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        ></Script>
        <TawkToComponent />
        <AddUserAddressModal />
        <GlobalLoader />
        <ConfirmModals />
        <ViewOrderDetailsModal />
        <ReviewModal />
        <PrivacyPolicyModal />
        <CartCTA />
        <RetryPaymentModal />

        {/* Facebook pixel */}
        <Script
          id="facebook-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1066527391554625');
            fbq('track', 'PageView');
            console.log("Facebook Pixel Loaded");
        `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1066527391554625&ev=PageView&noscript=1`}
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script
          async
          id="google-tag"
          src="https://www.googletagmanager.com/gtag/js?id=G-16MMMXB7FD"
        />
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-16MMMXB7FD');
        `,
          }}
        />
      </body>
    </html>
  );
}
