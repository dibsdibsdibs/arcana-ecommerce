import React from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export const Header = () => {
    return(
        <div className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-row gap-4">
                <a>Products</a>
                <a>About Us</a>
            </div>
            <div className="flex flex-row gap-4">
                <FiSearch />
                <FiShoppingCart />
                <FiUser />
            </div>
        </div>
    )
}