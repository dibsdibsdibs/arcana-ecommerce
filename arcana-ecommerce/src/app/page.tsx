import { HeroSection } from "@/components/HeroSection";
import { ProductListCategory } from "@/components/ProductListCategory";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductListCategory />
    </div>
  );
}
