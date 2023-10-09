import React from 'react';
import { linkedin,github, twitter, hashnode } from '../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { saveAs } from 'file-saver';



const Hero = () => {
  const {ref, inView} = useInView({threshold: 0.2});
  const animation = useAnimation();
  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Wordpress Developer', 'UX Specialist',],
    loop: {},
    deleteSpeed: 1.5,
  });

  //Have the effect run once on page load
  useEffect(() => {
    if(inView) {
      animation.start({
        x:0,
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
        x:0,
        delay: 1,
        transition: {
          type: 'tween',
          duration: 1,
        }
      });
    }
    else {
      animation.start({x:'100vw'})
    }
    console.log("Use effect hook, inview", inView)
  },[]);

  const handleDownload = () => {
    // Specify the path to your PDF file in the assets folder
    const pdfPath = "src/assets/Ifeanyi's Resume.pdf";

    // Use fetch to get the PDF file
    fetch(pdfPath)
      .then((response) => response.blob())
      .then((blob) => {
        // Use the saveAs function to trigger the download
        saveAs(blob, "Ifeanyi's Resume.pdf");
      })
      .catch((error) => {
        console.error('Error downloading PDF:', error);
      });
  };

  return (
    <div ref={ref} id='home'>
        <motion.div 
        animate={animation}
        
        className='flex flex-1 md:flex-row flex-col justify-between md:items-start items-center z-0 md:w-full'>
          <div className='md:min-w-[250px]'>
            <p className='xl:text-[24px] text-white md:text-left text-center'>Hello, I'm</p>
            <h1 className='font-montAlt text-secondary font-bold md:text-left text-center xl:text-[82px] lg:text-[64px] md:text-[44px] text-[30px] z-10 lg:leading-[90px] md:leading-[46px]'>Ifeanyi<br className='md:flex hidden'/> Aladi.{" "}
            </h1>
            <div className='bg-secondary lg:h-[8px] md:h-[6px] w-[60px] mt-2'></div>
            <div className='md:flex md:flex-1 w-[200px] lg:mt-[50px] md:mt-[40px] items-center hidden'>
              <a href='https://github.com/ShyneADL' target='_blank' className='md:mr-[25px]'><img src={github} className='w-[25px]' alt="github" /></a>
              <a href='https://www.linkedin.com/in/ifeanyi-aladi-61675b1ba' target='_blank' className=' md:mr-[25px]'><img src={linkedin} className='w-[25px]' alt="linkedin" /></a>
              <a href='https://ifeanyi-aladi.hashnode.dev/' target='_blank' className=' md:mr-[25px]'><img src={hashnode} className='w-[25px]' alt="hashnode" /></a>
              <a href='https://twitter.com/ShyneADL?t=51t37TEiqPP30rAyqvQx8Q&s=09' target='_blank' className='md:mr-[25px]'><img src={twitter} className='w-[25px]' alt="twitter" /></a>
            </div>
          </div>
          {/* Right Div */}

          <div className='xl:w-[450px] md:w-[380px] '>
              <h3 className='text-white opacity-80 xl:text-[18px] xs:text-[16px] md:text-left text-center md:mt-0 mt-4 md:w-[300px]' >- Introduction</h3>
              <h2 className='text-white font-medium xl:text-[40px] md:text-[32px] text-[20px] w-[100%] md:text-left text-center md:w-[380px]  lg:w-[460px]'>{text}<Cursor /></h2>
              <p className='text-dullWhite xl:w-[450px] lg:w-[390px] md:w-[360px] md:flex md:text-left text-center mt-6'>Welcome to my portfolio website! I'm Aladi Ifeanyi, a passionate and dedicated frontend developer currently based in Lagos. With a keen eye for design and a love for crafting engaging user experiences, I specialize in turning creative ideas into functional and visually appealing digital solutions.</p>
              <button className='hidden md:flex bg-secondary py-2 px-4 border-none outline-none rounded mt-4 text-white font-[500] text-[18px]' onClick={handleDownload}>Download Resume</button>
          </div>
              <button className='flex md:hidden bg-secondary py-2 px-4 border-none outline-none rounded mt-4 text-white font-[500] text-[18px]' onClick={handleDownload}>Download Resume</button>
        </ motion.div>


        {/* Mobile Links View */}

        <div className='flex justify-center align-center w-full mt-[30px]'>
          <div className='md:hidden flex flex-1 w-[25px] items-center justify-center'>
              <a href='https://github.com/ShyneADL' target='_blank'><img src={github} className='w-[25px] mr-[20px]' alt="github" /></a>
              <a href='https://www.linkedin.com/in/ifeanyi-aladi-61675b1ba' target='_blank'><img src={linkedin} className='w-[25px] mr-[20px]' alt="linkedin" /></a>
              <a href='https://ifeanyi-aladi.hashnode.dev/' target='_blank'><img src={hashnode} className='w-[25px] mr-[20px]' alt="hashnode" /></a>
              <a href='https://twitter.com/ShyneADL?t=51t37TEiqPP30rAyqvQx8Q&s=09' target='_blank'><img src={twitter} className='w-[25px]' alt="twitter" /></a>
          </div>
        </div>
    </div>
  )
}

export default Hero;