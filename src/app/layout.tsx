import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RTIC Recap 2025 | Hành trình đổi mới sáng tạo",
  description: "Nhìn lại những cột mốc rực rỡ và các dự án công nghệ tiêu biểu của CLB Nghiên cứu Công nghệ và Đổi mới sáng tạo (RTIC) trong năm 2025.",
  keywords: ["RTIC", "HCMUTE", "Recap 2025", "Technology", "Innovation", "Club"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
