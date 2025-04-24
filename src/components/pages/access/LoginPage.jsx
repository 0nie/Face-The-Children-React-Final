import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
        <section className="login- pt-[80px]">

            <div className="container max-w-[425px] mx-auto lg:max-w-[1024px] ">

                <div className="login-page-wrapper flex justify-center items-center">

                    <div className="w-96 p-6 lg:pt-[68px] xl:pt-[71px]">

                        <div className="image-container flex justify-center items-center flex-col">
                            <Link to="/">
                                <img src="/images/navigation/ftc_svg_logo.svg" alt="" className='w-[300px] h-[89px]' />
                            </Link>
                        </div>

                        <p className='mt-8 mb-5 text-lg font-semibold text-[#3A3B36]'>LOGIN</p>

                        <form action="#">
                        
                            <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Email</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                            </div>

                             <div className="input flex flex-col mb-6  relative">
                                <label htmlFor="" className='text-[12px] px-[4px] text-[#3e9bd0] absolute top-[-9px] left-[8px] bg-white'>Password</label>
                                <input type="text" required className='border border-gray-300 rounded-lg p-[8px] h-[35px] outline-none focus:border-[#3e9bd0] text-[12px] text-[#3a3b36]' />
                            </div>

                            <div className="flex items-center justify-center gap-1 pt-3">
                                <button className=' text-[12px] bg-[#3e9bd0] w-full text-white py-[6px] px-[12px] rounded-md h-[33.5px]'>
                                    Login
                                </button>
                            </div>

                        </form>

                        <p className='mt-5 mb-1 text-[12px] text-[#3a3b36]'>
                            Need an Account? 
                            <Link to="/create">
                                <u className='text-[#3e9bd0] ml-[3px]'>Create an Account</u>
                            </Link>
                        </p>

                         <p className=' mb-1 text-[12px] text-[#3a3b36]'>
                            Did you forget your password? 
                            <Link to="/forgot">
                                <u className='text-[#3e9bd0] ml-[3px]'>Forgot password</u>
                            </Link>
                        </p>
                   

                    
                     </div>

                </div>

            </div>

        </section>
    </div>
  )
}

export default LoginPage
