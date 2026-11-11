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
  metadataBase: new URL("https://360travellers.com"),
  title: {
    default: "360 Travellers | Custom Tour Packages & Holidays",
    template: "%s | 360 Travellers",
  },
  description:
    "Personalised domestic and international tour packages, private experiences and unforgettable stays across the Himalayas and beyond.",
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
    title: "360 Travellers | Curated Journeys",
    description:
      "Handcrafted holidays and private experiences across 60+ destinations.",
    type: "website",
    url: "https://360travellers.com",
    siteName: "360 Travellers",
    locale: "en_IN",
    images: [
      {
        url: "/images/360-travellers-logo.jpg",
        width: 1600,
        height: 900,
        alt: "360 Travellers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Travellers | Custom Tour Packages & Holidays",
    description: "Handcrafted holidays and private experiences across 60+ destinations.",
    images: ["/images/360-travellers-logo.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "360 Travellers",
  url: "https://360travellers.com",
  logo: "https://360travellers.com/images/360-travellers-logo.jpg",
  email: "info@360travellers.com",
  telephone: "+91 85806 10324",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 85806 10324",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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

      {/* Tawk.to — live chat widget (bottom-left so it doesn't cover the WhatsApp/call buttons) */}
      <Script id="tawk-to" strategy="afterInteractive">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          Tawk_API.customStyle={
            visibility:{
              desktop:{position:'bl',xOffset:15,yOffset:15},
              mobile:{position:'bl',xOffset:15,yOffset:15}
            }
          };
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6a6f64be218d031d498ec7e9/1jv1i32g5';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();`}
      </Script>
    </html>
  );
}
