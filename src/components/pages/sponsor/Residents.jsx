import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoHome } from 'react-icons/io5';
import { MdFamilyRestroom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import data from './residents-data';
import ModalSponsor from '../../partials/Modal/ModalSponsor';


const Residents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedResident, setSelectedResident] = useState('');
  const [remainingAmount, setRemainingAmount] = useState(0);

  const maxDonation = 400;

  const openModal = (name, sponsorPercentage) => {
    const remaining = maxDonation - (maxDonation * (sponsorPercentage / 100));
    setSelectedResident(name);
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
              <div className="icons flex items-center gap-2 relative before:absolute before:block before:content-[''] before:w-[89.95px] before:h-[3px] before:bg-[#FC9827] before:z-10 before:left-0 before:top-[25px]">
                <IoHome className="text-[#3a3b36] w-5 h-5" />
                <button className="text-sm text-[#3a3b36] font-semibold">Resident</button>
              </div>

              <Link to="/sponsor/non-resident" className="icons flex items-center gap-2">
                <MdFamilyRestroom className="text-gray-400 w-5 h-5" />
                <button className="text-sm text-gray-400 font-semibold">Non-Resident</button>
              </Link>
            </div>

            <div className="child-wrapper flex flex-wrap flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-center">
              {data.map((item, index) => {
                const percentage = parseFloat(item.sponsor.split(' ')[0]);

                return (
                  <div className="card relative" key={index}>
                    <div className="frame">
                      <img src={item.image} alt={item.name} className="mx-auto w-[265px] h-[360px]" />
                      <div
                      className={`info flex justify-between items-center mx-auto p-2 w-[265px] bg-[#3A3B364D] absolute left-[65px] lg:left-0 
                        top-[302px] h-[58px] transition-all duration-300 ease-in-out
                        ${index === 2 ? 'xs:top-[280px] xs:h-[82px] xl:top-[280px] xl:h-[82px]' : ''}`}>

                        <div className="name-info">
                          <p className="text-white">{item.name}</p>
                         
                          <Link to={`/system/${item.id}`}>
                            <p className="text-sm text-[#FC9827]">View Info</p>
                          </Link>
                        

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
                      <span className="relative z-20 flex items-center justify-start h-full px-[10px]">
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

      {/* Modal Sponsor */}
      
      {isOpen && (
        <ModalSponsor
          isOpen={isOpen}
          closeModal={closeModal}
          selectedResident={selectedResident}
          remainingAmount={remainingAmount}
        />
      )}
    </div>
  );
};

export default Residents;
