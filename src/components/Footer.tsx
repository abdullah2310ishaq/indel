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
    <footer className="bg-[#3b82f6] text-white py-6 px-4 text-center">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-4 mb-4 text-xs font-medium tracking-wide">
        <button onClick={onNavigate.home} className="hover:underline hover:text-blue-100 transition">
          WELCOME
        </button>
        <button onClick={onNavigate.benefits} className="hover:underline hover:text-blue-100 transition">
          BENEFITS
        </button>
        <button onClick={onNavigate.mobileApp} className="hover:underline hover:text-blue-100 transition">
          MOBILE APP
        </button>
        <button onClick={onNavigate.staffPortal} className="hover:underline hover:text-blue-100 transition">
          STAFF PORTAL
        </button>
        <button onClick={onNavigate.features} className="hover:underline hover:text-blue-100 transition">
          FEATURES
        </button>
        <button onClick={onNavigate.aboutUs} className="hover:underline hover:text-blue-100 transition">
          ABOUT US
        </button>
        <button onClick={onNavigate.contactUs} className="hover:underline hover:text-blue-100 transition">
          CONTACT US
        </button>
      </nav>

      {/* Contact Info */}
      <p className="text-xs mb-2">
        Contact Us:{" "}
        <a href="mailto:truesecureteam4u@gmail.com" className="underline hover:text-blue-100">
        truesecureteam4u@gmail.com
        </a>
      </p>

      {/* Copyright */}
      <p className="text-xs opacity-80">© 2015 Fiksu Solutions Limited. All rights reserved.</p>
    </footer>
  )
}

export default Footer
