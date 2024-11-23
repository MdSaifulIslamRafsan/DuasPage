"use client";

import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CategoriesCard from "./CategoiresCard";
import { GoDotFill } from "react-icons/go";

interface Category {
  cat_id: string;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_Subcategory: number;
  no_of_dua: number;
  cat_icon: string;
}

interface SubCategory {
  id: string;
  cat_id: string;
  subcat_name_en: string;
  subcat_name_bn: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catResponse, subCatResponse] = await Promise.all([
          fetch("/api/category"),
          fetch("/api/sub-category"),
        ]);

        const catData: Category[] = await catResponse.json();
        const subCatData: SubCategory[] = await subCatResponse.json();

        setCategories(catData);
        setSubCategories(subCatData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickedCat = (cat_id: string) => {
    setSelectedCategoryId(cat_id);
    const selectedCat = document.getElementById(cat_id);
    if (selectedCat) {
      selectedCat.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredSubcategories = subCategories.filter(
    (subCategory) => subCategory.cat_id === selectedCategoryId
  );

  return (
    <div className="col-span-1 rounded-lg bg-white max-h-[900px]">
      <div className="bg-[#1FA45B] rounded-t-lg text-lg py-[18px]">
        <h1 className="text-white font-semibold text-center">Categories</h1>
      </div>
      {/* Search bar */}
      <div className="relative w-full mx-auto bg-white my-4 px-3">
        <input
          className="px-4 py-3 border border-gray-200 rounded-md w-full pl-[40px] outline-none focus:border-primary"
          placeholder="Search by Categories"
        />
        <IoIosSearch className="absolute top-[15px] left-5 text-[1.5rem] text-[#adadad]" />
      </div>
      <div className="overflow-auto max-h-[745px] px-3">
        {categories.map((category) => (
          <div key={category.cat_id} id={category.cat_id}>
            <CategoriesCard
              category={category}
              handleClickedCat={() => handleClickedCat(category.cat_id)}
            />
            {selectedCategoryId === category.cat_id && (
              <ul className="relative ml-5">
                {filteredSubcategories.map((subcat) => (
                  <li key={subcat.id} className="mb-2">
                    <div className="flex relative items-start space-x-5 border-none">
                      <GoDotFill />
                      <button
                        className="max-w-[310px] text-left"
                        onClick={() => console.log(`Subcategory clicked: ${subcat.subcat_name_en}`)}
                      >
                        {subcat.subcat_name_en}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
