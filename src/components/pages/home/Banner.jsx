import React from 'react'
import Headings from '../../partials/Headings'
import Button from '../../partials/Button'

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container  px-2   max-w-[410px] mx-auto pb-4 pt-40 lg:pt-[205px]  lg:max-w-[1300px] lg:mx-auto">
            <div className="banner-wrapper flex flex-col justify-between gap-10 lg:flex-row-reverse lg:items-center lg:gap-15 lg:justify-between">

                <img src="/src/components/images/h-banner.png" alt="" className='w-[397px] h-[377px] lg:w-[573px] lg:h-[543px]' />

                <div className="description flex flex-col gap-6 lg:gap-8 ">
                    <div className="text">
                         <Headings label="CREATING OPPORTUNITY"/>
                        <h1 className='text-[#3a3b36] text-[24px] font-semibold lg:text-[46px] lg:leading-[63px]'>Making a difference for abandoned, abused, or dangerously <br /> neglected children</h1>
                    </div>

                   
                   
                    <Button label="Sponsor Now"/>
                    
                    
                </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
