import React from 'react'
import { Navbar, Hero, About, Skills, Projects, Footer } from '../containers';
import { useRef } from "react";

const Home = () => {
    const ref = useRef(null);
  return (
    
    <div ref={ref} className="w-full scroll_snap">
      <section className='xl:mx-[180px] md:mx-[60px] md:my-6 lg:my-16 mx-[16px] my-[54px]'>
              <Navbar />
        </section>

          <section className='xl:mx-[180px] md:mx-[60px] mx-[16px] py-[30px] md:py-[36px] md:my-[110px] my-[60px]'>
            <Hero />
          </section>
          
          <section className='bg-dullPry py-[30px] md:py-[36px] my-[24px]'>
            <About />
          </section>

          <section className='xl:mx-[180px] md:mx-[60px] mx-[16px] md:my-[40px] my-[24px] md:py-[36px] py-[30px]'>
            <Skills />
          </section>

          <section className='bg-dullPry py-[30px] md:py-[36px] my-[24px]'>

            <Projects />
          </section>

          <section className='py-[30px] md:py-[36px] mx-[30px] xl:mx-[180px] md:mx-[60px] my-[24px]'>
            <Footer />
          </section>
        
      </div>
  )
}

export default Home
