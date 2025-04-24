import React from 'react'
import { Link } from 'react-router-dom';

const UserCreateAccount = () => {
  return (
    <div>
      <section className="creating pt-[32px] mx-auto max-w-[425px] lg:max-w-[1024px] ">
        <div className="container">

            <div className="creating-wrapper flex justify-center items-center xl:max-w-full">

                <div className="w-96 p-6 ">

                    <div className="image-container flex items-center justify-center ">
                        <Link to="/">
                                <img src="/images/navigation/ftc_svg_logo.svg" alt="" className='w-[300px] h-[89px]' />
                        </Link>
                    </div>

                    <p className='text-[18px] text-[#3A3B36] mt-[32px] mb-[20px] font-semibold'>Create a Donor Account</p>

                    <form action="#">

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Name</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Email</label>
                                <input type="email" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Address</label>
                                <textarea type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[112px] resize-none outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>City</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>State/Province</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Country</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Zip Code</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                        </div>

                        <div className="flex items-center justify-center gap-1 pt-3">
                                <button className=' text-[12px] bg-[#3e9bd0] w-full text-white py-[6px] px-[12px] rounded-md h-[33.5px]'>
                                    Register
                                </button>
                        </div>

                    </form>

                    <Link to="/login">
                        <p className='mt-[20px] mb-[4px] text-[12px] text-[#3A3B36]'>Back to <u className='text-[#3e9bd0]'>login</u></p>
                    </Link>

                </div>
               

            </div>

        </div>
      </section>
    </div>
  )
}

export default UserCreateAccount
