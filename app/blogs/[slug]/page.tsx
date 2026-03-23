import Footer from "@/app/components/Footer";
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

// ─── Mock related posts ──────────────────────────────────────────────────────
const relatedPosts = [
  {
    category: "Blockchain",
    title: "Building Scalable DeFi Platforms: Architecture Deep Dive",
    excerpt:
      "A technical breakdown of how we built a crypto exchange handling $50M+ in daily volume.",
    date: "Feb 20, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    category: "AI & ML",
    title: "How AI is Transforming On-Demand App Development in 2025",
    excerpt:
      "Generative AI, LLMs, and intelligent automation are reshaping how platforms are built.",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
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
  { id: "legal", label: "Legal & Compliance (FIU-IND)" },
  { id: "architecture", label: "Matching Engine Architecture" },
  { id: "wallet", label: "Wallet Custody Systems" },
  { id: "security", label: "Security Requirements" },
  { id: "cost", label: "Development Costs" },
  { id: "conclusion", label: "Conclusion" },
];

// ─── Blog post meta ──────────────────────────────────────────────────────────
const post = {
  breadcrumb: ["Home", "Blog"],
  category: "Blockchain",
  title: "Crypto Exchange Development in India | Cost, Legal & Tech Guide",
  excerpt:
    "Complete guide to building a crypto exchange in India. Covers FIU-IND compliance, development costs (₹18–30 Lakhs), proprietary matching engine architecture, wallet custody systems, and security requirements. Written for founders and CTOs planning to launch compliant exchanges.",
  author: {
    name: "Yogesh Gangawat",
    role: "Managing Director",
    avatar: "YG",
    avatarColor: "from-purple-500 to-pink-500",
  },
  date: "February 9, 2026",
  readTime: "24 min read",
  views: "37 views",
  tags: ["Crypto Exchange Development", "Crypto Exchange India", "FIU-IND Compliance"],
  heroImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function page() {
  return (
    <div className="bg-[#0d1117] min-h-screen text-white font-sans">

      {/* ── Hero / Header ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-white/5">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-600/8 blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative z-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            {post.breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={14} className="text-gray-600" />}
                <a
                  href="#"
                  className={
                    i === post.breadcrumb.length - 1
                      ? `${globalStyle?.gradientText} bg-clip-text text-transparent font-medium`
                      : "hover:text-white transition-colors"
                  }
                >
                  {crumb}
                </a>
              </span>
            ))}
          </nav>

          {/* Back link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </a>

          {/* Category badge */}
          <div className="mb-5">
            <span className="text-sm px-3 py-1 rounded-full font-medium border border-purple-500/30 bg-purple-500/20 text-purple-300">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6 max-w-4xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {post.excerpt}
          </p>

          {/* Author + meta row */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/5">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.author.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
              >
                {post.author.avatar}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{post.author.name}</p>
                <p className="text-gray-500 text-xs">{post.author.role}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            {/* Meta chips */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-purple-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-purple-400" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye size={14} className="text-purple-400" />
                {post.views}
              </span>
            </div>
          </div>

          {/* Share + Tags row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            {/* Share */}
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm flex items-center gap-1.5">
                <Share2 size={13} /> Share:
              </span>
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Link2, label: "Copy link" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-purple-500/40 hover:text-purple-300 cursor-pointer transition-all"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Image ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-0">
        <div className="w-full h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden mt-10 relative">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Body: Sidebar + Content ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

        {/* ── Sidebar ────────────────────────────────────────────────── */}
        <aside className="hidden lg:block">
          <div className="sticky top-8 flex flex-col gap-6">

            {/* Table of Contents */}
            <div className=" rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <BookOpen size={12} /> Table of Contents
              </p>
              <ul className="flex flex-col gap-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-gray-400 hover:text-white flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-all group"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reading Progress / Stats */}
            <div className=" rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <TrendingUp size={12} /> Article Stats
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Read Time", value: post.readTime },
                  { label: "Views", value: post.views },
                  { label: "Published", value: post.date },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{label}</span>
                    <span className="text-white text-xs font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div className="rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <User size={12} /> About the Author
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.author.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{post.author.name}</p>
                  <p className="text-gray-500 text-xs">{post.author.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Expert in blockchain architecture and fintech compliance. Has led 20+ crypto exchange projects across Asia.
              </p>
            </div>
          </div>
        </aside>

        {/* ── Main Content ───────────────────────────────────────────── */}
        <article className="prose-custom max-w-none">

          {/* Section helper styles via inline */}
          <style>{`
            .prose-custom h2 {
              font-size: 1.6rem;
              font-weight: 700;
              color: #fff;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              scroll-margin-top: 5rem;
            }
            .prose-custom h3 {
              font-size: 1.15rem;
              font-weight: 600;
              color: #e2e8f0;
              margin-top: 1.75rem;
              margin-bottom: 0.6rem;
            }
            .prose-custom p {
              color: #9ca3af;
              font-size: 1rem;
              line-height: 1.85;
              margin-bottom: 1.25rem;
            }
            .prose-custom ul {
              list-style: none;
              padding: 0;
              margin-bottom: 1.25rem;
            }
            .prose-custom ul li {
              color: #9ca3af;
              font-size: 0.95rem;
              padding-left: 1.25rem;
              position: relative;
              margin-bottom: 0.5rem;
              line-height: 1.7;
            }
            .prose-custom ul li::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0.6em;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: linear-gradient(to right, #a855f7, #ec4899);
            }
            .prose-custom .callout {
              border-left: 3px solid #a855f7;
              background: rgba(168,85,247,0.06);
              border-radius: 0 12px 12px 0;
              padding: 1rem 1.25rem;
              margin: 1.5rem 0;
            }
            .prose-custom .callout p { margin-bottom: 0; color: #d1d5db; }
            .prose-custom strong { color: #e2e8f0; font-weight: 600; }
            .prose-custom code {
              background: rgba(255,255,255,0.06);
              border: 1px solid rgba(255,255,255,0.1);
              border-radius: 4px;
              padding: 0.1em 0.4em;
              font-size: 0.85em;
              color: #c084fc;
            }
          `}</style>

          <div id="overview">
            <h2>Overview</h2>
            <p>
              India's crypto landscape has undergone a seismic shift since the RBI circular reversal in 2020. With the FIU-IND now mandating VDA service providers to register and comply with PMLA provisions, building a compliant crypto exchange is both a technical and regulatory challenge. This guide covers everything a founder or CTO needs to know.
            </p>
            <div className="callout">
              <p>
                <strong>Key Insight:</strong> Regulatory compliance is not a post-launch concern — it must be baked into the architecture from day one, especially for wallet custody and KYC flows.
              </p>
            </div>
          </div>

          <div id="legal">
            <h2>Legal & Compliance (FIU-IND)</h2>
            <p>
              Since March 2023, all Virtual Digital Asset (VDA) service providers operating in India must register with the Financial Intelligence Unit – India (FIU-IND) under the Prevention of Money Laundering Act (PMLA). Failure to register can result in platform bans and criminal liability.
            </p>
            <h3>Mandatory Compliance Checklist</h3>
            <ul>
              <li>FIU-IND registration as a Reporting Entity (RE)</li>
              <li>Comprehensive KYC/AML implementation — Aadhaar + PAN mandatory</li>
              <li>Transaction monitoring with STR (Suspicious Transaction Report) filing</li>
              <li>30% TDS deduction on crypto gains per Section 194S</li>
              <li>1% TDS collection at source on transfers above ₹10,000</li>
              <li>Separate ledger of VDA transactions for audit purposes</li>
            </ul>
          </div>

          <div id="architecture">
            <h2>Matching Engine Architecture</h2>
            <p>
              The matching engine is the heartbeat of any exchange. A poorly designed engine will collapse under load — a well-designed one can handle 100,000+ orders per second with sub-millisecond latency. Here's what a production-grade architecture looks like.
            </p>
            <h3>Order Book Design</h3>
            <p>
              A price-time priority order book using a <code>Red-Black Tree</code> (or skip list) allows O(log n) insertion and O(1) best-bid/ask retrieval. Orders at the same price level are matched FIFO.
            </p>
            <div className="callout">
              <p>
                <strong>Architecture tip:</strong> Separate the order ingestion layer from the matching core. Use a high-throughput queue (e.g., LMAX Disruptor or Kafka) between them to decouple latency spikes.
              </p>
            </div>
            <h3>High-Frequency Handling</h3>
            <ul>
              <li>In-memory matching with write-ahead log (WAL) for persistence</li>
              <li>Lock-free data structures to eliminate contention at peak load</li>
              <li>Sequence numbers on every event for deterministic replay</li>
              <li>Horizontal sharding by trading pair for independent scaling</li>
            </ul>
          </div>

          <div id="wallet">
            <h2>Wallet Custody Systems</h2>
            <p>
              Crypto exchange hacks are almost always wallet-related. A proper custody architecture separates hot and cold wallet tiers, with strict withdrawal policies enforced at the protocol level — not just application logic.
            </p>
            <ul>
              <li><strong>Hot wallets:</strong> &lt;5% of total assets, multi-sig 2-of-3, HSM-backed keys</li>
              <li><strong>Warm wallets:</strong> Automated sweeping from hot layer, time-locked withdrawals</li>
              <li><strong>Cold wallets:</strong> Air-gapped hardware, threshold signatures, geographic distribution</li>
              <li>MPC (Multi-Party Computation) for eliminating single points of key failure</li>
            </ul>
          </div>

          <div id="security">
            <h2>Security Requirements</h2>
            <p>
              Beyond wallet security, exchange infrastructure must be hardened against DDoS, API abuse, and insider threats. A layered security posture is mandatory before onboarding real users.
            </p>
            <ul>
              <li>Rate limiting and IP reputation scoring on all public endpoints</li>
              <li>2FA mandatory for withdrawals — TOTP + hardware key support</li>
              <li>Withdrawal whitelisting with 24-hour address review window</li>
              <li>Penetration testing before launch and quarterly thereafter</li>
              <li>SOC 2 Type II or ISO 27001 certification roadmap</li>
              <li>Real-time anomaly detection on trading patterns</li>
            </ul>
          </div>

          <div id="cost">
            <h2>Development Costs</h2>
            <p>
              Building a compliant, production-ready crypto exchange in India ranges from <strong>₹18–30 Lakhs</strong> for an MVP to <strong>₹60–90 Lakhs</strong> for a full-featured platform with advanced order types, derivatives, and mobile apps.
            </p>
            <h3>Cost Breakdown (MVP)</h3>
            <ul>
              <li>Matching engine + order book: ₹4–6 Lakhs</li>
              <li>KYC/AML integration (Digio/Signzy): ₹2–3 Lakhs</li>
              <li>Wallet system (hot + cold): ₹4–5 Lakhs</li>
              <li>Trading UI (web + mobile): ₹4–6 Lakhs</li>
              <li>Admin panel + compliance dashboard: ₹2–3 Lakhs</li>
              <li>Security audit + pen testing: ₹2–4 Lakhs</li>
              <li>FIU-IND registration + legal: ₹1–3 Lakhs</li>
            </ul>
          </div>

          <div id="conclusion">
            <h2>Conclusion</h2>
            <p>
              Launching a crypto exchange in India is a serious technical and regulatory undertaking. The FIU-IND compliance layer alone adds 3–4 months to a typical project timeline. But for founders who get it right, the Indian market represents a massive opportunity — with 100M+ crypto users and regulatory clarity finally emerging.
            </p>
            <p>
              WebTechnoMind has delivered compliant exchange infrastructure for multiple clients in this space. If you're planning a launch, <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors">reach out for a technical consultation</a>.
            </p>
          </div>

          {/* Tags (mobile) */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-purple-500/40 hover:text-purple-300 cursor-pointer transition-all"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          {/* Author card (mobile) */}
          <div className="mt-8  rounded-2xl p-6 lg:hidden">
            <div className="flex items-center gap-4 mb-3">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.author.avatarColor} flex items-center justify-center text-white font-bold`}
              >
                {post.author.avatar}
              </div>
              <div>
                <p className="text-white font-semibold">{post.author.name}</p>
                <p className="text-gray-500 text-sm">{post.author.role}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert in blockchain architecture and fintech compliance. Has led 20+ crypto exchange projects across Asia.
            </p>
          </div>
        </article>
      </div>

      {/* ── Related Posts ───────────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex flex-col items-center mb-12 gap-3">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">
              Keep Reading
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Related{" "}
              <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>
                Articles
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rpost, idx) => (
              <article
                key={idx}
                className="border-purple-400 rounded-2xl overflow-hidden hover:[border-image:linear-gradient(to_right,#1D74CF,#BA4491,#ff2a2a)_1, rounded-2xl] transition-all duration-300 cursor-pointer group"
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={rpost.image}
                    alt={rpost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm px-3 py-1 rounded-full font-medium border border-purple-500/30 bg-purple-500/20 text-purple-300">
                      {rpost.category}
                    </span>
                    <span className="text-gray-500 text-xs">{rpost.readTime}</span>
                  </div>
                  <h3
                    className={`text-white font-semibold text-base mb-2 leading-snug transition-all 
                      group-hover:${globalStyle?.gradientText} 
                      group-hover:bg-clip-text 
                      group-hover:text-transparent`}
                  >
                    {rpost.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {rpost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{rpost.date}</span>
                    <a href="#" className="text-purple-400 text-sm font-medium hover:text-pink-400 transition-colors">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 pb-20">
        <div className="relative  rounded-3xl overflow-hidden p-10 md:p-14 text-center">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-purple-600/15 blur-[80px]" />
          <div className="relative z-10">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
              Ready to Build?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Launch Your{" "}
              <span className={`${globalStyle?.gradientText} bg-clip-text text-transparent`}>
                Crypto Exchange
              </span>{" "}
              with WebTechnoMind
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              From FIU-IND compliance to matching engine architecture — we've built it all. Get a free technical consultation today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-purple-500/20"
              >
                Get Free Consultation
              </a>
              <a
                href="#"
                className="px-8 py-3.5 rounded-full border border-purple-500/40 text-purple-300 font-semibold text-sm hover:bg-purple-500/10 transition-all"
              >
                View Our Portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}