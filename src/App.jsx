import React from 'react'
import './App.css'
import { Navbar, Hero, About, Skills, Projects, Footer } from './containers'


function App() {
  return (
    <div className="bg__main w-full overflow-hidden">
        <div className={`md:mx-[220px]`}>
            <Navbar />
      </div>
        <div className='mx-[220px]'>
          <Hero />
        </div>
        <div className='bg-dullPry'>
          <About />
        </div>

        <Skills />

        <div className='bg-dullPry py-16'>

          <Projects />
        </div>
        <div className='py-16'>
          <Footer />
        </div>
      
    </div>
  )
}

export default App
