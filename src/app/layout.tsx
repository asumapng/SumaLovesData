import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Canvas3D from "@/components/Canvas3D";
import UploadResume from "@/components/UploadResume";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Suma Nadakkannu | Data Analyst",
  description: "Portfolio of Suma Nadakkannu - Data Analyst specializing in E-commerce, UPI, and Analytics.",
  icons: {
    icon: "/profile.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#050505] text-white selection:bg-white selection:text-black`}>
        <CustomCursor />
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas3D />
        </div>
        <div className="relative z-10">
          {children}
          <UploadResume />
        </div>
      </body>
    </html>
  );
}
