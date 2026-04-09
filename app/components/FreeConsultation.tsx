import React from 'react'
import Image from 'next/image'
import girl from "../../public/images/Freeconsultation_left_girl.webp"
import { Facebook, Instagram, Twitter, Linkedin, Phone } from "lucide-react";

const FreeConsultation = () => {
    return (
        <div className='w-full pt-8 md:pt-40 flex flex-col md:flex-row p-4 md:p-8 bg-[#f5f5f7]'>
           

            {/* ----- Left Content Section ----- */}
            <div className="w-full md:w-[50%] px-4 md:px-10 " >

                {/* Heading */}
                <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4   bg-gradient-to-r
                      from-[#1E7FF8]
                      via-[#0E8DF6]
                      via-[#AB82E0]
                      to-[#E75061]  bg-clip-text text-transparent">
                    Web development company
                </h1>

                {/* Description */}
                <p className="text-black text-xl md:text-md leading-relaxed mb-5 max-w-lg">
                    Partner with a leading web development company to increase your brand
                    awareness, lead generation, and conversions.
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-6 text-black text-lg md:text-md">
                    <li className="flex items-start gap-2">
                        <span>•</span> Uphold confidentiality through an NDA.
                    </li>
                    <li className="flex items-start gap-2">
                        <span>•</span> Grasp the essence of the business.
                    </li>
                    <li className="flex items-start gap-2">
                        <span>•</span> Work closely with leadership.
                    </li>
                    <li className="flex items-start gap-2">
                        <span>•</span> Deliver consistent updates.
                    </li>
                    <li className="flex items-start gap-2">
                        <span>•</span> Provide aggressive pricing.
                    </li>
                </ul>

                {/* Social Media */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-700 font-medium">Social Media :</span>

                    <div className="flex gap-3">
                        {[
                            { icon: Facebook },
                            { icon: Instagram },
                            { icon: Twitter },
                            { icon: Linkedin },
                            { icon: Phone } // WhatsApp alternative
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-md hover:scale-110 transition-all duration-300 cursor-pointer"
                                >
                                    <Icon size={16} />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* -----right part---------- */}

         
            <div className='w-full md:w-[50%] flex items-center justify-center ' data-aos="fade-left">
                <div className='w-full md:relative md:bottom-15'>
                    {/* Title */}
                    <p className='text-[#ED286C] text-[15px] font-bold tracking-widest uppercase mb-1'>Free Consultation</p>
                    <h2 className='text-3xl md:text-[50px] font-regular text-[#020200] leading-tight'>Maximize Your Brand’s Performance With </h2>
                    <h2 className='text-4xl md:text-[55px] font-bold mb-5 text-[#1E7FF8]'> Webtechnomind IT Solutions</h2>

                    {/* Form Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

                        {/* Name */}
                        <div className='flex items-center gap-3 bg-white rounded-xl px-4 py-5 shadow-sm border-[#E6E5E5] border-1' data-aos="fade-up" data-aos-delay="100">
                            <svg className='w-5 h-5 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                            </svg>
                            <input type='text' placeholder='Name' className='bg-transparent outline-none text-sm text-gray-500 w-full placeholder-gray-400' />
                        </div>

                        {/* Company Name */}
                        <div className='flex items-center gap-3 bg-white rounded-xl px-4 py-5 shadow-sm border-[#E6E5E5] border-1' data-aos="fade-up" data-aos-delay="200">
                            <svg className='w-5 h-5 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                            </svg>
                            <input type='text' placeholder='Company Name' className='bg-transparent outline-none text-sm text-gray-500 w-full placeholder-gray-400' />
                        </div>

                        {/* Phone Number */}
                        <div className='flex items-center gap-3 bg-white rounded-xl px-4 py-5  shadow-sm border-[#E6E5E5] border-1' data-aos="fade-up" data-aos-delay="300">
                            <svg className='w-5 h-5 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                            </svg>
                            <input type='tel' placeholder='Phone Number' className='bg-transparent outline-none text-sm text-gray-500 w-full placeholder-gray-400' />
                        </div>

                        {/* Email */}
                        <div className='flex items-center gap-3 bg-white rounded-xl px-4  py-5 shadow-sm border-[#E6E5E5] border-1' data-aos="fade-up" data-aos-delay="400">
                            <svg className='w-5 h-5 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                            </svg>
                            <input type='email' placeholder='Email' className='bg-transparent outline-none text-sm text-gray-500 w-full placeholder-gray-400' />
                        </div>

                        {/* Select Service */}
                        <div className='flex items-center gap-3 bg-white rounded-xl px-4  py-5  shadow-sm border-[#E6E5E5] border-1' data-aos="fade-up" data-aos-delay="500">
                            <svg className='w-5 h-5 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            </svg>
                            <select defaultValue={'ss'} className=' pl-5 bg-transparent outline-none text-sm text-black w-full appearance-none cursor-pointer'>
                                <option value='ss' disabled>Select Service</option>
                                <option value='web'>Web Development</option>
                                <option value='mobile'>Mobile App Development</option>
                                <option value='design'>AI Solutions</option>
                                <option value='design'>UI/UX Design</option>
                                <option value='design'>Social Media Marketing</option>
                                <option value='design'>Search Engine Optimization</option>
                                <option value='design'>Google Ad Campaigns</option>
                                <option value='design'>Digital Marketing Agency</option>
                                <option value='design'>Content MArketing</option>
                                <option value='design'>Conversion Rate Optimization</option>
                                <option value='design'>Paid Advertising</option>
                                <option value='design'>Others</option>
                            </select>
                            <svg className='w-4 h-4 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                        </div>

                        {/* Message */}
                        <div className='flex items-center gap-3 bg-white rounded-xl px-4 py-5  shadow-sm border-[#E6E5E5] border-1' data-aos="fade-up" data-aos-delay="600">
                            <svg className='w-5 h-5 text-gray-400 shrink-0' fill='none' stroke='black' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                            </svg>
                            <input type='text' placeholder='Message' className='bg-transparent outline-none text-sm text-gray-500 w-full placeholder-gray-400' />
                        </div>

                    </div>

                    <button
                        className="
                        mt-4 mx-auto  flex items-center justify-between
                        px-14 py-4 rounded-full gap-4
                      text-white font-bold text-sm tracking-widest uppercase
                        bg-gradient-to-r
                      from-[#1E7FF8]
                      via-[#0E8DF6]
                      via-[#AB82E0]
                      to-[#E75061]

                        transition-all duration-300 ease-in-out
                        hover:scale-[1.03]
                         hover:shadow-xl
                           "
                        data-aos="zoom-in"
                        data-aos-delay="700"
                    >
                        <span>Submit Now</span>

                        <div
                            className="
                            w-8 h-8 bg-white rounded-full
                            flex items-center justify-center
                            transition-all duration-300
                            group-hover:translate-x-1
    "
                        >
                            <svg
                                className="w-4 h-4 text-[#ED2831] transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default FreeConsultation
