"use client"

import { useEffect, useRef, useState } from "react"
import SectionTitle from "./SectionTile"

const AboutUsSection = () => {
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
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="About Us" />

        <div
          className={`mt-12 bg-white p-8 rounded-xl shadow-sm text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            INDEL is the next-generation of web-based Application for security companies, conceived with passion and
            with a meticulous focus on the Security Industry. INDEL application offers creative pros exactly what
            Security Companies need—sophisticated reporting, accuracy in every functionality, blazing speed, and
            unrivalled compatibility. We don't do any yearly contracts and charge only monthly subscriptions — it's how
            a business application should be.
          </p>

          <div className="italic text-sm text-purple-700 font-medium border-t border-gray-100 pt-6">
            Indel is a project by Fiksu Solutions Limited. Fiksu Solutions Limited is an I.T firm specialized in
            developing I.T systems for businesses.
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
