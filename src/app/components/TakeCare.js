export default function TakeCare() {
    return (
        <div className="flex flex-col  justify-center text-center items-center p-10 md:p-16 bg-gradient-to-b from-[#fffbfd] to-[#FFFFFF]">
            <h2 className="text-[25px] md:text-[40px] mt-2 text-gray-600 ">On s’occupe de <span className="font-bold text-[#5CD2DD]">tout</span></h2>
            <p className="text-sm md:text-[16px] text-[#BDA2B0] ">Office ipsum you must be muted. It meeting commitment busy pain.</p>
            <div className="flex flex-col gap-10 md:flex md:flex-row md:gap-0 mt-8">
                <div className="flex flex-col justify-center items-center gap-2 ">
                    <img className="w-14 h-12" src='/TC_1.png' alt='delivery' />
                    <h2 className="font-medium text-[#393939] group">Livraison & Reprise
                        <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>
                    </h2>
                    <p className="text-[#9C9C9C]">Selon vos besoins</p>
                </div>
                {/* <hr className="w-2/3 mx-auto border-gray-300 my-4 md:hidden" /> */}
                <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />
                <div className="flex flex-col justify-center items-center gap-2 ">
                    <img className="w-14 h-12" src='/TC_2.png' alt='cleaning' />
                    <h2 className="font-medium text-[#393939] group">Nettoyage
                        <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>
                    </h2>
                    <p className="text-[#9C9C9C]">Selon vos besoins</p>
                </div>
                <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />

                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-14 h-12" src='/TC_3.png' alt='unlimited' />
                    <h2 className=" font-medium text-[#393939] group">Commande Illimitée
                        <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>
                    </h2>
                    <p className="text-[#9C9C9C]">Tout est possible</p>
                </div>
                <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />

                <div className="flex flex-col justify-center items-center gap-2">
                    <img className="w-14 h-12" src='/TC_4.png' alt='transport' />
                    <h2 className="font-medium text-[#393939] group">Transport & Enlèvement
                        <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>
                    </h2>
                    <p className="text-[#9C9C9C]">Selon vos besoins</p>
                </div>
            </div>
        </div>

    )
}