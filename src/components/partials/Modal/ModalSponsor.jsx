import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const ModalSponsor = ({ isOpen, closeModal, selectedResident, remainingAmount }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="modal bg-white w-[400px] max-w-full shadow-lg"
          >
            <div className="modal-header flex items-center justify-between bg-[#3E9BD0] w-full h-[52px] p-[16px]">
              <h2 className="text-[14px] font-bold text-white">Sponsor {selectedResident}</h2>
              <button onClick={closeModal} className="text-[26px] text-white hover:text-black">
                &times;
              </button>
            </div>

            <div className="selection px-[16px] bg-white pt-[16px]">
              <form className="flex flex-col gap-[22px]">
                <div className="sponsor mb-[20px]">
                  <p className="text-[14px] text-[#3A3B36] font-semibold">Choose amount</p>

                  <div className="flex flex-wrap">
                    {["20.00", "40.00", "50.00", "80.00", "100.00", "200.00"].map((amount, i) => (
                      <label
                        key={i}
                        htmlFor={`amount${i}`}
                        className="flex items-start gap-[8px] mt-[20px] w-[184px] h-[20px] cursor-pointer">
                        <input
                          type="radio"
                          id={`amount${i}`}
                          name="amount"
                          className="hidden peer"/>
                        <div className="w-[17px] h-[16px] border border-gray-400 rounded-full flex items-center justify-center peer-hover:bg-[rgb(252,152,39)] peer-checked:bg-[rgb(252,152,39)]">
                          <FaCheck className="text-white text-[7px]" />
                        </div>
                        <span className="text-[14px] text-[#3A3B36] px-[4px]">${amount}</span>

                      </label>
                    ))}

                    <label
                      htmlFor="remaining"
                      className="flex items-start gap-[8px] mt-[20px] w-[220px] h-[20px] cursor-pointer">
                      <input
                        type="radio"
                        id="remaining"
                        name="amount"
                        className="hidden peer"/>
                      <div className=" w-[16px] h-[16px] border border-gray-400 rounded-full flex items-center justify-center peer-hover:bg-[rgb(252,152,39)] peer-checked:bg-[rgb(252,152,39)]">
                        <FaCheck className="text-white text-[7px]" />
                      </div>
                      <span className="text-[14px] text-[#3A3B36] px-[4px] w-[200px]">
                        ${remainingAmount.toFixed(2)} to fully sponsor.
                      </span>
                    </label>
                  </div>
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

                <div className="amount relative">
                  <label className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]">
                    Remarks
                  </label>
                  <textarea className="w-full h-[112px] border border-gray-300 rounded-md resize-none p-[8px] text-[12px] text-[#3A3B36]" required />
                </div>

                <div className="amount relative">
                  <label className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]">
                    Email
                  </label>
                  <input type="email" className="w-full h-[35px] border border-gray-300 rounded-md text-[12px] text-[#3A3B36] p-2" required />
                </div>

                <button className="text-[12px] bg-[#3E9BD0] py-[6px] h-[33.5px] px-[12px] text-white rounded-md mb-[20px]">
                  Proceed
                </button>
              </form>

              <div className="mode-of-payment flex justify-end pb-[20px]">
                <div className="cards">
                  <span className="text-[10px] text-[#3A3B36]">Donate with your credit card.</span>
                  <img src="/src/components/images/modal/cards.png" alt="cards" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalSponsor;
