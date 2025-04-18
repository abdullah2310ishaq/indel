"use client"

const AboutUsSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 text-gray-700 leading-relaxed text-center">
      {/* Header Banner */}
      <div className="bg-[#3b82f6] py-6 relative text-white mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
        <div
          className="absolute bottom-0 left-0 right-0 h-5 bg-gray-50"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto space-y-4 text-sm md:text-base">
        <p>
          INDEL is the next-generation web-based application for security companies, conceived with passion and
          precision. Built specifically for the Security Industry, it delivers sophisticated reporting, accuracy in
          every function, blazing speed, and unmatched compatibility. We don't lock you into yearly contracts — we offer
          flexible monthly subscriptions the way modern software should.
        </p>
        <p className="italic text-[#3b82f6]">
          Indel is a project by Fiksu Solutions Limited — an I.T firm dedicated to developing intelligent business
          systems that drive success.
        </p>
      </div>
    </section>
  )
}

export default AboutUsSection
