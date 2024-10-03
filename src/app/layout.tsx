import type { Metadata } from "next";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import "./globals.scss";


export const metadata: Metadata = {
  title: "제목",
  description: "설명글",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="body"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
