import React from "react";
import Image from "next/image";
import logo from "@/public/duas/card.svg";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import Sidebar from "@/app/components/Sidebar";
import DuaCategories from "@/app/components/DuaCategories";

const CustomButton = dynamic(() => import("@/app/components/CustomButton"), {
  ssr: false,
});

async function getDuas(categoryId) {
  const res = await fetch(
    `https://task-project-dua-ruqyah-backend.onrender.com/api/dua/${categoryId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return res.json();
}

const DuaCards = async ({ params }) => {
  const categoryId = params.categoryId;
  const duas = await getDuas(categoryId);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="h-fit">
        {/* <p>Categories</p> */}
        <DuaCategories />
      </div>
      <div className="h-[calc(100vh-80px)] flex">
        <Toaster />

        <div className="h-full overflow-auto">
          {duas.map((dua) => (
            <div
              key={dua.dua_id}
              id={dua.dua_id}
              className="mb-5 p-6 bg-base-100 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <Image src={logo} alt="icon" />
                <h2 className="font-bold text-green-600">
                  {dua.dua_id}. {dua.dua_name_en}
                </h2>
              </div>

              <div className="text-lg">
                {dua.top_en && <p className="mt-5">{dua.top_en}</p>}
                {dua.dua_arabic && (
                  <p className="text-right text-3xl my-10">{dua.dua_arabic}</p>
                )}
                {dua.transliteration_en && (
                  <p className="italic my-10 text-gray-700">
                    <span className="font-bold text-xl ">
                      Transliteration:{" "}
                    </span>
                    {dua.transliteration_en}
                  </p>
                )}
                {dua.translation_en && (
                  <p className="my-5 text-gray-800">
                    <span className="font-bold text-gray-800">
                      Translation:{" "}
                    </span>
                    {dua.translation_en}
                  </p>
                )}
                {dua.bottom_en && (
                  <p className="mt-5 text-slate-600">{dua.bottom_en}</p>
                )}
              </div>

              {dua.refference_en && (
                <div className="mt-5">
                  <h4 className="text-green-600 font-bold">Reference:</h4>
                  <p className="mt-1 text-xl mb-5">{dua.refference_en}</p>
                </div>
              )}

              <CustomButton dua={dua} />
            </div>
          ))}
        </div>
        <div className="">
          <div className="drawer drawer-end 2xl:h-[84vh] 2xl:drawer-open">
            <input
              id="drawer-sidebar"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-side">
              <label
                htmlFor="drawer-sidebar"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCards;
