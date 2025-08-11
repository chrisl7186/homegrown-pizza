"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, Pizza } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Sheet, SheetContent, SheetTrigger } from "@workspace/ui/components/sheet"
import { ThemeSwitcher } from "@/components/layout/navigation/ThemeSwitcher"

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "About", href: "/about" },
  { title: "Locations", href: "/locations" },
  { title: "Contact", href: "/contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
              <Pizza className="h-6 w-6 text-orange-600" />
              <span className="font-bold text-lg">Homegrown Pizza</span>
            </Link>
            <ThemeSwitcher />
          </div>
          <div className="flex-1 overflow-auto p-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
