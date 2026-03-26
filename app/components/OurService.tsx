
// <<<<<<<<<<<<<<<<<----------------FIRST DESIGN---------->>>>>>>>>>>>>>>
// import Image from 'next/image'

// import who_we_are_main_pic from "../../../public/assets/images/who_we_are_main_pic.webp"
// import who_we_are_thumbnail_yt from "../../../public/assets/images/who_we_are_thumbnail_yt.webp"
// import ceo_image from "../../../public/assets/images/CEO.webp"
// import OurServiceCards from '@/src/components/OurServiceCards'


// const services = [
//     {
//         id: 1,
//         image: "/assets/images/data-analytics.jpg",
//         title: "DATA ANALYTICS & AI",
//         description: "We craft high-performing APIs and web services that integrate...",
//     },
//     {
//         id: 2,
//         image: "/assets/images/website-design.jpg",
//         title: "WEBSITE DESIGN & DEVELOPMENT",
//         description: "WordPress is known for its intuitive interface, making it easy to manage...",
//     },
//     {
//         id: 3,
//         image: "/assets/images/mobile-app.jpg",
//         title: "MOBILE APP DEVELOPMENT",
//         description: "Best can be a vague word while defining our market position...",
//     },
// ];


// const OurService = () => {
//     return (
//         <ScrollReveal><section className="w-[95%] mt-2 mx-auto">
//             <div className="mx-auto">
//                 <div className="bg-gradient-to-l from-[#87177C] via-[#ae474c] to-[#ED2831] rounded-[60px] p-12 md:px-30 py-20">

//                     {/* ---------Headings and Text--------- */}
//                     <div className="max-w-5xl mx-auto text-center text-white">
//                         {/* Small Heading */}
//                         <p className="text-[15px] uppercase tracking-wider mb-6 font-medium">
//                             OUR SERVICE
//                         </p>

//                         {/* Main Heading */}
//                         <p className="text-3xl md:text-[15px] lg:text-[35px] font-light mb-8 leading-tight">
//                             We Provide Custom Development For{" "}
//                             <span className="font-bold">Web, Apps, And Software,</span>
//                             <br />
//                             Along With Complete Digital Marketing Solutions.
//                         </p>

//                         {/* Description */}
//                         <p className="text-white/90 text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
//                             Our goal is to grow your business online with top web, App development and a creative digital marketing Solution.
//                         </p>
//                     </div>

//                     {/* Service Cards */}
//                     < OurServiceCards />

//                 </div>
//             </div>
//         </section></ScrollReveal>
//     )
// }

// export default OurService




// <<<<<<<<<<<----------------SECOND DESIGN---------------->>>>>>>>>>>>>>>

import Image from 'next/image'
import ServicesHeading from './Servicesheading'
import ServicesTable from './ServicesTable'
import ScrollReveal from "./ScrollReveal";




const OurService = () => {
    return (
        <div className='bg-white'>
            <ServicesHeading />
            <ServicesTable />
        </div>
    )
}

export default OurService










