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
    <footer className="bg-[#5a50a3] text-white py-6 text-center text-xs">
      {/* Top Navigation Links */}
      <div className="mb-3 flex flex-wrap justify-center gap-4 text-[11px] tracking-wide font-medium">
        <button onClick={onNavigate.home} className="hover:underline">WELCOME</button>
        <button onClick={onNavigate.benefits} className="hover:underline">BENEFITS</button>
        <button onClick={onNavigate.mobileApp} className="hover:underline">MOBILE APP</button>
        <button onClick={onNavigate.features} className="hover:underline">FEATURES</button>
        <button onClick={onNavigate.aboutUs} className="hover:underline">ABOUT US</button>
        <button onClick={onNavigate.contactUs} className="hover:underline">CONTACT US</button>
      </div>

      {/* Contact Email */}
      <p className="text-[11px] mb-1">Contact Us: info@fiksu-solutions.com</p>

      {/* Copyright */}
      <p className="text-[11px]">© 2015  Copy Right  Fiksu Solutions Limited</p>
    </footer>
  )
}

export default Footer
