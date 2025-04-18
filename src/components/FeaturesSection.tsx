"use client"
import { FiZap, FiSmartphone, FiFeather } from "react-icons/fi"

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-[#f4f6fb]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5a50a3] mb-8">
        Indel is based on state of the art Features
      </h2>

      <main className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Globe Image */}
        <img src="pic7.png" alt="Globe" className="w-full max-w-xs h-auto object-contain mx-auto" />

        {/* Right: Feature List */}
        <ul className="space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
          {/* Feature 1 */}
          <li className="flex items-start gap-3">
            <span className="text-[#5a50a3] mt-1">
              <FiZap className="w-8 h-8" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#5a50a3] mb-1">Lightning Fast</h3>
              <p>
                Indel is a lightning fast application with very fast web hosting and CDN. RTT is very low with DNS
                pre-fetching and optimized files.
              </p>
            </div>
          </li>

          {/* Feature 2 */}
          <li className="flex items-start gap-3">
            <span className="text-[#5a50a3] mt-1">
              <FiSmartphone className="w-8 h-8" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#5a50a3] mb-1">Easy To Use</h3>
              <p>
                With a minimalist design, Indel enables faster browsing and compression. CDN ensures global access with
                better performance.
              </p>
            </div>
          </li>

          {/* Feature 3 */}
          <li className="flex items-start gap-3">
            <span className="text-[#5a50a3] mt-1">
              <FiFeather className="w-8 h-8" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-[#5a50a3] mb-1">Light Weight</h3>
              <p>
                Indel is structured, easy to navigate, quick to load, and built for seamless browsing with error
                handling.
              </p>
            </div>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default FeaturesSection
