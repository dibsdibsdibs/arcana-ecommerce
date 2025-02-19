import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

export function Header() {
    return (
        <div className="d-flex bg-white w-full h-16 font-ibmplexmono flex flex-row items-center px-4 z-10 justify-between">
            <div className="flex flex-row gap-10">
                <a className="text-black text-base font-bold">PRODUCTS</a>
                <a className="text-black text-base font-bold">ABOUT US</a>
            </div>
            <a className="text-black text-base font-bold">PA</a>
            <div className="flex flex-row gap-4">
                <FaSearch color="black" />
                <FaUser color="black" />
                <FaShoppingCart color="black" />
            </div>
        </div>
    )
}
