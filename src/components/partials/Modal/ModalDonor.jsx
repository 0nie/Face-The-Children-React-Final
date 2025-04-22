import { AnimatePresence } from 'framer-motion'
import React from 'react'

const ModalDonor = ({ closeModal, isClosing }) => {
  return (
    <AnimatePresence>
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="modal">

        <div className="modal-header flex items-center justify-between bg-[#3E9BD0] w-[400px] h-[52px] p-[16px]">
          <h2 className="text-[14px] font-bold text-white">Feeding Program</h2>
          <button
            onClick={closeModal}
            className="text-3xl text-white hover:text-black"
          >
            &times;
          </button>
        </div>

        <div className="selection px-[16px] bg-white pt-[25px]">
          <form className="flex flex-col gap-[22px]">
            <div className="frequency relative">
              <p className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white">
                *<span className="text-[#3E9BD0]">Designation</span>
              </p>
              <select className="border border-gray-300 p-2 rounded-md w-full h-[35px] text-[12px] text-[#3A3B36]" required>
                <option>--</option>
                <option>Meal for the Christmas</option>
              </select>
            </div>

            <div className="amount relative">
              <label className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]">
                <span>Amount</span>
              </label>
              <input type="number" className="w-full h-[35px] border border-gray-300 rounded-md text-[12px] text-[#3A3B36] p-2" />
            </div>

            <div className="frequency relative">
              <p className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white">
                *<span className="text-[#3E9BD0]">Frequency</span>
              </p>
              <select className="border border-gray-300 p-2 rounded-md w-full h-[35px] text-[12px] text-[#3A3B36]" required>
                <option>--</option>
                <option>One Time</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="remarks relative">
              <p className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white">
                <span className="text-[#3E9BD0]">Remarks</span>
              </p>
              <textarea className="border border-gray-300 p-2 rounded-md w-full h-[112px] resize-none text-[12px] text-[#3A3B36] p-2" required />
            </div>

            <div className="email relative">
              <label className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]">
                <span>Email</span>
              </label>
              <input type="email" className="w-full h-[35px] border border-gray-300 rounded-md text-[12px] text-[#3A3B36] p-2" required />
            </div>

            <button className="text-[12px] bg-[#3E9BD0] py-[6px] px-[12px] text-white rounded-md mb-[20px] lg:h-[33.5px]">
              Proceed
            </button>
          </form>

          <div className="mode-of-payment flex justify-end pb-[20px]">
            <div className="cards">
              <span className="text-[10px] text-[#3A3B36]">Donate with your credit card.</span>
              <img src="/src/components/images/cards.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatePresence>
  )
}

export default ModalDonor
