"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProductCard from "./ProductCard";

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

    return (
        <div className="p-7">
            <div className="flex justify-between">
                <h1 className="text-[#393939] text-2xl">Articles similaires</h1>
                <p className="text-xs underline">VOIR TOUTE LA COLLECTION </p>
            </div>
            <div className='flex justify-end items-center'>
                <Swiper modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    navigation                 
                    breakpoints={{
                        // small devices
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        // medium devices
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        // large devices
                        1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 50,
                        },
                    }}

                >
                    <div className='grid grid-cols-4 gap-4 w-full px-5'>
                        {similarProducts.map((data, index) => (
                            <SwiperSlide key={index} >
                                <ProductCard {...data} />
                            </SwiperSlide>

                        ))}
                    </div>

                </Swiper>
            
            </div>
        </div>
    )
}