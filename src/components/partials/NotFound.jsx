// src/pages/NotFound.jsx
import React from 'react';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b gap-2 from-[#3E9BD0] to-white">
        <h1 className="text-6xl font-bold text-white text-[96px]">404</h1>
        <p className="text-xl text-white text-[24px] font-bold">Page not found</p>
        <p className='text-[14px] text-white'>Unfortunately, the desired page cannot be accessed at the moment.</p>
        <p className='text-[12px] text-white'>Plase check your URL</p>
        <Link
  to="/"
  className="group bg-white text-[#3E9BD0] px-6 py-2 rounded text-[12px] font-semibold transition-all duration-300 flex items-center gap-2 justify-center hover:gap-7"
>
  <HiArrowSmLeft className="text-[18px] transition-all duration-300" />
  Go Back
</Link>

    </div>

  );
};

export default NotFound;
