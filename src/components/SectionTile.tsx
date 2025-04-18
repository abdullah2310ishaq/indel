interface SectionTitleProps {
  title: string
  className?: string
}

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-xl font-bold relative inline-block pb-3">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#5a50a3] mt-1 rounded-full"></span>
      </h2>
    </div>
  )
}

export default SectionTitle
