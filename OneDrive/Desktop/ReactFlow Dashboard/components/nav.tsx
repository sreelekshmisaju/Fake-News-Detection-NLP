"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      <Link
        href="/dashboard"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/users"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/dashboard/users" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Users
      </Link>
    </nav>
  )
}

