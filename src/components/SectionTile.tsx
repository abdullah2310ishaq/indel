interface SectionTitleProps {
  title: string
  className?: string
}

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-xl md:text-2xl font-bold relative inline-block pb-3">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 mt-1"></span>
      </h2>
    </div>
  )
}

export default SectionTitle
