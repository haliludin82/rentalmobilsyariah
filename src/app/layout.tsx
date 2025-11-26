import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Mobil Syariah - Rental Mobil Bekasi Murah & Terpercaya",
  description: "Rental mobil Bekasi termurah dengan unit terawat. Sewa Avanza, Xenia, Innova, Hiace. Lepas kunci & dengan driver. Harga mulai 350rb/hari. Booking sekarang!",
  keywords: ["rental mobil bekasi", "sewa mobil bekasi", "rental mobil lepas kunci bekasi", "sewa mobil harian bekasi", "rental mobil bulanan bekasi", "rental mobil syariah"],
  authors: [{ name: "Rental Mobil Syariah" }],
  openGraph: {
    title: "Rental Mobil Syariah - Rental Mobil Bekasi",
    description: "Rental mobil Bekasi termurah dengan unit terawat. Banyak pilihan mobil, bisa lepas kunci & dengan driver.",
    url: "https://rentalmobilsyariah.com",
    siteName: "Rental Mobil Syariah",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Syariah - Rental Mobil Bekasi",
    description: "Rental mobil Bekasi termurah dengan unit terawat. Banyak pilihan mobil, bisa lepas kunci & dengan driver.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
