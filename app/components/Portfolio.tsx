const projects = [
  {
    name: "BitDelta",
    category: "Crypto Exchange",
    description: "Global crypto & derivatives exchange built for high-frequency trading.",
    metric1: "2M+",
    metric1Label: "Active Users",
    metric2: "130+",
    metric2Label: "Countries",
    tag: "Featured",
    color: "from-orange-500 to-yellow-500",
    bg: "from-orange-900/20 to-yellow-900/10",
    icon: "₿",
  },
  {
    name: "Flitpay",
    category: "FinTech",
    description: "Crypto payment gateway enabling fast, borderless transactions.",
    metric1: "500K+",
    metric1Label: "Users",
    metric2: "4.5★",
    metric2Label: "App Rating",
    tag: "FinTech",
    color: "from-blue-500 to-cyan-500",
    bg: "from-blue-900/20 to-cyan-900/10",
    icon: "💳",
  },
  {
    name: "MINTIT",
    category: "NFT Marketplace",
    description: "NFT creation, trading, and discovery platform for digital creators.",
    metric1: "10K+",
    metric1Label: "Users",
    metric2: "4.8★",
    metric2Label: "App Rating",
    tag: "NFT",
    color: "from-purple-500 to-violet-500",
    bg: "from-purple-900/20 to-violet-900/10",
    icon: "🖼",
  },
  {
    name: "Bodhi",
    category: "AI Astrology",
    description: "AI-powered astrology app with personalised cosmic insights.",
    metric1: "5M+",
    metric1Label: "Users",
    metric2: "4.7★",
    metric2Label: "App Rating",
    tag: "AI",
    color: "from-indigo-500 to-purple-500",
    bg: "from-indigo-900/20 to-purple-900/10",
    icon: "✨",
  },
  {
    name: "Once Dating",
    category: "Social",
    description: "Quality-first dating app with daily curated matches.",
    metric1: "1M+",
    metric1Label: "Users",
    metric2: "4.6★",
    metric2Label: "App Rating",
    tag: "Social",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-900/20 to-rose-900/10",
    icon: "❤️",
  },
  {
    name: "Tuning Empire",
    category: "E-Commerce",
    description: "Australia's leading performance parts e-commerce platform.",
    metric1: "50K+",
    metric1Label: "Products",
    metric2: "4.9★",
    metric2Label: "Rating",
    tag: "E-Commerce",
    color: "from-green-500 to-emerald-500",
    bg: "from-green-900/20 to-emerald-900/10",
    icon: "🚗",
  },
];

export default function Portfolio() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="portfolio" className="section-bg py-24">
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From crypto exchanges to AI-powered apps — we build products that scale globally.
          </p>
        </div>

        {/* Featured Project */}
        <div
          className={`relative card-glass rounded-3xl p-8 md:p-12 mb-6 overflow-hidden bg-gradient-to-br ${featured.bg}`}
        >
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {featured.tag}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${featured.color} flex items-center justify-center text-4xl shrink-0`}
            >
              {featured.icon}
            </div>
            <div className="flex-1">
              <div className="text-gray-400 text-sm font-medium mb-1">{featured.category}</div>
              <h3 className="text-white text-3xl font-bold mb-2">{featured.name}</h3>
              <p className="text-gray-300 text-base max-w-lg">{featured.description}</p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${featured.color} bg-clip-text text-transparent`}>
                  {featured.metric1}
                </div>
                <div className="text-gray-400 text-xs mt-1">{featured.metric1Label}</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${featured.color} bg-clip-text text-transparent`}>
                  {featured.metric2}
                </div>
                <div className="text-gray-400 text-xs mt-1">{featured.metric2Label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, idx) => (
            <div
              key={idx}
              className={`card-glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 overflow-hidden bg-gradient-to-br ${project.bg}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl`}
                >
                  {project.icon}
                </div>
                <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>
              <div className="text-gray-400 text-xs mb-1">{project.category}</div>
              <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex gap-6">
                <div>
                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                  >
                    {project.metric1}
                  </div>
                  <div className="text-gray-500 text-xs">{project.metric1Label}</div>
                </div>
                <div>
                  <div
                    className={`text-xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                  >
                    {project.metric2}
                  </div>
                  <div className="text-gray-500 text-xs">{project.metric2Label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="border border-purple-500/40 text-purple-400 px-8 py-3 rounded-full text-sm font-semibold hover:bg-purple-500/10 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
