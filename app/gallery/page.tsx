"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowUpRight, Play, Film, Camera } from "lucide-react";
import { globalStyle } from "../globalStyle";
import ScrollReveal from "../components/ScrollReveal";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const officeImages = [
    {
        id: 1,
        type: "image",
        title: "Main Innovation Hub",
        category: "Workspace",
        image: "/images/gallery/office_workspace.png",
        description: "Our open-plan workspace designed specifically for deep focus and collaborative energy.",
    },
    {
        id: 2,
        type: "image",
        title: "Executive Conference Suite",
        category: "Meeting Rooms",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
        description: "State-of-the-art meeting spaces equipped with the latest conferencing technology.",
    },
    {
        id: 3,
        type: "image",
        title: "Zen Lounge",
        category: "Lounge Area",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
        description: "A relaxed environment for informal discussions, reading, or quick breaks.",
    },
    {
        id: 4,
        type: "image",
        title: "Global Welcome Desk",
        category: "Reception",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
        description: "Our premium reception area that reflects our commitment to innovation and hospitality.",
    },
    {
        id: 5,
        type: "image",
        title: "High-Tech Workstations",
        category: "Workspace",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        description: "Ergonomic workstations designed for comfort and maximum developer productivity.",
    },
];

const officeVideos = [
    {
        id: 6,
        type: "video",
        title: "Office Tour 2024",
        category: "Experience",
        thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-a-modern-office-4841-large.mp4",
        description: "A cinematic walkthrough of our state-of-the-art facilities and creative environment.",
    },
    {
        id: 7,
        type: "video",
        title: "Team Collaboration",
        category: "Culture",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-colleagues-working-together-in-a-sunny-office-2329-large.mp4",
        description: "Witness our team in action as they brainstorm and build next-gen solutions together.",
    },
    {
        id: 8,
        type: "video",
        title: "Evening at WTM",
        category: "Atmosphere",
        thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tech-startup-business-people-working-at-office-4444-large.mp4",
        description: "The vibrant energy of our office as our experts bring complex ideas to life.",
    },
];

export default function GalleryPage() {
    const [selectedItem, setSelectedItem] = useState<any>(null);

    return (
        <main className="min-h-screen bg-white pt-24 pb-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <ScrollReveal>
                        <div className="flex justify-center mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Office Life & Culture
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Explore Our <span className={`${globalStyle.gradientText} bg-clip-text text-transparent`}>Workspace</span> <br />
                            Where Ideas Take Flight
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Take a virtual tour of our modern global offices and experience the
                            vibrant culture that drives our innovation.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Image Gallery Carousel */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                            <Camera className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Atmospheric Spaces</h2>
                            <p className="text-slate-500">Glimpses into our daily working environment</p>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        // pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {officeImages.map((img) => (
                            <SwiperSlide key={img.id}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedItem(img)}
                                >
                                    <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 relative">
                                        <Image
                                            src={img.image}
                                            alt={img.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                                                {img.category}
                                            </span>
                                            <h1 className="text-white text-xl font-bold">{img.title}</h1>
                                        </div>
                                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            <Plus className="text-white w-6 h-6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Video Gallery Carousel */}
            <section className="pb-16 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                            <Film className="text-red-600" size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Experience WTM</h2>
                            <p className="text-slate-500">Watch our team in action</p>
                        </div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        // pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                        }}
                        className="pb-16"
                    >
                        {officeVideos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedItem(video)}
                                >
                                    <div className="aspect-video overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 relative">
                                        <Image
                                            src={video.thumbnail}
                                            alt={video.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                                <Play className="text-white fill-white" size={32} />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black/80 to-transparent">
                                            <span className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                                                {video.category}
                                            </span>
                                            <h1 className="text-white text-2xl font-bold">{video.title}</h1>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Enhanced Lightbox / Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-3xl"
                        onClick={() => setSelectedItem(null)}
                    >
                        <div className="max-w-6xl w-full max-h-[95vh] flex flex-col items-center relative gap-6">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute -top-12 right-0 md:-top-6 md:-right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20"
                            >
                                <X size={28} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="relative w-full h-[60vh] md:h-[75vh] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {selectedItem.type === "image" ? (
                                    <Image
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain lg:object-cover"
                                    />
                                ) : (
                                    <video
                                        src={selectedItem.videoUrl}
                                        className="w-full h-full object-contain"
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center max-w-3xl px-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                                    {selectedItem.category}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                                    {selectedItem.title}
                                </h2>
                                <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                                    {selectedItem.description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="pt-20 px-4">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                        Experience Our <br />
                        <span className={`${globalStyle.gradientText} bg-clip-text text-transparent`}>Collaborative Culture</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
                        We pride ourselves on an environment that empowers our team to build
                        extraordinary things. Interested in working here?
                    </p>
                    <Link href="/careers" className="relative z-10 px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 mx-auto">
                        See Open Positions
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
