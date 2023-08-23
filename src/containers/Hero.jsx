import React from 'react';
import { linkedin,github, twitter, me } from '../assets';

const Hero = () => {
  return (
    <div className={`py-16 w-full`}>
        <div className='flex flex-1'>
          <div className='absolute'>
            <p className='text-[24px] text-white'>Hello, I'm</p>
            <h1 className='font-montAlt text-secondary font-bold text-[82px] xs:text-[16px] z-10 leading-[74px]'>Ifeanyi<br/> Aladi.{" "}
            </h1>
            <div className='bg-secondary h-[8px] w-[60px] mt-3'></div>
            <div className='flex flex-1 w-[50px] mt-[150px] items-center'>
              <a href='https://github.com/ShyneADL' target='_blank' className=' mr-[20px]'><img src={github} className='w-[25px] mr-[20px]' alt="github" /></a>
              <a href='https://twitter.com/ShyneADL?t=51t37TEiqPP30rAyqvQx8Q&s=09' target='_blank' className=' mr-[20px]'><img src={twitter} className='w-[25px] mr-[20px]' alt="twitter" /></a>
              <a href='https://www.linkedin.com/in/ifeanyi-aladi-61675b1ba' target='_blank' className=' mr-[20px]'><img src={linkedin} className='w-[25px] mr-[20px]' alt="linkedin" /></a>
            </div>
          </div>

          <div className='ml-[200px] md:mr-[50px] w-[900px]'>
            <img src={me} className='w-[450px]'/>
          </div>

          <div className='w-[450px] justify-end'>
              <h3 className='text-white opacity-80 text-[18px]' >- Introduction</h3>
              <h2 className='text-white font-medium text-[40px] mb-6'>Frontend Developer<br/> Based in Lagos, Nigeria.</h2>
              <p className='text-dullWhite w-[450px]'>Welcome to my portfolio website! I'm Aladi Ifeanyi, a passionate and dedicated frontend developer currently based in Lagos. With a keen eye for design and a love for crafting engaging user experiences, I specialize in turning creative ideas into functional and visually appealing digital solutions.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero;