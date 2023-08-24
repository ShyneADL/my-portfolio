import React from 'react';
import { linkedin,github, twitter, me } from '../assets';

const Hero = () => {
  return (
    <div>
        <div className='flex flex-1 md:flex-row flex-col justify-between md:items-start items-center relative'>
          <div className='md:absolute'>
            <p className='xl:text-[24px] text-white md:text-left text-center'>Hello, I'm</p>
            <h1 className='font-montAlt text-secondary font-bold xl:text-[82px] lg:text-[64px] md:text-[32px] text-[30px] z-10 lg:leading-[74px] md:leading-[36px]'>Ifeanyi<br className='md:flex hidden'/> Aladi.{" "}
            </h1>
            <div className='bg-secondary lg:h-[8px] md:h-[6px] w-[60px] mt-3]'></div>
            <div className='md:flex-1 w-[200px] lg:mt-[150px] md:mt-[100px] md:flex xl:flex-row md:flex-col md:items-start items-center hidden'>
              <a href='https://github.com/ShyneADL' target='_blank' className='xl:mr-[25px]'><img src={github} className='w-[30px]' alt="github" /></a>
              <a href='https://www.linkedin.com/in/ifeanyi-aladi-61675b1ba' target='_blank' className=' xl:mr-[25px] md:mt-4 xl:mt-0'><img src={linkedin} className='w-[30px]' alt="linkedin" /></a>
              <a href='https://twitter.com/ShyneADL?t=51t37TEiqPP30rAyqvQx8Q&s=09' target='_blank' className='xl:mr-[25px] md:mt-4 xl:mt-0'><img src={twitter} className='w-[30px]' alt="twitter" /></a>
            </div>
          </div>


          <div className='xl:ml-[200px] lg:ml-[120px] md:ml-[70px] xl:mr-[50px] max-w-[600px]'>
            <img src={me} className='xl:w-[100%] lg:w-[80%] md:flex hidden'/>
          </div>

          <div className='xl:w-[450px] lg:w-[390px] md:w-[1200px] lg:ml-0 md:ml-4 md:static '>
              <h3 className='text-white opacity-80 xl:text-[18px] xs:text-[16px] md:text-left text-center md:mt-0 mt-4' >- Introduction</h3>
              <h2 className='text-white font-medium xl:text-[40px] md:text-[32px] text-[20px] w-[100%] md:text-left text-center'>Frontend Developer</h2>
              <p className='text-dullWhite xl:w-[450px] lg:w-[390px] md:flex md:text-left text-center mt-6'>Welcome to my portfolio website! I'm Aladi Ifeanyi, a passionate and dedicated frontend developer currently based in Lagos. With a keen eye for design and a love for crafting engaging user experiences, I specialize in turning creative ideas into functional and visually appealing digital solutions.</p>
          </div>
        </div>

        <div className='flex justify-center align-center w-full mt-[30px]'>
          <div className='md:hidden flex flex-1 w-[25px] items-center justify-center'>
              <a href='https://github.com/ShyneADL' target='_blank'><img src={github} className='w-[25px] mr-[20px]' alt="github" /></a>
              <a href='https://www.linkedin.com/in/ifeanyi-aladi-61675b1ba' target='_blank'><img src={linkedin} className='w-[25px] mr-[20px]' alt="linkedin" /></a>
              <a href='https://twitter.com/ShyneADL?t=51t37TEiqPP30rAyqvQx8Q&s=09' target='_blank'><img src={twitter} className='w-[25px] mr-[20px]' alt="twitter" /></a>
          </div>
        </div>
    </div>
  )
}

export default Hero;