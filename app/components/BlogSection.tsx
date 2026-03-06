const posts = [
  {
    category: "AI & ML",
    title: "How AI is Transforming On-Demand App Development in 2025",
    excerpt:
      "Discover how generative AI, LLMs, and intelligent automation are reshaping how on-demand platforms are built and scaled.",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    color: "from-purple-500 to-pink-500",
    icon: "🤖",
  },
  {
    category: "Blockchain",
    title: "Building Scalable DeFi Platforms: Architecture Deep Dive",
    excerpt:
      "A technical breakdown of how we built a crypto exchange handling $50M+ in daily volume — infrastructure, smart contracts, and security.",
    date: "Feb 20, 2025",
    readTime: "8 min read",
    color: "from-orange-500 to-yellow-500",
    icon: "⛓",
  },
  {
    category: "Mobile Dev",
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    excerpt:
      "An honest comparison based on 300+ production apps — performance benchmarks, developer experience, and when to use each.",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    color: "from-blue-500 to-cyan-500",
    icon: "📱",
  },
];

export default function BlogSection() {
  return (
    <section className="section-bg-alt py-24">
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-4">
          <div>
            <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Blog & Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Latest <span className="gradient-text">Tech News</span>
            </h2>
          </div>
          <a
            href="#"
            className="border border-purple-500/40 text-purple-400 px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-500/10 transition-colors whitespace-nowrap"
          >
            View All Articles →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="card-glass rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer group"
            >
              {/* Card image/banner */}
              <div className={`h-40 bg-gradient-to-br ${post.color} flex items-center justify-center text-6xl relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="relative z-10">{post.icon}</span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <a href="#" className="text-purple-400 text-xs font-medium hover:text-pink-400 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
