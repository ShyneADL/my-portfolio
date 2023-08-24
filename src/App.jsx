import React from 'react'
import './App.css'
import { Navbar, Hero, About, Skills, Projects, Footer } from './containers'


function App() {
  return (
    <div className="w-full overflow-hidden">
        <div className="xl:mx-[180px] md:mx-[60px] md:my-6 lg:my-12 mx-[16px] py-[36px]">
            <Navbar />
      </div>
        <div className='xl:mx-[180px] md:mx-[60px] mx-[16px] py-[16px] md:py-[36px]'>
          <Hero />
        </div>
        <div className='bg-dullPry py-[16px] md:py-[36px]'>
          <About />
        </div>

        <Skills />

        <div className='bg-dullPry py-[16px] md:py-[36px]'>

          <Projects />
        </div>
        <div className='py-[16px] md:py-[36px] mx-[16px] xl:mx-[180px] md:mx-[60px]'>
          <Footer />
        </div>
      
    </div>
  )
}

export default App
