import SectionTitle from "./SectionTile"
import FeatureCard from "./FeatureCard"

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Indel is based on state of the art Features" className="mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Globe Logo (Main Section Image) - Reduced size */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs h-auto rounded-lg overflow-hidden shadow-md transform transition-all hover:scale-[1.02] duration-300">
              <img
                src="pic7.png" // Replace with your actual globe image
                alt="Globe Logo"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Features List */}
          <div>
            <FeatureCard
              icon={<img src="pic8.png" alt="Lightning Fast Logo" className="w-6 h-6" />}
              title="Lightning Fast"
              description="Indel is a lightning fast application with a very super-fast web hosting and CDN (content delivery network). The RTT's (round trip time) is very less along with the use of sprites and DNS (domain name system) pre-fetching."
            />

            <FeatureCard
              icon={<img src="pic9.png" alt="Easy To Use Logo" className="w-6 h-6" />}
              title="Easy To Use"
              description="Indel is a light weighted application with a minimalistic design that enables you to browse faster. Caching and compression is enabled. Indel has its own CDN which ensures users across the globe have a fast experience."
            />

            <FeatureCard
              icon={<img src="pic10.png" alt="Light Weight Logo" className="w-6 h-6" />}
              title="Light Weight"
              description="Indel has a well-planned information architecture, well-formed content that is easy to scan, loading very fast, consistent browsing, and effective navigation. Indel also has good error handling."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
