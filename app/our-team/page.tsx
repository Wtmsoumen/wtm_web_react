"use client";

import React from 'react';
import Image from 'next/image';
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

const XIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const FbIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const InstaIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const teamData = [
    {
        category: "Leadership Team",
        members: [
            { name: "Amit Singh", role: "Founder, Director & CEO", image: amit, social: true },
            { name: "Neha Singh", role: "Director", image: nehasingh, social: true },
            { name: "Kalyan Mondal", role: "CTO", image: kalyan },
            { name: "Debashis Majumdar", role: "Director - Marketing (World Wide)", image: debu },
            { name: "Mitul", role: "Director of Marketing (Dubai)", image: mitul }
        ]
    },
    {
        category: "Management Team",
        members: [
            { name: "Rahul Halder", role: "VP - Projects & Operations", image: rahul },
            { name: "Suchandra", role: "Project Coordinator", image: suchandra }
        ]
    },
    {
        category: "Development Team",
        members: [
            { name: "Devjit", role: "Full Stack Lead", image: devjit },
            { name: "Priya", role: "Senior Web Developer", image: priya },
            { name: "Sourav", role: "Web Developer", image: sourav },
            { name: "Suprio", role: "App Developer", image: supriyo },
            { name: "Rajdwip", role: "Web Developer", image: rajdwip },
            { name: "Aditya", role: "Web Developer", image: aditya },
            { name: "Suraj", role: "App Developer", image: suraj },
            { name: "Sandip", role: "Web Developer", image: WD1 },
        ]
    },
    {
        category: "UI/UX & Design",
        members: [
            { name: "Ritwik", role: "UI/UX Lead", image: ritwik },
            { name: "Jeet", role: "Graphic Designer", image: jeet },
        ]
    },
    {
        category: "UI Developer",
        members: [
            { name: "Tarun", role: "UI Lead", image: tarun },
            { name: "Satyajit", role: "Senior UI Developer", image: satyajit },
            { name: "Arnab", role: "Senior UI Developer", image: arnab },
            { name: "Balaram", role: "UI Developer", image: balaram },
        ]
    },
    {
        category: "Performance Marketing",
        members: [
            { name: "Avijit", role: "CMO", image: avijit },
            { name: "Laxman", role: "Digital Marketing Manager", image: laxman },
            { name: "Tanusree", role: "Marketing Executive", image: tanusree },
            { name: "Ayan", role: "Creative Strategy", image: ayan }
        ]
    },
    {
        category: "IT Hardware Enginee",
        members: [
            { name: "subhankar", role: "IT Hardware Engineer", image: subhankar },
        ]
    }
];

export default function TeamPage() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-16">
            <ScrollReveal>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-20" data-aos="fade-down">
                        <h1 className="text-4xl md:text-6xl font-black text-black mb-6">
                            Meet Our <span className="bg-linear-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Creative Brains</span>
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            The collective power of 40+ exceptional minds working together to transform your digital vision into reality.
                        </p>
                    </div>

                    {teamData.map((category, catIdx) => (
                        <div key={catIdx} className="mb-24">
                            <div className="flex justify-center mb-12" data-aos="fade-down">
                                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-red-600 relative pb-4 text-center">
                                    {category.category}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-red-600/20 rounded-full" />
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {category.members.map((member, memIdx) => (
                                    <div
                                        key={memIdx}
                                        className="group relative bg-white border border-gray-100 rounded-[2rem] p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                        data-aos="fade-up"
                                        data-aos-delay={memIdx * 50}
                                    >
                                        <div className="relative aspect-4/5 rounded-3xl bg-gray-50 mb-4">
                                            <Image
                                                src={member?.image}
                                                alt={member?.name}
                                                className="shadow-lg group-hover:border-t-4 group-hover:border-red-600 w-full h-full object-cover rounded-3xl transition-all duration-700 group-hover:scale-105 group-hover:-mt-8"
                                            />
                                            {member.social && (
                                                <div className="transition-all duration-700 absolute inset-0 bg-linear-to-t from-red-600/80 rounded-3xl via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-6 group-hover:scale-105">
                                                    <div className="flex gap-4 text-white">
                                                        <LinkedinIcon />
                                                        <InstaIcon />
                                                        <FbIcon />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                                            <p className="text-sm text-red-600 font-semibold uppercase tracking-widest">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </main>
    );
}