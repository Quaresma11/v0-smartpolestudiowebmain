import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Smart Pole Studio - Профессиональная студия pole sport в Москве",
  description:
    "Развивайте силу, грацию и уверенность в себе в профессиональной студии pole sport Smart Pole. Занятия для всех уровней подготовки.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/icon.png",
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
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#FCD34D" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
