import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoHome } from 'react-icons/io5';
import { MdFamilyRestroom } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import data from './residents-data';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Residents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedResident, setSelectedResident] = useState('');
  const [remainingAmount, setRemainingAmount] = useState(0);

  const maxDonation = 400;

  const openModal = (name, sponsorPercentage) => {
    setSelectedResident(name);
    // Calculate the remaining amount based on the sponsorship percentage
    const remaining = maxDonation - (maxDonation * (sponsorPercentage / 100));
    setRemainingAmount(remaining);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <section className="residents mt-[100px] lg:mt-[150px]">
        <div className="container max-w-[410px] px-2 py-14 mx-auto lg:max-w-[1300px]">
          <div className="residents-wrapper">
            <div className="icon-wrapper flex gap-10 justify-center pb-2 mb-10">
              {/* Resident Section */}
              <div className="icons flex items-center gap-2 relative before:absolute before:block before:content-[''] before:w-[89.95px] before:h-[3px] before:bg-[#FC9827] before:z-10 before:left-0 before:top-[25px]">
                <IoHome className="text-[#3a3b36] w-5 h-5" />
                <button className="text-sm text-[#3a3b36] font-semibold">Resident</button>
              </div>

              {/* Link to Non-Resident Page */}
              <Link to="/sponsor/non-resident" className="icons flex items-center gap-2">
                <MdFamilyRestroom className="text-gray-400 w-5 h-5" />
                <button className="text-sm text-gray-400 font-semibold">Non-Resident</button>
              </Link>
            </div>

            <div className="child-wrapper flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-center">
              {data.map((item, index) => {
                const percentage = parseFloat(item.sponsor.split(' ')[0]); // Extract percentage from the sponsor string

                return (
                  <div className="card relative" key={index}>
                    <div className="frame">
                      <img src={item.image} alt={item.name} className="mx-auto w-[265px] h-[360px]" />
                      <div className="info flex justify-between items-center mx-auto p-2 w-[265px] bg-[#3A3B364D] absolute left-[65px] lg:left-0 top-[302px] h-[58px]">
                        <div className="name-info">
                          <p className="text-white">{item.name}</p>
                          <p className="text-sm text-[#FC9827]">View Info</p>
                        </div>
                        <button
                          onClick={() => openModal(item.name, percentage)}
                          className="flex gap-2 items-center justify-center px-4 py-2 bg-[#3E9BD0] hover:bg-[#2a82b2] text-white text-xs rounded-md w-[100.88px] h-[34px]"
                        >
                          Sponsor <GoArrowRight />
                        </button>
                      </div>
                    </div>
                    <div className="relative w-[265px] h-[40px] mx-auto text-white bg-[#FFBD66] text-[16px] font-semibold overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-[#EB8500] z-10 transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                      <span className="relative z-20 flex items-center justify-center h-full">
                        {item.sponsor}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="modal bg-white rounded-xl w-[400px] max-w-full shadow-lg"
            >
              <div className="modal-header flex items-center justify-between bg-[#3E9BD0] w-full h-[52px] p-[16px] rounded-t-xl">
                <h2 className="text-[14px] font-bold text-white">Sponsor {selectedResident}</h2>
                <button onClick={closeModal} className="text-3xl text-white hover:text-black">
                  &times;
                </button>
              </div>

              <div className="selection px-[16px] bg-white pt-[25px]">
                <form className="flex flex-col gap-[22px]">
                  <div className="sponsor mb-[20px]">
                    <p className='text-[14px] text-[#3A3B36] font-semibold'>Choose amount</p>

                    <div className="flex flex-wrap">
                      <div className="label flex items-start mt-[20px] gap-[5px] w-[184px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>$20.00</label>
                      </div>

                      <div className="label flex items-start mt-[20px] gap-[5px] w-[184px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>$40.00</label>
                      </div>

                      <div className="label flex items-start mt-[20px] gap-[5px] w-[184px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>$50.00</label>
                      </div>

                      <div className="label flex items-start mt-[20px] gap-[5px] w-[184px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>$80.00</label>
                      </div>

                      <div className="label flex items-start mt-[20px] gap-[5px] w-[184px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>$100.00</label>
                      </div>

                      <div className="label flex items-start mt-[20px] gap-[5px] w-[184px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>$200.00</label>
                      </div>

                      <div className="label flex items-start mt-[20px] gap-[5px] w-[194px] h-[20px]">
                        <input type="radio" />
                        <label htmlFor="" className='text-[14px] text-[#3A3B36] px-[4px]'>
                          ${remainingAmount.toFixed(2)} to fully sponsor.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="frequency relative">
                    <p className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white">
                      *<span className="text-[#3E9BD0]">Frequency</span>
                    </p>
                    <select className="border border-gray-300 p-2 rounded-md w-full h-[35px]" required>
                      <option>--</option>
                      <option>One Time</option>
                      <option>Monthly</option>
                    </select>
                  </div>

                  <div className="amount relative">
                    <label className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]">
                      Remarks
                    </label>
                    <textarea type="email" className="w-full h-[112px] border border-gray-300 rounded-md resize-none p-[8px]" required />
                  </div>

                  <div className="amount relative">
                    <label className="absolute top-[-9px] left-[8px] text-[12px] px-[4px] bg-white text-[#3E9BD0]">
                      Email
                    </label>
                    <input type="email" className="w-full h-[35px] border border-gray-300 rounded-md" required />
                  </div>

                  <button className="text-[12px] bg-[#3E9BD0] py-[6px] px-[12px] text-white rounded-md mb-[20px]">
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Residents;
