

import Image from 'next/image'
import React from 'react'

import ida from "../../public/images/dgwIcons/1ida.png"
import b2bpm from "../../public/images/dgwIcons/2b2bpm.png"
import fapp from "../../public/images/dgwIcons/3fapp.png"
import rest from "../../public/images/dgwIcons/4rest.png"
import hewe from "../../public/images/dgwIcons/5hewe.png"
import sone from "../../public/images/dgwIcons/6sone.png"
import lnt from "../../public/images/dgwIcons/7lnt.png"
import blcr from "../../public/images/dgwIcons/8blcr.png"
import trho from "../../public/images/dgwIcons/9trho.png"
import fifi from "../../public/images/dgwIcons/10fifi.png"
import bfi from "../../public/images/dgwIcons/11bfi.png"
import ecr from "../../public/images/dgwIcons/12ecr.png"
import { globalStyle } from '../globalStyle'

const Industries = () => {

  let industries = [
    {
      id: 1,
      title: "Interior Design & Architecture",
      image: ida,
    },
    {
      id: 2,
      title: "B2B Portals & Marketplaces",
      image: b2bpm,
    },
    {
      id: 3,
      title: "Fashion & Apparel",
      image: fapp,
    },
    {
      id: 4,
      title: "Real Estate",
      image: rest,
    },
    {
      id: 5,
      title: "Healthcare & Wellness",
      image: hewe,
    },
    {
      id: 6,
      title: "Social Networking",
      image: sone,
    },
    {
      id: 7,
      title: "Logistics & Transportation",
      image: lnt,
    },
    {
      id: 8,
      title: "Blockchain & Crypto",
      image: blcr,
    },
    {
      id: 9,
      title: "Travel & Hospitality",
      image: trho,
    },
    {
      id: 10,
      title: "Finance & Fintech",
      image: fifi,
    },
    {
      id: 11,
      title: "Banking, Finance & Insurance",
      image: bfi,
    },
    {
      id: 12,
      title: "E-commerce & Retail",
      image: ecr,
    },
  ]

  return (
    <div className='bg-linear-to-r from-[#1E7FF8] via-[#0E8DF6]  to-[#E75061]'>
      <div className={`${globalStyle?.container} py-16!`}>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='uppercase tracking-[2.5%] text-base font-medium text-white'>DIGITALLY GROWING WITH</h1>
          <h2 className='text-5xl font-normal text-white'>Industries <strong>We Serve</strong></h2>
          <p className='text-base font-normal text-white text-center max-w-3xl'>At WebTechnomind, we empower businesses across diverse industries with innovative digital solutions that fuel growth and transformation. From stunning websites and intuitive mobile apps to custom software and strategic branding, we craft experiences that help grow your business online.</p>
        </div>
        <div className='grid grid-cols-6 gap-4 mt-10!'>
          {industries.map((industry) => (
            <div key={industry.id} className='p-7! bg-white rounded-[20px] w-full flex flex-col items-center gap-4'>
              <Image src={industry.image} alt="industriesWeServe" width={70} height={70} />
              <p className='text-base font-normal text-black text-center'>{industry?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Industries
