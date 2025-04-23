import React, { useState } from 'react'
import { MdOutlineArrowCircleRight } from 'react-icons/md'
import data from './program-data'
import ModalDonor from '../../partials/Modal/ModalDonor'
import { Link } from 'react-router-dom'

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
    }, 300) // matches animation duration
  }

  return (
    <div>
      <section className="program my-[130px]">
        <div className="container max-w-[410px] px-[8px] py-[40px] mx-auto m-0 lg:max-w-[850px] lg:mx-auto lg:py-[80px]">

          <div className="program-wrapper flex justify-center lg:flex-wrap flex-col items-center lg:flex-row lg:justify-center gap-3 lg:gap-3">
            {data.map((item, index) => (
              <div className="card mx-auto lg:w-[270px] lg:h-[620px]" key={index}>
                <img src={item.image} alt="program-image" className="mx-auto w-[265px] h-[360px]" />
                <div className="description py-[20px] px-[8px] w-[265px] lg:h-[265px] shadow-md">
                  <h2 className="text-[16px] text-[#3A3B36] mb-[20px] font-semibold">{item.type}</h2>
                  <p className="text-[12px] text-[#3A3B36] lg:text-left lg:h-[78px] lg:mb-0 lg:leading-5 mb-[20px]">
                    {item.description.split(' ').slice(0, 20).join(' ') + '...'}
                  </p>

                  {/* Use the link property to navigate to the correct page */}
                  <Link to={item.link} className="inline-flex items-center text-[#FC9827] gap-2 my-[20px]">
                    <MdOutlineArrowCircleRight className="w-[20px] h-[20px]" />
                    Read More
                  </Link>

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
          {isOpen && <ModalDonor closeModal={closeModal} isClosing={isClosing} />}
        </div>
      </section>
    </div>
  )
}

export default Program
