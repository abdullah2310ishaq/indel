"use client"

interface HeroSectionProps {
  title: string
  subtitle?: string
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient (Top Purple to Indigo) + Bottom Fade to White */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-purple-700 via-white-100 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 text-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-90">{subtitle}</p>
        )}

        {/* Image Card */}
        <div className="mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-[1.01] duration-300">
          <div className="relative max-h-[300px] overflow-hidden">
            <img
              src="/pic1.png"
              alt="Hero Screenshot"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 bg-gray-50 text-left">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Your Security Solution
            </h2>
            <p className="text-sm md:text-base text-gray-700">
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
