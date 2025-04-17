"use client"

import { useEffect, useState } from "react"

interface HeroSectionProps {
  title: string
  subtitle?: string
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-purple-700 via-purple-500 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl">
        <h1
          className={`text-2xl md:text-3xl font-bold mb-4 leading-tight transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-sm md:text-base max-w-2xl mx-auto opacity-90 transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {subtitle}
          </p>
        )}

        {/* Image Card */}
        <div
          className={`mt-10 mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          } hover:shadow-2xl hover:scale-[1.01] duration-300`}
          style={{ maxWidth: "900px" }}
        >
          <div className="relative overflow-hidden">
            <img
              src="/pic1.png"
              alt="Hero Screenshot"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="p-6 bg-gray-50 text-left">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Security Solution</h2>
            <p className="text-sm text-gray-700">
              INDEL provides a comprehensive solution for security companies with advanced scheduling, monitoring, and
              reporting features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
