"use client"

import { useState, useEffect, useRef } from "react"
import SectionTitle from "./SectionTile"

const BenefitsSection = () => {
  const benefits = [
    "Over 12 months advance scheduling",
    "Repeat client, site and staff scheduling",
    "Multiple roster views",
    "Multiple shifts operations",
    "Live operations monitoring",
    "Staff Book on, Book off and Check calls",
    "Chase-up calls to monitor lateness",
    "Site trained staff",
    "Automatic notifications of banned staff",
    "Creating staff categories (guard groups)",
    "Creating staff payrolls and client invoices",
    "Managing staff and client payments",
    "Complete Incident Reporting",
    "Business Performance Management",
    "Full system logs to audit Admin users",
    "Complete shifts logs to identify the mistakes",
    "Micro level access control for system Admins",
    "Creating and managing multiple branches",
    "Over 50 reports to cover all aspects of the business",
  ]

  const images = ["pic2.png", "pic3.png", "/pic4.png"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Indel Offers Wide Range Of Benefits" />

        <div
          className={`grid md:grid-cols-2 gap-10 items-center mt-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Text Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-700">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  <span className="text-purple-600 mr-2 mt-0.5 text-xs">➔</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="max-w-md mx-auto w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Indel Dashboard ${currentImageIndex + 1}`}
                  className="w-full h-auto object-contain transition-opacity duration-500 rounded-lg"
                  style={{ maxHeight: "300px" }}
                />
              </div>

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

export default BenefitsSection
