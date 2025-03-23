import { HeroSection } from "@/components/HeroSection";
import { ProductListCategory } from "@/components/ProductListCategory";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutUs } from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="bg-cream">
      <HeroSection />
      <ProductListCategory />
      <FeaturedProducts />
      <AboutUs />
    </div>
  );
}
