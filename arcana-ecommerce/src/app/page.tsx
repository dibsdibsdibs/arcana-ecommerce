"use client";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProductListCategory } from "@/components/ProductListCategory";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutUs } from "@/components/AboutUs";
import sampledata from "@/public/sampledata.json";
import { Product } from "@/model/products";

export default function Home() {
  const categories = sampledata.products.map((category: any) => category.category);
  const [displayedCategory, setDisplayedCategory] = useState(categories[0]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const awsUrl = process.env.NEXT_PUBLIC_AWS_URL;

  useEffect(() => {
    const list = sampledata.products.find((category: any) => category.category === displayedCategory);
    setDisplayedProducts(list?.products as Product[]);
  }, [displayedCategory]);

  const handleSelectCategory = (category: string) => {
    setDisplayedCategory(category);
  }

  return (
    <div className="bg-cream">
      <HeroSection heroImage={awsUrl + "/heroimage.png"} />
      <ProductListCategory 
        categories={categories} 
        displayedCategory={displayedCategory} 
        handleSelectCategory={handleSelectCategory}
      />
      <FeaturedProducts featuredProducts={displayedProducts} />
      <AboutUs aboutUsImage={awsUrl + "/aboutus.png"} />
    </div>
  );
}
