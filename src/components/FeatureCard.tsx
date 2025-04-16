
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-start space-x-4 mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-base font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
