import { CiHeart } from "react-icons/ci";

export default function ProductCard({ title, category, imageSrc,  reference, quantity }) {
    return (
        <div className="flex flex-col justify-center bg-[#F9F7F5] rounded-xl  ">
            <div className="flex justify-between items-center p-5">
                <CiHeart className="w-7 h-7 animate-bounce" />
                <p className="px-1 py-0 rounded-md bg-white text-[10px] text-medium">{category}</p>
            </div>
            <img
                className="mx-auto w-[224px] h-[224px] m-10 transition-all duration-700 hover:scale-105"
                src={imageSrc}
                alt={title}
            />
            <div className="flex justify-between bg-white pt-3">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-normal text-[#393939]">{title}</h2>
                    <p className="text-[#9C9C9C] text-sm">{reference}</p>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <h2 className="text-2xl font-normal text-[#393939]">0<sup>€</sup></h2>
                    <p className="bg-[#F1F4F6] text-xs p-1 rounded-xl">{quantity} pièces</p>
                </div>
            </div>
        </div>
    );
}


