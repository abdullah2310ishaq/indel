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

  const images = ["pic2.jpg", "pic3.jpg", "pic4.jpg"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <h2 className="text-3xl font-bold text-[#5a50a3] text-center mb-12">
        Indel Offers a Wide Range of Benefits
      </h2>

      <main className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Benefits List */}
        <ul className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-800 text-sm leading-relaxed">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex">
              <span className="text-[#5a50a3] mr-2">➔</span>
              {benefit}
            </li>
          ))}
        </ul>

        {/* Image Right Side */}
        <img
          src={images[currentImageIndex]}
          alt="Benefits Dashboard"
          className="w-full max-w-full md:max-w-[700px] h-auto md:h-[430px] rounded-xl shadow-lg object-fill transition-all duration-700"
        />
      </main>
    </section>
  )
}

export default BenefitsSection
