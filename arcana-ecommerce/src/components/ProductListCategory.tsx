"use client";
import { useState } from "react";

export function ProductListCategory({ 
    categories, 
    displayedCategory,
    handleSelectCategory
}: { 
    categories: string[], 
    displayedCategory: string,
    handleSelectCategory: any,
}) {

    return (
        <div className="bg-lightpink w-full flex items-center justify-around py-2 px-8">
            {categories.map((category) => (
                <ProductListCategoryButton key={category} category={category} displayedCategory={displayedCategory} handleSelectCategory={handleSelectCategory} />
            ))}
        </div>
    )
}

export function ProductListCategoryButton({ 
    category,
    displayedCategory,
    handleSelectCategory
}: { 
    category: string;
    displayedCategory: string;
    handleSelectCategory: any;
}) {
    return (
        <button 
            className={`text-black w-24 py-1 font-ibmplexmono font-bold text-sm uppercase ${displayedCategory === category ? "border border-black" : ""}`}
            onClick={() => handleSelectCategory(category)}
        >
            {category}
        </button>
    )
}
