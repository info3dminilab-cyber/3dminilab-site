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

        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),
                  a=e.getElementsByTagName(t)[0],
                  k.async=1,
                  k.src=r,
                  a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109323705', 'ym');

              ym(109323705, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce:true,
                trackLinks:true
              });
            `,
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/109323705"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}