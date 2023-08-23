import React from 'react';
import { linkedin,github, twitter, me } from '../assets';

const Hero = () => {
  return (
    <div>
        <div className='flex flex-1'>
          <div className='absolute'>
            <p className='xl:text-[24px] text-white'>Hello, I'm</p>
            <h1 className='font-montAlt text-secondary font-bold xl:text-[82px] lg:text-[64px] md:text-[32px] hero_text z-10 lg:leading-[74px] md:leading-[36px]'>Ifeanyi<br/> Aladi.{" "}
            </h1>
            <div className='bg-secondary lg:h-[8px] md:h-[6px] w-[60px] mt-3'></div>
          </div>
            <div className='flex flex-1 w-[50px] mt-[150px] items-center z-10'>
              <a href='https://github.com/ShyneADL' target='_blank' className=' mr-[20px]'><img src={github} className='w-[25px] mr-[20px]' alt="github" /></a>
              <a href='https://twitter.com/ShyneADL?t=51t37TEiqPP30rAyqvQx8Q&s=09' target='_blank' className=' mr-[20px]'><img src={twitter} className='w-[25px] mr-[20px]' alt="twitter" /></a>
              <a href='https://www.linkedin.com/in/ifeanyi-aladi-61675b1ba' target='_blank' className=' mr-[20px]'><img src={linkedin} className='w-[25px] mr-[20px]' alt="linkedin" /></a>
            </div>

          <div className='xl:ml-[200px] lg:ml-[120px] xl:mr-[50px] max-w-[600px]'>
            <img src={me} className='xl:w-[100%] lg:w-[80%] hero_img'/>
          </div>

          <div className='xl:w-[450px] lg:w-[390px] md:w-[1200px] lg:ml-0 md:ml-4 justify-center intro'>
              <h3 className='text-white opacity-80 xl:text-[18px] xs:text-[16px]' >- Introduction</h3>
              <h2 className='text-white font-medium xl:text-[40px] md:text-[32px] mb-6 w-[100%] hero_head'>Frontend Developer<br/> Based in Lagos, Nigeria.</h2>
              <p className='text-dullWhite xl:w-[450px] lg:w-[390px] mob_hidden'>Welcome to my portfolio website! I'm Aladi Ifeanyi, a passionate and dedicated frontend developer currently based in Lagos. With a keen eye for design and a love for crafting engaging user experiences, I specialize in turning creative ideas into functional and visually appealing digital solutions.</p>
          </div>
        </div>
    </div>
  )
}

export default Hero;