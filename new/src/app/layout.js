import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

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
    "Startup Atti is a monthly offline event by UOY Foundation to educate entrepreneurship through real founder stories and networking in Chennai.",
  keywords: [
    "Startup Atti",
    "UOY Foundation",
    "Chennai Startups",
    "Entrepreneurship",
    "Networking",
    "Founder Stories",
  ],
  authors: [{ name: "UOY Foundation" }],
  openGraph: {
    title: "Startup Atti | Real Startup Ecosystem",
    description:
      "Join us for a monthly hangout of founders, creators, and builders.",
    url: "https://startupatti.com",
    siteName: "Startup Atti",
    images: [
      {
        url: "/optimized/attiog.png",
        width: 1200,
        height: 630,
        alt: "Startup Atti - The Gateway to the Real Startup Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Atti | Real Startup Ecosystem",
    description: "The monthly hangout for the real startup community.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
