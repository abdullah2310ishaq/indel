"use client"

import { useState, useEffect } from "react"

const HRModuleSection = () => {
  const hrFeatures = [
    "Complete staff application forms",
    "Complete Recruitment Solution (Online Job Applications)",
    "Complete Screening and Vetting of Staff (BS:7858)",
    "Staff performance management",
    "Managing staff holidays",
    "Managing staff documents",
    "Comprehensive HR reports",
  ]

  const images = ["pic5.jpg", "pic7.jpg"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="py-16 px-4 bg-[#f4f6fb]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5a50a3] mb-8">HR Module</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="w-full max-w-[500px] mx-auto rounded-lg overflow-hidden shadow-lg">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`HR Module Image ${currentImageIndex + 1}`}
            className="w-full h-[320px] object-fill transition-opacity duration-700 rounded-lg"
          />

          <div className="flex justify-center gap-2 mt-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? "bg-[#5a50a3]" : "bg-gray-300"}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right: Feature List */}
        <ul className="space-y-3 text-[#5a50a3] text-xs md:text-sm leading-relaxed">
          {hrFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1">○</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HRModuleSection
