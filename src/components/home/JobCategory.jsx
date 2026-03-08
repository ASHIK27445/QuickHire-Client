import { ArrowRight,  PencilRuler,BarChart3, Megaphone,
  Wallet, Monitor, Code2, Briefcase, Users} from "lucide-react"
import CategoryCard from "./CategoryCard"

const JobCategory = () => {
    const categories = [
    { icon: PencilRuler, title: "Design", jobs: 235 },
    { icon: BarChart3, title: "Sales", jobs: 756 },
    { icon: Megaphone, title: "Marketing", jobs: 140 },
    { icon: Wallet, title: "Finance", jobs: 325 },
    { icon: Monitor, title: "Technology", jobs: 436 },
    { icon: Code2, title: "Engineering", jobs: 542 },
    { icon: Briefcase, title: "Business", jobs: 211 },
    { icon: Users, title: "Human Resource", jobs: 346 },
    ]
    return(
        <div>
            <div className="mt-20 mb-8 flex justify-between items-end gap-8">
                <h1 className="text-[#25324B] font-clashDisplay text-[32px] md:text-4xl text-5xl font-semibold">Explore by <span className="text-[#26A4FF]">category</span></h1>
                <div className="text-[#4640DE] text-sm md:text-lg font-semibold font-epilogue hidden md:flex gap-2.5 cursor-pointer  ">
                    <p>Show all jobs</p> <ArrowRight></ArrowRight>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-4 ">
                {categories.map((cat, index) => (
                    <CategoryCard key={index} {...cat} />
                ))}
            </div>
            <div className="text-[#4640DE] text-sm md:text-lg font-semibold font-epilogue flex gap-2.5 cursor-pointer mb-15 md:hidden pt-5 ">
                    <p>Show all jobs</p> <ArrowRight></ArrowRight>
            </div>
        </div>
    )
}
export default JobCategory