import Link from "next/link";
import { globalStyle } from "../globalStyle";
import ScrollReveal from "./ScrollReveal";
// import { useRouter } from "next/router";

const posts = [
  {
    slug: "how-ai-is-transforming-on-demand-app-development-2025",
    category: "AI & ML",
    title: "How AI is Transforming On-Demand App Development in 2025",
    excerpt:
      "Discover how generative AI, LLMs, and intelligent automation are reshaping how on-demand platforms are built and scaled.",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    slug: "building-scalable-defi-platforms-architecture-deep-dive",
    category: "Blockchain",
    title: "Building Scalable DeFi Platforms: Architecture Deep Dive",
    excerpt:
      "A technical breakdown of how we built a crypto exchange handling $50M+ in daily volume — infrastructure, smart contracts, and security.",
    date: "Feb 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    slug: "react-native-vs-flutter-2025",
    category: "Mobile Dev",
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    excerpt:
      "An honest comparison based on 300+ production apps — performance benchmarks, developer experience, and when to use each.",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  },
];

export default function BlogSection() {

  // const router = useRouter();

  return (
    <ScrollReveal>
      <section className="bg-white pb-18! pt-10">
        <div className="max-w-7xl mx-auto! px-4 sm:px-6">
          {/* Header */}
          <div
            className="flex flex-col items-center mb-16 gap-4"
            data-aos="fade-down"
          >
            <span className="text-purple-400 text-lg font-semibold uppercase tracking-widest">
              Blog & Insights
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Latest{" "}
              <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>
                Tech News
              </span>
            </h2>

            <a
              href="#"
              className="border border-purple-500/40 text-purple-400 px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-500/10 transition-colors"
            >
              View All Articles →
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <Link
                key={idx}
                className="card-glass rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                href={`/blogs/${post.slug}`}
              >
                {/* Card image/banner */}
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/20 text-purple-400">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-black font-semibold text-base mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <Link href={`/blogs/${post.slug}`} className="text-purple-400 text-sm font-medium hover:text-pink-400 transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
