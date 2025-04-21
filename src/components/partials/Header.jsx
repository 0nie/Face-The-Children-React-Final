import React from 'react'

const Header = ({label}) => {
  return (
    <div>
      <h2 className='text-[#3e9bd0] text-[18px] lg:text-[30px] font-semibold lg:text-balance'>{label}</h2>
    </div>
  )
}

export default Header
