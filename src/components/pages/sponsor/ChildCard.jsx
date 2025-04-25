import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { IoHome } from 'react-icons/io5'
import { MdFamilyRestroom } from 'react-icons/md'
import {Link} from "react-router-dom"

const ChildCard = ({image, name, sponsor}) => {
  return (
    <div>
      <div className="card relative">
        <div className="frame">
          <img src={image} alt={name} className="mx-auto w-[265px] h-[360px]" />
          <div
          className="info flex justify-between items-center mx-auto p-2 w-[265px] bg-[#3A3B364D] absolute left-[65px] lg:left-0 
                              top-[302px] h-[58px] transition-all duration-300 ease-in-out">
      
            <div className="name-info">
              <p className="text-white">{name}</p>               
              <Link to="/system">
                <p className="text-sm text-[#FC9827]">View Info</p>
              </Link>
            </div>
            <button className="flex gap-2 items-center justify-center px-4 py-2 bg-[#3E9BD0] hover:bg-[#2a82b2] text-white text-xs rounded-md w-[100.88px] h-[34px]">
                                Sponsor <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="relative w-[265px] h-[40px] mx-auto text-white bg-[#FFBD66] text-[16px] font-semibold overflow-hidden">
          <div className="absolute top-0 left-0 w-[135px] h-full bg-[#EB8500] z-10 transition-all duration-300"></div>
          <span className="relative z-20 flex items-center justify-start h-full px-[10px]">
            {sponsor}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ChildCard
