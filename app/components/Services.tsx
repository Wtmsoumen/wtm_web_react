const services = [
  {
    icon: "🤖",
    title: "AI Engineering",
    description:
      "Custom AI models, LLM integrations, and intelligent automation solutions tailored for your business needs.",
  },
  {
    icon: "⛓",
    title: "Blockchain Development",
    description:
      "Smart contracts, DeFi platforms, NFT marketplaces, and enterprise blockchain solutions.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native and cross-platform iOS & Android apps with seamless user experiences.",
  },
  {
    icon: "🌐",
    title: "Custom Web Development",
    description:
      "Scalable web applications, SaaS platforms, and progressive web apps built for performance.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "End-to-end custom software solutions, APIs, and microservices architecture.",
  },
  {
    icon: "🔄",
    title: "Digital Transformation",
    description:
      "Legacy modernization, cloud migration, and business process automation.",
  },
  {
    icon: "📊",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies, SEO, performance campaigns, and growth hacking.",
  },
  {
    icon: "📈",
    title: "Data Science & Analytics",
    description:
      "Big data processing, predictive analytics, and business intelligence dashboards.",
  },
  {
    icon: "🛒",
    title: "E-commerce Development",
    description:
      "Custom storefronts, marketplace platforms, and headless commerce solutions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-bg-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive technology services to build, scale, and transform your digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-pink-400 transition-colors"
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
