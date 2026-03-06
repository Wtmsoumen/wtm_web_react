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

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <TrustIndicators />
      <Portfolio />
      <Industries />
      <OnDemand />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
