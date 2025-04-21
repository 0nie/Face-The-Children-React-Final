import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'

const Vision = () => {
  return (
    <div>
      <section className="vision">
        <div className="container max-w-[410px] px-[8px] py-14 mx-auto  lg:max-w-[1300px] lg:mx-auto">

            <div className="vision-wrapper flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:justify-between">

                <img src="/src/components/images/about-vision.png"
                className='h-[398px] lg:h-[510px] lg:w-[510px]' alt="" />

                <div className="head lg:w-[500px] lg-h-[202px]">
                    <Headings label="VISION"/>
                    <Header label="Empowering Change, Inspiring Purpose" />
                    <p className='text-balance text-[#3a3b36] text-[14px] mt-[16px] leading-7'>A nationwide network of child care centers committed to the advocacy, protection, care and development of abandoned, abused, or dangerously neglected children.</p>
                </div>

            </div>

        </div>
      </section>
    </div>
  )
}

export default Vision
