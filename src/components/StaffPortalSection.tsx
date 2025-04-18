"use client"

import { useEffect, useState } from "react"

const StaffPortalSection = () => {
  const portalFeatures = [
    "View their rosters",
    "Confirm their shifts",
    "View site/shift instructions",
    "Give their availability",
    "View their personal details",
    "Apply for available shifts",
    "Send annual leave requests",
  ]

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-[#6a3fc4] to-[#a174e3] text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-64 h-64 rounded-full bg-[#6b62b5] opacity-20" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[#7c74c6] opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mobile Friendly Staff Portal
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Portal Screenshot */}
          <div className="flex justify-center">
            <img
              src="pic7.jpg"
              alt="Staff Portal"
              className="w-full md:max-w-[400px] h-[400px] object-fill rounded-xl shadow-xl"
            />
          </div>

          {/* Right Side: Feature List */}
          <div className="text-white">
            <p className="text-base mb-4 font-semibold">
              Our staff portal is fully mobile friendly. Staff can use their portal to:
            </p>
            <ul className="space-y-3 text-sm md:text-base">
              {portalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1">○</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StaffPortalSection
