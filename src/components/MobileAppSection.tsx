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
    <section className="py-16 px-4 bg-gradient-to-b from-[#3b82f6] via-[#60a5fa] to-[#93c5fd] text-white relative overflow-hidden">
      {/* Soft Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-64 h-64 rounded-full bg-[#60a5fa] opacity-20" />
        <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-[#93c5fd] opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">iOS & Android Mobile App</h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center px-4">
          {/* Feature List */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <ul className="space-y-2 text-white text-xs md:text-sm leading-relaxed">
              {mobileFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white text-base">➤</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[220px]">
              <div className="aspect-[9/19] bg-black border-[6px] border-gray-800 rounded-[2rem] shadow-xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-5 bg-black rounded-b-xl z-10" />
                {/* Home Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-300 rounded-full" />
                {/* Screen */}
                <div className="absolute top-5 left-0 right-0 bottom-8 px-1 py-1 bg-white overflow-hidden">
                  <img
                    src={appScreenshots[currentImageIndex].image || "/placeholder.svg"}
                    alt={appScreenshots[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-opacity duration-500 rounded"
                  />
                </div>
              </div>

              {/* Shadow */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[80%] h-3 bg-black/20 rounded-full blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
