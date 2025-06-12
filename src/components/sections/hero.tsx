import Img1 from "@/assets/images/Img1.jpg";

const Hero = () => (
  <section
    className="relative bg-cover bg-center bg-no-repeat pt-20 min-h-[calc(100vh-80px)] flex items-center justify-center"
    style={{
      backgroundImage: `url(${Img1})`,
    }}
  >
    <div className="absolute inset-0 bg-black/50 z-0" />
    <div className="relative z-10 text-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Advance Your Career with Our Courses
      </h1>
      <p className="text-lg mb-6">
        Gain in-demand skills and advance professionally with Shef Solutions
        LLC.
      </p>
      <a
        href="/courses"
        className="inline-block bg-[var(--color-binance-yellow)] text-[var(--color-binance-dark)] px-6 py-3 rounded-lg font-bold"
      >
        Explore Courses
      </a>
    </div>
  </section>
);

export default Hero;
