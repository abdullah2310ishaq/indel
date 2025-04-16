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
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.action)}
              className="text-sm font-medium hover:text-rose-200 transition-colors px-2 py-1"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 px-4 py-4 space-y-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.action)}
              className="block w-full text-left text-base font-medium text-white hover:text-rose-200 transition-colors"
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
