const solutions = [
  {
    icon: "🚗",
    title: "Ride Sharing",
    metric: "50M+",
    metricLabel: "rides",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🍕",
    title: "Food Delivery",
    metric: "10M+",
    metricLabel: "orders",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: "🛒",
    title: "Grocery Delivery",
    metric: "5M+",
    metricLabel: "deliveries",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📦",
    title: "Logistics & Courier",
    metric: "20M+",
    metricLabel: "packages",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💄",
    title: "Beauty & Salon",
    metric: "2M+",
    metricLabel: "bookings",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "🔧",
    title: "Home Services",
    metric: "3M+",
    metricLabel: "services",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    metric: "1M+",
    metricLabel: "consultations",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: "📚",
    title: "E-Learning",
    metric: "500K+",
    metricLabel: "students",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: "🏋️",
    title: "Fitness On-Demand",
    metric: "800K+",
    metricLabel: "users",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "✈️",
    title: "Travel & Booking",
    metric: "2M+",
    metricLabel: "bookings",
    color: "from-sky-500 to-blue-500",
  },
];

const stats = [
  { value: "300+", label: "On-Demand Apps Built" },
  { value: "50M+", label: "End Users Served" },
  { value: "25+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function OnDemand() {
  return (
    <section id="ondemand" className="section-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            On-Demand Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            On-Demand Apps <span className="gradient-text">Powered by AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end on-demand platform development with built-in AI, real-time tracking, and proven scalability.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {solutions.map((s, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-5 text-center hover:border-purple-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform`}
              >
                {s.icon}
              </div>
              <div className="text-white font-medium text-sm mb-1">{s.title}</div>
              <div className={`text-lg font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                {s.metric}
              </div>
              <div className="text-gray-500 text-xs">{s.metricLabel}</div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-glass rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
