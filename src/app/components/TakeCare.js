export default function TakeCare() {
    return (
        <div className="flex flex-col  justify-center text-center items-center p-10 md:p-16 bg-gradient-to-b from-[#fffbfd] to-[#FFFFFF]">
            <h1 className="text-[25px] md:text-[40px] mt-2 text-gray-600 ">On s’occupe de <span className="font-bold text-[#5CD2DD]">tout</span></h1>
            <p className="text-sm md:text-[16px] text-[#BDA2B0] ">Office ipsum you must be muted. It meeting commitment busy pain.</p>
            <div className="flex flex-col gap-10 md:flex md:flex-row md:gap-0 mt-8">
                <div className="flex flex-col justify-center items-center gap-2 ">
                    <img className="w-14 h-12" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733648474/Groupe_25_rlxjxw.png' alt='delivery' />
                    <h1 className="font-medium text-[#393939]">Livraison & Reprise</h1>
                    <p className="text-[#9C9C9C]">Selon vos besoins</p>
                </div>
                  {/* <hr className="w-2/3 mx-auto border-gray-300 my-4 md:hidden" /> */}
                  <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />
                <div className="flex flex-col justify-center items-center gap-2 ">
                    <img className="w-14 h-12" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733648474/Groupe_503_rspuue.png' alt='cleaning' />
                    <h1 className="font-medium text-[#393939]">Nettoyage</h1>
                    <p className="text-[#9C9C9C]">Selon vos besoins</p>
                </div>
                <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />

                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-14 h-12" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733648474/Groupe_56_wcgrhh.png' alt='unlimited' />
                    <h1 className=" font-medium text-[#393939]">Commande Illimitée</h1>
                    <p className="text-[#9C9C9C]">Tout est possible</p>
                </div>
                <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />

                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-14 h-12" src='https://res.cloudinary.com/drpddho9b/image/upload/v1733648474/Groupe_123_k0aygx.png' alt='transport' />
                    <h1 className="font-medium text-[#393939]">Transport & Enlèvement</h1>
                    <p className="text-[#9C9C9C]">Selon vos besoins</p>
                </div>
            </div>
        </div>

    )
}