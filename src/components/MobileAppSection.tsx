"use client"

import { useState, useEffect } from "react"

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % appScreenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-14 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Soft Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-40 h-40 rounded-full bg-purple-400 opacity-10" />
        <div className="absolute -left-10 top-20 w-32 h-32 rounded-full bg-indigo-500 opacity-10" />
        <div className="absolute left-20 top-10 w-24 h-24 rounded-full bg-purple-500 opacity-10" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-10">iOS & Android Mobile App</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Feature List */}
          <div className="space-y-3">
            {mobileFeatures.map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="bg-white/20 p-1.5 rounded-full">
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
                <p className="text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[240px] sm:max-w-[260px]">
              <div className="aspect-[9/19] bg-white border-[6px] border-gray-200 rounded-[2rem] shadow-md relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-6 bg-gray-200 rounded-b-xl z-10" />
                {/* Home Button */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-gray-300 rounded-full" />
                {/* Screen */}
                <div className="absolute top-6 left-0 right-0 bottom-14 px-1.5 py-1.5 bg-white overflow-hidden">
                  <img
                    src={appScreenshots[currentImageIndex].image}
                    alt={appScreenshots[currentImageIndex].alt}
                    className="w-full h-full object-contain transition-opacity duration-500 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
