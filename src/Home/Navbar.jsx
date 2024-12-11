import React from 'react'
import logo from '../images/logo.png'
import { PrimaryButton } from '../Components/Button'
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className='flex md:space-x-64 space-x-40 md:pl-20 px-5 py-10'>
      <div>
        <img src={logo} alt="" className=' ' /></div>
        <div  className='md:flex md:space-x-60 hidden '>
        <div>
          <ul className='flex space-x-10 pt-3'>
            <li className='text-black font-bold text-sm'>Home</li>
             <li className='text-grey text-sm text-opacity-75' >Discover</li>
              <li className='text-grey text-sm'>Special deals</li>
               <li className='text-grey text-sm'>Contacts</li>
          </ul>
        </div>
        <div className='flex space-x-3'>
           <h1 className='pt-2'>Log In</h1>
           <PrimaryButton name={'Sign Up'} type={'submit'} />
        </div>
        </div>
        <div className='bg-primary md:hidden flex text-white rounded-xl p-1'>
        <HiMenu className=' w-[45px] h-[45px]' />
        </div>
    </div>
  )
}

export default Navbar