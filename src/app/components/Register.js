import { GoArrowRight } from "react-icons/go";

export default function Register() {
    return (
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row gap-5 p-5 md:p-10">
            {/* Image Section */}
            <div className="md:w-1/2">
                <img
                    className="w-full h-[150px] md:h-auto rounded-lg md:rounded-3xl"
                    src='/Register.png'
                    alt='register'
                />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2  bg-[#FFF3F9] rounded-lg md:rounded-3xl p-7">
                {/* typewriter animation for heading */}

                <h2 className="overflow-hidden whitespace-nowrap animate-typewriter border-r-[2px] border-pink-400 text-[25px] md:text-[45px] text-gray-600">S&apos;inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
                </h2>

                <p className="text-sm md:text-[16px] text-[#BDA2B0] mt-2 leading-6">
                    Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didnt. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
                </p>
                <div className="flex flex-col md:flex md:flex-row items-center gap-3 mt-4 md:mt-8 md:mb-6">
                    <input
                        type='text'
                        placeholder="john@deo.com"

                        className="w-full py-3 px-2 md:py-4 border  border-gray-300 rounded-md"
                    />
                    <button className="group relative  w-full md:w-auto rounded-md border-2 border-[#5CD2DD] bg-[#5CD2DD] py-3 md:py-4 px-6 font-medium transition-all hover:bg-white">
                        <span className="absolute inset-0 rounded border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                        <span className="  flex items-center justify-center relative w-full text-left text-white transition-colors duration-900 ease-in-out group-hover:text-[#5CD2DD]"> s&apos;inscrire <GoArrowRight className="ml-2" /></span>
                    </button>


                </div>
            </div>

        </div>
    );
}