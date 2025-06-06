import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'

const Affiliates = () => {
  return (
    <div>
      <section className="affiliates pt-24 pb-16 lg:pb-16 lg:pt-14">
         <div className="container  px-2  mx-auto  max-w-[410px] p-4 lg:max-w-[1300px] lg:mx-auto">
            <div className="affiliates-wrap text-center">
                <Headings label="TRUSTED AFFILIATES"/>
                <Header label="Our Advocacy Associates"/>

                <div className="associates mt-[16px] flex flex-wrap  items-center gap-4 justify-around  lg:flex-row ">
                    <img src="/images/home/logo-fwc.png" alt="fwc-logo" className='w-[202px] h-[45px] ' />
                    <img src="/images/home/logo-fbs.png" alt="fbs-logo" className='w-[202px] h-[53px] '/>
                    <img src="/images/home/logo-fca.png" alt="fca-logo" className='w-[202px] h-[78px] '/>
                    <img src="/images/home/logo-ftw.png" alt="ftw-logo" className='w-[202px] h-[79px] ' />
                    <img src="/images/home/logo-pfm.png" alt="pfm-logo" className='w-[170] h-[54px] ' />
                    
                </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Affiliates
