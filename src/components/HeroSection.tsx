"use client"

interface HeroSectionProps {
  title: string
  subtitle?: string
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#5a50a3] via-[#8a82c5] to-white">
      {/* Overlay Pattern (optional aesthetic) */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/grid.svg')] bg-cover"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-md mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Image Card with subtle glass effect */}
        <div className="mx-auto max-w-4xl backdrop-blur-sm bg-white/80 border border-gray-200 shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-500">
          <div className="relative">
            <img
              src="/pic1.jpg"
              alt="Hero Screenshot"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "420px" }}
            />
          </div>
          <div className="p-6 md:p-8 bg-white text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Your Security Solution
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              INDEL provides a comprehensive solution for security companies with advanced scheduling, monitoring, and reporting features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
