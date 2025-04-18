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
    <section className="py-16 px-4 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-64 h-64 rounded-full bg-[#60a5fa] opacity-20" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[#93c5fd] opacity-15" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Mobile Friendly Staff Portal</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Portal Screenshot */}
          <div className="flex justify-center">
            <img
              src="pic7.jpg"
              alt="Staff Portal"
              className="w-full md:max-w-[350px] h-[320px] object-fill rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Feature List */}
          <div className="text-white">
            <p className="text-sm mb-3 font-semibold">
              Our staff portal is fully mobile friendly. Staff can use their portal to:
            </p>
            <ul className="space-y-2 text-xs md:text-sm">
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
