import './App.css'
import FeaturedSection from './components/home/FeaturedSection'
import Footer from './components/home/Footer'
import HeroSection from './components/home/HeroSection'
import Home from './components/home/home'
import JobBanner from './components/home/JobBanner'
import JobCategory from './components/home/JobCategory'
import LatestSection from './components/home/LatestSection'
import MarqueSection from './components/home/MarqueSection'
import TopNav from './components/home/TopNav'

function App() {

  return (
    <div>
      <div className='relative max-w-360 mx-8 lg:mx-32 md:mx-20 overflow-hidden'>

        <TopNav></TopNav>
        <HeroSection></HeroSection>
        <MarqueSection></MarqueSection>
        <JobCategory></JobCategory>
        <JobBanner></JobBanner>
        <FeaturedSection></FeaturedSection>
    
            {/* <Home></Home>
            <div className="absolute 
            w-[328.32379477183156px] 
            h-[796.2017901514465px] 
            border-[4px] 
            border-[#0606f1] 
            opacity-70 
            rotate-[64deg] 
            top-[21.56px] 
            right-[146.3px]" />

            <div className="absolute 
            w-[192.20022774311641px] 
            h-[416.4660991159406px] 
            border-[4px] 
            border-[#e70707] 
            opacity-60 
            rotate-[64deg] 
            top-[51.75px] 
            right-[106.43px]" />

            <div className="absolute 
            w-[319.77695020433987px] 
            h-[778.5056229831226px] 
            border-[4px] 
            border-[#e9c10d] 
            opacity-70 
            rotate-[64deg] 
            top-[240px] 
            right-[17.95px]" />
            
            <div className="absolute 
            w-[283.38406654132706px] 
            h-[716.2515940431733px] 
            border-[4px] 
            border-[#00ff22] 
            opacity-70 
            rotate-[64deg] 
            top-[617px] 
            left-[261px]" /> */}

      </div>
      <div className='relative overflow-hidden bg-[#F8F8FD]'>
          <LatestSection></LatestSection>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
    
  )
}

export default App
