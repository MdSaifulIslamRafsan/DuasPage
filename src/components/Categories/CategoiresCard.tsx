"use client";

import Image from "next/image";

interface Category {
  cat_name_en: string;
  no_of_Subcategory: number;
  no_of_dua: number;
  cat_icon: string;
}

interface CategoriesCardProps {
  category: Category;
  handleClickedCat: () => void; // Adjust function signature if it takes arguments
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ category, handleClickedCat }) => {
  const { cat_name_en, no_of_Subcategory, no_of_dua, cat_icon } = category;

  return (
    <div
      onClick={handleClickedCat}
      className="relative bg-white hover:bg-[#E8F0F5] shadow-md rounded-xl flex p-4 mx-auto mb-3"
    >
      <div className="w-[60px] h-[60px] bg-[#E8F0F5] flex items-center justify-center">
        <Image
          src={`/categoryIcons/${cat_icon}.svg`}
          alt={cat_name_en}
          width={40}
          height={40}
        />
      </div>

      <div className="ml-4 flex-1">
        <h1 className="font-semibold text-lg text-[#393939]">{cat_name_en}</h1>
        <span className="text-[0.9rem] text-gray-400">Subcategory: {no_of_Subcategory}</span>
      </div>
      {/* Divider */}
      <div className="divider divider-horizontal"></div>

      <div className="font-semibold text-lg text-center w-[36px]">
        <h1 className="text-[#393939]">{no_of_dua}</h1>
        <h1>Duas</h1>
      </div>
    </div>
  );
};

export default CategoriesCard;
