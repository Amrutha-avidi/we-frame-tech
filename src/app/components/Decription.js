import { FiPlus } from "react-icons/fi";

export default function Decription() {
    return (
        <div className="flex flex-col justify-center p-5 md:flex md:flex-row md:justify-between md:items-center md:gap-5 md:p-7">
            <div className="md:w-1/2 flex flex-col">
                <h2 className="text-[#393939] text-2xl">Description produit</h2>

                <p className="text-[#9C9C9C] mt-2 text-sm">
                    Festi vous propose à la location un/une &quot;Jewel – grand couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d&quot;autre produit à louer de ce type dans la catégorie &quot;Art de la Table&quot;
                </p>
            </div>
            <div className="md:w-1/2 flex flex-row justify-between sm:gap-5 mt-5 md:flex-col md:gap-0">
                <button className="text-sm text-[#393939] bg-[#FBF9F899] w-full flex justify-between items-center p-3 md:p-5">
                    LIVRAISONS
                    <FiPlus />
                </button>
                <button className="text-sm text-[#393939] bg-[#FBF9F899] w-full flex justify-between items-center p-3 md:p-5">
                    QUESTIONS
                    <FiPlus />

                </button>
            </div>
        </div>
    )
}
