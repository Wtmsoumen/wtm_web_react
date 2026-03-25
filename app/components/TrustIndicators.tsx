import ScrollReveal from "./ScrollReveal";
const ratings = [
  {
    platform: "Vape Marley",
    score: "4.9",
    reviews: "50+ Reviews",
    badge: "Top Developer",
    stars: 1,
  },
  {
    platform: "We Secure Future",
    score: "4.7",
    reviews: "40+ Reviews",
    badge: "Top Company",
    stars: 1,
  },
  {
    platform: "Expedition Security",
    score: "5.0",
    reviews: "Top Agency",
    badge: "Verified",
    stars: 1,
  },
  {
    platform: "Anytime Tots",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
  },
  {
    platform: "Tabor",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 1,
  },
  {
    platform: "U&A Homes",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 1,
  },
  {
    platform: "Skills Techlab",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 1,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <ScrollReveal>
      <section className="bg-white py-16! border-y border-white/5">
        <div className="max-w-7xl mx-auto! px-4! sm:px-6!">
          <div 
            className="text-center mb-10!"
            data-aos="fade-down"
          >
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by <span className="bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Industry Leaders</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {ratings.map((r, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6! bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-default hover:-translate-y-2 border border-gray-100 min-w-[140px]"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="text-lg font-bold text-gray-800 mb-2!">{r.platform}</div>
                <div className="flex items-center gap-1 mb-1!">
                  <StarRating count={r.stars} />
                  <div className="text-2xl font-bold bg-linear-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">{r.score}</div>
                </div>
                <span className="text-xs text-gray-500">
                  {r.reviews}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
