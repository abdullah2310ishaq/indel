"use client"

interface HeroSectionProps {
  title: string
  subtitle?: string
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#3b82f6] via-[#93c5fd] to-white">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">{title}</h1>
        {subtitle && <p className="text-base md:text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">{subtitle}</p>}

        {/* Image Card */}
        <div className="mx-auto max-w-3xl bg-white/90 border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="/pic1.jpg"
              alt="Hero Screenshot"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "380px" }}
            />
          </div>
          <div className="p-4 md:p-6 bg-white text-left">
            <h2 className="text-lg font-semibold text-[#3b82f6] mb-2">Your Security Solution</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              INDEL provides a comprehensive solution for security companies with advanced scheduling, monitoring, and
              reporting features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
