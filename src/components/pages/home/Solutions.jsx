import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'
import Button from '../../partials/Button'

const Solutions = () => {
  return (
    <div>
      <section className="solutions pb-24 lg:pb-15">
        <div className="container  px-2  mx-auto  max-w-[410px] p-4 lg:max-w-[1300px] lg:mx-auto">
            <div className="solutions-wrapper flex flex-col gap-10 lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-[200px]">
                <img src="/src/components/images/h-service.png" alt="" className='lg:w-[504px] lg:h-[504px]' />
                <div className="description lg:w-[500px] " >
                    <Headings label="OUR SOLUTIONS"/>
                    <Header label ="Service We Provide"/>

                    <p className='text-[14px] text-[#3a3b36] leading-7 text-justify mt-[16px] mb-[40px]'>Making a difference in the lives of children  can be simplified into a few essential actions  focused on their overall well-being. Here  are the things we provide for our children</p>

                    <Button label="Learn More"/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
