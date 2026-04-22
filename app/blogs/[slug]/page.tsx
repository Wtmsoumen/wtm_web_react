import { globalStyle } from "@/app/globalStyle";
import {
  Calendar,
  Clock,
  Eye,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  ArrowLeft,
  Tag,
  User,
  BookOpen,
  TrendingUp,
  Share2,
} from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";

// ─── Mock related posts ──────────────────────────────────────────────────────
const relatedPosts = [
  {
    slug: "building-scalable-defi-platforms-architecture-deep-dive",
    category: "Blockchain",
    title: "Building Scalable DeFi Platforms: Architecture Deep Dive",
    excerpt:
      "A technical breakdown of how we built a crypto exchange handling $50M+ in daily volume.",
    date: "Feb 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    slug: "how-ai-is-transforming-on-demand-app-development-2025",
    category: "AI & ML",
    title: "How AI is Transforming On-Demand App Development in 2025",
    excerpt:
      "Generative AI, LLMs, and intelligent automation are reshaping how platforms are built.",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    slug: "react-native-vs-flutter-in-2025-which-should-you-choose",
    category: "Mobile Dev",
    title: "React Native vs Flutter in 2025: Which Should You Choose?",
    excerpt:
      "An honest comparison based on 300+ production apps — performance benchmarks and DX.",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  },
];

// ─── Table of Contents ───────────────────────────────────────────────────────
const toc = [
  { id: "overview", label: "Overview" },
  { id: "legal", label: "Legal & Compliance" },
  { id: "architecture", label: "Matching Engine" },
  { id: "wallet", label: "Wallet Custody" },
  { id: "security", label: "Security" },
  { id: "cost", label: "Development Costs" },
];

// ─── Blog post meta ──────────────────────────────────────────────────────────
const post = {
  breadcrumb: ["Home", "Blog"],
  category: "Blockchain",
  title: "Crypto Exchange Development in India | Cost, Legal & Tech Guide",
  excerpt:
    "Complete guide to building a crypto exchange in India. Covers FIU-IND compliance, development costs (₹18–30 Lakhs), proprietary matching engine architecture, wallet custody systems, and security requirements.",
  author: {
    name: "Yogesh Gangawat",
    role: "Managing Director",
    avatar: "YG",
    avatarColor: "from-purple-500 to-pink-500",
  },
  date: "February 9, 2026",
  readTime: "24 min read",
  views: "37 views",
  tags: ["Crypto Development", "Exchange Architecture", "Compliance"],
  heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
};

export default function BlogDetailPage() {
  return (
    <main className="bg-[#0d1117] min-h-screen text-white pt-24">

      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative overflow-hidden border-b border-white/5 py-16">
          <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="pointer-events-none absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-600/8 blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" data-aos="fade-up">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-10">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={12} />
              <a href="/blogs" className="hover:text-white transition-colors">Blog</a>
              <ChevronRight size={12} />
              <span className="text-purple-400 font-bold">{post.category}</span>
            </nav>

            <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-black tracking-widest uppercase mb-8 inline-block">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 max-w-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-10 border-t border-white/5 pt-10">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${post.author.avatarColor} flex items-center justify-center text-white font-black shadow-2xl`}>
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-white font-bold">{post.author.name}</p>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">{post.author.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm font-bold">
                <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
                <span className="flex items-center gap-2"><Share2 size={16} /> Shared 124 times</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Main Content Area ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:grid lg:grid-cols-12 gap-16 items-start">

        {/* Sidebar TOC */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32">
          <div className="flex flex-col gap-10" data-aos="fade-right">
            <div>
              <h3 className="text-[10px] font-black text-white/30 tracking-widest uppercase mb-6 flex items-center gap-2">
                <BookOpen size={14} /> CONTENT NAVIGATION
              </h3>
              <ul className="space-y-4">
                {toc.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm font-bold text-gray-500 hover:text-white flex items-center gap-3 transition-colors group">
                      <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
              <p className="text-xs font-black text-purple-400 mb-2 uppercase tracking-tight">Need expert help?</p>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">Building a crypto exchange is complex. Let our experts guide you.</p>
              <button className="w-full bg-white text-black font-black py-3 rounded-xl text-[10px] tracking-widest uppercase hover:bg-purple-500 hover:text-white transition-all">CONSULT EXPERT</button>
            </div>
          </div>
        </aside>

        {/* Content Body */}
        <article className="lg:col-span-9" data-aos="fade-up">
          <div className="rounded-3xl overflow-hidden mb-16 shadow-2xl border border-white/5">
            <img src={post.heroImage} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-invert prose-purple max-w-none">
            <div id="overview" className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Guide Overview</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                India&apos;s crypto landscape has undergone a seismic shift since the RBI circular reversal in 2020. With the FIU-IND now mandating VDA service providers to register and comply with PMLA provisions, building a compliant crypto exchange is both a technical and regulatory challenge. This guide covers everything a founder or CTO needs to know.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-16 italic text-gray-300">
              &quot;Regulatory compliance is not a post-launch concern — it must be baked into the architecture from day one, especially for wallet custody and KYC flows.&quot;
            </div>

            <div id="legal" className="mb-16">
              <h2 className="text-3xl font-black text-white mb-6">Legal & Compliance (FIU-IND)</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">All Virtual Digital Asset (VDA) service providers operating in India must register with the Financial Intelligence Unit – India (FIU-IND) under the Prevention of Money Laundering Act (PMLA).</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "FIU-IND registration as Reporting Entity",
                  "Aadhaar + PAN based e-KYC flow",
                  "Transaction monitoring & STR filing",
                  "30% TDS gain calculation logic",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                    <span className="text-white/70 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-32 pt-20 border-t border-white/5">
            <div className="flex items-center justify-between mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-black text-white">Recommended For You</h2>
              <div className="flex gap-2">
                {post.tags.map(t => (
                  <span key={t} className="text-[10px] font-black text-gray-500 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((r, i) => (
                <Link href={`/blogs/${r.slug}`} key={i} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-xl border border-white/5">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black text-purple-600 uppercase tracking-widest">{r.category}</span>
                    </div>
                  </div>
                  <h3 className="text-white font-black text-lg group-hover:text-purple-400 transition-colors leading-tight mb-4">{r.title}</h3>
                  <div className="flex items-center gap-4 text-gray-500 text-xs font-bold">
                    <span>{r.date}</span>
                    <div className="w-1 H-1 rounded-full bg-gray-700" />
                    <span>{r.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

      </section>

    </main>
  );
}