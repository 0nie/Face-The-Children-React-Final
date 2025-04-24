import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import ModalSponsor from '../../partials/Modal/ModalSponsor';
import Appreciation from './Appreciation';
import Footer from './Footer';
import residentsData from './residents-data'; // Renamed for clarity
import nonResidentsData from './nonresidents-data'; // Renamed for clarity

const System = () => {
  const { childName } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedResident, setSelectedResident] = useState('');
  const [remainingAmount, setRemainingAmount] = useState(0);
  
  const maxDonation = 400;

  // Find the child by name from the combined data
  const child = [...residentsData, ...nonResidentsData].find(item => item.name === childName);

  useEffect(() => {
    if (child) {
      setSelectedResident(child.name);
      const percentage = parseFloat(child.sponsor.split(' ')[0]);
      const remaining = maxDonation - (maxDonation * (percentage / 100));
      setRemainingAmount(remaining);
    }
  }, [child]);

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

  if (!child) {
    return <p>Child not found</p>; // Show a message if the child is not found
  }

  return (
    <div>
      <Navigation />
      <section className="sponsorship-children">
        <div className="container px-4 max-w-[410px] mx-auto pb-4 pt-[150px] lg:pt-[150px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[990px] xl:p-0 xl:pt-[150px]">
          <div className="children-wrapper lg:flex lg:gap-5">
            <div className="image-container flex flex-col items-center justify-center">
              <img src={child.image} alt={child.name} className="object-cover w-[365px] h-[360px]" />
              <div className="relative w-[265px] h-[40px] mx-auto text-white bg-[#FFBD66] text-[16px] font-semibold overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#EB8500] z-10 transition-all duration-300"
                  style={{ width: `${(parseFloat(child.sponsor.split(' ')[0]))}%` }}
                ></div>
                <span className="relative z-20 flex items-center justify-start h-full px-[10px]">
                  {child.sponsor}
                </span>
              </div>
            </div>

            <div className="description">
              <div className="name pt-[30px] pb-[10px] mb-[10px] text-[16px] text-[#3A3B36] font-semibold border-b border-gray-100"><p>{child.name}</p></div>
              <div className="age text-[14px] text-[#3A3B36] mb-[4px]"><p>Age: {child.age}</p></div>
              <div className="birthdate age text-[14px] text-[#3A3B36] mb-[4px]"><p>Birthday: {child.birthday}</p></div>

              <div className="story">
                <h3 className='my-[20px] text-[16px] text-[#3A3B36] font-semibold'>My Story</h3>
                <p className='text-[14px] text-[#3A3B36] mb-[24px]'>{child.story}</p>
              </div>

              <button
                onClick={() => openModal(child.name, parseFloat(child.sponsor.split(' ')[0]))}
                className="flex gap-2 items-center justify-center px-4 py-2 bg-[#3E9BD0] hover:bg-[#2a82b2] text-white text-xs rounded-md w-[111px] h-[34px]"
              >
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

      <Appreciation />
      <Footer />
    </div>
  );
};

export default System;
