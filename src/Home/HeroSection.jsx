import React from 'react'
import work from '../images/work.png'
import { PrimaryButton, TransparentButton } from '../Components/Button'
import play from '../images/play.png'

const HeroSection = () => {
  return (
    <div>
      <div>
        <div>
            <h1 className='flex text-secondary space-x-5 font-bold text-sm py-10 pl-20 '>Explore the world! <span className='pl-5'><img src={work} alt="work" /></span></h1>
        </div>
        <div>
            <h1 className='font-bold text-lg leading-none'>
                Travel <span className='text-secondary'> top <br /> destination</span> <br /> of the world
            </h1>
            <h3 className='text-grey text-sm font-normal text-opacity-75'>We always make our customer happy by <br /> providing <br />as many choices as possible </h3>
        </div>
        <div className=' flex space-x-5'>
          <PrimaryButton name={'Get Started'}/>
          <div>
            <div className='absolute bottom-[70px] pl-7 '>
            <img src={play} alt="" />
            </div>
            <div className='relative'>
         <TransparentButton name={'Watch Demo'} />
         </div>
         </div>
        </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
    </div>
  )
}

export default HeroSection