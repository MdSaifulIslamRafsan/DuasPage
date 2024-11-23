"use client";

import { useEffect, useState } from "react";
import DuaSectionHeader from "./DuaSectionHeader";
import DuaCard from "./DuaCard";

// Define the type for a single Dua object
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

const DuaSection: React.FC = () => {
  const [duas, setDuas] = useState<Dua[]>([]); 
  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      const response = await fetch('/api/duas');
      const duaData: Dua[] = await response.json(); // Type the response data as an array of Dua objects
      setDuas(duaData);
    };
    fetchData();
  }, []);

  return (
    <div className="lg:col-span-2 h-screen lg:h-[calc(100vh-155px)] overflow-auto">
      <div>
        <DuaSectionHeader />
      </div>
      <div>
        {duas && (
          // Map over the array of duas and pass each one to the DuaCard component
          duas.map((dua, idx) => (
            <DuaCard
              dua={dua} 
              index={idx} 
              key={idx} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DuaSection;
