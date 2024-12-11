import React from 'react'

export const PrimaryButton = ({name, onclick, loading, type}) => {
  return (
    <button className='bg-primary rounded-full px-10 py-3 text-white font-bold 'onClick={onclick} type={type}>
        {name}</button>
  )
}
export const TransparentButton = ({name, onclick, loading, type}) => {
  return (
    <button className='border rounded-3xl px-10 py-3 pl-14 text-black font-bold 'onClick={onclick} type={type}>
        {name}</button>
  )
}
