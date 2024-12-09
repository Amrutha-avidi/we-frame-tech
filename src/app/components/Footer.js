import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-4 md:px-10 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="flex flex-col justify-center items-center text-center md:flex-row gap-10 md:text-left" >
          <img
            src="https://res.cloudinary.com/drpddho9b/image/upload/v1733591495/Group_bksdhl.png"
            alt="logo"
            className="h- w-26 md:h-16 md:w-[130px]"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-[#393939] text-md font-bold">INFOS PRATIQUES</h1>
            <p className="text-gray-500">
              A propos <br /> Livraisons & Reprises <br /> Mode d&apos;emploi <br />F.A.Q.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#393939] text-md font-bold">LÉGAL</h1>
            <p className="text-gray-500">
              Mentions légales <br /> CGU <br /> CGV <br />Politique de confidentialité
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#393939] text-md font-bold">MON COMPTE</h1>
            <p className="text-gray-500">
              Accéder à mon compte <br />Ma liste d’envies <br /> Créer un compte <br />Mot de passe oublié
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h1 className="text-[#393939] text-md font-bold">NOUS SUIVRE</h1>
          <div className="flex gap-3">
            <div className="p-2 border border-gray-300 rounded-md">
              <ImTwitter className="w-6 h-6" />
            </div>
            <div className="p-2 border border-gray-300 rounded-md">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div className="p-2 border border-gray-300 rounded-md">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
