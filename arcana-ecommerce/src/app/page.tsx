"use client";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductListCategory } from "@/components/ProductListCategory";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutUs } from "@/components/AboutUs";
import sampledata from "@/public/sampledata.json";
import { Product } from "@/model/products";

export default function Home() {
  const category = sampledata.products.map((category: any) => category.category);
  const featuredProducts = sampledata.featuredProducts;
  const [displayedCategory, setDisplayedCategory] = useState(category[0]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const list = sampledata.products.find((category: any) => category.category === displayedCategory);
    setDisplayedProducts(list?.products as Product[]);
  }, [displayedCategory]);
  
  return (
    <div className="bg-cream">
      <HeroSection />
      <ProductListCategory />
      <FeaturedProducts featuredProducts={displayedProducts} />
      <AboutUs />
    </div>
  );
}
