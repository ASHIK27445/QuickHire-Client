const JobCard = ({ logo, title, company, location, description, type, hasDesign }) => {
  return (
    <div className="p-6 border border-[#D6DDEB] hover:shadow-md transition duration-300 cursor-pointer">

      <div className="flex justify-between items-start mb-4">
        <img src={logo} alt={company} className="w-12 h-12 object-contain" />

        <span className="text-[16px] border border-[#4640DE] text-[#4640DE] font-epilogue px-3 py-1">
          Full Time
        </span>
      </div>

      <h3 className="text-lg font-semibold text-[#25324B] #25324B mb-1">{title}</h3>

      <p className="text-[16px] text-[#515B6F] font-epilouge mb-3">
        {company} · {location}
      </p>

      <p className="text-[16px] font-inter text-[#7C8493] mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex gap-2">

        {type === "marketing" && (
          <span className="text-[14px] font-semibold text-[#FFB836] bg-[#EB85331A] px-3 py-1 rounded-full">
            Marketing
          </span>
        )}

        {type === "technology" && (
          <span className="text-[14px] font-semibold text-[#FF6550] bg-[#FF65501A] px-3 py-1 rounded-full">
            Technology
          </span>
        )}

        {type === "business" && (
          <span className="text-[14px] font-semibold text-[#4640DE] bg-[#4640DE1A] px-3 py-1 rounded-full">
            Business
          </span>
        )}

        {hasDesign && (
          <span className="text-[14px] font-semibold text-[#56CDAD] bg-[#56CDAD1A] px-3 py-1 rounded-full">
            Design
          </span>
        )}

      </div>

    </div>
  );
};

export default JobCard;