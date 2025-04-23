import React from 'react';
import Navigation from './Navigation';
import Appreciation from './Appreciation';
import Footer from './Footer';
import Button from '../../partials/Button';
import ModalDonor from '../../partials/Modal/ModalDonor'
import { useState } from 'react';


const GeneralDonation = () => {

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
      <Navigation/>
      
      <section className="general-donation pt-[140px]">
        <div className="container px-2 max-w-[410px] mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[990px]">

          <div className="general-wrapper flex flex-col lg:flex-row lg:gap-5 pb-[80px]   ">
            
            
                <img 
                    src="public/images/donate/general-giving.jpg" 
                    alt="General Giving" 
                    className="w-[265px] h-[360px] mx-auto object-cover" />
           

            

            <div className="description">
                <h2 className='pt-[30px] pb-[20px] mb-[16px] text-[25px] text-[#3A3B36] leading-4 border-b border-gray-100'>General Donation</h2>
                <p className='text-[14px] text-light text-[#3A3B36] mb-[40px]'>Give unrestricted gifts that allow Frontline to direct these funds where they are most needed. Your giving allows us to continue to actively partner with needs of people in the communities we serve.</p>
               <button
                    onClick={openModal}
                    className="text-white text-[14px] bg-[#3E9BD0] py-[8px] px-[16px] rounded-md w-[130px] h-[35.5px] block">
                    Sponsor Now
                  </button>
            </div>

          </div>
          
           {/* Modal */}
          {isOpen && <ModalDonor closeModal={closeModal} isClosing={isClosing} />}

        </div>
      </section>

      <Appreciation/>

      <Footer/>

     
      

    </div>
  );
};

export default GeneralDonation;
