import React from 'react'
import Headings from '../../partials/Headings'
import Button from '../../partials/Button'

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container px-4 max-w-[410px] mx-auto pb-4 pt-40 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px] lg:pt-[180px] xl:pt-[205px]">
          <div className="banner-wrapper flex flex-col justify-between gap-10 lg:flex-row-reverse lg:items-center lg:gap-12 lg:justify-between">

            <img
              src="/src/components/images/h-banner.png"
              alt="banner-image"
              className="w-[320px] h-[300px] sm:w-[360px] sm:h-[340px] lg:w-[480px] lg:h-[450px] xl:w-[573px] xl:h-[543px]"
            />

            <div className="description flex flex-col gap-6 lg:gap-6 xl:gap-8">
              <div className="text">
                <Headings label="CREATING OPPORTUNITY" />
                <h1 className="text-[#3a3b36] text-[24px] font-semibold sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[46px] lg:leading-[48px] xl:leading-[63px]">
                  Making a difference for abandoned, abused, or dangerously <br className="hidden md:block" /> neglected children
                </h1>
              </div>

              <Button label="Sponsor Now" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
