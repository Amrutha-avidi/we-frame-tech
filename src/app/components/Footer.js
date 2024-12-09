import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 md:px-10 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="flex flex-col justify-center items-center text-center md:flex-row gap-10 md:text-left" >
          {/* logo image */}

          <img
            src="/logo.png"
            alt="logo"
            className="h- w-26 md:h-16 md:w-[130px]"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-[#393939] text-md font-bold group">INFOS PRATIQUES
              <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>

            </h2>
            <p className="text-gray-500">
              A propos <br /> Livraisons & Reprises <br /> Mode d&apos;emploi <br />F.A.Q
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#393939] text-md font-bold group">LÉGAL
              <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>

            </h2>
            <p className="text-gray-500">
              Mentions légales <br /> CGU <br /> CGV <br />Politique de confidentialité
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#393939] text-md font-bold group">MON COMPTE
              <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>

            </h2>
            <p className="text-gray-500">
              Accéder à mon compte <br />Ma liste d&apos;envies <br /> Créer un compte <br />Mot de passe oublié
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h2 className="text-[#393939] text-md font-bold group">NOUS SUIVRE
            <div className="bg-pink-300 mt-[-2px] h-[2px] w-0 group-hover:w-[100%] transition-all duration-500"></div>

          </h2>
          <div className="flex gap-3">
            <div className="p-2 border border-gray-300 rounded-md hover:shadow-inner hover:shadow-black/30 duration 300 hover:text-blue-600">
              <ImTwitter className="w-6 h-6" />
            </div>
            <div className="p-2 border border-gray-300 rounded-md hover:shadow-inner hover:shadow-black/30 duration 300 hover:text-pink-600">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div className="p-2 border border-gray-300 rounded-md hover:shadow-inner hover:shadow-black/30 duration 300 hover:text-blue-800">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}