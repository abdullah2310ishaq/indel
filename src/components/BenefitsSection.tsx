"use client"

import { useState, useEffect } from "react"

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="bg-gray-50 py-12">
      {/* Purple Header Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 py-6 relative mb-10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center">Indel Offers Wide Range Of Benefits</h2>
        </div>
        {/* Slanted bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6 bg-gray-50"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-700">Key Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-1 mt-0.5 text-xs">➔</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className="max-w-md mx-auto w-full">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={images[currentImageIndex]}
                alt={`Indel Dashboard ${currentImageIndex + 1}`}
                className="w-full h-auto object-contain transition-opacity duration-500"
                style={{ maxHeight: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
