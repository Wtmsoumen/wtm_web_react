const footerLinks = {
  Services: [
    "AI Development",
    "Mobile App Development",
    "Web Development",
    "Blockchain",
    "E-commerce",
    "On-Demand Apps",
  ],
  Solutions: [
    "Food Delivery App",
    "Taxi Booking App",
    "Healthcare App",
    "FinTech Platform",
    "Crypto Exchange",
    "NFT Marketplace",
  ],
  Company: [
    "About Us",
    "Portfolio",
    "Careers",
    "Blog",
    "Contact Us",
  ],
  Legal: [
    "Privacy Policy",
    "Terms & Conditions",
    "Sitemap",
    "Cookie Policy",
  ],
};

const offices = [
  { country: "India (HQ)", city: "Ahmedabad", flag: "🇮🇳" },
  { country: "USA", city: "New York", flag: "🇺🇸" },
  { country: "UK", city: "London", flag: "🇬🇧" },
  { country: "UAE", city: "Dubai", flag: "🇦🇪" },
  { country: "Australia", city: "Sydney", flag: "🇦🇺" },
  { country: "Netherlands", city: "Amsterdam", flag: "🇳🇱" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#040912] border-t border-white/5">
      {/* CTA Banner */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative card-glass rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-700/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Ready to Build Your <span className="gradient-text">Next Product?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Let&apos;s turn your idea into a reality. Get a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="gradient-btn text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity">
                  Get a Free Quote
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-btn flex items-center justify-center">
                <span className="text-white font-bold text-base">A</span>
              </div>
              <span className="text-white font-bold text-lg">Wtm</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Next-gen AI & on-demand software development company. Building products that scale globally since 2012.
            </p>

            {/* Offices */}
            <div className="mb-6">
              <div className="text-gray-300 text-xs font-semibold uppercase tracking-widest mb-3">
                Global Presence
              </div>
              <div className="flex flex-wrap gap-2">
                {offices.map((o, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400 flex items-center gap-1"
                  >
                    {o.flag} {o.country}
                  </span>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 card-glass rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 transition-all"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-white font-semibold text-sm mb-4">{category}</div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto! px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2012–2026 Wtm Technologies Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            All systems operational
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Founded 2012</span>
            <span>·</span>
            <span>50+ Experts</span>
            <span>·</span>
            <span>12+ Countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
