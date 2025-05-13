import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Harrison, Blackwell & Associates</h3>
            <p className="mb-4 text-gray-300">
              A full-service law firm committed to providing exceptional legal representation since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas/corporate-law" className="text-gray-300 hover:text-white">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/litigation" className="text-gray-300 hover:text-white">
                  Litigation
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/real-estate-law" className="text-gray-300 hover:text-white">
                  Real Estate Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/intellectual-property" className="text-gray-300 hover:text-white">
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/employment-law" className="text-gray-300 hover:text-white">
                  Employment Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-gray-300 hover:text-white">
                  View All Practice Areas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-gray-300 hover:text-white">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">1234 Legal Avenue, Suite 500, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#D4AF37]" />
                <span className="text-gray-300">info@harrisonblackwell.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Harrison, Blackwell & Associates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
