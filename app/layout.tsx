import "./styles/global.css";
import type { Metadata } from "next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Brinsil Elias",
    template: "%s | Brinsil Elias",
  },
  description: "This is my portfolio.",
  alternates: {
    types: {
      "application/rss+xml": `${baseUrl}/rss`,
    },
  },
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-black bg-white dark:text-white dark:bg-gray-950 ${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased max-w-xl mx-4 lg:mx-auto h-screen font-sans">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0 w-full h-full">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
