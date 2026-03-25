"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook, ShieldCheck, Cpu, Code2, Sparkles, Orbit } from 'lucide-react';
import ScrollReveal from "../components/ScrollReveal";

import priya from "../../public/images/team/priya.jpg";
import rahul from "../../public/images/team/rahul.jpg";
import rajdwip from "../../public/images/team/rajdwip.jpg";
import sourav from "../../public/images/team/sourav.jpg";
import suchandra from "../../public/images/team/suchandra.jpg";
import supriyo from "../../public/images/team/supriyo.jpg";
import suraj from "../../public/images/team/suraj.jpg";
import WD1 from "../../public/images/team/WD1.jpg";
import aditya from "../../public/images/team/aditya.jpg";
import devjit from "../../public/images/team/devjit.jpg";
import tarun from "../../public/images/team/tarun.jpg";
import arnab from "../../public/images/team/arnab.jpg";
import avijit from "../../public/images/team/avijit.jpg";
import ayan from "../../public/images/team/ayan.jpeg";
import balaram from "../../public/images/team/balaram.jpeg";
import jeet from "../../public/images/team/jeet.jpg";
import laxman from "../../public/images/team/laxman.jpg";
import ritwik from "../../public/images/team/ritwik.jpg";
import satyajit from "../../public/images/team/satyajit.jpg";
import subhankar from "../../public/images/team/subhankar.jpg";
import tanusree from "../../public/images/team/tanusree.jpeg";
import mitul from "../../public/images/team/Mitul.jpg";
import amit from "../../public/images/team/amit.jpg";
import debu from "../../public/images/team/debu.jpg";
import kalyan from "../../public/images/team/kalyan.jpg";
import nehasingh from "../../public/images/team/nehasingh.jpg";

const teamData = [
    {
        category: "Leadership Team",
        members: [
            { name: "Amit Singh", role: "Founder, Director & CEO", image: amit, social: true, id: "WTM-CE-001" },
            { name: "Neha Singh", role: "Director", image: nehasingh, social: true, id: "WTM-DR-002" },
            { name: "Kalyan Mondal", role: "CTO", image: kalyan, id: "WTM-CTO-003" },
            { name: "Debashis Majumdar", role: "Director - Marketing (World Wide)", image: debu, id: "WTM-DM-004" },
            { name: "Mitul", role: "Director of Marketing (Dubai)", image: mitul, id: "WTM-DM-005" }
        ]
    },
    {
        category: "Management Team",
        members: [
            { name: "Rahul Halder", role: "VP - Projects & Operations", image: rahul, id: "WTM-MG-006" },
            { name: "Suchandra", role: "Project Coordinator", image: suchandra, id: "WTM-PC-007" }
        ]
    },
    {
        category: "Development Team",
        members: [
            { name: "Devjit", role: "Full Stack Lead", image: devjit, id: "WTM-LD-008" },
            { name: "Priya", role: "Senior Web Developer", image: priya, id: "WTM-SW-009" },
            { name: "Sourav", role: "Web Developer", image: sourav, id: "WTM-WD-010" },
            { name: "Suprio", role: "App Developer", image: supriyo, id: "WTM-AD-011" },
            { name: "Rajdwip", role: "Web Developer", image: rajdwip, id: "WTM-WD-012" },
            { name: "Aditya", role: "Web Developer", image: aditya, id: "WTM-WD-013" },
            { name: "Suraj", role: "App Developer", image: suraj, id: "WTM-AD-014" },
            { name: "Sandip", role: "Web Developer", image: WD1, id: "WTM-WD-015" },
        ]
    },
    {
        category: "UI/UX & Design",
        members: [
            { name: "Ritwik", role: "UI/UX Lead", image: ritwik, id: "WTM-UI-016" },
            { name: "Jeet", role: "Graphic Designer", image: jeet, id: "WTM-GD-017" },
        ]
    },
    {
        category: "UI Developer",
        members: [
            { name: "Tarun", role: "UI Lead", image: tarun, id: "WTM-LI-018" },
            { name: "Satyajit", role: "Senior UI Developer", image: satyajit, id: "WTM-SI-019" },
            { name: "Arnab", role: "Senior UI Developer", image: arnab, id: "WTM-SI-020" },
            { name: "Balaram", role: "UI Developer", image: balaram, id: "WTM-UI-021" },
        ]
    },
    {
        category: "Performance Marketing",
        members: [
            { name: "Avijit", role: "CMO", image: avijit, id: "WTM-CM-022" },
            { name: "Laxman", role: "Digital Marketing Manager", image: laxman, id: "WTM-MM-023" },
            { name: "Tanusree", role: "Marketing Executive", image: tanusree, id: "WTM-ME-024" },
            { name: "Ayan", role: "Creative Strategy", image: ayan, id: "WTM-CS-025" }
        ]
    },
    {
        category: "IT Hardware Enginee",
        members: [
            { name: "subhankar", role: "IT Hardware Engineer", image: subhankar, id: "WTM-IT-026" },
        ]
    }
];

