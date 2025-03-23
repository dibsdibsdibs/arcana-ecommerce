"use client";

import { useState } from "react";

export function ProductListCategory() {
    const productListCategory = [
        {
            index: 0,
            name: "NOTEBOOKS",
        },
        {
            index: 1,
            name: "STICKERS",
        },
        {
            index: 2,
            name: "PENS",
        },
        {
            index: 3,
            name: "PAPERS",
        },
        {
            index: 4,
            name: "CRAFTS",
        },

    ]

    const [selectCategory, setSelectCategory] = useState(productListCategory[0].index);

    const handleSelectCategory = (index: number) => {
        setSelectCategory(index);
    }

    return (
        <div className="bg-lightpink w-full flex items-center justify-around py-2 px-8">
            {productListCategory.map((product) => (
                <ProductListCategoryButton key={product.name} product={product} selectCategory={selectCategory} handleSelectCategory={handleSelectCategory} />
            ))}
        </div>
    )
}

export function ProductListCategoryButton({ 
    product,
    selectCategory,
    handleSelectCategory
}: { 
    product: any;
    selectCategory: number;
    handleSelectCategory: any;
}) {
    return (
        <button 
            className={`text-black w-24 py-1 font-ibmplexmono font-bold text-sm ${selectCategory === product.index ? "border border-black" : ""}`}
            onClick={() => handleSelectCategory(product.index)}
        >
            {product.name}
        </button>
    )
}
