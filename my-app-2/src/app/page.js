import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import SummerCollection from "./components/SummerCollection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SummerCollection />
      <HeroSection/>
      <ProductGrid />
      <Newsletter />
      <Footer />
    </>
  );
}
