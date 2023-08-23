import React from 'react'
import './App.css'
import { Navbar, Hero, About, Skills, Projects, Footer } from './containers'


function App() {
  return (
    <div className="w-full overflow-hidden">
        <div className="xl:mx-[180px] md:mx-[60px] md:my-6 lg:my-12 section_margin section_pad">
            <Navbar />
      </div>
        <div className='xl:mx-[180px] md:mx-[60px] py-16 section_margin section_pad'>
          <Hero />
        </div>
        <div className='bg-dullPry section_pad py-16'>
          <About />
        </div>

        <Skills />

        <div className='bg-dullPry py-16 section_pad'>

          <Projects />
        </div>
        <div className='py-16 section_pad xl:mx-[180px] md:mx-[60px]'>
          <Footer />
        </div>
      
    </div>
  )
}

export default App
