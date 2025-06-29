import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iStarter",
  description: "Venture Capital Advisory",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'