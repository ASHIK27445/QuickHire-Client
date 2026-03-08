import { Search, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-2 md:gap-6 items-center max-h-175 px-0 md:px-6 lg:px-0 py-10">

      <div className="md:col-span-6 relative">
        <h1 className="font-clashDisplay font-semibold text-[#25324B] text-4xl md:text-5xl lg:text-7xl leading-tight mb-6">
          Discover <br />
          more than <br />
          <span className="text-[#26A4FF]">5000+ Jobs</span>
        </h1>
        <p className="text-[#515B6F] text-base md:text-lg font-epilogue mb-2 md:mb-8 max-w-xl">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>

        <div className="bg-white shadow-md rounded-md p-3 flex flex-col md:flex-row md:items-center gap-3 w-full lg:w-213">

          <div className="flex items-center flex-1 border border-gray-200 rounded-md px-3 py-2">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 outline-none text-sm"
            />
          </div>

          <div className="flex items-center flex-1 border border-gray-200 rounded-md px-3 py-2">
            <MapPin className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Florence, Italy"
              className="flex-1 outline-none text-sm"
            />
          </div>

          <button className="bg-[#4640DE] text-white px-6 py-2 rounded-md text-sm font-medium hover:opacity-90 cursor-pointer">
            Search my job
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </div>

      <div className="hidden md:flex md:col-span-4 justify-end">
        <img
          src="/hero.png"
          alt="hero"
          className="max-h-175 object-contain"
        />
      </div>

    </div>
  )
}

export default HeroSection