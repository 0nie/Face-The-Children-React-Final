import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const getLinkClass = (path, custom = '') => {
    const isActive =
      (path === '/' && location.pathname === '/') ||
      (path !== '/' && (
        location.pathname === path ||
        location.pathname.startsWith(path)
      ));
    return `${custom} text-[#3a3b36] text-[15px] font-medium lg:font-light hover:text-[#fb9f30] ${isActive ? 'text-[#fb9f30]' : ''}`;
  };

  const getDonateButtonClass = () => {
    // Only highlight Donate button if on one of the donation-related pages
    const donationPages = ['/donate', '/general-donation', '/feeding-program', '/children'];
    return donationPages.some(page => location.pathname.startsWith(page)) ? 'bg-[#fb9f30]' : 'bg-[#3e9bd0]';
  };

  return (
    <div className="mb-14 bg-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Top Sub Nav */}
      <section className="sub-nav bg-[#3e9bd0] text-white h-[26.53px] lg:h-[29.5px] flex items-center">
        <div className="container mx-auto px-2 max-w-[420px] py-[5px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px] lg:py-[6px]">
          <div className="flex justify-end gap-4 items-center py-[5px]">
            <a href="https://www.thefrontline.asia/" className="text-[11px] font-light inline-block">Visit Philippine Frontline Ministries</a>
            <Link to="/login" className="text-[11px] font-light">
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Main Nav */}
      <section className="main-nav relative bg-[#FAFAFA] lg:h-[69px]">
        <div className="container mx-auto max-w-[420px] p-2 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px] lg:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo w-[220px] h-[39px] md:w-[220px] lg:w-[220px]">
              <img src="/public/images/navigation/ftc_svg_logo.svg" alt="Logo" className="w-full h-auto" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-5 xl:gap-[25px] items-center">
              <Link to="/" className={getLinkClass('/')}>Home</Link>
              <Link to="/about" className={getLinkClass('/about')}>About</Link>
              <Link to="/faq" className={getLinkClass('/faq')}>FAQ</Link>
              <Link to="/strategy" className={getLinkClass('/strategy')}>Strategy</Link>
              <Link to="/contactForm" className={getLinkClass('/contactForm')}>Contact</Link>
              <Link to="/sponsor" className={getLinkClass('/sponsor')}>Sponsor Child</Link>

              {/* Donate Button */}
              <Link
                to="/donate"
                className={`${getDonateButtonClass()} text-white text-[12px] py-[8px] px-[16px] rounded-[8px] inline-flex `}
              >
                Donate
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button onClick={toggleMenu} className="lg:hidden flex flex-col justify-between w-6 h-5 z-50" aria-label="Menu">
              <span className={`block h-[4px] w-[21.5px] bg-[#3e9bd0] rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
              <span className={`block h-[4px] w-[21.5px] bg-[#3e9bd0] rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[4px] w-[21.5px] bg-[#3e9bd0] rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div className={`lg:hidden fixed top-[80px] right-0 h-screen w-full bg-white z-40 shadow-lg transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-5 py-5 px-6 text-center mt-6">
            <li><Link to="/" className={getLinkClass('/')}>HOME</Link></li>
            <li><Link to="/about" className={getLinkClass('/about')}>ABOUT</Link></li>
            <li><Link to="/faq" className={getLinkClass('/faq')}>FAQ</Link></li>
            <li><Link to="/strategy" className={getLinkClass('/strategy')}>STRATEGY</Link></li>
            <li><Link to="/contactForm" className={getLinkClass('/contactForm')}>CONTACT</Link></li>
            <li><Link to="/sponsor" className={getLinkClass('/sponsor')}>SPONSOR CHILD</Link></li>
            <li>
              <Link to="/donate" className={`${getDonateButtonClass()} text-white text-[12px] py-[8px] px-[16px] rounded-[8px] inline-flex justify-center`}>
                DONATE
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
