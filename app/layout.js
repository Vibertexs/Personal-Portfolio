'use client'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Raleway, Montserrat } from 'next/font/google';

const raleway_init = Raleway({
  subsets: ['latin'],
  weight: ['200', '500', '900'],
  variable: '--font-raleway'
})

const montserrat_init = Montserrat({
  subsets: ['latin'],
  weight: ['200', '500', '900'],
  variable: '--font-montserrat'
})



import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return (
    <html lang="en">
      <body className={`${raleway_init.variable} ${montserrat_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
