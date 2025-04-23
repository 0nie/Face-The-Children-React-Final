import React from 'react'
import Headings from '../../partials/Headings'
import Button from '../../partials/Button'

const BannerAbout = () => {
  return (
    <div>
      <section className="about pt-[100px] lg:pt-[150px]">
        <div className="container max-w-[410px] px-[8px] py-14 mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px]">
          <div className="about-wrapper flex items-center flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
            
            <img 
              src="/public/images/about/about-banner.png" 
              alt="about-banner-image" 
              className="w-[398px] h-[398px] md:w-[450px] md:h-[450px] lg:w-[510px] lg:h-[510px]" 
            />

            <div className="description lg:max-w-[600px]">
              <Headings label="FROM STREETS TO SMILES" />
              <h1 className="text-[24px] font-semibold text-[#3a3b36] leading-8 text-balance mb-[30px] 
                            md:text-[32px] md:leading-[45px] 
                            lg:text-[44px] lg:leading-[60px] lg:mb-[40px]">
                Transform lives from the harsh reality of the streets to the warmth and comfort of genuine smiles
              </h1>
              <Button label="Sponsor Now" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerAbout
