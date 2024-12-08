"use client"; // This is required to use state or other client-side logic

import { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { TfiLightBulb } from "react-icons/tfi";
import { GrCart } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="p-4">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <img
                        src="https://res.cloudinary.com/drpddho9b/image/upload/v1733591495/Group_bksdhl.png"
                        alt="logo"
                        className="h-9 w-20 md:h-16 md:w-[130px]"
                    />
                </div>

                {/* Search Section */}
                <div className="relative flex-grow w-full max-w-[768px] ml-0">
                    <input
                        type="search"
                        placeholder="Rechercher un produit"
                        className="bg-[#F9FAFB] p-2 h-[40px] md:h-[50px] w-full text-xs md:text-sm pr-10 rounded-md"
                    />
                    <CiSearch
                        className="absolute inset-y-0 right-3 top-2 md:top-3 text-gray-500 w-5 h-5 "
                    />
                </div>
                

                {/* Menu Items (Desktop) */}
                <div className="hidden md:flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <TfiLightBulb />
                        <p>Inspirations</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiHeart style={{ width: '20px', height: '22px' }} />
                        <p>Mes favois</p>
                        <span className="bg-[#F9FAFB] rounded-xl pl-2 pr-2 text-xs text-black">
                            24
                        </span>
                    </div>
                    <button className="flex items-center gap-3 px-3 py-3 bg-[#0093D0] text-white rounded-xl">
                        <GrCart style={{ width: '20px', height: '22px' }} />
                        Panier
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-[#F9FAFB]"></div>
                        <p>FR</p>
                        <FaAngleDown />
                    </div>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <RxHamburgerMenu
                        className="w-8 h-5"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-0 flex flex-col gap-3 mt-4 p-4 bg-white shadow-lg rounded-md">
                    <div className="flex items-center gap-2 text-sm">
                        <TfiLightBulb className="w-4 h-4" />
                        <p>Inspirations</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiHeart className="w-4 h-4" />
                        <p>Mes favois</p>
                        <span className="bg-[#F9FAFB] rounded-xl pl-2 pr-2 text-xs text-black">
                            24
                        </span>
                    </div>
                    <button className="flex justify-center items-center gap-2 p-2 w-[100px] bg-[#0093D0] text-white rounded-xl text-xs">
                        <GrCart className="w-4 h-4" />
                        Panier
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#F9FAFB]"></div>
                        <p className="text-xs">FR</p>
                        <FaAngleDown className="w-4 h-4" />
                    </div>
                </div>
            )}
        </nav>


    );
}
