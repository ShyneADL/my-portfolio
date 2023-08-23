import React from 'react'

const ProjectTab = ({img, alt, heading, text, demo, ghub}) => {
  return (
    <div className='pb-6 w-[520px] flex flex-col flex-1 rounded-lg items-center bg-black'>
              <img src={img} alt={alt} className='w-full rounded-t-lg' />
              <h3 className='text-white text-[22px] font-medium text-center mt-6'>{heading}</h3>
              <div className='bg-secondary h-[4px] w-[60px] mt-3'></div>
              <p className='text-dullWhite text-[18px] font-normal text-center w-[450px] mt-6'>{text}</p>
              <div className='flex flex-1 justify-between w-[200px] mt-12'>
                <a href={demo} target='_blank'><button  className='rounded-3xl py-1 px-2 w-fit text-white bg-secBtn'>View</button></a>
                <a href={ghub} target='_blank'><button className='rounded-3xl py-1 px-2 w-fit text-white bg-secBtn'>Code</button></a>
              </div>
    </div>
  )
}

export default ProjectTab;