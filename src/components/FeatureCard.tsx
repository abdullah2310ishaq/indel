import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-start space-x-4 mb-6 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex-shrink-0 mt-1 bg-[#5a50a3]/10 p-2 rounded-full">{icon}</div>
      <div>
        <h3 className="text-base font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
