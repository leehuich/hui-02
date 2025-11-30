import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import SearchSection from "@/components/SearchSection";
import RoomsSection from "@/components/RoomsSection";
import LocationSection from "@/components/LocationSection";
import ReviewsSection from "@/components/ReviewsSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StorySection />
      <SearchSection />
      <RoomsSection />
      <LocationSection />
      <ReviewsSection />
      <FloatingContact />
      <Footer />
    </div>
  );
};

export default Index;