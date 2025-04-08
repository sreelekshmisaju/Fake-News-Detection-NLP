import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/nav"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "A React-based web application with counter, user data form, and rich text editors",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b">
          <div className="flex h-16 items-center">
            <MainNav />
          </div>
        </div>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}

