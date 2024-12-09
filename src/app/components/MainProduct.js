import { FiMinus, FiPlus } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";


export default function MainProduct() {
    return (
        <div className="flex flex-col md:flex md:flex-row  justify-center gap-5 p-5 md:p-7 ">
            <div className="bg-[#F8F6F4] md:w-1/2 flex flex-col md:flex md:flex-row    p-2 rounded-2xl">
                <div className="flex md:flex-col gap-1">
                    <img className="w-[55px] h-[55px] bg-white p-2 rounded-md" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png' alt='table' />
                    <img className="w-[55px] h-[55px] opacity-60 bg-white p-2 rounded-md" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png' alt='table' />
                    <img className="w-[55px] h-[55px] opacity-60 bg-white p-2 rounded-md" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png' alt='table' />

                    <img className="w-[55px] h-[55px] opacity-60 bg-white p-2  rounded-md" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733663420/Table_ronde_165cm_Festi_1-removebg-preview_puoozf.png' alt='table' />
                </div>
                <div className="md:m-10 flex flex-col justify-center items-center">
                    <img className=" w-[400px] h-[400px] md:w-[560px] md:h-[560px]  " src='https://res.cloudinary.com/drpddho9b/image/upload/v1733678728/Location_Cheese_big_picture_1-removebg-preview_qmxokj.png' alt='cheese machine' />

                </div>


            </div>
            <div className="md:w-1/2 flex flex-col justify-between px-2 py-0 md:px-5">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-3xl text-[#111928] font-serif">
                            Cheese – appareil à raclette 1/2 roue
                        </h1>
                        <CiHeart className="w-10 h-10" />
                    </div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl text-[#111928] " >
                            39,50€
                        </h2>
                        <p className="text-md text-[#9C9C9C]">/pièce</p>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between items-center" >
                        <div className="flex gap-5 items-center">
                            <div className="flex gap-2">
                                <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1733678649/Capa_1_yynk4v.png' alt='scale' />
                                <p>20cm</p>
                            </div>
                            <div className="flex gap-2">
                                <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1733678649/Frame_pm72ve.png' alt='dia' />
                                <p>50cm</p>
                            </div>
                        </div>
                        <p className="text-[#9C9C9C] text-xs">
                            RÉF : VABGN5
                        </p>


                    </div>
                    <hr className="my-3" />
                    <p className="text-[#5D5D5D] text-sm">Location appareil à raclette - Raclette traditionnelle 1/2 roue<br />
                        Réglable en hauteur<br />
                        Appareil à raclette professionnel<br />
                        Boîtier de chauffe horizontal réglable en hauteur<br />

                    </p>
                    <p className="text-[#5D5D5D] text-sm mt-5">
                        220V <br />
                        900W
                    </p>
                </div>
                <div>
                    <hr className="my-3" />
                    <div className="grid grid-cols-[1fr_3fr] gap-2">
                        <div className="flex justify-between items-center border border-1 rounded-md p-2 md:p-3 ">
                            <FiMinus /><span>1</span><FiPlus />
                        </div>
                        <button className="bg-[#5CD2DD] rounded-md text-white">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}