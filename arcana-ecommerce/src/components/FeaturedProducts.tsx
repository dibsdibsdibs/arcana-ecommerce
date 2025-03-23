import { FaArrowRight } from "react-icons/fa";

const awsUrl = process.env.AWS_URL;
const featuredProducts = [
    {
        id: 1,
        name: "Featured Product 1",
        image: awsUrl + "/1.png",
        price: "24.99",
        ratings: 4.9,
        reviews: 54
    },
    {
        id: 2,
        name: "Featured Product 2",
        image: awsUrl + "/2.png",
        price: "24.99",
        ratings: 4.9,
        reviews: 30
    },
    {
        id: 3,
        name: "Featured Product 3",
        image: awsUrl + "/3.png",
        price: "24.99",
        ratings: 4.5,
        reviews: 73
    },
    
]

export function FeaturedProducts() {
    return (
        <div className="px-10 py-20 flex flex-col items-center justify-center gap-10">
            <div className="flex flex-row justify-around w-full">
                {featuredProducts.map((product) => (
                    <FeaturedProduct key={product.id} product={product} />
                ))}
            </div>
            <button className="text-black font-ibmplexmono font-bold text-lg flex flex-row items-center gap-2">
                CONTINUE TO SHOP
                <FaArrowRight />
            </button>
        </div>
    );
}

const FeaturedProduct = ({ product }: { product: any }) => {
    return (
        <div className="flex flex-col">
            <div className="bg-green p-2">
                <img src={product.image} alt={product.name} className="w-64 h-64 object-cover"/>
            </div>
            <div className="flex flex-col">
                <span className="font-ibmplexmono font-bold text-2xl text-black text-center">{product.name}</span>
                <span className="font-ibmplexmono font-bold text-sm text-black text-center">{product.price} AUD</span>
                <div className="flex flex-row justify-center mt-2">
                    <span className="font-ibmplexmono font-bold text-sm text-black text-center">{product.ratings} ({product.reviews})</span>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-mint text-black px-8 py-2 rounded-full font-ibmplexmono font-bold text-sm w-40">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}
