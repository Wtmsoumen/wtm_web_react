import Link from 'next/link'

const ServicesHeading = () => {
    return (
        <section className="w-full  pt-20 ">
            <div className="max-w-7xl mx-auto ">
                {/* Services Heading with Button */}
                <div className="relative text-center">
                    {/* Large SERVICES Text */}
                    <h2 className="text-[48px] sm:text-[72px] md:text-[110px] lg:text-[150px] xl:text-[180px] font-bold uppercase leading-none tracking-tight text-black">
                        SERVICES
                    </h2>

                    {/* Service Categories + Button Row */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6 text-sm md:text-base font-semibold uppercase tracking-wide text-black">
                        <span className='cursor-pointer'>UI/UX DESIGN</span>
                        <span className='cursor-pointer'>DIGITAL MARKETING</span>
                        <span className='cursor-pointer'>WEB DEVELOPMENT</span>
                        <span className='cursor-pointer'>APP DEVELOPMENT</span>

                        {/* See All Services Button - inline on mobile */}
                        <Link href="/services">
                            <button className="cursor-pointer group flex items-center gap-3 pl-8 pr-2 py-1 rounded-full bg-gradient-to-r from-[#D91D0B] to-[#3E4697] text-white font-semibold text-sm hover:shadow-xl transition-all duration-300">
                                See All Services
                                <div className="w-8 h-8 bg-purple-900 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 17L17 7M17 7H7M17 7V17"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHeading