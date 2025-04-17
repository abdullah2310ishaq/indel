"use client"

import { useEffect, useRef, useState } from "react"
import SectionTitle from "./SectionTile"
import FeatureCard from "./FeatureCard"

const FeaturesSection = () => {
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle title="Indel is based on state of the art Features" />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Globe Logo (Main Section Image) */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm h-auto rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-[1.02] duration-300 bg-gradient-to-br from-purple-100 to-indigo-100 p-4">
              <img
                src="pic7.png"
                alt="Globe Logo"
                className="w-full h-auto rounded-lg"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <FeatureCard
              icon={<img src="pic8.png" alt="Lightning Fast Logo" className="w-8 h-8" />}
              title="Lightning Fast"
              description="Indel is a lightning fast application with a very super-fast web hosting and CDN (content delivery network). The RTT's (round trip time) is very less along with the use of sprites and DNS (domain name system) pre-fetching."
            />

            <FeatureCard
              icon={<img src="pic9.png" alt="Easy To Use Logo" className="w-8 h-8" />}
              title="Easy To Use"
              description="Indel is a light weighted application with a minimalistic design that enables you to browse faster. Caching and compression is enabled. Indel has its own CDN which ensures users across the globe have a fast experience."
            />

            <FeatureCard
              icon={<img src="pic10.png" alt="Light Weight Logo" className="w-8 h-8" />}
              title="Light Weight"
              description="Indel has a well-planned information architecture, well-formed content that is easy to scan, loading very fast, consistent browsing, and effective navigation. Indel also has good error handling."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
