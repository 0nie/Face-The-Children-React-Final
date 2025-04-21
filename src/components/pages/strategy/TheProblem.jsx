import React from 'react';
import Headings from '../../partials/Headings';
import problem from './problem-data';

const TheProblem = () => {
  return (
    <section className="problem pt-[100px] lg:pt-[150px]">
      <div className="container max-w-[410px] px-[8px] py-14 mx-auto lg:max-w-[1300px]">
        <div className="problem-wrapper grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Image Section */}
          <img
            src="/src/components/images/s-banner.png"
            alt="Problem visual"
            className="w-[398.6px] h-[565px] lg:order-2 lg:w-[625px] lg:h-[886.9px]"
          />

          {/* Text Section */}
          <div className="description lg:order-1">
            {/* Main Problem Info */}
            <small className="text-[12px] text-[#FC9827] lg:mb-[6px] inline-block">
              {problem.small}
            </small>
            <h2 className="text-[18px] text-[#3E9BD0] font-semibold leading-6 mb-[16px] lg:text-[30px]">
              {problem.header}
            </h2>
            <p className="text-[14px] text-[#3a3b36] w-[398px] leading-7 mb-[40px] lg:w-[500px]">
              {problem.description}
            </p>

            {/* Actions Header */}
            <div className="head">
              <small className="text-[12px] text-[#FC9827] lg:mb-[6px] inline-block">
                {problem.actionsHeader}
              </small>
              <h2 className="text-[18px] text-[#3E9BD0] font-semibold leading-6 mb-[16px] lg:text-[30px] lg:leading-10 lg:text-balance">
                {problem.actionsSubHeader}
              </h2>
              <p className="text-[14px] text-[#3a3b36] w-[398px] leading-7 mb-[20px] lg:w-[500px]">
                {problem.actionsSubDescription}
              </p>
            </div>

            {/* Actions List */}
            <div className="actions w-[396px] lg:w-[500px]">
              {problem.actions?.map((action, index) => (
                <div className="list mb-[20px]" key={index}>
                  <h2 className="text-[18px] text-[#3E9BD0] font-semibold leading-6 mb-[8px]">
                    {action.title}
                  </h2>
                  <p className="text-[14px] text-[#3a3b36] leading-7 text-left">
                    {action.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheProblem;
