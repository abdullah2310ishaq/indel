"use client"

import { useState, useEffect } from "react"
import SectionTitle from "./SectionTile"

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

  const images = ["pic5.png", "pic6.png", "pic7.png"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [images.length])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="HR Module" className="mb-10" />

        {/* Flex layout for features list and carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: HR Features List */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-purple-700">HR Features</h3>
            <div className="space-y-3">
              {hrFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Carousel - Simplified with autoplay */}
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md max-w-md mx-auto">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`HR Module Image ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-lg transition-opacity duration-500"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HRModuleSection
