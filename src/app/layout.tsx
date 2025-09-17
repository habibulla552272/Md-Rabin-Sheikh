import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Md. Rabin Sheikh | Asia Book of Records Grand Master | Push-up & Arm Wrestling Athlete",
  description:
    "Md. Rabin Sheikh from Faridpur, Bangladesh achieved Asia Book of Records - Grand Master title by completing 69 push-ups in 30 seconds at the age of 17. A young athlete passionate about push-ups, arm wrestling, and fitness.",
  keywords:
    "Md Rabin Sheikh, Rabin Sheikh Bangladesh, Rabin Sheikh Pushup Record, Asia Book of Records Bangladesh, Grand Master Pushups, Faridpur Athlete, Arm Wrestling Bangladesh, Fit Rabin, রবিন শেখ, এশিয়া বুক অফ রেকর্ডস, পুশআপ রেকর্ড বাংলাদেশ, পানজা বাংলাদেশ",
  authors: [{ name: "Md. Rabin Sheikh" }],
  creator: "Md. Rabin Sheikh",
  publisher: "Md. Rabin Sheikh",
  openGraph: {
    title: "Md. Rabin Sheikh - Asia Book of Records Grand Master",
    description: "Young Bangladeshi athlete who set a record for 69 push-ups in 30 seconds",
    type: "website",
    locale: "en_US",
    alternateLocale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Rabin Sheikh - Asia Book of Records Grand Master",
    description: "69 push-ups in 30 seconds - Asia Book of Records Grand Master from Bangladesh",
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
