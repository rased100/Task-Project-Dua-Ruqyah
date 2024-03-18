import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import duar_gurutto from "@/public/categories/Frame.svg";

const CategoriesDisplay = ({ categories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [subCategoryDuas, setSubCategoryDuas] = useState([]);

  useEffect(() => {
    // Fetch subcategories during build time
    const fetchSubCategories = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/subcategories/${selectedCategoryId}`
        );
        const data = await res.json();
        setSubCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubCategories();
  }, [selectedCategoryId]);

  useEffect(() => {
    // Fetch subcategory duas during build time
    const fetchSubCategoryDuas = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/dua/subCategory/${selectedSubCategoryId}`
        );
        const data = await res.json();
        setSubCategoryDuas(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedSubCategoryId) {
      fetchSubCategoryDuas();
    }
  }, [selectedSubCategoryId]);

  return (
    <div>
      {categories.map((category) => (
        <Link href={`/duas/${category.cat_id}`} key={category.id}>
          <div onClick={() => setSelectedCategoryId(category.cat_id)}>
            <div className="mt-5 flex gap-4">
              <div className="p-3 rounded-md bg-slate-100">
                <Image src={duar_gurutto} alt="icon" width={100} height={100} />
              </div>
              <div>
                <h3 className="text-xl">{category.cat_name_en}</h3>
                <p>Sub Category: {category.no_of_subcat}</p>
              </div>
            </div>
            {selectedCategoryId === category.cat_id && (
              <div className="border-l-2 border-dashed border-[#00A661] ml-10 px-2">
                {subCategories.map((subCategory) => (
                  <div
                    className="flex flex-col justify-start items-start"
                    key={subCategory.subcat_id}
                  >
                    <h5
                      onClick={() =>
                        setSelectedSubCategoryId(subCategory.subcat_id)
                      }
                      className="font-semibold block my-2 text-[#00A661]"
                    >
                      {subCategory.subcat_name_en}
                    </h5>
                    <div>
                      {subCategoryDuas.map((item) => (
                        <a href={item.dua_id} key={item.dua_id}>
                          {item.dua_name_en}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesDisplay;
