import React from 'react'
import Headings from '../../partials/Headings'

const Care = () => {
  return (
    <div>
      <section className="care mt-[100px] bg-gray-100">
      <div className="container max-w-[410px] px-[8px] py-14 mx-auto m-0 lg:max-w-[1300px] lg:mx-auto">

        <div className="care-wrapper grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[40px]">

            <img src="/public/images/strategy/s-love.png" alt="care-image" className='mx-auto lg:ml-[20px] xl:mx-auto' />

            <div className="description">
                <small className='text-[12px] text-[#FC9827]'>PREVAILS FOREVER</small>
                <h2 className='text-[18px] text-[#3E9BD0] text-balance font-semibold leading-6 mb-[16px] lg:text-[30px] lg:leading-[40px] lg:text-left'>
                  Love Never Fails
                </h2>

                <p className='text-[14px] text-[#3a3b36] text-balance w-[398px] h-auto leading-7 mb-[40px] lg:mb-[20px] lg:w-[500px] lg:h-auto lg:text-[14px]'>
                  Many children we serve come to us with psychological, behavioral problems, and even chemical or mental addictions; some at very young ages. Many are not ready to trust or commit to others due to various forms of abuse or levels of neglect. Needless to say, many children have good reasons for hesitation to trust or commit to others; and in some cases fail to do so. Knowing that not all children respond as we hope does not deter us. We are committed to the welfare of children regardless of the outcomes of our interventions with all children.
                </p>

                <p className='text-[14px] text-[#3a3b36] text-balance w-[398px] h-auto leading-7 mb-[40px] lg:w-[500px] lg:h-auto lg:text-[14px]'>
                  Many children we serve come to us with psychological, behavioral problems, and even chemical or mental addictions; some at very young ages. Many are not ready to trust or commit to others due to various forms of abuse or levels of neglect. Needless to say, many children have good reasons for hesitation to trust or commit to others; and in some cases fail to do so. Knowing that not all children respond as we hope does not deter us. We are committed to the welfare of children regardless of the outcomes of our interventions with all children.
                </p>
            </div>
            
        </div>

      </div>
      </section>
    </div>
  )
}

export default Care
