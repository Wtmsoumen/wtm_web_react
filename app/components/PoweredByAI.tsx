
import { globalStyle } from "../globalStyle";
import { Flame, Package, Car, UtensilsCrossed, ShoppingBasket, Truck, Scissors, Home, HeartPulse, GraduationCap, Dumbbell, Plane } from "lucide-react";
import type { LucideIcon } from "lucide-react";



type Solution = {
  id: number;
  title: string;
  description: string;
  stat: string;
  icon: LucideIcon;
  iconBg: string;
  hot: boolean;
};

const solutions: Solution[] = [
  {
    id: 1,
    title: "Ride Sharing",
    description: "AI-powered ride matching & dynamic pricing",
    stat: "50M+ rides",
    icon: Car,
    iconBg: "from-blue-400 to-blue-600",
    hot: true,
  },
  {
    id: 2,
    title: "Food Delivery",
    description: "Smart restaurant recommendations & ordering",
    stat: "10M+ orders",
    icon: UtensilsCrossed,
    iconBg: "from-orange-400 to-red-500",
    hot: true,
  },
  {
    id: 3,
    title: "Grocery Delivery",
    description: "AI inventory management & delivery",
    stat: "5M+ deliveries",
    icon: ShoppingBasket,
    iconBg: "from-green-400 to-emerald-600",
    hot: true,
  },
  {
    id: 4,
    title: "Logistics & Courier",
    description: "Real-time tracking & route optimization",
    stat: "20M+ packages",
    icon: Truck,
    iconBg: "from-purple-400 to-violet-600",
    hot: false,
  },
  {
    id: 5,
    title: "Beauty & Salon",
    description: "AI appointment scheduling & stylist matching",
    stat: "2M+ bookings",
    icon: Scissors,
    iconBg: "from-pink-400 to-rose-500",
    hot: false,
  },
  {
    id: 6,
    title: "Home Services",
    description: "Smart service provider matching & scheduling",
    stat: "3M+ services",
    icon: Home,
    iconBg: "from-orange-400 to-amber-500",
    hot: true,
  },
  {
    id: 7,
    title: "Healthcare",
    description: "AI symptom checker & doctor consultations",
    stat: "1M+ consultations",
    icon: HeartPulse,
    iconBg: "from-red-400 to-pink-500",
    hot: true,
  },
  {
    id: 8,
    title: "E-Learning",
    description: "Adaptive learning paths & AI tutoring",
    stat: "500K+ students",
    icon: GraduationCap,
    iconBg: "from-indigo-400 to-blue-600",
    hot: false,
  },
  {
    id: 9,
    title: "Fitness On-Demand",
    description: "AI workout plans & virtual training",
    stat: "800K+ users",
    icon: Dumbbell,
    iconBg: "from-teal-400 to-cyan-500",
    hot: false,
  },
  {
    id: 10,
    title: "Travel & Booking",
    description: "AI travel planning & dynamic pricing",
    stat: "2M+ bookings",
    icon: Plane,
    iconBg: "from-sky-400 to-blue-500",
    hot: false,
  },
];

export default function PoweredByAI() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="">
            {/* Badge */}
            <div className={`${globalStyle?.gradientText} inline-flex items-center gap-1.5 bordertext-md font-semibold px-5 py-3  rounded-full mb-4`}>
              {/* inline-flex items-center gap-1.5 border border-orange-300 bg-orange-50 text-orange-500 text-md font-semibold px-5 py-3  rounded-full mb-4 */}
              <span className="text-base">⚡</span>
              High-Demand Solutions
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
              On-Demand Apps&nbsp;<span className={`${globalStyle?.gradientText}  bg-clip-text text-transparent`}>Powered by AI</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Launch your on-demand business with our battle-tested, AI-powered
              solutions trusted by startups and enterprises worldwide
            </p>
          </div>

          {/* View All */}
          <div className="md:self-end">
            <button className="text-violet-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200 whitespace-nowrap">
              View All Solutions
              <span className="text-base">→</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative bg-white border border-gray-100 rounded-2xl py-8 pl-5 pr-3 flex flex-col gap-3
          shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* HOT badge */}
                {item.hot && (
                  <div className="absolute -top-2.5 left-4 flex items-center gap-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    <Flame className="w-2.5 h-2.5" />
                    HOT
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center shadow-sm`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-bold text-md leading-tight group-hover:text-violet-600 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-md leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Stat */}
                <div className="flex items-center gap-1.5 mt-auto">
                  <Package className="w-5 h-5 text-violet-400" />
                  <span className="text-violet-500 text-xs font-semibold">{item.stat}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}