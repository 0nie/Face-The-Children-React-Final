import React from 'react'
import Headings from '../../partials/Headings'
import Button from '../../partials/Button'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container  max-w-[410px] mx-auto pb-4 pt-[150px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px] lg:pt-[180px] xl:pt-[205px]">
          <div className="banner-wrapper px-2 flex items-center flex-col justify-between gap-10 lg:flex-row-reverse lg:items-center lg:gap-12 lg:justify-between">

            <img
              src="/images/home/h-banner.png"
              alt="banner-image"
              className="w-[397.98px] h-[377.16px] sm:w-[360px] sm:h-[340px] lg:w-[480px] lg:h-[450px] xl:w-[573px] xl:h-[543px]"
            />

            <div className="description flex flex-col gap-[33px] lg:gap-6 xl:gap-8">
              <div className="text">
                <Headings label="CREATING OPPORTUNITY" />
                <h1 className="text-[#3a3b36] text-[24px] leading-[33px] font-semibold sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[46px] lg:leading-[48px] xl:leading-[63px] text-balance">
                  Making a difference for <br /> abandoned, abused, or dangerously <br className="" /> neglected children
                </h1>
              </div>

              <Link to="/sponsor">
                <Button label="Sponsor Now" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
