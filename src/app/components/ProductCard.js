import { CiHeart } from "react-icons/ci";

// Reusable Card Component
export default function InterestCard({ title, category, imageSrc, price, reference, quantity }) {
    return (
        <div className="flex flex-col justify-center bg-[#F9F7F5] rounded-xl">
            <div className="flex justify-between items-center p-5">
                <CiHeart className="w-7 h-7" />
                <p className="px-2 bg-white text-xs">{category}</p>
            </div>
            <img
                className="mx-auto w-[200px] h-[224px] m-8"
                src={imageSrc}
                alt={title}
            />
            <div className="flex justify-between bg-white pt-3">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-normal text-[#393939]">{title}</h1>
                    <p className="text-[#9C9C9C] text-sm">{reference}</p>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <h1 className="text-2xl font-normal text-[#393939]">{price}</h1>
                    <p className="bg-[#F1F4F6] text-xs p-1 rounded-xl">{quantity} pièces</p>
                </div>
            </div>
        </div>
    );
}


