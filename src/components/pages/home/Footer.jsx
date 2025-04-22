import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#3e9bd0]">
        <div className="container mx-auto max-w-[410px] px-[13px] py-[8px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1100px] xl:max-w-[1300px]">
          <div className="footer-wrapper flex flex-wrap items-center justify-between gap-y-2 text-white">
            <p className="text-[10px] md:text-[11px] lg:text-[12px]">
              © {new Date().getFullYear()} Face The Children
            </p>
            <p className="text-[10px] md:text-[11px] lg:text-[12px]">
              Philippine Frontline Ministries
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
