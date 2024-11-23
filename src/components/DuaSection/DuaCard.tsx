import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { PiLightbulbFilamentThin } from "react-icons/pi";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

// Define the type for the 'dua' prop
interface Dua {
  id: string;
  cat_id: string;
  subcat_id: string;
  dua_id: string;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string | null;
  dua_indopak: string | null;
  clean_arabic: string | null;
  transliteration_bn: string;
  transliteration_en: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn: string;
  bottom_en: string;
  refference_bn: string;
  refference_en: string;
  audio: string | null;
}

interface DuaCardProps {
  dua: Dua;
  index: number;
}

const DuaCard: React.FC<DuaCardProps> = ({ dua, index }) => {
  const {
    dua_name_en,
    top_en,
    dua_arabic,
    transliteration_en,
    translation_en,
    refference_en,
    audio
  } = dua;

  return (
    <div className="bg-white mb-3 rounded-lg px-7 py-4">
      <div className="flex items-center space-x-5">
        <Image
          src="/surahIcons/allah.png"
          alt="Allah"
          width={40}
          height={40}
        />
        <h1 className="text-[#1FA45B] font-semibold">
          <>{index + 1}.</> {dua_name_en}
        </h1>
      </div>
      <div className="my-7">
        <p className="text-lg font-semibold">{top_en}</p>
      </div>
      {dua_arabic && (
        <>
          <div className="my-7 text-right">
            <p className="text-lg font-semibold">{dua_arabic}</p>
          </div>
          <div className="mt-7">
            <p className="text-lg font-semibold italic">Transliteration : {transliteration_en}</p>
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold">Translation : {translation_en}</p>
          </div>
        </>
      )}
      <div className="my-7">
        <h1 className="text-[#1FA45B] font-semibold">Reference :</h1>
        <h1 className="font-semibold">{refference_en}</h1>
      </div>
      <div className="flex items-center justify-between">
        {audio && (
          <div className="bg-[#1FA45B] w-11 h-11 flex items-center justify-center rounded-full">
            {/* audio player btn */}
            <FaPlay className="text-white" />
          </div>
        )}
        <div className="justify-end">
          <ul className="flex space-x-5 text-gray-600">
            <li className="text-xl"><IoCopyOutline /></li>
            <li className="text-xl"><CiBookmark /></li>
            <li className="text-xl"><PiLightbulbFilamentThin /></li>
            <li className="text-xl"><LuShare2 /></li>
            <li className="text-xl"><MdOutlineReportGmailerrorred /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;
