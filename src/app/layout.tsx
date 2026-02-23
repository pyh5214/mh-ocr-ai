import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MH OCR AI",
  description: "대규모 지능형 데이터 추출 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
