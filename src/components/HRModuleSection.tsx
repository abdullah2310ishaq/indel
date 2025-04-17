"use client"

import { useState, useEffect, useRef } from "react"
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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [images.length])

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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="HR Module" />

        {/* Flex layout for features list and carousel */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Side: HR Features List */}
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-6 text-purple-700">HR Features</h3>
            <div className="space-y-4">
              {hrFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-purple-600 mr-3 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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

          {/* Right Side: Image Carousel */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-purple-100 to-indigo-100 p-4">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`HR Module Image ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-lg transition-opacity duration-500 mx-auto"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />

              {/* Image indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? "w-6 bg-purple-600" : "w-2 bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HRModuleSection
