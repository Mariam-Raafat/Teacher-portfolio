import Navbar from "@/components/ui/navbar";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ReviewsCarousel from "@/components/ui/reviews-carousel";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ReviewsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;