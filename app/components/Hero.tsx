import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#060d1b] overflow-hidden pt-16">
      {/* Background glow orbs */}
      <div className="absolute z-1 top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute z-1 bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-700/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
      <video
        src="/video/hero-video.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col justify-center items-center gap-5 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-full px-6 py-2 mb-10">
          <span className="text-purple-400 text-lg">✦</span>
          <span className="text-white text-sm font-medium tracking-wide">Hello AI</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
          We Deliver{" "}
          <span className="gradient-text">Next-gen</span>
          <br />
          <span className="text-white">On-Demand Solutions</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed">
          Building AI-powered applications and digital products that transform businesses worldwide.
          From concept to launch — fast, reliable, and scalable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button className="group gradient-btn text-white !px-8 !py-4 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Sparkles className="w-5 h-5" />
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto w-full">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "350+", label: "Products Built" },
            { value: "96%", label: "Satisfaction Rate" },
            { value: "12+", label: "Countries Served" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-26 rounded-xl 
      bg-white/10 backdrop-blur-md 
      border border-white/20 
      shadow-lg hover:bg-white/15 
      transition duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d1b] to-transparent pointer-events-none" />
    </section>
  );
}









// import { Sparkles, ArrowRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-[#060d1b] overflow-hidden pt-16">
//       {/* Background glow orbs */}
//       <div className="absolute z-1 top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute z-1 bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-700/20 rounded-full blur-[100px] pointer-events-none" />
//       <div className="absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
//       <video
//         src="/video/hero-video.mp4"
//         loop
//         autoPlay
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-[1.15] tracking-tight">
//           We Create
//         </h1>
//         <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.15] tracking-tight gradient-text">
//           AI-Powered Apps
//         </h2>

//         {/* Subtitle */}
//         <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
//           Transform your business with cutting-edge mobile apps, web
//           solutions, and blockchain technology.
//         </p>

//         {/* CTA Button */}
//         <div className="flex items-center justify-center mb-20">
//           <button className="group gradient-btn text-white !px-10 !py-4 rounded-full text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
//             <Sparkles className="w-5 h-5" />
//             <span>Start Your Project</span>
//             <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mx-auto">
//           {[
//             { value: "10+", label: "Years" },
//             { value: "350+", label: "Products" },
//             { value: "96%", label: "Satisfaction" },
//             { value: "12+", label: "Countries" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               className="text-center p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
//             >
//               <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
//               <div className="text-gray-400 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d1b] to-transparent pointer-events-none" />
//     </section>
//   );
// }