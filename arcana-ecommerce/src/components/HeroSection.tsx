export function HeroSection() {
    const awsUrl = process.env.AWS_URL;

    return (
        <div className="bg-cream">
            <div className="flex justify-around items-center p-10">
                <div className="flex flex-col">
                    <span className="font-italianoldstyle text-4xl text-black">feeling cute?</span>
                    <span className="font-italianoldstyle text-4xl text-black">buy a notebook.</span>
                    <div className="flex justify-center">
                        <button className="bg-mint text-black px-8 py-2 rounded-full font-ibmplexmono font-bold text-sm mt-4 w-40">
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <img src={awsUrl + "/heroimage.png"} alt="hero-image" className="w-1/3" />
            </div>
        </div>
    )
}