const BarcodeIcon = () => (
    <div className="flex gap-x-[2px] h-6 opacity-30">
        {[...Array(20)].map((_, i) => (
            <div key={i} className={`h-full w-[1px] bg-red-600 ${i % 3 === 0 ? 'w-[2px]' : i % 5 === 0 ? 'w-[3px]' : ''}`} />
        ))}
    </div>
);

const IDCard = ({ member, index }: { member: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
            className="group relative perspective-1000"
        >
            {/* Subtle Glow Border Effect */}
            <div className="absolute -inset-[1px] bg-linear-to-r from-red-200/50 via-slate-100 to-red-300/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative bg-white/80 backdrop-blur-2xl border border-slate-100 rounded-3xl p-5 overflow-hidden ring-1 ring-slate-900/5 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 blur-[50px] rounded-full -ml-12 -mb-12 group-hover:bg-blue-500/10 transition-colors" />

                {/* ID Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 shadow-inner">
                            <Orbit className="w-4 h-4 text-red-500 animate-spin-slow" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Official Member</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400/40" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden mb-6 group-hover:ring-4 ring-red-100 transition-all duration-500 shadow-lg">
                    <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Social Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                        <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.2, color: '#dc2626' }}
                                    className="p-2.5 rounded-xl bg-red-50 backdrop-blur-md border border-red-100 cursor-pointer text-slate-600 hover:text-red-600 transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-100 scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ShieldCheck className="w-4 h-4 text-red-500" />
                    </div>
                </div>

                {/* Member Info */}
                <div className="relative">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">
                                {member.name}
                            </h3>
                            <p className="text-[11px] font-bold text-red-600/80 uppercase tracking-[0.2em] mt-1">
                                {member.role}
                            </p>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                            <Cpu className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
                        </div>
                    </div>

                    {/* Footer ID Details */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-end">
                        <div className="space-y-1">
                            <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">Access ID</p>
                            <p className="text-[12px] font-mono text-slate-600 tracking-tighter">{member.id || 'WTM-MB-HID'}</p>
                        </div>
                        <BarcodeIcon />
                    </div>
                </div>
            </div>

            {/* Float Label (Modern Touch) */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-linear-to-br from-red-100 to-red-200 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
        </motion.div>
    );
};

export default function TeamPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-24 overflow-hidden relative">
            {/* Background Mesh Gradients - Subtle for Light Mode */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-100/50 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <ScrollReveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-32"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-8 backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-red-600" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">Elite Talent</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                            Architects of <br />
                            <span className="relative inline-block">
                                <span className="bg-linear-to-r from-red-600 via-red-700 to-red-900 bg-clip-text text-transparent">Digital Future</span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute -bottom-2 left-0 h-1.5 bg-red-600/10 rounded-full blur-[1px]"
                                />
                            </span>
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            A synergy of <span className="text-slate-900 font-bold">40+ visionaries</span> pushing the boundaries of technology and creative excellence.
                        </p>
                    </motion.div>

                    {/* Team Categories mapped */}
                    {teamData.map((category, catIdx) => (
                        <div key={catIdx} className="mb-40">
                            <div className="flex flex-col items-center mb-16 relative">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="absolute -top-12 text-slate-200/50 text-6xl md:text-9xl font-black uppercase tracking-[0.5em] pointer-events-none select-none whitespace-nowrap"
                                >
                                    {category.category.split(' ')[0]}
                                </motion.div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 text-center relative z-10 flex items-center gap-4">
                                    <div className="w-8 h-[2px] bg-red-600 rounded-full" />
                                    {category.category}
                                    <div className="w-8 h-[2px] bg-red-600 rounded-full" />
                                </h2>
                                <div className="mt-4 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-600" />
                                    <div className="w-12 h-2 rounded-full bg-red-100" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                                {category.members.map((member, memIdx) => (
                                    <IDCard key={memIdx} member={member} index={memIdx} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>

            {/* Custom Bottom Decor */}
            <div className="absolute bottom-0 left-0 w-full p-20 flex justify-between items-end opacity-5 pointer-events-none">
                <Code2 className="w-32 h-32 text-red-600" />
                <div className="text-right">
                    <p className="text-8xl font-black text-slate-900">WTM</p>
                    <p className="text-xl font-bold tracking-[1em] text-red-600">INTERNAL</p>
                </div>
            </div>
        </main>
    );
}
