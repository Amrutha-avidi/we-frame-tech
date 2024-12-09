import { LuDot } from "react-icons/lu";

export default function MenuItems() {
    const menuItems = ["ART DE LA TABLE",
        "MOBILIER",
        "NAPPAGE",
        "MATÉRIEL DE SALLEM",
        "CUISINE", "BARBECUE",
        "TENTE", "CHAUFFAGE",
        "PODIUM - PISTE DE DANSE",
        "SON ET LUMIÉRE", "PACKS",
        "CONSOMMABLES"
    ]
    return (

        <div className="flex flex-col ">
            <div className="flex md:justify-between items-center gap-5 overflow-y-auto px-4 pt-2  md:px-7 md:pt-4" >
                {menuItems.map((item, index) => (
                    <span
                        key={index}
                        className={`text-xs md:text-sm  ${index === 0 ? "text-[#0093D0] font-bold" : "text-[#6B7280] font-medium"
                            }`}
                    >
                        {item}
                    </span>
                ))}
            </div>
            {/* Custom HR */}
            <div className="relative mt-0 md:mt-4">
                <hr className=" bg-gray-300 border-1" />
                <div className="absolute left-3 w-14 md:left-7 top-0 h-[2px] bg-[#0093D0] md:w-[123px]"></div>
            </div>
            <div className="flex  items-center gap-1 px-5 pt-4  md:px-7 md:pt-4 ">
                <p className="text-[#393939] font-semibold text-sm" >Home</p>
                <LuDot className="text-3xl text-[#9C9C9C]" />
                <p className="text-[#9C9C9C] font-medium text-sm">Art de la table</p>
            </div>

        </div>


    )
}