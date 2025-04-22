import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'

const Vision = () => {
  return (
    <div>
      <section className="vision py-14">
        <div className="container max-w-[410px] px-[8px] mx-auto 
                        sm:max-w-[640px] md:max-w-[768px] 
                        lg:max-w-[1100px] xl:max-w-[1300px]">

          <div className="vision-wrapper flex flex-col gap-10 
                          lg:flex-row-reverse lg:items-center 
                          lg:justify-between lg:gap-12 xl:gap-16">

            <img 
              src="/src/components/images/about-vision.png"
              alt="vision-image"
              className="h-[398px] md:h-[450px] md:w-[450px] lg:h-[510px] lg:w-[510px]" 
            />

            <div className="head lg:max-w-[500px]">
              <Headings label="VISION" />
              <Header label="Empowering Change, Inspiring Purpose" />
              <p className="text-[#3a3b36] text-[14px] leading-7 mt-[16px] text-balance md:text-[14px] md:leading-[26px]">
                A nationwide network of child care centers committed to the advocacy, protection, care and development of abandoned, abused, or dangerously neglected children.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision
