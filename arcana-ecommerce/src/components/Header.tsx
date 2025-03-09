import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export function Header() {
    return (
        <div className="d-flex bg-white w-full h-20 font-ibmplexmono flex flex-row items-center px-8 z-10 justify-between">
            <div className="flex flex-row w-48 justify-between">
                <button className="text-black text-base font-bold">PRODUCTS</button>
                <button className="text-black text-base font-bold">ABOUT US</button>
            </div>
            <a className="text-black font-italianoldstyle font-black text-3xl">PA</a>
            <div className="flex flex-row gap-8 w-48 justify-end">
                <button className="">
                    <FaSearch color="black" />
                </button>
                <button className="">
                    <FaUser color="black" />
                </button>
                <button className="">
                    <FaShoppingCart color="black" />
                </button>
            </div>
        </div>
    )
}
