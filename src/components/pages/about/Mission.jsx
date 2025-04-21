import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'

const Mission = () => {
  return (
    <div>
      <section className="mission pb-[140px] lg:pb-[70px]">
        <div className="container max-w-[410px] px-[8px] py-14 mx-auto lg:max-w-[1300px] lg:mx-auto ">

            <div className="mission-wrap flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                <img src="/src/components/images/about-mission.png" className='h-[398px] lg:w-[510px] lg:h-[510px]' alt="" />

                <div className="description lg:w-[500px]">
                    <Headings label="MISSION"/>
                    <Header label="Transforming Dreams into Reality"/>
                    <p className='text-[14px] text-[#3a3b36] mt-[16px] leading-7 text-balance '>FTC mission is to make a difference in the lives of street children by rescuing, protecting, and caring for those that are abandoned, abused, or dangerously neglected (AADN). We are making a difference in the lives of children in need through child care programs and centers that provide full time protection and care, academic and spiritual development, and dedicated staff committed to the long term welfare and development of AADN children. We are committed to doing all that is necessary to guide them into adulthood as young men and women who may lead successful adult lives.</p>
                </div>

            </div>

        </div>
      </section>
    </div>
  )
}

export default Mission
