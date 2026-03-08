import './App.css'
import HeroSection from './components/home/HeroSection'
import MarqueSection from './components/home/MarqueSection'
import TopNav from './components/home/TopNav'

function App() {

  return (
    <div>
      <div className='relative max-w-360 mx-8 lg:mx-32 md:mx-20 overflow-hidden'>

        <TopNav></TopNav>
        <HeroSection></HeroSection>
        <MarqueSection></MarqueSection>
        </div>
    </div>
    
  )
}

export default App
