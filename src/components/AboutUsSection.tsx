"use client"

const AboutUsSection = () => {
  return (
    <section className="bg-gray-50 px-6 py-24 text-gray-700 leading-relaxed text-center">
      {/* Header Banner */}
      <div className="bg-[#5a50a3] py-8 relative text-white mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
        <div
          className="absolute bottom-0 left-0 right-0 h-6 bg-gray-50"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg">
        <p>
          INDEL is the next-generation web-based application for security companies, conceived with passion and
          precision. Built specifically for the Security Industry, it delivers sophisticated reporting, accuracy in every
          function, blazing speed, and unmatched compatibility. We don’t lock you into yearly contracts — we offer
          flexible monthly subscriptions the way modern software should.
        </p>
        <p className="italic text-[#5a50a3]">
          Indel is a project by Fiksu Solutions Limited — an I.T firm dedicated to developing intelligent business systems that drive success.
        </p>
      </div>
    </section>
  )
}

export default AboutUsSection
