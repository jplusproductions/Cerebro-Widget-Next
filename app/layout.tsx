import type { Metadata } from "next"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import AppTRPCProvider from "@AppComps/@TRPCProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cerebro — Embeddable Sports Widgets",
  description: "Drop-in sports widgets for any CMS. Schedule, Standings, teams, and more — powered by real-time data.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{var t=localStorage.getItem(\"theme\");document.documentElement.classList.toggle(\"dark\",t===\"dark\")}catch(e){}})()",
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppTRPCProvider>
          {children}
        </AppTRPCProvider>
      </body>
    </html>
  )
}
