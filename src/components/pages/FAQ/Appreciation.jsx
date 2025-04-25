import React from 'react'
import Headings from '../../partials/Headings'


const Appreciation = () => {
  return (
    <div>
      <section className="appreciation mt-[155px] lg:mt-[112px]">
        <div className="container max-w-[410px] px-[8px]  py-[40px] mx-auto m-0 lg:max-w-[1300px] lg:mx-auto lg:py-[80px]">
            <div className="appreciation-wrapper text-center lg:w-[624px] lg:mx-auto lg:h-[136px] ">
                <Headings label ="EVERY GIFT COUNTS"/>
                <h2 className='text-[#3a3b36] font-semibold text-[18px] mb-[16px] lg:text-[30px]'>Together, We Make a Difference</h2>
                <p className='text-[#3a3b36] text-[14px] lg:text-center lg:h-[60px] lg:px-[50px]'>Together, we lend a helping hand to those in need, offering hope and support where it's needed most. From volunteering our time to donating resources, each act of kindness strengthens our community fabric.</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Appreciation
