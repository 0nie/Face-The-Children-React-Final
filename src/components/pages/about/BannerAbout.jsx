import React from 'react'
import Headings from '../../partials/Headings'
import Button from '../../partials/Button'

const BannerAbout = () => {
  return (
    <div>
      <section className="about pt-[100px] lg:pt-[150px]">
        <div className="container max-w-[410px] px-[8px] py-14 mx-auto m-0 lg:max-w-[1300px] lg:mx-auto">
            
            <div className="about-wrapper flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between ">
                <img src="/src/components/images/about-banner.png" alt="" className='w-[398px] h-[398px] lg:w-[510px] lg:h-[510px]' />

                <div className="description lg:w-[600px] lg:h-[253px] ">
                    <Headings label="FROM STREETS TO SMILES"/>
                    <h1 className='text-[24px] text-balance font-semibold text-[#3a3b36] leading-8 lg:text-[44px] lg:leading-[60px] lg:text-balance lg:font-semibold lg:mb-[40px] mb-[30px]'>Transform lives from the harsh reality of the streets to the warmth and comfort of genuine smiles</h1>
                    <Button label="Sponsor Now"/>
                </div>
                
                
            </div>

        </div>
      </section>
    </div>
  )
}

export default BannerAbout
