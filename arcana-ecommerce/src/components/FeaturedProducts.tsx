const awsUrl = process.env.AWS_URL;

const featuredProducts = [
    {
        id: 1,
        name: "Featured Product 1",
        image: awsUrl + "/1.png"
    },
    {
        id: 2,
        name: "Featured Product 2",
        image: awsUrl + "/2.png"
    },
    {
        id: 3,
        name: "Featured Product 3",
        image: awsUrl + "/3.png"
    },
    
]

export function FeaturedProducts() {
    
    return (
        <div className="p-5 flex flex-col items-center justify-center">
            <div className="flex flex-row">
                {featuredProducts.map((product) => (
                    <FeaturedProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

const FeaturedProduct = ({ product }: { product: any }) => {
    return (
        <div className="flex flex-col">
            <div className="bg-green p-2 w-75 h-75">
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <span className="font-ibmplexmono font-bold text-sm text-black">{product.name}</span>
                <span className="font-ibmplexmono font-bold text-sm text-black">${product.price}</span>
            </div>
        </div>
    );
}
