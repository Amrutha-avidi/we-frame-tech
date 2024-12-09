export default function TakeCare() {
    {/* Services Data */ }

    const services = [
        {
            imageSrc: '/TC_1.png',
            title: 'Livraison & Reprise',
            description: 'Selon vos besoins',
        },
        {
            imageSrc: '/TC_2.png',
            title: 'Nettoyage',
            description: 'Selon vos besoins',
        },
        {
            imageSrc: '/TC_3.png',
            title: 'Commande Illimitée',
            description: 'Tout est possible',
        },
        {
            imageSrc: '/TC_4.png',
            title: 'Transport & Enlèvement',
            description: 'Selon vos besoins',
        },
    ];

    return (
        <div className="flex flex-col justify-center text-center items-center p-10 md:p-16 bg-gradient-to-b from-[#fffbfd] to-[#FFFFFF]">
            <h2 className="text-[25px] md:text-[40px] mt-2 text-gray-600">
                On s’occupe de <span className="font-bold text-[#5CD2DD]">tout</span>
            </h2>
            <p className="text-sm md:text-[16px] text-[#BDA2B0]">
                Office ipsum you must be muted. It meeting commitment busy pain.
            </p>
            <div className="flex flex-col gap-10 md:flex md:flex-row md:gap-0 mt-8">
                {services.map((service, index) => (

                    <div className="flex" key={index} >
                        {/* Service Data */}
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img className="w-14 h-12" src={service.imageSrc} alt={service.title} />
                            <h2 className="font-medium text-[#393939] group">
                                {service.title}
                                <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>
                            </h2>
                            <p className="text-[#9C9C9C]">{service.description}</p>

                        </div>
                        {/* Line in between */}
                        <div>
                            {index < services.length - 1 && (
                                <hr className="hidden md:block md:w-[120px] md:mt-8 md:border-gray-300" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
