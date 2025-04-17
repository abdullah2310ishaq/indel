"use client"

import { useState, useEffect, useRef } from "react"
import SectionTitle from "./SectionTile"

const MobileAppSection = () => {
  const mobileFeatures = [
    "Light weight",
    "Easy to install",
    "User friendly design",
    "Both IOS & Android compatible",
    "Shift details with shift instructions",
    "Real time attendance with book on/off",
    "Missed Book-on and check calls details",
    "Lone working compliance with check calls",
  ]

  const appScreenshots = [
    { image: "pic5.png", alt: "App Login Screen" },
    { image: "pic6.png", alt: "Shift Details Screen" },
    { image: "pic7.png", alt: "Book On/Off Screen" },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % appScreenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden"
    >
      {/* Soft Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-40 h-40 rounded-full bg-purple-400 opacity-10" />
        <div className="absolute -left-10 top-20 w-32 h-32 rounded-full bg-indigo-500 opacity-10" />
        <div className="absolute left-20 top-10 w-24 h-24 rounded-full bg-purple-500 opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <SectionTitle title="iOS & Android Mobile App" className="text-white" />

        <div
          className={`grid md:grid-cols-2 gap-10 items-center mt-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Feature List */}
          <div className="space-y-4">
            {mobileFeatures.map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <span className="bg-white/20 p-1.5 rounded-full flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[240px] sm:max-w-[260px]">
              <div className="aspect-[9/19] bg-white border-[6px] border-gray-800 rounded-[2rem] shadow-2xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-6 bg-gray-800 rounded-b-xl z-10" />
                {/* Home Button */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-gray-300 rounded-full" />
                {/* Screen */}
                <div className="absolute top-6 left-0 right-0 bottom-14 px-1.5 py-1.5 bg-white overflow-hidden">
                  <img
                    src={appScreenshots[currentImageIndex].image || "/placeholder.svg"}
                    alt={appScreenshots[currentImageIndex].alt}
                    className="w-full h-full object-contain transition-opacity duration-500 rounded"
                  />
                </div>
              </div>

              {/* Phone shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-4 bg-black/20 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
