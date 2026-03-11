import Link from 'next/link'

const ServicesHeading = () => {
    return (
        <section className="w-full  pt-20 ">
            <div className="max-w-7xl mx-auto ">
                {/* Services Heading with Button */}
                <div className="relative   text-center">
                    {/* Large SERVICES Text */}
                    <h2 className="text-[100px] md:text-[140px] lg:text-[180px] font-bold uppercase leading-none tracking-tight text-black">
                        SERVICES
                    </h2>

                    {/* Service Categories Below */}
                    <div className="   flex flex-wrap  justify-center gap-8 md:gap-22 mt-6 text-sm md:text-base font-semibold uppercase tracking-wide text-black  ">
                        <span className='cursor-pointer'>UI/UX DESIGN</span>
                        <span className='cursor-pointer'>DIGITAL MARKETING</span>
                        <span className='cursor-pointer'>WEB DEVELOPMENT</span>
                        <span className='cursor-pointer'>APP DEVELOPMENT</span>
                    </div>

                    {/* See All Services Button - Positioned at top right */}
                    <Link href="/services">
                        <button className="cursor-pointer absolute top-16.5 right-57  -rotate-30 group flex items-center gap-3 pl-12  pr-2 py-1 rounded-full bg-gradient-to-r from-[#D91D0B] to-[#3E4697] text-white font-semibold text-sm hover:shadow-xl transition-all duration-300 ">
                            See All Services
                            <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-45"
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
        </section>
    )
}

export default ServicesHeading