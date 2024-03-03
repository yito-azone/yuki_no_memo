import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/organisms/header";


export const metadata: Metadata = {
  title: "ユキのメモ",
  description: "ユキが調べたこと/好き勝手に実装したいものを試す遊び場",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
