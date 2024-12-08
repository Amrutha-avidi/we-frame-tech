
import ProductCard from "./ProductCard";
export default function Interest() {
    const cardData = [
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
                <h1 className="text-[#393939] text-2xl">Ces produits pourraient vous intéresser</h1>
                <p className="text-xs underline">VOIR TOUTE LA COLLECTION </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-1 gap-6 mt-5 w-full">
                {cardData.map((data, index) => (
                    <ProductCard key={index} {...data} />
                ))}
            </div>
        </div>
    );
}