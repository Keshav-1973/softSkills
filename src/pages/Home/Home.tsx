import Courses from "@/components/sections/courses";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import PlatFormTrust from "@/components/sections/platformTrust";
import Testimonials from "@/components/sections/testimonials";

const Home = () => (
  <div className="bg-[var(--color-binance-gray)]">
    <main>
      <Hero />
      <Features />
      <Courses />
      <PlatFormTrust />
      <Testimonials />
      {/* <GetInTouch /> */}
    </main>
    <Footer />
  </div>
);

export default Home;
