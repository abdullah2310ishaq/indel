"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/pic11.png"

interface NavbarProps {
  onNavigate: {
    home: () => void
    welcome: () => void
    benefits: () => void
    mobileApp: () => void
    features: () => void
    aboutUs: () => void
    contactUs: () => void
  }
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const handleNavClick = (handler: () => void) => {
    handler()
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "HOME", action: onNavigate.home },
    { label: "WELCOME", action: onNavigate.welcome },
    { label: "BENEFITS", action: onNavigate.benefits },
    { label: "MOBILE APP", action: onNavigate.mobileApp },
    { label: "FEATURES", action: onNavigate.features },
    { label: "ABOUT US", action: onNavigate.aboutUs },
    { label: "CONTACT US", action: onNavigate.contactUs },
  ]

  return (
    <nav className="bg-[#3b82f6] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-24 md:h-28 w-auto object-contain" />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.action)}
              className="text-xs font-semibold tracking-wide hover:text-blue-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2563eb] px-4 py-3 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.action)}
              className="block w-full text-left text-xs font-medium text-white hover:text-blue-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
