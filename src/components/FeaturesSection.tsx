"use client"

import SectionTitle from "./SectionTile"
import { FiZap, FiSmartphone, FiFeather } from "react-icons/fi"

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-[#f4f6fb]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5a50a3] mb-12">
        Indel is based on state of the art Features
      </h2>

      <main className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Globe Image */}
        <img
          src="pic7.png"
          alt="Globe"
          className="w-full max-w-sm h-auto object-contain mx-auto"
        />

        {/* Right: Feature List */}
        <ul className="space-y-10 text-sm md:text-base text-gray-700 leading-relaxed">
          {/* Feature 1 */}
          <li className="flex items-start gap-4">
            <span className="text-[#5a50a3] mt-1">
              <FiZap className="w-10 h-10" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#5a50a3] mb-1">Lightning Fast</h3>
              <p>
                Indel is a lightning fast application with very fast web hosting and CDN. RTT is very low with DNS pre-fetching and optimized files.
              </p>
            </div>
          </li>

          {/* Feature 2 */}
          <li className="flex items-start gap-4">
            <span className="text-[#5a50a3] mt-1">
              <FiSmartphone className="w-10 h-10" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#5a50a3] mb-1">Easy To Use</h3>
              <p>
                With a minimalist design, Indel enables faster browsing and compression. CDN ensures global access with better performance.
              </p>
            </div>
          </li>

          {/* Feature 3 */}
          <li className="flex items-start gap-4">
            <span className="text-[#5a50a3] mt-1">
              <FiFeather className="w-10 h-10" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#5a50a3] mb-1">Light Weight</h3>
              <p>
                Indel is structured, easy to navigate, quick to load, and built for seamless browsing with error handling.
              </p>
            </div>
          </li>
        </ul>
      </main>
    </section>
  )
}

export default FeaturesSection
