import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Smart Pole Studio - Профессиональная студия pole sport в Москве | Занятия для всех уровней",
  description:
    "Профессиональная студия pole sport Smart Pole в Москве. Занятия для начинающих и продвинутых. Опытные тренеры, современное оборудование. Запишитесь на пробное занятие! ☎️ +7 (999) 123-45-67",
  keywords: [
    "pole sport москва",
    "pole dance студия",
    "занятия pole sport",
    "тренировки на пилоне",
    "фитнес студия москва",
    "pole sport для начинающих",
    "индивидуальные занятия pole",
    "растяжка и гибкость",
    "спортивная студия",
    "pole dance тренер",
  ],
  authors: [{ name: "Smart Pole Studio" }],
  creator: "Smart Pole Studio",
  publisher: "Smart Pole Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
  applicationName: "Smart Pole Studio",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCD34D" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2937" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "google-site-verification-code", // Заменить на реальный код
    yandex: "yandex-verification-code", // Заменить на реальный код
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://smartpole.ru",
    siteName: "Smart Pole Studio",
    title: "Smart Pole Studio - Профессиональная студия pole sport в Москве",
    description:
      "Развивайте силу, грацию и уверенность в себе в профессиональной студии pole sport Smart Pole. Занятия для всех уровней подготовки в центре Москвы.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Pole Studio - Студия pole sport в Москве",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Pole Studio - Профессиональная студия pole sport в Москве",
    description: "Развивайте силу, грацию и уверенность в себе в профессиональной студии pole sport Smart Pole.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://smartpole.ru",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://smartpole.ru" />

        {/* Дополнительные мета-теги для Yandex */}
        <meta name="yandex-verification" content="yandex-verification-code" />
        <meta name="google-site-verification" content="google-site-verification-code" />

        {/* Локальное SEO */}
        <meta name="geo.region" content="RU-MOW" />
        <meta name="geo.placename" content="Москва" />
        <meta name="geo.position" content="55.751244;37.618423" />
        <meta name="ICBM" content="55.751244, 37.618423" />

        {/* Дополнительные теги для социальных сетей */}
        <meta property="business:contact_data:street_address" content="ул. Спортивная, 15" />
        <meta property="business:contact_data:locality" content="Москва" />
        <meta property="business:contact_data:region" content="Москва" />
        <meta property="business:contact_data:postal_code" content="119270" />
        <meta property="business:contact_data:country_name" content="Россия" />
        <meta property="business:contact_data:phone_number" content="+7 (999) 123-45-67" />
        <meta property="business:contact_data:website" content="https://smartpole.ru" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Структурированные данные JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://smartpole.ru",
              name: "Smart Pole Studio",
              alternateName: "Smart Pole",
              description: "Профессиональная студия pole sport в центре Москвы. Занятия для всех уровней подготовки.",
              url: "https://smartpole.ru",
              telephone: "+7 (999) 123-45-67",
              email: "info@smartpole.ru",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Спортивная, 15",
                addressLocality: "Москва",
                addressRegion: "Москва",
                postalCode: "119270",
                addressCountry: "RU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 55.751244,
                longitude: 37.618423,
              },
              openingHours: "Mo-Su 09:00-22:00",
              priceRange: "₽₽",
              image: "https://smartpole.ru/images/logo.png",
              logo: "https://smartpole.ru/images/logo.png",
              sameAs: ["https://instagram.com/smartpole", "https://t.me/smartpole"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Услуги студии pole sport",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pole Sport для начинающих",
                      description: "Изучение базовых элементов и правильной техники",
                    },
                    price: "1500",
                    priceCurrency: "RUB",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Индивидуальные занятия",
                      description: "Персональный подход и ускоренное обучение",
                    },
                    price: "4000",
                    priceCurrency: "RUB",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
