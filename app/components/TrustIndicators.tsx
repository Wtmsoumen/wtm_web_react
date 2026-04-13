import ScrollReveal from "./ScrollReveal";
const ratings = [
  {
    platform: "Vape Marley",
    score: "4.9",
    reviews: "50+ Reviews",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/vape_marley.png",
  },
  {
    platform: "We Secure Future",
    score: "4.7",
    reviews: "40+ Reviews",
    badge: "Top Company",
    stars: 1,
    image: "/images/logos_clients/we_secure_future.png",
  },

  {
    platform: "Aligned Wealth",
    score: "4.7",
    reviews: "40+ Reviews",
    badge: "Top Company",
    stars: 1,
    image: "/images/logos_clients/aligned_wealth.png",
  },
  {
    platform: "Expedition Security",
    score: "5.0",
    reviews: "Top Agency",
    badge: "Verified",
    stars: 1,
    image: "/images/logos_clients/expedition_sec.png",
  },
  {
    platform: "Anytime Tots",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/anytime_tots.png",
  },
  {
    platform: "Tabor",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 1,
    image: "/images/logos_clients/tabor.png",
  },
  {
    platform: "U&A Homes",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 1,
    image: "/images/logos_clients/ua_homes.png",
  },
  {
    platform: "Benifit Legal",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/benifit_legal.png",
  },
  {
    platform: "Skills Techlab",
    score: "4.8",
    reviews: "100+ Reviews",
    badge: "Verified",
    stars: 1,
    image: "/images/logos_clients/ua_homes.png",
  },

  {
    platform: "Ocean Journey",
    score: "4.7",
    reviews: "90+ Reviews",
    badge: "Verified",
    stars: 1,
    image: "/images/logos_clients/ocean_journey.png",
  },
  {
    platform: "Pain Tax",
    score: "4.7",
    reviews: " 100+Reviews",
    badge: "Verified",
    stars: 1,
    image: "/images/logos_clients/pain_tax.png",
  },

  {
    platform: "Cheap Business Class",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/cbc.png",
  },
  {
    platform: "Khayat",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/khayat.png",
  },
  {
    platform: "MediSync",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/medisync.png",
  },
  {
    platform: "MediSync",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/jhl.png",
  },
  {
    platform: "MediSync",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/wisglob.svg",
  },
  {
    platform: "MediSync",
    score: "5.0",
    reviews: "Verified",
    badge: "Top Developer",
    stars: 1,
    image: "/images/logos_clients/globalvision.png",
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
              Trusted by <span className="bg-[linear-gradient(108deg,#0079d0_0%,#9e52d8_32%,#da365c_84%,#d04901_100%)] bg-clip-text text-transparent">Industry Leaders</span>
            </p>
          </div>

          <div className="overflow-hidden relative py-6">
            <div className="flex gap-8 animate-marquee duration-2000 w-max items-center">
              {[...ratings, ...ratings].map((r, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-between p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 w-[280px] min-h-[205px]"
                >
                  {/* Logo */}
                  <div className="w-full flex justify-center items-center h-16">
                    <img
                      src={r.image}
                      alt={r.platform}
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  {/* Platform Name */}
                  {/* <div className="text-lg font-semibold text-gray-800 text-center mb-2">
                    {r.platform}
                  </div> */}

                  {/* Rating Section */}
                  <div className="flex items-center gap-2 mb-1">
                    <StarRating count={r.stars} />
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                      {r.score}
                    </span>
                  </div>

                  {/* Reviews */}
                  <span className="text-sm text-gray-500">
                    {r.reviews}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
