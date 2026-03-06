const ratings = [
  {
    platform: "Clutch",
    score: "4.9",
    reviews: "50+ Reviews",
    badge: "Top Developer",
    stars: 5,
  },
  {
    platform: "GoodFirms",
    score: "4.7",
    reviews: "40+ Reviews",
    badge: "Top Company",
    stars: 5,
  },
  {
    platform: "DesignRush",
    score: "5.0",
    reviews: "Top Agency",
    badge: "Verified",
    stars: 5,
  },
  {
    platform: "TopDevelopers",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 5,
  },
  {
    platform: "Google",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <section className="section-bg-alt py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
            Trusted & Rated Across Top Platforms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {ratings.map((r, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl px-6 py-4 flex flex-col items-center gap-2 min-w-[140px]"
            >
              <div className="text-white font-bold text-base">{r.platform}</div>
              <div className="text-3xl font-extrabold gradient-text">{r.score}</div>
              <StarRating count={r.stars} />
              <div className="text-gray-400 text-xs">{r.reviews}</div>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
                {r.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
