import React from 'react'
import Navigation from './Navigation'
import ModalSponsor from '../../partials/Modal/ModalSponsor'
import { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import Appreciation from './Appreciation';
import Footer from './Footer';


const System = () => {

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
      <Navigation/>

      <section className="sponsorship-children">
        <div className="container px-4 max-w-[410px] mx-auto pb-4 pt-[150px] lg:pt-[150px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[990px] xl:p-0  xl:pt-[150px]">

            <div className="children-wrapper lg:flex lg:gap-5 ">

                <div className="image-container flex flex-col items-center">
                    <img src="/public/images/sponsor/John-luke-b.jpg" alt=""
                    className='object-cover' />
                    <div className="sponsor text-[16px] p-2 text-white font-bold bg-[#FFBD66] w-[265px]">0.00% - Sponsored</div>
                </div>

                <div className="description">
                    <div className="name pt-[30px] pb-[10px] mb-[10px] text-[16px] text-[#3A3B36] font-bold"><p>John Luke B</p></div>

                    <div className="age text-[14px] text-[#3A3B36] mb-[4px]"><p>Age: 12</p></div>

                    <div className="birthdate age text-[14px] text-[#3A3B36] mb-[4px]"><p>Birthday: Jul 3, 2013</p></div>

                    <div className="story">
                        <h3 className='my-[20px] text-[16px] text-[#3A3B36] font-bold'>My Story</h3>
                        <p className='text-[14px] text-[#3A3B36] mb-[24px]'>John Luke, or JL, as he is called by his friends was neglected and then abandoned by his parents.  When the mother and father separated JL and his siblings were in the care of their mother.  The mother went to work overseas and left them in the care of another man who abandoned them.  The mother does not respond to contact.  JL is enrolled in grade 3 at Frontline Christian Academy and is interacting well within Face the Children.</p>
                    </div>

                     <button
                    onClick={() => openModal("John Luke B", 0)}
                    className="flex gap-2 items-center justify-center px-4 py-2 bg-[#3E9BD0] hover:bg-[#2a82b2] text-white text-xs rounded-md w-[111px] h-[34px]">
                    Sponsor Now
                </button>
                </div>


            </div>

            

            {isOpen && (
                <ModalSponsor
                isOpen={isOpen}
                closeModal={closeModal}
                selectedResident={selectedResident}
                remainingAmount={remainingAmount}
                />
            )}

        </div>
      </section>

      <Appreciation/>
      <Footer/>
    </div>
  )
}

export default System
