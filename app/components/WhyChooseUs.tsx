const features = [
  {
    stat: "50+",
    statLabel: "AI Projects",
    title: "AI-First Development",
    description:
      "We embed AI into every solution — from intelligent recommendations to real-time automation and predictive analytics.",
    icon: "🧠",
  },
  {
    stat: "99.9%",
    statLabel: "Uptime",
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption, SOC 2 compliance, GDPR-ready infrastructure, and 24/7 monitoring.",
    icon: "🔒",
  },
  {
    stat: "2-Week",
    statLabel: "Sprints",
    title: "Agile & DevOps Excellence",
    description:
      "Rapid delivery with CI/CD pipelines, automated testing, and transparent project tracking.",
    icon: "⚡",
  },
  {
    stat: "100+",
    statLabel: "Engineers",
    title: "Dedicated Tech Teams",
    description:
      "Handpicked experts across AI, blockchain, mobile, web, and cloud — fully dedicated to your project.",
    icon: "👥",
  },
  {
    stat: "95%",
    statLabel: "Test Coverage",
    title: "Clean Code Architecture",
    description:
      "SOLID principles, design patterns, and rigorous code reviews to ensure maintainable, scalable code.",
    icon: "✅",
  },
  {
    stat: "10M+",
    statLabel: "Users Scaled",
    title: "Scalable Cloud Solutions",
    description:
      "AWS, GCP, and Azure expertise to architect systems that handle millions of users without breaking.",
    icon: "☁️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for <span className="gradient-text">Scale & Speed</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine technical excellence with proven processes to deliver products that succeed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="card-glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-btn flex items-center justify-center text-xl shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">{f.stat}</div>
                  <div className="text-gray-500 text-xs">{f.statLabel}</div>
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
