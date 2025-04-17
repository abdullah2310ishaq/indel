"use client"

import type { FC } from "react"

interface FooterProps {
  onNavigate: {
    home: () => void
    benefits: () => void
    mobileApp: () => void
    staffPortal: () => void
    features: () => void
    aboutUs: () => void
    contactUs: () => void
  }
}

const Footer: FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-purple-800 text-white py-8 text-center">
      {/* Top Navigation Links */}
      <div className="container mx-auto px-6">
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-xs tracking-wide font-medium">
          <button onClick={onNavigate.home} className="hover:text-purple-200 transition-colors">
            WELCOME
          </button>
          <button onClick={onNavigate.benefits} className="hover:text-purple-200 transition-colors">
            BENEFITS
          </button>
          <button onClick={onNavigate.mobileApp} className="hover:text-purple-200 transition-colors">
            MOBILE APP
          </button>
          <button onClick={onNavigate.features} className="hover:text-purple-200 transition-colors">
            FEATURES
          </button>
          <button onClick={onNavigate.aboutUs} className="hover:text-purple-200 transition-colors">
            ABOUT US
          </button>
          <button onClick={onNavigate.contactUs} className="hover:text-purple-200 transition-colors">
            CONTACT US
          </button>
        </div>

        {/* Contact Email */}
        <p className="text-xs mb-2">Contact Us: info@fiksu-solutions.com</p>

        {/* Copyright */}
        <p className="text-xs text-purple-200">© 2015 Copy Right Fiksu Solutions Limited</p>
      </div>
    </footer>
  )
}

export default Footer
