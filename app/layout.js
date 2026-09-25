// app/layout.js

import localFont from "next/font/local";
import "./globals.css";
import MaxWidthWrapper from './components/max-width-wrapper';
import Navbar from './components/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Malcolm Connor | Data Analyst',
  description: 'Data analytics portfolio of Malcolm Connor',

  icons: {
    icon: '/images/mtablogo.png',
  },

  openGraph: {
    title: 'Malcolm Connor Portfolio',
    images: ['/images/share.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MaxWidthWrapper>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </MaxWidthWrapper>
      </body>
    </html>
  );
}