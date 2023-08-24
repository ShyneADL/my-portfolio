import React from 'react'
import { me } from '../assets'

const About = () => {
  return (
    <div className='xl:mx-[180px] md:mx-[60px] mx-[16px]'>
      <div className='absolute section_heading'>
        <h2 className="text-center text-white text-[44px] font-bold">About Me</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-0'></div>
      </div>

      <div className='flex flex-1 items-center w-full about_content'>
        <img src={me} alt='me' className='w-[300px] lg:ml-20 lg:mt-10 md:mt-24 lg:mr-[80px] md:mr-[30px]'/>
        <p className='lg:w-[550px] md:w-[670px] text-dullWhite leading-[28px] md:mt-20 about_text'>Hey there! 👋 I'm Aladi Ifeanyi, a <b>frontend developer</b> in Lagos with a passion for creating engaging websites that blend <b>design and functionality</b>. 
        My journey in web development began with a fascination for technology, and I've since honed my skills in crafting modern and <b>user-friendly interfaces</b>.I'm a firm believer in open-source collaboration and the power of sharing <b>knowledge</b>.
        Let's <b>connect</b> and work together to make the web a better place! <b>Get in touch</b> and let's chat about all things web and beyond.

</p>

      </div>
      
      </div>
  )
}

export default About;