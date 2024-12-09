"use client"; 
import { useState } from 'react';
import ProductCard from "./ProductCard";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export default function SimilarArticles() {
    const similarProducts = [
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
        {
            title: "Title",
            category: "ART DE LA TABLE",
            imageSrc:
                "https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png",
            price: "0€",
            reference: "0,35€/Pièce · RÉF : VABGN5",
            quantity: 20,
        },
    ];
    const [current, setCurrent] = useState(0);
    const length = Math.ceil(similarProducts.length / 5);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(similarProducts) || similarProducts.length <= 0) {
        return null;
    }
    return (
        <div className="p-7">
            <div className="flex justify-between">
                <h1 className="text-[#393939] text-2xl">Articles similaires</h1>
                <p className="text-xs underline">VOIR TOUTE LA COLLECTION </p>
            </div>
            <div className='flex justify-end items-center'>
                <GoArrowLeft className='absolute left-8 z-10 text-3xl bg-[#5CD2DD] text-white cursor-pointer' onClick={prevSlide} />
                <div className='grid grid-cols-4 gap-4 w-full px-5'>
                    {similarProducts.slice(current * 4, current * 4 + 4).map((data, index) => (
                       <ProductCard key={index} {...data} />
                    ))}
                </div>
                <GoArrowRight className='absolute right-8 z-10 text-3xl text-white bg-[#5CD2DD] cursor-pointer' onClick={nextSlide} />
            </div>
        </div>
    )
}