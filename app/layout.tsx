import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A modern portfolio website with dark and light mode",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}


import './globals.css'
import { Providers } from "@/components/providers"
