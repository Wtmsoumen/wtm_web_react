import React from 'react'
import dummyAvtar from "../../public/images/dummyAvtar.png"
import Image from 'next/image';

import priya from "../../public/images/team/priya.jpg"
import rahul from "../../public/images/team/rahul.jpg"
import rajdwip from "../../public/images/team/rajdwip.jpg"
import sourav from "../../public/images/team/sourav.jpeg"
import suchandra from "../../public/images/team/suchandra.jpg"
import supriyo from "../../public/images/team/supriyo.jpg"
import suraj from "../../public/images/team/suraj.jpg"
import WD1 from "../../public/images/team/WD1.jpg"
import aditya from "../../public/images/team/aditya.jpg"
import devjit from "../../public/images/team/devjit.jpg"
import tarun from "../../public/images/team/tarun.jpg"
import arnab from "../../public/images/team/arnab.jpg"
import avijit from "../../public/images/team/avijit.jpg"
import ayan from "../../public/images/team/ayan.jpeg"
import balaram from "../../public/images/team/balaram.png"
import jeet from "../../public/images/team/jeet.jpg"
import laxman from "../../public/images/team/laxman.jpg"
import ritwik from "../../public/images/team/ritwik.jpg"
import satyajit from "../../public/images/team/satyajit.jpg"
import subhankar from "../../public/images/team/subhankar.jpg"
import sunaina from "../../public/images/team/sunaina.jpg"
import tanusree from "../../public/images/team/tanusree.jpg"
import mitul from "../../public/images/team/Mitul.jpg"
import amit from "../../public/images/team/amit.jpg"
import debu from "../../public/images/team/debu.jpg"
import kalyan from "../../public/images/team/kalyan.jpg"
import neha from "../../public/images/team/nehasingh.jpg"

