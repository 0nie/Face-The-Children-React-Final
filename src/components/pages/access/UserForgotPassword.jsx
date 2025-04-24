import React from 'react'
import {Link} from 'react-router-dom'

const UserForgotPassword = () => {
  return (
    <div>
      <section className="forgot-password mx-auto max-w-[425px] pt-[80px] lg:max-w-[1024px] lg:pt-[123px] xl:pt-[128px] ">
        <div className="container">

            <div className="forgot-password-wrapper flex justify-center items-center xl:max-w-[1920px]">

                <div className="w-96 p-6">

                    <div className="image-container flex items-center justify-center ">
                        <img src="/public/images/navigation/ftc_svg_logo.svg" alt="ftc_logo"
                        className='w-[300px] h-[89px]' />
                    </div>

                    <p className='text-[18px] text-[#3A3B36] mt-[32px] mb-[20px] font-semibold'>FORGOT PASSWORD</p>

                    <form action="#">

                        <div className="input flex flex-col mb-4  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Email</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="flex items-center justify-center gap-1 pt-3">
                                <button className=' text-[12px] bg-[#3e9bd0] w-full text-white py-[6px] px-[12px] rounded-md h-[33.5px]'>
                                    Submit
                                </button>
                        </div>

                    </form>

                    <Link to="/login">
                        <p className='my-[10px] mb-[4px] text-[12px] text-[#3A3B36]'>Go back to <u className='text-[#3e9bd0]'>login</u></p>
                    </Link>
                </div>

            </div>

        </div>
      </section>
    </div>
  )
}

export default UserForgotPassword
