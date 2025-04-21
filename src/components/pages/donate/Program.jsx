import React, { useState } from 'react'
import Button from '../../partials/Button'
import { MdOutlineArrowCircleRight } from 'react-icons/md'
import data from './program-data'

const Program = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    setIsClosing(false)
  }

  const closeModal = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 300) // match your .3s animation
  }

  return (
    <div>
      <section className="program my-[130px]">
        <div className="container max-w-[410px] px-[8px] py-[40px] mx-auto m-0 lg:max-w-[850px] lg:mx-auto lg:py-[80px]">

          <div className="program-wrapper flex justify-center flex-col items-center lg:flex-row lg:justify-center gap-3 lg:gap-3">
            {data.map((item, index) => (
              <div className="card mx-auto lg:w-[270px] lg:h-[620px]" key={index}>
                <img src={item.image} alt="" className="mx-auto w-[265px] h-[360px]" />
                <div className="description py-[20px] px-[8px] w-[265px] lg:h-[265px] shadow-md">
                  <h2 className="text-[16px] text-[#3A3B36] mb-[20px] font-semibold">{item.type}</h2>
                  <p className="text-[12px] text-[#3A3B36] lg:text-left lg:h-[78px] lg:mb-0 lg:leading-5">
                    {item.description.split(' ').slice(0, 20).join(' ') + '...'}
                  </p>

                  <a href="#" className="inline-flex items-center text-[#FC9827] gap-2 my-[20px]">
                    <MdOutlineArrowCircleRight className="w-[20px] h-[20px]" />
                    Read More
                  </a>
                  <button
                    onClick={openModal}
                    className="text-white text-[12px] bg-[#3E9BD0] py-[8px] px-[16px] rounded-md w-[130px] h-[35.5px] block"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-500">

              <div className="modal">

                <div className="modal-header flex items-center justify-between bg-[#3E9BD0]   w-[400px] h-[52px] p-[16px] ">

                    <h2 className="text-[14px] font-bold text-white ">Feeding Program</h2>

                    <button
                      onClick={closeModal}
                      className=" text-3xl text-white hover:text-black">
                      &times;
                    </button>

                  
                </div>

                <div className="selection px-[16px] bg-white pt-[25px] ">

                    <form action="" className='flex flex-col gap-[22px]' >

                      <div className="frequency relative">

                        <p className='absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white'>*<span className='text-[#3E9BD0]'>Designation</span></p>

                        <select className=" border border-gray-300 p-2 rounded-md w-full h-[35px]"  required>
                
                          <option>--</option>
                          <option>Meal for the Christmas</option>
                         

                        </select>

                      </div>

                      <div className="amount relative">
                        <label htmlFor="" className='absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]'><span>Amount</span></label>
                       <input type="number" className='w-full h-[35px] border border-gray-300 rounded-md' />
                      </div>

                      <div className="frequency relative">

                        <p className='absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white'>*<span className='text-[#3E9BD0]'>Frequency</span></p>

                        <select className=" border border-gray-300 p-2 rounded-md w-full h-[35px]"  required>
                
                          <option>--</option>
                          <option>One Time</option>
                          <option>Monthly</option>

                        </select>

                      </div>

                      <div className="frequency relative">

                        <p className='absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white'><span className='text-[#3E9BD0]'>Remarks</span></p>

                        <textarea className=" border border-gray-300 p-2 rounded-md w-full h-[112PX] resize-none"  required>
                
                          

                        </textarea>

                      </div>

                      <div className="amount relative">
                        <label htmlFor="" className='absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]'><span>Email</span></label>
                       <input type="email" className='w-full h-[35px] border border-gray-300 rounded-md'required />
                      </div>

                      <button className=' text-[12px] bg-[#3E9BD0] py-[6px] px-[12px] text-white rounded-md mb-[20px] lg:h-[33.5px]'>
                        Proceed
                      </button>
                     

                    </form>

                    <div className="mode-of-payment flex justify-end pb-[20px]">

                      <div className="cards ">
                        <span className='text-[10px] text-[#3A3B36]'>Donate with your credit card.</span>
                        <img src="/src/components/images/cards.png" alt="" />
                      </div>

                    </div>

                </div>

              </div>

                
             
              
            </div>
          )}

        </div>
      </section>
    </div>
  )
}

export default Program
