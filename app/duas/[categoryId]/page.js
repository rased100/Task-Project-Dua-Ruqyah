import React from "react";
import Image from "next/image";
import duaCardLogo from "@/public/duas/card.svg";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const CustomButton = dynamic(() => import("@/app/components/CustomButton"), {
  ssr: false,
});

async function getDuas(categoryId) {
  const res = await fetch(`http://localhost:8080/api/dua/${categoryId}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

const DuaCards = async ({ params }) => {
  const categoryId = params.categoryId;
  const duas = await getDuas(categoryId);

  return (
    <div className="h-[calc(100vh-80px)]">
      <Toaster />
      <div className="h-full overflow-auto">
        {duas.map((dua) => (
          <div
            key={dua.dua_id}
            id={dua.dua_id}
            className="mb-5 p-6 bg-base-100 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <Image src={duaCardLogo} alt="icon" />
              <h3 className="font-semibold text-green-600">
                {dua.dua_id}. {dua.dua_name_en}
              </h3>
            </div>

            <div className="text-xl">
              {dua.top_en && <p className="mt-5">{dua.top_en}</p>}
              {dua.dua_arabic && (
                <p className="text-right text-2xl tracking-wider font-bold my-8">
                  {dua.dua_arabic}
                </p>
              )}
              {dua.transliteration_en && (
                <p className="italic my-5 text-slate-700">
                  <span className="font-semibold text-xl ">
                    Transliteration:{" "}
                  </span>
                  {dua.transliteration_en}
                </p>
              )}
              {dua.translation_en && (
                <p className="my-5 text-slate-600">
                  <span className="font-semibold">Translation: </span>
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
    </div>
  );
};

export default DuaCards;
