"use client"
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

export function Header() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/login");
    }

    return (
        <div className="d-flex bg-white w-full h-20 font-ibmplexmono flex flex-row items-center px-8 z-10 justify-between sticky top-0 z-50">
            <div className="flex flex-row w-48 justify-between">
                <button className="text-black text-base font-bold">PRODUCTS</button>
                <button className="text-black text-base font-bold">ABOUT US</button>
            </div>
            <a className="text-black font-italianoldstyle font-black text-3xl">PA</a>
            <div className="flex flex-row gap-8 w-48 justify-end">
                <button className="">
                    <FaSearch color="black" />
                </button>
                <button className="" onClick={handleLogin}>
                    <FaUser color="black" />
                </button>
                <button className="">
                    <FaShoppingCart color="black" />
                </button>
            </div>
        </div>
    )
}
