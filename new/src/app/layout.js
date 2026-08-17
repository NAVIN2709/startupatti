import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://startupatti.com"),
  title: "Startup Atti | The Gateway to the Real Startup Ecosystem",
  description:
    "Startup Atti is an offline event initiative by Madras Marketers to educate entrepreneurship through real founder stories and networking in Chennai.",
  keywords: [
  "Startup Atti",
  "Madras Marketers",
  "Chennai Startups",
  "startup events in Chennai",
  "startup meetups in Chennai",
  "startup community in Chennai",
  "entrepreneurship events in Chennai",
  "entrepreneur meetup Chennai",
  "founder meetup Chennai",
  "founder events Chennai",
  "startup networking Chennai",
  "Chennai entrepreneur community",
  "Chennai founder community",
  "startup ecosystem Chennai",
  "learn about startups",
  "learn from startup founders",
  "founder stories",
  "startup founder stories",
  "how founders built their startup",
  "how to start a startup",
  "how to build a startup",
  "how to start a business",
  "startup ideas",
  "business ideas",
  "people building startups",
  "meet startup founders",
  "meet entrepreneurs",
  "connect with founders",
  "connect with entrepreneurs",
  "people interested in startups",
  "startup networking events",
  "entrepreneurship networking",
  "startup talks",
  "founder talks",
  "startup workshops",
  "startup discussions",
  "startup community events",
  "startup learning events",
  "business networking events",
  "entrepreneurship community",
  "startup culture Chennai"
],
  authors: [{ name: "Madras Marketers" }],
  openGraph: {
    title: "Startup Atti | Real Startup Ecosystem by Madras Marketers",
    description:
      "Join us for a monthly offline event initiative by Madras Marketers.",
    url: "https://startupatti.com",
    siteName: "Startup Atti",
    images: [
      {
        url: "/optimized/attiog.png",
        width: 1200,
        height: 630,
        alt: "Startup Atti - An initiative by Madras Marketers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Atti | Real Startup Ecosystem by Madras Marketers",
    description: "An offline event initiative by Madras Marketers.",
    images: ["/optimized/attiog.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QPLPL8MHXK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QPLPL8MHXK');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vn9kbj8wzo");
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M58FS476');
        `}
      </Script>

      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !(function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)})(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1615438596391800');
          fbq('track', 'PageView');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M58FS476"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1615438596391800&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
