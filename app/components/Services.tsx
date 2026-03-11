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
} from "lucide-react";
import { globalStyle } from "../globalStyle";




const services = [
  {
    icon: Bot,
    title: "AI Engineering",
    description: "Custom AI models, LLM integrations, and intelligent automation solutions tailored for your business needs.",
  },
  {
    icon: Link2,
    title: "Blockchain Development",
    description: "Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform iOS & Android apps with seamless user experiences.",
  },
  {
    icon: Globe,
    title: "Custom Web Development",
    description: "Scalable web applications, SaaS platforms, and progressive web apps built for performance.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "End-to-end custom software solutions, APIs, and microservices architecture.",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Legacy modernization, cloud migration, and business process automation.",
  },
  {
    icon: BarChart2,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies, SEO, performance campaigns, and growth hacking.",
  },
  {
    icon: TrendingUp,
    title: "Data Science & Analytics",
    description: "Big data processing, predictive analytics, and business intelligence dashboards.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description: "Custom storefronts, marketplace platforms, and headless commerce solutions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="  !bg-white py-16!">
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="flex flex-col items-center text-center !mb-13  gap-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 !px-4 !py-2 rounded-full gradient-btn border-gray-100">
            <Sparkles className="w-5 h-5 " />
            <span className="text-md font-semibold tracking-wide">
              Our Expertise
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-black text-5xl md:text-6xl font-bold">
            What We <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>Offer</span>
          </h2>

          {/* Description */}
          <p className="text-black text-xl  max-w-2xl leading-relaxed">
            Comprehensive technology services to build, scale, and transform your digital products.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 card-glass rounded-2xl !p-6 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl icon-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-black font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-md leading-relaxed mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#ff0000b1] text-md  font-medium hover:text-pink-400 transition-colors"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
