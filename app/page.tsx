import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import TrustIndicators from "./components/TrustIndicators";
import Portfolio from "./components/Portfolio";
import Industries from "./components/Industries";
import OnDemand from "./components/OnDemand";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BlogSection from "./components/BlogSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import OurService from "./components/OurService";
import ServicesTestimonialsSection from "./components/TestimonialsSection";
import OurExpertise from "./components/OurExpertise";
import ClientsSection from "./components/Clientssection";
import PoweredByAI from "./components/PoweredByAI";
import FreeConsultation from "./components/FreeConsultation";
import PortfolioSection from "./components/Projects";
import DigitalMarketingSection from "./components/DigitalMarketingSection";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Hero />
      <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><OurService /></ScrollReveal>
      <ScrollReveal><DigitalMarketingSection/></ScrollReveal>
      <ScrollReveal><Industries /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
     
      <ScrollReveal><TrustIndicators /></ScrollReveal>
      <ScrollReveal><PortfolioSection /></ScrollReveal>
    

      <ScrollReveal><PoweredByAI /></ScrollReveal>
      {/* <ScrollReveal><OurExpertise /></ScrollReveal> */}
      <ScrollReveal><ServicesTestimonialsSection /></ScrollReveal>
      <ScrollReveal><ClientsSection /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><FreeConsultation /></ScrollReveal>

      <ScrollReveal><BlogSection /></ScrollReveal>
      {/* <Newsletter /> */}
    </div>
  );
}
