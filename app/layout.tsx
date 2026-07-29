import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallFloat from "@/components/CallFloat";
import { PlanTripProvider } from "@/components/PlanTripContext";
import PlanTripPopup from "@/components/PlanTripPopup";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://himgatha.com"),
  title: "Himgatha — Stories of the Himalayas | Tours & Travels",
  description:
    "Handcrafted holidays, private experiences and unforgettable stays across the Himalayas and beyond. Himachal, Spiti, Ladakh, Kashmir, Uttarakhand and 60+ destinations — designed around you.",
  keywords: [
    "Himalayan tours",
    "luxury travel",
    "custom holidays",
    "travel packages",
    "Himachal Pradesh",
    "Spiti Valley",
    "Ladakh",
    "Kashmir",
    "honeymoon packages",
  ],
  openGraph: {
    title: "Himgatha — Curated Luxury Journeys",
    description:
      "Handcrafted holidays and private experiences across 60+ destinations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <PlanTripProvider>
          {children}
          <WhatsAppFloat />
          <CallFloat />
          <PlanTripPopup />
        </PlanTripProvider>
      </body>

      {/* Microsoft Clarity — website analytics & session recordings */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "x8dgyqpp9w");`}
      </Script>
    </html>
  );
}
