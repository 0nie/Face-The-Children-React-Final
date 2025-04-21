import React from 'react'

const Button = ({label}) => {
  return (
    <div>
      <button className='bg-[#3e9bd0] hover:bg-sky-700 text-white text-[12px] rounded-md py-[8px] px-[16px]'>{label}</button>
    </div>
  )
}

export default Button
