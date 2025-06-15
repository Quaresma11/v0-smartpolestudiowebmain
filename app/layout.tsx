import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Smart Pole Studio - Профессиональная студия pole sport и воздушной акробатики в Москве",
  description:
    "Развивайте силу, грацию и уверенность в себе в профессиональной студии pole sport и воздушной акробатики Smart Pole. Занятия для всех уровней подготовки в 2 филиалах Москвы.",
  generator: "v0.dev",
  keywords:
    "pole sport, воздушная акробатика, пилонный спорт, воздушные полотна, воздушное кольцо, фитнес, Москва, студия танца",
  openGraph: {
    title: "Smart Pole Studio - Pole Sport и воздушная акробатика в Москве",
    description:
      "Профессиональная студия pole sport и воздушной акробатики. Развивайте силу, грацию и уверенность в себе. 2 филиала в Москве.",
    type: "website",
    locale: "ru_RU",
    siteName: "Smart Pole Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Pole Studio - Pole Sport и воздушная акробатика",
    description: "Профессиональная студия pole sport и воздушной акробатики в Москве. Занятия для всех уровней.",
  },
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
  alternates: {
    canonical: "https://smartpole.ru",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <link rel="canonical" href="https://smartpole.ru" />
      </head>
      <body>{children}</body>
    </html>
  )
}
