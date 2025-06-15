import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Профессиональная студия воздушной акробатики в Москве",
  generator: "v0.dev",
  keywords: "воздушная акробатика, акробатика, Москва",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
