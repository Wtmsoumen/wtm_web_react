"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import faq_image from "../../public/images/faq_left_image.webp"
import { globalStyle } from '../globalStyle';

const faqs = [
  {
    id: '01',
    question: 'What Is Your Service?',
    answer: 'We Provide A Variety Of IT And Digital Marketing Services, Including Website Development, Mobile Application Design, SEO, PPC, Social Media Advertising, Branding, And UI/UX Design.',
  },
  {
    id: '02',
    question: 'Can You Guarantee Results In Digital Marketing?',
    answer: 'While We Cannot Guarantee Specific Results, We Use Data-Driven Strategies And Best Practices To Maximize Your ROI And Deliver Measurable Improvements In Your Digital Marketing Campaigns.',
  },
  {
    id: '03',
    question: 'Will I Have Full Ownership Of My Web/App/Marketing Assets?',
    answer: 'Yes, Absolutely. Once The Project Is Complete And Payment Is Received, You Have Full Ownership Of All Deliverables Including Source Code, Design Files, And Marketing Assets.',
  },
  {
    id: '04',
    question: 'Will My Website Be Mobile-Friendly?',
    answer: 'Yes, All Our Websites Are Built With A Mobile-First Approach And Are Fully Responsive Across All Devices Including Smartphones, Tablets, And Desktops.',
  },
  {
    id: '05',
    question: 'How Much Do Your Services Cost?',
    answer: 'Our Pricing Varies Depending On The Scope And Complexity Of The Project. We Offer Flexible Packages To Suit Different Budgets. Contact Us For A Free Consultation And Custom Quote.',
  },
  {
    id: '06',
    question: 'Do You Provide Ongoing Support And Maintenance?',
    answer: 'Yes, We Offer Ongoing Support And Maintenance Packages To Keep Your Website Or App Running Smoothly, Secure, And Up To Date After Launch.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>('01');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className='bg-white'>
      <div className={`py-16 ${globalStyle?.container}`}>
        <div className='flex  items-center justify-between'>

          {/* ----------Left part----------- */}
          <div className="w-[45%]   ">

            {/* Label */}
            <p className="text-pink-500 text-2xl  font-bold tracking-widest uppercase mb-2">FAQ</p>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-black leading-tight mb-8">
              Frequently Asked <br />
              <span className="bg-linear-to-r from-[#1E7FF8] via-[#0E8DF6] via-[#AB82E0] to-[#E75061] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            {/* Image + Badges */}
            <div className="relative w-full">



              {/* Main Image - used as-is */}
              <Image
                src={faq_image}
                alt="FAQ"
                width={600}
                height={650}
                className="w-full h-auto object-contain"
              />



            </div>
          </div>


          {/* ------------Right part----------- */}

          <div className="w-[50%] flex flex-col gap-4 ">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl overflow-hidden shadow-sm"
                  style={{
                    border: isOpen ? 'none' : '1px solid #f0e6e6',
                  }}
                >
                  {/* Question Row */}
                  <button
                    onClick={() => toggle(faq.id)}
                    className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300
                                      ${isOpen
                        ? "bg-gradient-to-r from-[#1E7FF8] via-[#0E8DF6] via-[#AB82E0] to-[#E75061] text-white"
                        : "bg-white text-gray-800"
                      }`}
                  >
                    <span
                      className={`text-[15px] font-semibold ${isOpen ? 'text-white' : 'text-gray-800'
                        }`}
                    >
                      {faq.id}.{faq.question}
                    </span>

                    {/* Plus/Close Button */}
                    <span
                      className={`cursor-pointer w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${isOpen
                        ? 'bg-white'
                        : 'border border-gray-300 bg-white'
                        }`}
                    >
                      {isOpen ? (
                        // X icon when open — pink colored
                        <svg
                          className="w-4 h-4 text-pink-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        // Plus icon when closed — gray colored
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer - only shown when open */}
                  {isOpen && (
                    <div className="bg-white px-6 py-5">
                      <p className="text-[16px] text-[#8B8B8B] leading-relaxed font-monserrat">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;