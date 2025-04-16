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
    <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-40 h-40 rounded-full bg-purple-500 opacity-10" />
        <div className="absolute left-0 top-24 w-32 h-32 rounded-full bg-indigo-500 opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Mobile Friendly Staff Portal</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Portal Screenshot Image */}
          <div
            className={`flex justify-center transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg max-w-[320px] w-full">
              <img
                src="pic5.png"
                alt="Staff Portal"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="text-lg mb-4">Our staff portal is fully mobile-friendly. Staff can use their portal to:</p>
            <ul className="space-y-3 text-sm md:text-base">
              {portalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-white mr-2 flex-shrink-0 mt-1">
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
