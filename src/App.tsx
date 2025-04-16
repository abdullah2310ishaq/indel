"use client"


import { useRef } from "react"
import AboutUsSection from "./components/AboutUsSection"
import BenefitsSection from "./components/BenefitsSection"
import ContactSection from "./components/StaffPortalSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HRModuleSection from "./components/HRModuleSection"
import MobileAppSection from "./components/MobileAppSection"
import Navbar from "./components/Navbar"
import StaffPortalSection from "./components/StaffPortalSection"

export default function Home() {
  // Create refs for each section for smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null)
  const welcomeRef = useRef<HTMLDivElement>(null) // Added welcome ref
  const benefitsRef = useRef<HTMLDivElement>(null)
  const mobileAppRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const aboutUsRef = useRef<HTMLDivElement>(null)
  const contactUsRef = useRef<HTMLDivElement>(null)

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        onNavigate={{
          home: () => scrollToSection(homeRef),
          welcome: () => scrollToSection(welcomeRef), // Added welcome navigation
          benefits: () => scrollToSection(benefitsRef),
          mobileApp: () => scrollToSection(mobileAppRef),
          features: () => scrollToSection(featuresRef),
          aboutUs: () => scrollToSection(aboutUsRef),
          contactUs: () => scrollToSection(contactUsRef),
        }}
      />

      <main className="flex-grow">
        {/* Home/Hero Section */}
        <div ref={homeRef}>
          <HeroSection
            title="Are you looking for a Perfect Solution for Your Security Company"
            subtitle="There's nothing to install and nothing to download. Everything you need to manage your security company is right here in your web browser."
          />
        </div>

        {/* Welcome Section - Added this section */}
        <div ref={welcomeRef}>
          {/* You can create a WelcomeSection component or use an existing one */}
          <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-700">Welcome to INDEL</h2>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  The next-generation web-based application for security companies, designed to streamline your
                  operations and enhance your business efficiency. Our comprehensive solution provides everything you
                  need to manage your security company effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section with Shift Details */}
        <div ref={benefitsRef}>
          <BenefitsSection />
        </div>

        {/* Mobile App Section */}
        <div ref={mobileAppRef}>
          <MobileAppSection />
        </div>

        {/* HR Module Section */}
        <div>
          <HRModuleSection />
        </div>
         {/* Staff Section */}
         <div ref={contactUsRef}>
          <StaffPortalSection />
        </div>

        {/* Features Section */}
        <div ref={featuresRef}>
          <FeaturesSection />
        </div>

        {/* About Us Section */}
        <div ref={aboutUsRef}>
          <AboutUsSection />
        </div>

       
      </main>

      <Footer
        onNavigate={{
          home: () => scrollToSection(homeRef),
          benefits: () => scrollToSection(benefitsRef),
          mobileApp: () => scrollToSection(mobileAppRef),
          features: () => scrollToSection(featuresRef),
          aboutUs: () => scrollToSection(aboutUsRef),
          contactUs: () => scrollToSection(contactUsRef),
          staffPortal: () => scrollToSection(contactUsRef),
        }}
      />
    </div>
  )
}
