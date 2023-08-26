import React from 'react'

const ProjectTab = ({img, alt, heading, text, demo, ghub}) => {
  const style = {
    justifyContent: ''
  }
  if (ghub) {
    style.justifyContent = 'space-between'
  }
  else {
    style.justifyContent = 'center'
  }
  return (
      <div className='pb-6 flex flex-col flex-1 rounded-lg items-center bg-black'>
                <img src={img} alt={alt} className='w-full rounded-t-lg' />
                <h3 className='text-white text-[22px] font-medium text-center mt-6'>{heading}</h3>
                <div className='bg-secondary h-[4px] w-[60px] mt-3'></div>
                <p className='text-dullWhite text-[18px] font-normal text-center w-[290px] mt-6'>{text}</p>

                <div className='flex flex-1 w-[200px] mt-12' style={style}>
                  <a href={demo} target='_blank'><button  className='rounded-3xl py-1 px-2 w-fit text-white bg-secBtn'>Demo</button></a>
                  {ghub && <a href={ghub} target='_blank'><button className='rounded-3xl py-1 px-2 w-fit text-white bg-secBtn'>Code</button></a>}
                </div>
      </div>
  )
}

export default ProjectTab;