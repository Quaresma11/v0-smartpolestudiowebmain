import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Smart Pole Studio - Профессиональная студия пилонного спорта и воздушной акробатики в Москве",
  description:
    "Лучшая студия pole sport и воздушной гимнастики в Москве. 12 профессиональных тренеров, современное оборудование, индивидуальный подход. Занятия для начинающих и профессионалов. Запишитесь на пробное занятие!",
  keywords: [
    "pole sport москва",
    "пилонный спорт",
    "воздушная акробатика",
    "pole dance",
    "воздушные полотна",
    "воздушное кольцо",
    "растяжка",
    "экзотик",
    "скульптура тела",
    "студия москва",
    "семеновская",
    "преображенская площадь",
    "тренеры pole sport",
    "Алена Данилова",
    "Алексей Харитонов",
    "Мария Евсеева",
    "Екатерина Сидорова",
    "Анфиса Ванюкова",
    "Василиса Харитонова",
    "пробное занятие pole sport",
    "абонементы pole dance",
    "аренда зала москва",
  ].join(", "),
  authors: [{ name: "Smart Pole Studio" }],
  creator: "Smart Pole Studio",
  publisher: "Smart Pole Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://smartpolestudio.ru",
    siteName: "Smart Pole Studio",
    title: "Smart Pole Studio - Профессиональная студия пилонного спорта в Москве",
    description:
      "Лучшая студия pole sport и воздушной гимнастики в Москве. 12 профессиональных тренеров, современное оборудование. Занятия pole dance, воздушные полотна, кольцо, растяжка. Запишитесь на пробное занятие за 750₽!",
    images: [
      {
        url: "/images/hero-pole-dancer.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Pole Studio - профессиональные занятия pole sport в Москве",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Pole Studio - Pole Sport и воздушная акробатика в Москве",
    description:
      "Профессиональная студия пилонного спорта. 12 тренеров, современное оборудование, индивидуальный подход. Пробное занятие 750₽!",
    images: ["/images/hero-pole-dancer.jpg"],
  },
  alternates: {
    canonical: "https://smartpolestudio.ru",
  },
  other: {
    "yandex-verification": "your-yandex-verification-code",
    "google-site-verification": "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#facc15" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
