"use client"

import { useEffect, useState, useRef } from "react"
import SectionTitle from "./SectionTile"

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
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 w-40 h-40 rounded-full bg-purple-500 opacity-10" />
        <div className="absolute left-0 top-24 w-32 h-32 rounded-full bg-indigo-500 opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <SectionTitle title="Mobile Friendly Staff Portal" className="text-white" />

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          {/* Left Side: Portal Screenshot Image */}
          <div
            className={`flex justify-center transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-[320px] w-full bg-white/10 backdrop-blur-sm p-4">
              <img
                src="pic5.png"
                alt="Staff Portal"
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="text-lg mb-6">Our staff portal is fully mobile-friendly. Staff can use their portal to:</p>
            <div className="space-y-3">
              {portalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white/10 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  <span className="text-white mr-3 flex-shrink-0 mt-0.5">
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
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StaffPortalSection
