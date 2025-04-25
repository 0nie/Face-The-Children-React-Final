import React from 'react'
import Headings from './Headings'
import Header from './Header'

const Contact = () => {
  return (
    <div>
      <section className="contact bg-gray-100 ">
        <div className="container max-w-[410px] px-[8px] py-14 lg:py-[40px] lg:px-[0] mx-auto m-0 lg:max-w-[1100px] lg:mx-auto ">

          <div className="contact-wrapper grid gap-[10px] h-[760px] lg:h-[650px] items-start place-content-center
            lg:grid-cols-2 lg:gap-[40px]">

            <div className="top">
              <Headings label="FREQUENTLY ASKED QUESTIONS" />
              <Header label="Can't find what you are looking for? " />
              <p className='text-[14px] text-balance text-[#3a3b36] leading-7 mt-[16px] mb-[40px]'>
                If your questions is not listed above, you can use the form to send directly to us your questions
              </p>
            </div>

            <div className="form-wrapper">

              <form action="">

                <div className="input flex flex-col mb-6 relative">
                  <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-gray-100'>Name</label>
                  <input type="text" required className='border border-gray-300 rounded-lg p-[8px] bg-gray-100 h-[35px] outline-none focus:border-[#3e9bd0] text-[#3a3b36] text-[12px]' />
                </div>

                <div className="input flex flex-col mb-6 relative">
                  <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-gray-100'>Email</label>
                  <input type='email' required className='border border-gray-300 rounded-lg p-[8px] h-[35px] bg-gray-100 outline-none focus:border-[#3e9bd0] text-[#3a3b36] text-[12px]' />
                </div>

                <div className="input flex flex-col mb-6 relative">
                  <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-gray-100'>Phone</label>
                  <input type="tel" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] bg-gray-100 outline-none focus:border-[#3e9bd0] text-[#3a3b36] text-[12px]' />
                </div>

                <div className="input flex flex-col mb-6 relative">
                  <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-gray-100'>Subject</label>
                  <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] bg-gray-100 outline-none focus:border-[#3e9bd0] text-[#3a3b36] text-[12px]' />
                </div>

                <div className="input flex flex-col relative">
                  <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-gray-100'>Message</label>
                  <textarea name="" id="" required className='border border-gray-300 rounded-lg p-[8px] resize-none bg-gray-100 h-[250px] outline-none focus:border-[#3e9bd0] text-[#3a3b36] text-[12px] '></textarea>
                </div>

                <div className="box w-[300px] h-[80px] border border-gray-300 py-3 px-3 flex items-center justify-between rounded-sm mt-[16px]">
                  <div className="left flex gap-3 items-center">
                    <input type="checkbox" className='border-2 border-[#3a3b36] rounded-sm w-[27px] h-[27px] bg-gray-100' />
                    <p className='text-[14px] font-light '>I'm not a robot</p>
                  </div>

                  <div className="captcha flex flex-col items-center">
                    <img src="/images/faq/recapcha logo.png" className='w-[32px] h-[32px]' alt="" />
                    <p className='text-[10px] text-[#555]'>reCAPTCHA</p>
                    <small className='text-[8px] text-[#555]'>Privacy - Terms</small>
                  </div>

                </div>

                <button className='text-[12px] text-white bg-[#FC9827] hover:text-gray-500 animation-all duration-500 py-[6px] px-[12px] rounded-md mt-[25px] h-[33px] lg:w-[85.66px] lg:h-[33.1px]'>
                  Submit
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
