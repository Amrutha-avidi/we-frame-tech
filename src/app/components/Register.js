import { GoArrowRight } from "react-icons/go";

export default function Register() {
    return (
        <div className="flex flex-col justify-center items-center md:flex md:flex-row gap-5 p-5 md:p-10">
            {/* Image Section */}
            <div className="md:w-1/2">
                <img
                    className="w-full h-[150px] md:h-auto rounded-lg md:rounded-3xl"
                    src='https://res.cloudinary.com/drpddho9b/image/upload/v1733645914/BUFFET_037_1_hvrzhx.png'
                    alt='register'
                />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2  bg-[#FFF3F9] rounded-lg md:rounded-3xl p-7">
                <h1 className="text-[25px] md:text-[45px] text-gray-600">S'inscrire & économiser <span className="text-[#5CD2DD]">10%</span></h1>
                <p className="text-sm md:text-[16px] text-[#BDA2B0] mt-2 leading-6">
                    Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
                </p>
                <div className="flex flex-col md:flex md:flex-row items-center gap-3 mt-4 md:mt-8 md:mb-6">
                    <input
                        type='text'
                        placeholder="john@deo.com"
                        className="w-full py-3 px-2 md:py-4 border  border-gray-300 rounded-md"
                    />
                    <button className="bg-[#5CD2DD] w-full md:w-auto border-0 rounded-md text-white py-3 md:py-4 px-6 flex items-center justify-center">
                        s'inscrire <GoArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
