"use client"

const AboutUsSection = () => {
  return (
    <section className="bg-gray-50 text-center px-4 py-12 text-sm md:text-base text-gray-700 leading-relaxed">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 py-6 relative text-white mb-10">
        <h2 className="text-xl md:text-2xl font-bold">About Us</h2>
        {/* Slanted Bottom Edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6 bg-gray-50"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)",
          }}
        ></div>
      </div>

      {/* Content (no wrapping divs) */}
      INDEL is the next-generation of web-based Application for security companies, conceived with passion and with a meticulous
      focus on the Security Industry. INDEL application offers creative pros exactly what Security Companies need—sophisticated
      reporting, accuracy in every functionality, blazing speed, and unrivalled compatibility. We don't do any yearly contracts
      and charge only monthly subscriptions — it's how a business application should be.
      <br />
      <br />
      <em>
        Indel is a project by Fiksu Solutions Limited. Fiksu Solutions Limited is an I.T firm specialized in developing I.T systems
        for businesses.
      </em>
    </section>
  )
}

export default AboutUsSection
