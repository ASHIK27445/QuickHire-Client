import { ArrowRight } from "lucide-react";

const CategoryCard = ({ icon: Icon, title, jobs, active }) => {
  return (
    <div
      className='group p-5 md:p-8 border border-[#D6DDEB] transition-all duration-300 cursor-pointer hover:bg-[#4640DE] flex gap-2 justify-between items-center md:block'>
      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0">
        <Icon className="w-full h-full text-[#4640DE] group-hover:text-white" />
      </div>
      
      <div className="md:pt-6">
        <h3 className="text-[#25324B] group-hover:text-white text-xl md:text-2xl font-clashDisplay font-semibold">{title}</h3>

        <div className="flex items-center justify-between gap-2 mt-1 md:mt-2 text-[#7C8493] md:text-lg text-[16px] font-epilogue font-bold group-hover:text-white">
          <span className="font-normal">{jobs} jobs available</span>
          <ArrowRight size={24} color="#25324B"/>
        </div>
      </div>

    </div>
  )
}

export default CategoryCard