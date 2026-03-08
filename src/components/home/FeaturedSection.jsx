import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const FeaturedSection = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("/FeaturedJobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, [])
    return(
        <div>
            <div className="mt-20 mb-8 flex justify-between items-end gap-8">
                <h1 className="text-[#25324B] font-clashDisplay text-[32px] md:text-4xl text-5xl font-semibold">Featured <span className="text-[#26A4FF]">jobs</span></h1>
                <div className="text-[#4640DE] text-sm md:text-lg font-semibold font-epilogue hidden md:flex gap-2.5 cursor-pointer ">
                    <p>Show all jobs</p> <ArrowRight></ArrowRight>
                </div>
            </div>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5 md:mb-20 overflow-x-auto md:overflow-visible pb-4">

                {jobs.slice(0,8).map((job, index) => (
                    <div className="min-w-70 md:min-w-0" key={index}>
                        <JobCard {...job} />
                    </div>
                
                ))}
            </div>
            <div className="text-[#4640DE] text-sm md:text-lg font-semibold font-epilogue flex gap-2.5 cursor-pointer mb-15 md:hidden  ">
                    <p>Show all jobs</p> <ArrowRight></ArrowRight>
            </div>

        </div>
    )
}
export default FeaturedSection