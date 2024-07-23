import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "로또 추첨 사이트",
  description: "로또 번호를 생성하고 과거 당첨 번호를 확인할 수 있는 사이트입니다.",
  keywords: "로또, 번호 생성기, 로또 추첨, 로또 번호",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className="bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
