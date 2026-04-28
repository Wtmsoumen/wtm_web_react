"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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
  slug: string;
}

interface ServicesTableProps {
  activeFilter: string;
}

const ServicesTable: React.FC<ServicesTableProps> = ({ activeFilter }) => {
  const [hoveredService, setHoveredService] = useState<string | null>('01');

  const services: Service[] = [
    {
      id: '01',
      number: '01',
      title: 'AI Solutions',
      description: 'We Provide AI solutions that leverage machine learning, natural language processing...',
      image: '/images/services_pics/ai_sol.jpeg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'AI SOLUTIONS',
      slug: 'ai-engineering',
    },
    {
      id: '02',
      number: '02',
      title: 'WEBSITE DEVELOPMENT',
      description: 'WordPress is known for its intuitive interface, making it easy to manage...',
      image: '/images/services_pics/WEBSITE DEVELOPMENT.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
      slug: 'website-development',
    },
    {
      id: '03',
      number: '03',
      title: 'MOBILE APP DEVELOPMENT',
      description: 'Best can be a vague word while defining our market position...',
      image: '/images/services_pics/MOBILE APP DEVELOPMENT.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'APP DEVELOPMENT',
      slug: 'mobile-app-development',
    },
    {
      id: '04',
      number: '04',
      title: 'GRAPHICS DESIGN',
      description: 'Our goal is to generate inventive design solutions and provide...',
      image: '/images/services_pics/graphics_design.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'UI/UX DESIGN',
      slug: 'brand-management',
    },
    {
      id: '05',
      number: '05',
      title: 'DIGITAL MARKETING',
      description: 'Our attention to detail in keyword research, competitive analysis...',
      image: '/images/services_pics/DIGITAL MARKETING.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'DIGITAL MARKETING',
      slug: 'digital-marketing',
    },
    {
      id: '06',
      number: '06',
      title: 'SHOPIFY DEVELOPMENT',
      description: 'We bring advanced technical expertise to Shopify website development...',
      image: '/images/services_pics/SHOPIFY DEVELOPMENT.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
      slug: 'ecommerce-development',
    },
    {
      id: '07',
      number: '07',
      title: 'CLOUD SERVICES',
      description: 'Instead of owning physical hardware, businesses can rent access to...',
      image: '/images/services_pics/CLOUD SERVICES.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
      slug: 'digital-transformation',
    },
    {
      id: '08',
      number: '08',
      title: 'ERP & CRM',
      description: 'We develop custom ERP and CRM solutions suitable for streamlining...',
      image: '/images/services_pics/ERP & CRM.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'WEB DEVELOPMENT',
      slug: 'software-development',
    },
    {
      id: '09',
      number: '09',
      title: 'UI/UX DESIGN',
      description: 'Best can be a vague word while defining our market position...',
      image: '/images/services_pics/uiux.jpg',
      gradientFrom: '#9B2C8C',
      gradientTo: '#E94057',
      category: 'UI/UX DESIGN',
      slug: 'custom-web-development',
    },
  ];

  const filteredServices = activeFilter === 'ALL'
    ? services
    : services.filter(service => service.category === activeFilter);

  const isHovered = (id: string) => hoveredService === id;

  return (
    <ScrollReveal>
      <section className="w-full py-10 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                className={`grid grid-cols-12 border-b rounded-2xl border-gray-200 first:border-t transition-all duration-500 relative overflow-visible cursor-pointer`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                style={{
                  background: isHovered(service.id)
                    ? `linear-gradient(to right, ${service.gradientFrom}, ${service.gradientTo})`
                    : 'transparent',
                }}
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1 flex items-center justify-center py-6 md:py-10">
                  <span className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${isHovered(service.id) ? 'text-white' : 'text-black'}`}>
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-8 md:col-span-3 flex items-center py-6 md:py-10 px-4">
                  <h3 className={`text-base md:text-xl font-bold uppercase transition-colors duration-300 ${isHovered(service.id) ? 'text-white' : 'text-black'}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="hidden md:flex md:col-span-5 items-center py-6 md:py-10 px-4">
                  <p className={`text-sm md:text-base transition-colors duration-300 ${isHovered(service.id) ? 'text-white' : 'text-black'}`}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow + Image Container */}
                <div className="col-span-2 md:col-span-3 flex items-center justify-end pr-4 md:pr-6 relative">

                  {/* Arrow icon — links to the service slug page */}
                  <Link
                    href={`/services/${service.slug}`}
                    aria-label={`Go to ${service.title}`}
                    className={`transition-all duration-400 ease-out flex items-center justify-center
                      w-10 h-10 rounded-full
                      ${isHovered(service.id)
                        ? 'opacity-100 translate-x-0 scale-100 border-white ml-18'
                        : 'opacity-0 translate-x-4 scale-75 border-transparent'
                      }`}
                    style={{ transitionDuration: '350ms' }}
                  >
                    <ArrowUpRight
                      className={`transition-all duration-300 ${isHovered(service.id) ? 'text-white' : 'text-transparent'}`}
                      size={25}
                      strokeWidth={2.2}
                    />
                  </Link>

                  {/* Image — desktop only, floats above the row */}
                  <div className="hidden lg:block absolute right-16 top-1/2 transform -translate-y-1/2 z-10">
                    <div
                      className={`transition-all duration-500 ease-out ${isHovered(service.id)
                        ? 'opacity-100 translate-x-0 scale-100'
                        : 'opacity-0 translate-x-10 scale-95'
                        }`}
                    >
                      <div className="w-66 h-42 overflow-hidden rounded-2xl shadow-2xl">
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
  );
};

export default ServicesTable;