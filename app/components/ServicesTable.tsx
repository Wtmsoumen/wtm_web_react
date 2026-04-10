"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from "./ScrollReveal";

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  category: string;
}

interface ServicesTableProps {
  activeFilter: string;
}

const ServicesTable: React.FC<ServicesTableProps> = ({ activeFilter }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: '01',
      number: '01',
      title: 'UI/UX DESIGN',
      description: 'Best can be a vague word while defining our market position...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'UI/UX DESIGN',
    },
    {
      id: '02',
      number: '02',
      title: 'GRAPHICS DESIGN',
      description: 'Our goal is to generate inventive design solutions and provide...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'UI/UX DESIGN',
    },
    {
      id: '03',
      number: '03',
      title: 'MOBILE APP DEVELOPMENT',
      description: 'Best can be a vague word while defining our market position...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'APP DEVELOPMENT',
    },
    {
      id: '04',
      number: '04',
      title: 'WEBSITE DEVELOPMENT',
      description: 'WordPress is known for its intuitive interface, making it easy to manage...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
    },
    {
      id: '05',
      number: '05',
      title: 'DIGITAL MARKETING',
      description: 'Our attention to detail in keyword research, competitive analysis...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'DIGITAL MARKETING',
    },
    {
      id: '06',
      number: '06',
      title: 'SHOPIFY DEVELOPMENT',
      description: 'We bring advanced technical expertise to Shopify website development...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
    },
    {
      id: '07',
      number: '07',
      title: 'CLOUD SERVICES',
      description: 'Instead of owning physical hardware, businesses can rent access to...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
    },
    {
      id: '08',
      number: '08',
      title: 'ERP & CRM',
      description: 'We develop custom ERP and CRM solutions suitable for streamlining...',
      image: '/images/WEB_DEV_ServiceCard.png',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
    },
  ];

  const filteredServices = activeFilter === 'ALL'
    ? services
    : services.filter(service => service.category === activeFilter);

  return (
    <ScrollReveal>
      <section className="w-full py-10 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Services Table */}
          <div className="relative">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`grid grid-cols-12 border-b border-gray-200 first:border-t transition-all duration-500 relative overflow-visible cursor-pointer`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                style={{
                  background: hoveredService === service.id
                    ? `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})`
                    : 'transparent',
                }}
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1 flex items-center justify-center py-6 md:py-10">
                  <span className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${hoveredService === service.id ? 'text-white' : 'text-black'
                    }`}>
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-10 md:col-span-3 flex items-center py-6 md:py-10 px-4">
                  <h3 className={`text-base md:text-xl font-bold uppercase transition-colors duration-300 ${hoveredService === service.id ? 'text-white' : 'text-black'
                    }`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="hidden md:flex md:col-span-5 items-center py-6 md:py-10 px-4">
                  <p className={`text-sm md:text-base transition-colors duration-300 ${hoveredService === service.id ? 'text-white' : 'text-gray-700'
                    }`}>
                    {service.description}
                  </p>
                </div>

                {/* Image Container - Appears on hover */}
                <div className="hidden lg:block col-span-3 relative">
                  <div
                    className={`absolute right-8 top-1/2 transform -translate-y-1/2 transition-all duration-500 z-10 ${hoveredService === service.id
                      ? 'opacity-100 translate-x-0 scale-100'
                      : 'opacity-0 translate-x-10 scale-95'
                      }`}
                  >
                    <div className="w-66 h-42 overflow-hidden shadow-2xl z-10 relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Image for Mobile/Tablet */}
          {hoveredService && (
            <div className="lg:hidden fixed top-1/2 right-8 transform -translate-y-1/2 z-50 animate-fade-in">
              <div className="w-48 md:w-64 h-32 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={services.find(s => s.id === hoveredService)?.image || ''}
                  alt={services.find(s => s.id === hoveredService)?.title || ''}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  )
}

export default ServicesTable