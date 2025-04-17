"use client"

import { useState, useEffect } from "react"
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  ]

  return (
    <nav
      className={`${
        scrolled ? "bg-purple-800 shadow-lg" : "bg-gradient-to-r from-purple-700 to-indigo-800"
      } text-white sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.action)}
              className="text-sm tracking-wide font-medium hover:text-purple-200 transition-colors px-2 py-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900 px-6 py-4 space-y-3 animate-fadeIn">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.action)}
              className="block w-full text-left text-sm font-medium text-white hover:text-purple-200 transition-colors py-2 border-b border-purple-800"
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