const index = () => {
    let X = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
    </svg>

    let Fb = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
    </svg>

    let insta = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
    </svg>

    let linkdin = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
    </svg>

    let whatsapp = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>

    const teamData = [
        {
            category: "Founder / Director / CEO",
            members: [
                {
                    name: "Amit Singh",
                    role: "Founder, Director & CEO",
                    image: amit,
                    social: [{ name: "twitter", icon: X }, { name: "facebook", icon: Fb }, { name: "linkedin", icon: linkdin }, { name: "instagram", icon: insta }, { name: "whatsapp", icon: whatsapp }]
                },
                {
                    name: "Neha Singh",
                    role: "Director",
                    image: neha,
                    social: [{ name: "facebook", icon: Fb }, { name: "instagram", icon: insta }, { name: "linkedin", icon: linkdin }]
                },
                {
                    name: "Kalyan Mondal",
                    role: "CTO",
                    image: kalyan
                },
                {
                    name: "Debashis Majumdar",
                    role: "Director - Marketing (World Wide)",
                    image: debu
                },
                {
                    name: "Mitul",
                    role: "Director of Marketing (Dubai)",
                    image: mitul
                }
            ]
        },

        {
            category: "Project Manager Team",
            members: [
                {
                    name: "Vice President",
                    role: "Projects & Operations",
                    image: rahul
                },
                {
                    name: "Project Coordinator",
                    role: "",
                    image: suchandra
                }
            ]
        },

        {
            category: "Development Team",
            members: [
                {
                    name: "Full Stack Developer",
                    role: "Team Leader",
                    image: devjit
                },
                {
                    name: "Senior Web Developer",
                    role: "",
                    image: priya
                },
                {
                    name: "Web Developer",
                    role: "",
                    image: sourav
                },
                {
                    name: "App Developer",
                    role: "",
                    image: supriyo
                },
                {
                    name: "Web Developer",
                    role: "",
                    image: rajdwip
                },
                {
                    name: "Web Developer",
                    role: "",
                    image: aditya
                },
                {
                    name: "App Developer",
                    role: "",
                    image: suraj
                },
                {
                    name: "Web Developer",
                    role: "",
                    image: WD1
                },
            ]
        },

        {
            category: "UI Developer",
            members: [
                {
                    name: "UI Developer",
                    role: "Team Leader",
                    image: tarun
                },
                {
                    name: "Senior UI Developer",
                    role: "",
                    image: satyajit
                },
                {
                    name: "Senior UI Developer",
                    role: "",
                    image: arnab
                },
                {
                    name: "UI Developer",
                    role: "",
                    image: balaram
                }
            ]
        },

        {
            category: "UI/UX Designer",
            members: [
                {
                    name: "UI UX Designer",
                    role: "Team Leader",
                    image: ritwik
                },
                {
                    name: "UI Graphic Designer",
                    role: "",
                    image: jeet
                },
                {
                    name: "UI UX Designer",
                    role: "",
                    image: sunaina
                }
            ]
        },

        {
            category: "Digital Marketing",
            members: [
                {
                    name: "Chief Marketing Officer",
                    role: "CMO",
                    image: avijit
                },
                {
                    name: "Digital Marketing Manager",
                    role: "",
                    image: laxman
                },
                {
                    name: "Digital Marketing Executive",
                    role: "",
                    image: tanusree
                },
                {
                    name: "Digital Marketing",
                    role: "",
                    image: ayan
                }
            ]
        },

        {
            category: "IT Hardware Engineer",
            members: [
                {
                    name: "IT Hardware Engineer",
                    role: "",
                    image: subhankar
                }
            ]
        }
    ];

    return (
        <main className="bg-white min-h-screen overflow-x-hidden pt-20 relative">
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>
                <div>
                    {teamData.map((category, index) => (
                        <div key={index} className='text-black mb-16 flex flex-col'>
                            <div className='flex justify-center mb-10'>
                                <h2 className='text-center text-3xl font-extrabold uppercase tracking-widest relative inline-block text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-800'>
                                    {category.category}
                                    <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-1.5 bg-linear-to-r from-red-500 to-red-700 rounded-full'></div>
                                </h2>
                            </div>
                            <div className='flex flex-wrap items-stretch justify-center gap-8'>
                                {category.members.map((member, memberIndex) => (
                                    <div key={memberIndex} className='relative flex flex-row items-center bg-linear-to-br from-red-600 via-red-50 to-white border border-red-200/60 rounded-3xl p-2 pr-5 w-104 shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'>

                                        {/* Background Mask to keep blobs inside */}
                                        <div className='absolute inset-0 rounded-3xl overflow-hidden pointer-events-none'>
                                            {/* Abstract background blobs for advanced design */}
                                            <div className='absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 z-0'></div>
                                            <div className='absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl -ml-16 -mb-16 z-0'></div>
                                        </div>

                                        {/* Left Side: Portrait Image Section (non-round) popping out on hover */}
                                        <div className='relative w-32 h-40 shrink-0 rounded-xl p-1 bg-linear-to-tr from-white to-red-100 shadow-md z-10 group-hover:-translate-x-6 group-hover:-translate-y-3 group-hover:-rotate-[4deg] group-hover:scale-[1.15] group-hover:shadow-2xl transition-all duration-500 border border-white/40'>
                                            <div className='w-full h-full rounded-lg overflow-hidden bg-white'>
                                                <Image src={member.image} alt={member.name} width={200} height={200} className='w-full h-full object-cover' />
                                            </div>
                                            {/* Online Status Dot */}
                                            {/* <div className='absolute -bottom-1.5 -left-1.5 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm'></div> */}
                                        </div>

                                        {/* Right Side: Content box with glassmorphism */}
                                        <div className='flex flex-col justify-between h-full z-10 p-5 grow ml-0'>

                                            {/* Top Header / Logo Space */}
                                            <div className='w-full flex flex-col justify-between items-start mb-4'>
                                                {/* <div className='text-red-900 font-black text-xl tracking-widest drop-shadow-sm'>WTM</div> */}
                                                <h3 className='text-red-950 font-extrabold text-xl uppercase tracking-wide leading-tight mb-2 text-left'>{member.name}</h3>
                                                {member.role && <p className='text-red-800 font-bold text-[10px] bg-white shadow-sm px-3 py-1.5 rounded-md mb-2 uppercase tracking-widest'>{member.role}</p>}
                                            </div>

                                            {/* Main Info */}
                                            {/* <div className='flex flex-col items-start'>
                                                <h3 className='text-red-950 font-extrabold text-xl uppercase tracking-wide leading-tight mb-2 text-left'>{member.name}</h3>
                                            </div> */}

                                            {/* Smart ID Elements bottom row */}
                                            {member?.social && member?.social?.length > 0 &&
                                                <div className='w-full flex justify-end gap-4 items-end mt-4 pt-3 border-t border-red-900/10'>
                                                    {member?.social?.map((social, socialIndex) => (
                                                        <div key={socialIndex} className='flex flex-row items-center cursor-pointer'>
                                                            <div className='w-5 h-5 group-hover:scale-105 transition-transform duration-500'>
                                                                {social.icon}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#1D74CF]/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#D04425]/8 to-transparent blur-3xl" />
            </div> */}
        </main>
    )
}

export default index