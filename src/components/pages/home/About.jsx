import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'
import data from './about-data'


const About = () => {
  return (
    <div>
      <section className="about py-24">
        <div className="container  px-2 max-w-[410px] mx-auto sm:mx-auto p-4 lg:max-w-[1300px] lg:mx-auto">
            <div className="about-wrapper flex flex-col gap-10 lg:flex-row lg:justify-between">

                <img src="/src/components/images/about.png"
                className='w-[397px] h-[391px] lg:w-[452px] lg:h-[445px]' alt="" />

                <div className="description lg:w-[507px]">
                    <Headings label ="WHO WE ARE"/>
                    <Header label ="Let's Share to Change a life today "/>
                    <p className='text-[14px] text-[#3a3b36] leading-7 text-justify lg:text-left  mt-[16px] mb-[40px] lg:pr-12'>When we come together as a community, our  collective efforts can lead to monumental changes.  By fostering a culture of sharing, we not only help those in immediate need but also build a foundation  of support and compassion that benefits everyone.</p>

                    <div className="counts-wrapper grid grid-cols-2 gap-4">
                        {data.map((items,key) =>{
                            return(
                                <div className="card" key={key}>
                                    <h3 className='text-[#fb9f30] text-[25px] lg:text-[40px] font-semibold'>{items.number}</h3>
                                    <p className='text-[12px] text-[#3a3b36]'>{items.type}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
