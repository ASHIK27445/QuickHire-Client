const LatestCard = ({ logo, title, company, location, type, hasDesign }) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-4 px-4 md:px-6 lg:px-10 py-4 md:py-6 lg:py-10 bg-white cursor-pointer">

      <div className="shrink-0">
        <img src={logo} alt={company} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
      </div>

      <div className="flex-1 ml-0 md:ml-4">
        <h3 className="text-xl font-epilogue font-semibold text-[#25324B]">{title}</h3>
        <p className="text-[16px] font-epilogue text-[#515B6F] mt-1">
          {company} · {location}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-epilogue px-2 py-1 rounded-full bg-[#56CDAD1A] text-[#56CDAD]">
            Full-Time
          </span>

          {type === "marketing" && (
            <span className="text-sm font-epilogue px-2 py-1 rounded-full text-[#FFB836] border border-[#FFB836]">
              Marketing
            </span>
          )}

          {type === "technology" && (
            <span className="text-sm font-epilogue px-2 py-1 rounded-full border border-[#FF6550] text-[#FF6550]">
              Technology
            </span>
          )}

          {hasDesign && (
            <span className="text-sm font-epilogue px-2 py-1 rounded-full border border-[#4640DE] text-[#4640DE]">
              Design
            </span>
          )}
        </div>
      </div>

    </div>
  )
}

export default LatestCard;