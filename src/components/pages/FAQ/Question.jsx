import React, { useState } from 'react'
import Headings from '../../partials/Headings'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import data from './questions-data'

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div>
      <section className="question mb-[100px] lg:mb-[25px] bg-white pt-[95px] lg:pt-[150px]">
        <div className="container max-w-[410px] px-[8px] py-14 mx-auto m-0 lg:max-w-[1300px] lg:mx-auto">
          <div className="question-wrapper text-center">
            <Headings label="YOUR QUESTIONS, OUR CLARITY" />
            <h1 className='text-[24px] text-balance font-semibold text-[#3a3b36] leading-snug mb-[85px] lg:mb-[70px] lg:text-[46px]'>
              Our Commitment to Child Development
            </h1>

            <div className="card-question-wrapper lg:max-w-[1100px] lg:mx-auto xl:pt-[10px]">
              {data.map((question, index) => (
                <div className="card mb-[32px] lg:flex lg:gap-[100px] lg:items-start lg:h-[45.6px] lg:mb-[32px]" key={index}>
                  <div className={`group card border h-auto p-[8px] flex items-center justify-between gap-5 rounded-md mb-[16px] cursor-pointer transition-all duration-300 hover:bg-[#3e9bd0] hover:text-white lg:w-[600px] lg:h-auto
                    ${activeIndex === index
                      ? 'border-[#3e9bd0] bg-white text-[#3e9bd0]'
                      : 'border-gray-200 text-[#3a3b36]'}`}
                    onClick={() => toggleAnswer(index)}
                  >
                    <span className={`text-[20px] font-semibold lg:text-[20px] transition-colors duration-200
                      ${activeIndex === index
                        ? 'text-[#3e9bd0] group-hover:text-gray-400'
                        : 'text-gray-400'}`}>
                      {question.number}
                    </span>

                    <p className='text-[14px] text-justify flex-1'>{question.question}</p>

                    <RiArrowDownSLine
                      className={`text-xl transition-transform duration-300 lg:hidden
                      ${activeIndex === index ? 'rotate-180' : ''}`} />
                    <MdOutlineKeyboardArrowRight
                      className={`hidden lg:block text-2xl transition-transform duration-300`} />
                  </div>

                  {activeIndex === index && (
                    <div className="active border h-auto border-[#3e9bd0] text-[#3a3b36] bg-gray-100 p-[12px] rounded-md lg:w-[400px]  lg:h-auto">
                      <p className='text-justify text-[14px]'>{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Question
