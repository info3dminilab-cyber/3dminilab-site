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
  title: "3D MiniLAB",
  description:
    "Инженерная 3D-печать, прототипирование и производство деталей на заказ.",
  keywords: [
    "3D печать",
    "3D printing",
    "3D MiniLAB",
    "Bambu Lab",
    "прототипирование",
    "3D печать Беларусь",
    "3D печать Гомель",
    "3D modeling",
    "изготовление деталей",
  ],

  openGraph: {
    title: "3D MiniLAB",
    description:
      "Инженерная 3D-печать, прототипирование и производство деталей на заказ.",
    url: "https://3dminilab.by",
    siteName: "3D MiniLAB",
    locale: "ru_RU",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://3dminilab.by"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}