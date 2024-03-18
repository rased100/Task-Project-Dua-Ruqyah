"use client";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const CategoryInfo = dynamic(
  () => import("@/app/components/CategoriesDisplay"),
  {
    ssr: false,
  }
);

async function fetchCategories() {
  const res = await fetch(
    "https://task-project-dua-ruqyah-backend.onrender.com/api/categories"
  );
  return res.json();
}

const DuaCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };

    loadCategories();
  }, []);

  return (
    <div>
      {/* <div className="drawer drawer-end 2xl:h-[84vh] xl:drawer-open bg-red-100"> */}
      <div className="drawer lg:drawer-open">
        <input
          id="categoriesdrawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className=" drawer-content flex flex-col  justify-center bg-base-100 rounded-xl mb-5">
          <label
            htmlFor="categoriesdrawer"
            className="drawer-button lg:hidden py-4 pl-10 "
          >
            <FaBars />
          </label>
        </div>
        <div className=" drawer-side h-[calc(100vh-93px)]">
          <label
            htmlFor="categoriesdrawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="">
            <ul className="menu w-80 bg-base-100 text-base-content rounded-xl p-0 overflow-hidden">
              <div className="">
                <h4 className=" bg-green-600 text-white text-center px-3 py-4  font-semibold m-0 rounded-t-xl">
                  Categories
                </h4>
                <form>
                  <div className="mx-4 mt-3 flex items-center border p-3 rounded-md border-slate-300 focus:border-green-500">
                    <div className="mr-2">
                      <IoIosSearch className="text-2xl" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search categories"
                      className="w-full flex-shrink rounded-md border-none outline-none"
                    />
                  </div>
                </form>
              </div>
              <div className="p-4 h-[calc(100vh-210px)] overflow-auto">
                <CategoryInfo categories={categories} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCategories;
