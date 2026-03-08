import { useState } from 'react'
import lunar from '../../assets/lunar.png'
import { TextAlignStart } from 'lucide-react'

const TopNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <div className="relative flex justify-between items-center h-19.5 ">
            <div className='flex items-center gap-12'>
                <div className='flex'>
                    <div className='w-10 h-8'>
                        <img src={lunar} alt="" />
                    </div>
                    <div className='text-2xl text-[#25324B] font-red-hat-display font-bold'>QuickHire</div>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex font-epilogue text-[16px] font-medium text-[#515B6F] gap-4'>
                        <li>Find Jobs</li>
                        <li>Browse Companies</li>
                    </ul>
                </div>
            </div>
            <div className='hidden md:flex gap-4 h-12.5'>
                <button className='font-epilogue text-[#4640DE] font-bold py-3 pl-12 pr-9'>Login</button>
                <div className='border-l border-[#D6DDEB] h-12'></div>
                <button className='bg-[#4640DE] text-white font-epilogue font-bold py-3 px-12'>Sign Up</button>
            </div>

            <div className="md:hidden w-8 h-8 border border-[#D6DDEB] flex justify-center items-center rounded-full">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-[#25324B] text-2xl font-bold">
                    <TextAlignStart size={16}/>
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-2 gap-2 md:hidden z-50 ">
                <ul className="flex flex-col gap-4 font-epilogue text-[14px] font-medium text-[#515B6F] w-full">
                    <li className="cursor-pointer hover:text-[#4640DE] transition">Find Jobs</li>
                    <li className="cursor-pointer hover:text-[#4640DE] transition">Browse Companies</li>
                </ul>

                <button
                    onClick={() => alert('Login clicked!')}
                    className="font-epilogue text-[#4640DE] text-[14px] font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition w-full text-left"
                >
                    Login
                </button>
                </div>
            )}
        </div>
    )
}
export default TopNav