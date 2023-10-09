import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { myself } from '../assets'

const About = () => {
  const {ref, inView} = useInView({threshold: 0.2});
  const animation = useAnimation();

  useEffect(() => {
    if(inView) {
      animation.start({
        y:0,
        opacity: 1,
        delay: 1,
        transition: {
          type: 'tween',
          duration: 0.7,
        }
      });
    }});


  useEffect(() => {
    if(inView) {
      animation.start({
        y:0,
        opacity: 1,
        delay: 1,
        transition: {
          type: 'tween',
          duration: 1,
        }
      });
    }
    else {
      animation.start({y:'200px', opacity: 0})
    }
    console.log("Use effect hook, inview", inView)
  },[]);

  return (
    <motion.div ref={ref} animate={animation} className='xl:mx-[180px] md:mx-[60px] mx-[16px]'>
      <div className='relative flex flex-col md:items-start justify-center items-center'>
        <h2 className="text-center text-white md:text-[44px] text-[32px] font-bold leading-none">About Me</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-2'></div>
      </div>

      <div className='flex flex-1 items-center w-full md:flex-row flex-col md:justify-start justify-center'>
        <img src={myself} alt='me' className='w-[300px] lg:ml-20 md:mt-10 mt-5 lg:mr-[80px] md:mr-[30px]'/>
        <p className='lg:max-w-[550px] md:max-w-[670px] max-w-[350px] text-dullWhite leading-[28px] md:mt-[80px] mt-[20px] md:text-left text-center '>Hey there! 👋 I'm Aladi Ifeanyi, a <b>frontend developer</b> in Lagos with a passion for creating engaging websites that blend <b>design and functionality</b>. 
        My journey in web development began with a fascination for technology, and I've since honed my skills in crafting modern and <b>user-friendly interfaces</b>. I'm a firm believer in open-source collaboration and the power of sharing <b>knowledge</b>.
        Let's <b>connect</b> and work together to make the web a better place! <b>Get in touch</b> and let's chat about all things web and beyond.

</p>

      </div>
      
      </motion.div>
  )
}

export default About;