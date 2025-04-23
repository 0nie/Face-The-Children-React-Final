import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'
import Button from '../../partials/Button'
import { Link } from 'react-router-dom'

const Solutions = () => {
  return (
    <div>
      <section className="solutions pb-24 lg:pb-15">
        <div className="container  px-4 max-w-[410px] mx-auto pb-4 pt-20 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px] lg:pt-[180px] xl:pt-[205px]">
            <div className="solutions-wrapper flex items-center flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-[200px]">
                <img src="/public/images/home/h-service.png" alt="solutions-image" className='w-[320px] h-[300px] sm:w-[360px] sm:h-[340px] lg:w-[480px] lg:h-[450px] xl:w-[504px] xl:h-[504px]' />
                <div className="description lg:w-[500px] " >
                    <Headings label="OUR SOLUTIONS"/>
                    <Header label ="Service We Provide"/>

                    <p className='text-[14px] text-[#3a3b36] leading-7  mt-[16px] mb-[40px] text-balance'>Making a difference in the lives of children  can be simplified into a few essential actions  focused on their overall well-being. Here  are the things we provide for our children</p>
                    
                    <Link to="/strategy">
                      <Button label="Learn More" />
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
