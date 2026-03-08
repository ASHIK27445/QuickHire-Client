import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react";
import LatestCard from "./LatestCard";

const LatestSection = () =>{
    const [latestJobs, setLatestJobs] = useState([])
    
    useEffect(() => {
        fetch("/FeaturedJobs.json")
        .then((res) => res.json())
        .then((data) => setLatestJobs(data));
    }, [])
    return(
        <div className="max-w-360 mx-auto p-8 md:p-0">
            <div className="mt-20 px-1 mb-8 flex justify-between items-end gap-8">
                <h1 className="text-[#25324B] font-clashDisplay text-[32px] md:text-4xl text-5xl font-semibold">Latest <span className="text-[#26A4FF]">jobs open</span></h1>
                <div className="text-[#4640DE] text-sm md:text-lg font-semibold font-epilogue flex gap-2.5 cursor-pointer ">
                    <p>Show all jobs</p> <ArrowRight></ArrowRight>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-20">

                {latestJobs.slice(8,16).map((job, index) => (
                <LatestCard key={index} {...job} />
                ))}

            </div>
        </div>
    )
}
export default LatestSection