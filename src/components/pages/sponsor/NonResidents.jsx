import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoHome } from 'react-icons/io5';
import { MdFamilyRestroom } from 'react-icons/md';
import ModalSponsor from '../../partials/Modal/ModalSponsor'; // Import ModalSponsor
import nonresidents from './nonresidents-data';
import { Link } from 'react-router-dom';  // Import Link for navigation
import ChildCard from './ChildCard';

const NonResidents = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedName, setSelectedName] = useState('');
  // const [remainingAmount, setRemainingAmount] = useState(0);

  // const maxDonation = 400; // Maximum donation amount for full sponsorship

  // const openModal = (name, sponsorPercentage) => {
  //   setSelectedName(name);
  //   const currentDonation = (sponsorPercentage / 100) * maxDonation;
  //   const remaining = maxDonation - currentDonation;
  //   setRemainingAmount(remaining);
  //   setIsOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   document.body.style.overflow = 'auto';
  // };

  return (
    <div>
      {/* <section className="non-residents mt-[100px] lg:mt-[150px]">
        <div className="container max-w-[410px] px-2 py-14 mx-auto lg:max-w-[1300px]">
          <div className="residents-wrapper">
            <div className="icon-wrapper flex gap-10 justify-center pb-2 mb-10">
          
              <Link to="../resident" className="icons flex items-center gap-2">
                <IoHome className="text-gray-400 w-5 h-5" />
                <button className="text-sm text-gray-400 font-semibold">Resident</button>
              </Link>

             
              <div className="icons flex items-center gap-2 relative before:absolute before:block before:content-[''] 
                before:w-[126.6px] before:h-[3px] before:bg-[#FC9827] 
                before:z-10 before:left-0 before:top-[25px]">
                <MdFamilyRestroom className="text-[#3a3b36] w-5 h-5" />
                <button className="text-sm text-[#3a3b36] font-semibold">Non-Resident</button>
              </div>
            </div>

            <div className="child-wrapper flex flex-wrap flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-center">
              {nonresidents.map((item, index) => {
                const percentage = parseFloat(item.sponsor);
                return (
                  <div className="card relative" key={index}>
                    <div className="frame">
                      <img src={item.image} alt={item.name} className="mx-auto w-[265px] h-[360px]" />
                      <div className="info flex justify-between items-center mx-auto p-2 w-[265px] bg-[#3A3B364D] absolute left-[65px] lg:left-0 top-[302px] h-[58px]">
                        <div className="name-info">
                          <p className="text-white">{item.name}</p>
                          <Link to={`/system/${item.id}`} >
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
                      <span className="relative z-20 flex items-center justify-start p h-full px-[10px]">
                        {item.sponsor}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      <section className="ChildCard mt-[100px] lg:mt-[150px]">
              <div className="container max-w-[410px] px-2 py-14 mx-auto lg:max-w-[1300px]">
      
                  <div className="childCard-wrapper">
                      <div className="icon-wrapper flex gap-10 justify-center pb-2 mb-10">
                        <Link to="../resident" className="icons flex items-center gap-2">
                          <IoHome className="text-gray-400 w-5 h-5" />
                          <button className="text-sm text-gray-400 font-semibold">Resident</button>
                        </Link>
                        
                        <Link to="/sponsor/non-resident" className="icons flex items-center gap-2 relative before:absolute before:block before:content-[''] 
                before:w-[126.6px] before:h-[3px] before:bg-[#FC9827] 
                before:z-10 before:left-0 before:top-[25px]">
                          <MdFamilyRestroom className="text-[#3a3b36] w-5 h-5" />
                          <button className="text-sm text-[#3a3b36] font-semibold">Non-Resident</button>
                        </Link>
                      </div>
                  </div>
      
                  <div className="child-wrapper flex flex-wrap flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-center">
                  
                    <ChildCard image ="/images/sponsor/trixie.jpg"
                     name = "Trixie Mae N"
                     sponsor = "37.50% - Sponsored"/>
                    
                    <ChildCard image ="/images/sponsor/danica.jpg"
                     name = "Danica V"
                     sponsor = "40.00% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/rosemae.jpg"
                     name = "Rose Mae N"
                     sponsor = "40.00% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/opt-rachelle.jpg"
                     name = "Rachelle M"
                     sponsor = "42.00% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/opt-don.jpg"
                     name = "Richard T"
                     sponsor = "45.00% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/marygrace.jpg"
                     name = "Mary Grace V"
                     sponsor = "50.00% — Sponsored"/>

                     <ChildCard image ="/images/sponsor/eugene.jpg"
                     name = "Eugene Lance D"
                     sponsor = "52.50% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/opt-gladays.jpg"
                     name = "Gladys T"
                     sponsor = "57.50% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/julieann.jpg"
                     name = "Julie ann"
                     sponsor = "60.00% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/opt-mark.jpg"
                     name = "Mark John B"
                     sponsor = "85.00% - Sponsored"/>

                     <ChildCard image ="/images/sponsor/opt-marian.jpg"
                     name = "Marian Nhicole B"
                     sponsor = "100.00% - Sponsored"/>
                    

                     
                  </div>
      
              </div>
      </section>

      {/* ModalSponsor Component */}
      {/* <ModalSponsor 
        isOpen={isOpen} 
        closeModal={closeModal} 
        selectedResident={selectedName} 
        remainingAmount={remainingAmount} 
      /> */}
    </div>
  );
};

export default NonResidents;
