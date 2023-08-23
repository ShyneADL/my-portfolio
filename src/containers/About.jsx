import React from 'react'
import { me } from '../assets'

const About = () => {
  return (
    <div className='mx-[220px] py-16'>
      <div className='absolute'>
        <h2 className="text-center text-white text-[44px] font-bold">About Me</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-0'></div>
      </div>
      <div className='flex flex-1 items-center w-full'>
        <img src={me} alt='me' className='w-[300px] ml-20 mt-10 mr-[80px]'/>
        <p className='w-[550px] text-dullWhite leading-[28px]'>Hey there! 👋 I'm Aladi Ifeanyi, a frontend developer in Lagos with a passion for creating engaging websites that blend design and functionality. My journey in web development began with a fascination for technology, and I've since honed my skills in crafting modern and user-friendly interfaces.

When I'm not coding, you'll find me immersed in a game of chess or exploring virtual worlds through video games. I also love unwinding with evening walks and maintaining an active lifestyle through regular workouts.

<br/><br/>I'm a firm believer in open-source collaboration and the power of sharing knowledge. Let's connect and work together to make the web a better place!

Get in touch and let's chat about all things web and beyond.

</p>

      </div>
      
      </div>
  )
}

export default About;