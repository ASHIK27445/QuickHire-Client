import React from 'react';
import { 
  Building2, 
  FileText, 
  Shield, 
  HelpCircle, 
  BookOpen,
  RefreshCw,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram
} from 'lucide-react'
import lunar from '../../assets/lunar.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#202430] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.66fr_0.66fr_1fr] gap-8 mb-8">
          <div>
            <div className='flex'>
                <div className='w-10 h-8'>
                    <img src={lunar} alt="" />
                </div>
                <h2 className="text-2xl font-bold text-white font-clashDisplay mb-2">QuickHire</h2>
            </div>
            
            <p className="text-[#D6DDEB] text-[16px] font-epilogue mt-4 mb-4">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:contents">
            <div>
              <h3 className="text-lg font-epilogue font-semibold text-white tracking-wider mb-4">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-epilogue font-semibold text-white tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Help Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#D6DDEB] font-[16px] font-epilogue flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>            
          </div>


          <div>
            <h3 className="text-lg font-epilogue font-semibold text-white tracking-wider mb-4">
              Get job notifications
            </h3>
            <p className="text-[#D6DDEB] mb-4 text-[16px]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-[#D6DDEB] focus:ring-2 focus:border-[#D6DDEB] outline-none" required/>
              </div>
              <button
                type="submit"
                className="px-8 bg-[#4640DE] text-[16px] font-bold text-white">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-500 flex gap-10 flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-[16px] text-center">
            {currentYear} © QuickHire. All rights reserved.
          </p>
          <div>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Facebook className="w-4 h-4" fill='white' />
              </a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Instagram className="w-4 h-4"/>
              </a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Github className="w-4 h-4" fill='white' />
              </a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Linkedin className="w-4 h-4"/>
              </a>
              <a href="#" className="text-white hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Twitter className="w-4 h-4" fill='white' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer