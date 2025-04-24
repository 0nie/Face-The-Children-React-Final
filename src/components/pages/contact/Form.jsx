import React from 'react'
import Headings from '../../partials/Headings'
import Header from '../../partials/Header'

const Form = () => {
  return (
    <div>
      <section className="contact-form pt-[95px] lg:pt-[150px]">
      <div className="container max-w-[410px] px-[8px] py-14 mx-auto m-0 lg:max-w-[1100px] lg:mx-auto ">

        <div className="contact-form-wrapper grid grid-flow-col-1 gap-10 lg:grid-cols-2">

            <div className="description">
                <Headings label="LET'S TALK"/>
                <Header label="We're Here for You"/>
                <p className='text-[14px] text-[#3a3b36] mt-[16px] mb-[40px] text-balance leading-7'>We believe in building strong relationships and fostering a sense of community. Your feedback and inquiries are important to us, and we strive to respond as quickly and thoroughly as possible.</p>
                <p className='text-[14px] text-[#3a3b36] mb-[12px]'>Feel free to get in touch with us via phone</p>
                
                <div className="flex flex-col lg:flex-row ">
                    <p className='text-[14px] text-[#3E9BD0] font-semibold'>Philippines: +63 927 420 3409</p>
                    <p className='text-[14px] text-[#3E9BD0] font-semibold mb-[40px]'>USA +815 797 9177</p>
                </div>
                
                <p className='text-[14px] text-[#3a3b36] mb-[12px]'>Visit us here in the Phillipines</p>
                <p className='text-[14px] text-[#3E9BD0] font-semibold mb-[30px]'>Frontline Mission Center, Sitio Subac,  <br /> Brgy. Sto Nino, San Pablo City, 4000 Laguna</p>
            </div>

            <div className="form-wrapper">

                <form action="">

                    <div className="input flex flex-col mb-6  relative">
                        <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Name</label>
                        <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                    </div>

                    <div className="input flex flex-col mb-6 relative">
                        <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Email</label>
                        <input type='email' required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                    </div>

                    <div className="input flex flex-col mb-6 relative">
                        <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Phone</label>
                        <input type="tel" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                    </div>

                    <div className="input flex flex-col mb-6 relative">
                        <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Subject</label>
                        <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                    </div>

                    <div className="input flex flex-col relative">
                        <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Message</label>
                        <textarea name="" id="" required className='border border-gray-300 rounded-lg p-[8px] resize-none h-[250px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]'></textarea>
                    </div>
                    
                    <div className="box w-[300px] h-[80px] border border-gray-300 py-3 px-3 flex items-center justify-between rounded-sm mt-[25px]">
                        <div className="left flex gap-3 items-center">
                            <input type="checkbox" className='border-2 border-[#3a3b36] rounded-sm w-[27px] h-[27px]'  />
                            <p className='text-[14px] font-light'>I'm not a robot</p>
                        </div>

                        <div className="captcha flex flex-col items-center">
                            <img src="/public/images/contact/recapcha logo.png" className='w-[32px] h-[32px]' alt="" />
                            <p className='text-[10px] text-[#555]'>reCAPTCHA</p>
                            <small className='text-[8px] text-[#555]'>Privacy - Terms</small>
                        </div>
                    
                    </div>
                    
                    <button className='text-[12px] text-white bg-[#FC9827] hover:text-gray-500 animation-all duration-500 py-[6px] px-[12px] rounded-md mt-[25px] h-[33px] lg:w-[85.66px] lg:h-[33.1px]'>Submit</button>
                </form>

            </div>

            
            
            
        </div>

      </div>
      </section>
    </div>
  )
}

export default Form
