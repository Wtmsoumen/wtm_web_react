import Link from 'next/link'
import ScrollReveal from "./ScrollReveal";

interface ServicesHeadingProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const ServicesHeading: React.FC<ServicesHeadingProps> = ({ activeFilter, onFilterChange }) => {
    const categories = [
        "ALL",
        "UI/UX DESIGN",
        "DIGITAL MARKETING",
        "WEB DEVELOPMENT",
        "APP DEVELOPMENT"
    ];

    return (
        <ScrollReveal>
            <section className="w-full pt-12">
                <div className="max-w-7xl mx-auto">
                    {/* Services Heading with Button */}
                    <div className="relative text-center">
                        {/* Large SERVICES Text */}
                        <h2
                            className="text-[48px] sm:text-[72px] md:text-[110px] lg:text-[150px] xl:text-[180px] font-bold uppercase leading-none tracking-tight text-black"
                            data-aos="fade-down"
                        >
                            SERVICES
                        </h2>

                        {/* Service Categories + Button Row */}
                        <div
                            className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6 text-sm md:text-base font-semibold uppercase tracking-wide text-black"
                            data-aos="fade-up"
                        >
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    onClick={() => onFilterChange(category)}
                                    className={`cursor-pointer transition-all duration-300 hover:text-blue-600 ${activeFilter === category ? "text-blue-600 border-b-2 border-blue-600" : ""
                                        }`}
                                >
                                    {category}
                                </span>
                            ))}

                            {/* See All Services Button - inline on mobile */}
                            <Link href="#services">
                                <button className="cursor-pointer group flex items-center gap-3 pl-8 pr-2 py-2 rounded-full bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] text-white font-medium text-sm hover:shadow-xl transition-all duration-300">
                                    See All Services
                                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg
                                            className="w-4 h-4 text-black transition-transform duration-300 group-hover:rotate-45"
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
        </ScrollReveal>
    )
}

export default ServicesHeading