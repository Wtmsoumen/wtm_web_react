"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Layers, Smartphone, ShoppingCart, BarChart2, Brain, Cloud, type LucideIcon, Megaphone, BrainCircuit } from 'lucide-react'




// Define icon type properly
interface Tab {
    id: string;
    label: string;
    IconComponent: LucideIcon;
    title: string;
    description: string;
    services: { label: string; color: string; position: string }[];
}
const tabs = [
    {
        id: 'fullstack',
        label: 'Full-Stack Development',
        IconComponent: Layers,
        title: 'Full-Stack Development',
        description: `Top Full-Stack Development Services Agency
                      Unlock exponential business growth with Webtechnomind — a tech-powered full-stack development agency that thrives at the intersection of technology, consulting, and data intelligence. We help brands ignite their digital presence with performance-driven strategies, creative storytelling, and precision-targeted campaigns.
                    Whether you're aiming for brand awareness, lead generation, or ROI maximization, our expert team blends technology and innovation to deliver measurable results across web, mobile, and beyond.
Webtechnomind - Where creativity meets conversion.`,
        services: [
            { label: 'Frontend Development', color: 'bg-blue-100 text-blue-600', position: 'left-top' },
            { label: 'Backend Development', color: 'bg-pink-100 text-pink-600', position: 'left-mid' },
            { label: 'API Integration', color: 'bg-green-100 text-green-700', position: 'left-bot' },
            { label: 'Paid Advertising', color: 'bg-pink-100 text-pink-500', position: 'left-last' },
            { label: 'Database Management', color: 'bg-purple-100 text-purple-600', position: 'right-top' },
            { label: 'Cloud Deployment', color: 'bg-yellow-100 text-yellow-700', position: 'right-mid' },
            { label: 'Performance Optimization', color: 'bg-pink-100 text-pink-500', position: 'right-mid2' },
            { label: 'DevOps & CI/CD', color: 'bg-green-100 text-green-700', position: 'right-bot' },
        ],
    },
    {
        id: 'mobile',
        label: 'Mobile Apps Development',
        IconComponent: Smartphone,
        title: 'Mobile Apps Development',
        description: `Top Mobile App Development Services Agency
Unlock exponential business growth with Webtechnomind — a tech-powered mobile app development agency that thrives at the intersection of technology, consulting, and data intelligence. We help brands ignite their digital presence with performance-driven strategies, creative storytelling, and precision-targeted campaigns.
Whether you're aiming for brand awareness, lead generation, or ROI maximization, our expert team blends technology and innovation to deliver measurable results across iOS, Android, and beyond.
Webtechnomind – Where creativity meets conversion.`,
        services: [
            { label: 'iOS Development', color: 'bg-blue-100 text-blue-600', position: 'left-top' },
            { label: 'Android Development', color: 'bg-pink-100 text-pink-600', position: 'left-mid' },
            { label: 'Flutter & React Native', color: 'bg-green-100 text-green-700', position: 'left-bot' },
            { label: 'App UI/UX Design', color: 'bg-pink-100 text-pink-500', position: 'left-last' },
            { label: 'App Store Optimization', color: 'bg-purple-100 text-purple-600', position: 'right-top' },
            { label: 'Push Notifications', color: 'bg-yellow-100 text-yellow-700', position: 'right-mid' },
            { label: 'In-App Purchases', color: 'bg-pink-100 text-pink-500', position: 'right-mid2' },
            { label: 'Mobile Analytics', color: 'bg-green-100 text-green-700', position: 'right-bot' },
        ],
    },
    {
        id: 'ecommerce',
        label: 'Ecommerce Development',
        IconComponent: ShoppingCart,
        title: 'Ecommerce Development',
        description: `Top Ecommerce Development Services Agency
Unlock exponential business growth with Webtechnomind — a tech-powered ecommerce development agency that thrives at the intersection of technology, consulting, and data intelligence. We help brands ignite their digital presence with performance-driven strategies, creative storytelling, and precision-targeted campaigns.
Whether you're aiming for brand awareness, lead generation, or ROI maximization, our expert team blends technology and innovation to deliver measurable results across all ecommerce platforms and beyond.
Webtechnomind – Where creativity meets conversion.`,
        services: [
            { label: 'Shopify Development', color: 'bg-blue-100 text-blue-600', position: 'left-top' },
            { label: 'WooCommerce', color: 'bg-pink-100 text-pink-600', position: 'left-mid' },
            { label: 'Payment Integration', color: 'bg-green-100 text-green-700', position: 'left-bot' },
            { label: 'Product Management', color: 'bg-pink-100 text-pink-500', position: 'left-last' },
            { label: 'Cart & Checkout', color: 'bg-purple-100 text-purple-600', position: 'right-top' },
            { label: 'Order Management', color: 'bg-yellow-100 text-yellow-700', position: 'right-mid' },
            { label: 'Inventory System', color: 'bg-pink-100 text-pink-500', position: 'right-mid2' },
            { label: 'Analytics & Reports', color: 'bg-green-100 text-green-700', position: 'right-bot' },
        ],
    },
    {
        id: 'digital',
        label: 'Digital Marketing',
        IconComponent: Megaphone,
        title: 'Digital Marketing',
        description: `Top Digital Marketing Services Agency
Unlock exponential business growth with Webtechnomind — a tech-powered digital marketing agency that thrives at the intersection of marketing, consulting, and data intelligence. We help brands ignite their digital presence with performance-driven strategies, creative storytelling, and precision-targeted campaigns.
Whether you're aiming for brand awareness, lead generation, or ROI maximization, our expert team blends technology and innovation to deliver measurable results across SEO, PPC, social media, and beyond.
Webtechnomind – Where creativity meets conversion.`,
        services: [
            { label: 'Social Media Marketing', color: 'bg-blue-100 text-blue-600', position: 'left-top' },
            { label: 'Digital Marketing Service', color: 'bg-pink-100 text-pink-600', position: 'left-mid' },
            { label: 'Search Engine Optimization', color: 'bg-green-100 text-green-700', position: 'left-bot' },
            { label: 'Paid Advertising', color: 'bg-pink-100 text-pink-500', position: 'left-last' },
            { label: 'Brand Management', color: 'bg-purple-100 text-purple-600', position: 'right-top' },
            { label: 'Specialized eCommerce SEO', color: 'bg-yellow-100 text-yellow-700', position: 'right-mid' },
            { label: 'Conversion Rate Optimization', color: 'bg-pink-100 text-pink-500', position: 'right-mid2' },
            { label: 'Content Marketing', color: 'bg-green-100 text-green-700', position: 'right-bot' },
        ],
    },
    {
        id: 'ai',
        label: 'AI and ML',
        IconComponent: BrainCircuit,
        title: 'AI and ML',
        description: `Top AI & ML Services Agency
Unlock exponential business growth with Webtechnomind — a tech-powered AI and machine learning agency that thrives at the intersection of intelligence, consulting, and data science. We help brands ignite their digital presence with performance-driven strategies, intelligent automation, and precision-targeted solutions.
Whether you're aiming for predictive analytics, process automation, or AI-powered experiences, our expert team blends technology and innovation to deliver measurable results across all industries and beyond.
Webtechnomind – Where creativity meets conversion.`,
        services: [
            { label: 'Machine Learning', color: 'bg-blue-100 text-blue-600', position: 'left-top' },
            { label: 'Natural Language Processing', color: 'bg-pink-100 text-pink-600', position: 'left-mid' },
            { label: 'Computer Vision', color: 'bg-green-100 text-green-700', position: 'left-bot' },
            { label: 'Predictive Analytics', color: 'bg-pink-100 text-pink-500', position: 'left-last' },
            { label: 'AI Chatbots', color: 'bg-purple-100 text-purple-600', position: 'right-top' },
            { label: 'Deep Learning', color: 'bg-yellow-100 text-yellow-700', position: 'right-mid' },
            { label: 'Data Science', color: 'bg-pink-100 text-pink-500', position: 'right-mid2' },
            { label: 'Model Deployment', color: 'bg-green-100 text-green-700', position: 'right-bot' },
        ],
    },
    {
        id: 'cloud',
        label: 'Cloud Services',
        IconComponent: Cloud,
        title: 'Cloud Services',
        description: `Top Cloud Services Agency
Unlock exponential business growth with Webtechnomind — a tech-powered cloud services agency that thrives at the intersection of technology, consulting, and data intelligence. We help brands ignite their digital presence with performance-driven strategies, scalable infrastructure, and precision-targeted cloud solutions.
Whether you're aiming for scalability, cost optimization, or high availability, our expert team blends technology and innovation to deliver measurable results across AWS, Azure, GCP, and beyond.
Webtechnomind – Where creativity meets conversion.`,
        services: [
            { label: 'AWS Solutions', color: 'bg-blue-100 text-blue-600', position: 'left-top' },
            { label: 'Azure Services', color: 'bg-pink-100 text-pink-600', position: 'left-mid' },
            { label: 'Google Cloud Platform', color: 'bg-green-100 text-green-700', position: 'left-bot' },
            { label: 'Cloud Migration', color: 'bg-pink-100 text-pink-500', position: 'left-last' },
            { label: 'Cloud Security', color: 'bg-purple-100 text-purple-600', position: 'right-top' },
            { label: 'Serverless Architecture', color: 'bg-yellow-100 text-yellow-700', position: 'right-mid' },
            { label: 'Auto Scaling', color: 'bg-pink-100 text-pink-500', position: 'right-mid2' },
            { label: 'Disaster Recovery', color: 'bg-green-100 text-green-700', position: 'right-bot' },
        ],
    },
];
const OurExpertise = () => {
    const [activeTab, setActiveTab] = useState('digital');
    const active = tabs.find(t => t.id === activeTab)!;
    const leftServices = active.services.filter(s => s.position.startsWith('left'));
    const rightServices = active.services.filter(s => s.position.startsWith('right'));

    return (
        <section className="w-full  py-16! bg-[#f5f5f7]">
            <div className="max-w-[1300px] mx-auto">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
                    Your Dream{' '}
                    <span className="bg-linear-to-r from-[#1E7FF8] via-[#0E8DF6] via-[#AB82E0] to-[#E75061] bg-clip-text text-transparent">
                        Our Expertise
                    </span>
                </h2>
                <div className="flex items-center justify-center gap-6 flex-wrap mb-2  ">
                    {tabs.map((tab) => {
                        const Icon = tab.IconComponent;
                        const isActive = activeTab === tab.id;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="relative flex flex-col items-center pt-8 focus:outline-none cursor-pointer"
                            >
                                {/* Floating Icon */}
                                <div
                                    className={`absolute -top-1 w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 z-10
                                     ${isActive
                                            ? "bg-gray-900 border-gray-300"
                                            : "bg-white border-gray-300"
                                        }`}
                                >
                                    <Icon
                                        className={`w-6 h-6 transition-all duration-300 ${isActive ? "text-white" : "text-gray-500"
                                            }`}
                                    />
                                </div>

                                {/* Card Body */}
                                <div
                                    className={`p-7 rounded-xl  flex items-center justify-center text-center border transition-all duration-300
                                        ${isActive
                                            ? "bg-gray-900 text-white border-gray-900 shadow-lg"
                                            : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                                        }`}
                                >
                                    <span className="text-[13px] font-semibold leading-snug w-full break-all hyphens-none">
                                        {tab.label}
                                    </span>
                                </div>

                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className=" flex justify-between items-center px-3">

                    {/* Left Text */}
                    <div className="w-[35%] shrink-0 ">
                        <h3 className="text-2xl font-bold text-black mb-4">{active.title}</h3>
                        <div className="text-[16px] text-[#3F3F3F]  font-medium leading-relaxed whitespace-pre-line">
                            {active.description}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="   " style={{ minHeight: '420px' }} >


                        {/* Girl Image */}
                        <div className="relative  z-10">
                            <Image
                                src="/images/digital_marketing_our_expertise.webp"
                                alt="expertise"
                                width={800}
                                height={550}
                                className="object-contain"
                            />
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurExpertise;