import {
  Sparkles, Bot,
  Link2,
  Smartphone,
  Globe,
  Code2,
  RefreshCw,
  BarChart2,
  TrendingUp,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { globalStyle } from "../globalStyle";
import Link from "next/link";




const services = [
  {
    slug: "ai-engineering",
    icon: Bot,
    title: "AI Engineering",
    description: "Custom AI models, LLM integrations, and intelligent automation solutions tailored for your business needs.",
  },
  {
    slug: "digital-marketing",
    icon: BarChart2,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies, SEO, performance campaigns, and growth hacking.",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform iOS & Android apps with seamless user experiences.",
  },
  {
    slug: "custom-web-development",
    icon: Globe,
    title: "Custom Web Development",
    description: "Scalable web applications, SaaS platforms, and progressive web apps built for performance.",
  },
  {
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    description: "End-to-end custom software solutions, APIs, and microservices architecture.",
  },

  {
    slug: "digital-transformation",
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Legacy modernization, cloud migration, and business process automation.",
  },
  {
    slug: "ecommerce-development",
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Custom storefronts, marketplace platforms, and headless commerce solutions.",
  },
  {

    slug: "blockchain-development",
    icon: Link2,
    title: "Blockchain Development",
    description: "Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.",
  },
  {
    slug: "data-science-analytics",
    icon: TrendingUp,
    title: "Data Science & Analytics",
    description: "Big data processing, predictive analytics, and business intelligence dashboards.",
  },
];

export default function Services() {
  return (
    <section id="services" className="  !bg-white py-16!">
      <div className="max-w-7xl mx-auto! px-4 sm:px-6   ">
        {/* Header */}
        <div className="flex flex-col items-center text-center !mb-13  gap-4">

          {/* Badge */}
          <div className={`${globalStyle?.gradientText} inline-flex items-center gap-2 !px-4 !py-2 rounded-full border-gray-100`}>
            {/* inline-flex items-center gap-2 !px-4 !py-2 rounded-full border-gray-100*/}
            <Sparkles className="w-5 h-5 " />
            <span className="text-md font-semibold tracking-wide">
              Our Expertise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold">
            What We <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Offer</span>
          </h2>

          {/* Description */}
          <p className="text-black text-base md:text-xl max-w-2xl leading-relaxed">
            Comprehensive technology services to build, scale, and transform your digital products.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 card-glass rounded-2xl p-6! transition-all duration-300 group cursor-pointer relative group shadow-lg"
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full  bg-gray-400 translate-x-10 translate-y-10 opacity-20  transition-all duration-500 group-hover:scale-125 group-hover:bg-gradient-to-r group-hover:from-[#1D74CF] group-hover:via-[#b33b41] group-hover:to-[#D04425]">
                </div>
              </div>
              <div className={`${globalStyle?.gradientText} w-12 h-12 rounded-xl  flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {/*  */}
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-md leading-relaxed mb-4">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-[#ff0000b1] text-md  font-medium hover:text-pink-400 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button className={`bg-linear-to-r from-pink-500 to-blue-500  flex items-center gap-3  text-white text-sm font-bold px-14 py-5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300  `}>


            Discuss Your Project
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
