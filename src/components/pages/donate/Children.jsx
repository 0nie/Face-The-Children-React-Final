import React from 'react';
import Navigation from './Navigation';
import Appreciation from './Appreciation';
import Footer from './Footer';
import Button from '../../partials/Button';
import ModalDonor from '../../partials/Modal/ModalDonor'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Children = () => {

    
  return (
    <div>
      <Navigation/>
      
      <section className="general-donation pt-[140px]">
        <div className="container px-2 max-w-[410px] mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[980px]">

          <div className="general-wrapper flex flex-col lg:flex-row lg:gap-5 pb-[80px]   ">
            
            
                <img 
                    src="public/images/donate/sponsor-child-opt.jpg" 
                    alt="General Giving" 
                    className="w-[265px] h-[360px] mx-auto object-cover lg:mx-0" />
           

            

            <div className="description">
                <h2 className='pt-[30px] pb-[20px] mb-[16px] text-[25px] text-[#3A3B36] leading-4 border-b border-gray-100'>Children Sponsorship</h2>
                <p className='text-[14px] text-light text-[#3A3B36] mb-[40px]'>Making a difference for abandoned, abused, or dangerously neglected children.</p>

                <Link to="/sponsor">
                  <button
                      className="text-white text-[14px] bg-[#3E9BD0] py-[8px] px-[16px] rounded-md w-[130px] h-[35.5px] block">
                      Sponsor Now
                  </button>
                </Link>
            </div>

          </div>
          
           {/* Modal */}
          

        </div>
      </section>

      <Appreciation/>

      <Footer/>

     
      

    </div>
  );
};

export default Children;
