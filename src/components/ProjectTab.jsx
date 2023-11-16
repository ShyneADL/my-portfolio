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
                <div class="block wow rotateInDownLeft"   data-wow-duration="1s" data-wow-delay="0.15s">               
                  <img src={img} alt={alt} className='w-full rounded-t-lg' />
                  <div class="works-caption">{text}</div>
                </div>
                <h3 className='text-white text-[22px] font-medium text-center mt-6'>{heading}</h3>
                <div className='bg-secondary h-[4px] w-[60px] mt-3'></div>
                <div className='flex flex-1 w-[200px] mt-6' style={style}>
                  <a href={demo} target='_blank'><button  className='rounded-3xl py-1 px-2 w-fit text-white bg-secBtn'>Demo</button></a>
                  {ghub && <a href={ghub} target='_blank'><button className='rounded-3xl py-1 px-2 w-fit text-white bg-secBtn'>Code</button></a>}
                </div>
      </div>
  )
}

export default ProjectTab;