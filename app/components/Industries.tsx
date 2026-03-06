const industries = [
  { name: "Healthcare", count: "150+", icon: "🏥" },
  { name: "FinTech", count: "200+", icon: "💰" },
  { name: "eCommerce", count: "250+", icon: "🛍" },
  { name: "Education", count: "110+", icon: "🎓" },
  { name: "Logistics", count: "120+", icon: "🚚" },
  { name: "Automotive", count: "40+", icon: "🚗" },
  { name: "Agriculture", count: "30+", icon: "🌾" },
  { name: "Gaming", count: "60+", icon: "🎮" },
  { name: "Sports", count: "35+", icon: "⚽" },
  { name: "On-Demand", count: "300+", icon: "⚡" },
  { name: "Events", count: "45+", icon: "🎪" },
  { name: "Social", count: "80+", icon: "💬" },
  { name: "Fitness", count: "70+", icon: "💪" },
  { name: "Entertainment", count: "90+", icon: "🎬" },
  { name: "Restaurant", count: "100+", icon: "🍽" },
  { name: "SaaS", count: "150+", icon: "☁️" },
  { name: "Government", count: "20+", icon: "🏛" },
  { name: "Real Estate", count: "55+", icon: "🏘" },
  { name: "EV & Energy", count: "25+", icon: "⚡" },
  { name: "Media", count: "40+", icon: "📺" },
  { name: "Aviation", count: "15+", icon: "✈️" },
  { name: "OTT", count: "30+", icon: "📡" },
  { name: "Travel", count: "65+", icon: "🌍" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-bg-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Industry Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            23+ Industries <span className="gradient-text">Served</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Deep domain expertise across all major verticals — delivering specialized solutions that meet industry-specific challenges.
          </p>
        </div>

        {/* Top 5 highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {industries.slice(0, 5).map((ind, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-5 text-center hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{ind.icon}</div>
              <div className="text-white font-semibold text-sm">{ind.name}</div>
              <div className="text-purple-400 font-bold text-lg">{ind.count}</div>
              <div className="text-gray-500 text-xs">apps built</div>
            </div>
          ))}
        </div>

        {/* All industries grid */}
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.slice(5).map((ind, idx) => (
            <div
              key={idx}
              className="card-glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
            >
              <span className="text-base">{ind.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{ind.name}</span>
              <span className="text-purple-400 text-xs font-bold">{ind.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
