"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // No dropdown state needed for simplified navigation

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center">
            <span className="text-xl font-bold text-[#0A2342]">Harrison, Blackwell & Associates</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-[#0A2342]">
            About
          </Link>

          <Link href="/practice-areas" className="text-gray-700 hover:text-[#0A2342]">
            Practice Areas
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-[#0A2342]">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="/schedule-consultation">
            <Button className="bg-[#0A2342] hover:bg-[#0A2342]/90">Schedule a Consultation</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#0A2342]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/about"
              className="block border-b py-2 text-base font-medium text-gray-700 hover:text-[#0A2342]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/practice-areas"
              className="block border-b py-2 text-base font-medium text-gray-700 hover:text-[#0A2342]"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </Link>

            <Link
              href="/contact"
              className="block border-b py-2 text-base font-medium text-gray-700 hover:text-[#0A2342]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link href="/schedule-consultation">
                <Button className="w-full bg-[#0A2342] hover:bg-[#0A2342]/90" onClick={() => setIsMenuOpen(false)}>
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
