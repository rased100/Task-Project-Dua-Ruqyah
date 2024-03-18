"use client";

import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarItemView, setSidebarItemVies] = useState("language");
  const [language, setLanguage] = useState("en");
  const [translationFontSize, setTranslationFontSize] = useState(18);
  const [arabicFontSize, setArabicFontSize] = useState(26);
  const [arabicScript, setArabicScript] = useState("Uthmani");
  const [arabicFont, setArabicFont] = useState("KFGQ");

  return (
    <div className="drawer drawer-end 2xl:h-[84vh] 2xl:drawer-open">
      <input id="drawer-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="drawer-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full 2xl:min-h-[84vh] bg-white rounded-l-3xl 2xl:rounded-3xl text-base-content">
          <h1 className="text-xl text-center pt-7 pb-10">Settings</h1>

          <div className="mb-5">
            <div
              className={
                sidebarItemView === "language"
                  ? "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer p-2 rounded-md border-l-4 border-[#1FA45B]"
                  : "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer px-3 py-2 rounded"
              }
              onClick={() => {
                setSidebarItemVies("language");
              }}
            >
              <div className="bg-[#e8f0f5] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5H15H3ZM9 3V5V3ZM10.048 14.5C8.5081 12.9059 7.27548 11.0413 6.412 9L10.048 14.5ZM12.5 18H19.5H12.5ZM11 21L16 11L21 21H11Z"
                    stroke={
                      sidebarItemView === "language" ? "#1FA45B" : "#868686"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={
                  sidebarItemView === "language"
                    ? "font-medium text-[#1FA45B]"
                    : "font-medium text-gray-600"
                }
              >
                Language Settings
              </p>
            </div>
            <div
              className={
                sidebarItemView === "language"
                  ? "p-4 flex gap-3 border-x border-b rounded-b-md"
                  : "h-0 overflow-hidden"
              }
            >
              <button
                className={
                  language === "en"
                    ? "bg-[#1fa45b] text-white w-full py-2 rounded-md"
                    : "bg-white text-black w-full py-2 rounded-md border border-[#cccdcf]"
                }
                onClick={() => {
                  setLanguage("en");
                }}
              >
                English
              </button>
              <button
                className={
                  language === "bn"
                    ? "bg-[#1fa45b] text-white w-full py-2 rounded-md"
                    : "bg-white text-black w-full py-2 rounded-md border border-[#cccdcf]"
                }
                onClick={() => {
                  setLanguage("bn");
                }}
              >
                বাংলা
              </button>
            </div>
          </div>

          <div className="mb-5">
            <div
              className={
                sidebarItemView === "general"
                  ? "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer p-2 rounded-md border-l-4 border-[#1FA45B]"
                  : "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer px-3 py-2 rounded"
              }
              onClick={() => {
                setSidebarItemVies("general");
              }}
            >
              <div className="bg-[#e8f0f5] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H17M19 11H5H19ZM19 11C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11H19ZM19 11V9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7L19 11ZM5 11V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7L5 11ZM7 7V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7H7Z"
                    stroke={
                      sidebarItemView === "general" ? "#1FA45B" : "#868686"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={
                  sidebarItemView === "general"
                    ? "font-medium text-[#1FA45B]"
                    : "font-medium text-gray-600"
                }
              >
                General Settings
              </p>
            </div>
            <div
              className={
                sidebarItemView === "general"
                  ? "form-control p-4 flex gap-3 border-x border-b rounded-b-md"
                  : "h-0 overflow-hidden"
              }
            >
              <label className="label py-0 cursor-pointer">
                <span className="label-text">Show Arabic</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:#1fa45b] [--chkfg:#c7e8d6]"
                />
              </label>
              <label className="label py-0 cursor-pointer">
                <span className="label-text">Show Translation</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:#1fa45b] [--chkfg:#c7e8d6]"
                />
              </label>
              <label className="label py-0 cursor-pointer">
                <span className="label-text">Show Transliteration</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:#1fa45b] [--chkfg:#c7e8d6]"
                />
              </label>
              <label className="label py-0 cursor-pointer">
                <span className="label-text">Show Reference</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:#1fa45b] [--chkfg:#c7e8d6]"
                />
              </label>
            </div>
          </div>

          <div className="mb-5">
            <div
              className={
                sidebarItemView === "font"
                  ? "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer p-2 rounded-md border-l-4 border-[#1FA45B]"
                  : "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer px-3 py-2 rounded"
              }
              onClick={() => {
                setSidebarItemVies("font");
              }}
            >
              <div className="bg-[#e8f0f5] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={sidebarItemView === "font" ? "#1FA45B" : "#868686"}
                >
                  <path
                    d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p
                className={
                  sidebarItemView === "font"
                    ? "font-medium text-[#1FA45B]"
                    : "font-medium text-gray-600"
                }
              >
                Font Settings
              </p>
            </div>
            <div
              className={
                sidebarItemView === "font"
                  ? "px-4 py-5 gap-3 border-x border-b rounded-b-md"
                  : "h-0 overflow-hidden"
              }
            >
              <div className="w-full mb-5">
                <p className="mb-3">Translation Font Size</p>
                <div className="w-full flex items-center">
                  <input
                    type="range"
                    min={14}
                    max="25"
                    value={translationFontSize}
                    className="range range-xs range-success"
                    step="1"
                    onChange={(e) => {
                      setTranslationFontSize(e.target.value);
                    }}
                  />
                  <p className="ml-2 font-medium">{translationFontSize}</p>
                </div>
              </div>

              <div className="w-full mb-5">
                <p className="mb-3">Select Arabic Script</p>
                <div className="dropdown dropdown-bottom w-full">
                  <div
                    tabIndex={0}
                    role="button"
                    className="w-full border p-4 rounded-lg grid grid-cols-3 items-center"
                  >
                    <p className="col-span-2">{arabicScript}</p>
                    <div className="flex justify-end">
                      <Image
                        src="/assets/icons/dropdown.svg"
                        alt=""
                        width={45}
                        height={45}
                        className="w-4"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
                  >
                    <li>
                      <a
                        onClick={() => {
                          setArabicScript("Uthmani");
                        }}
                      >
                        Uthmani
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setArabicScript("Indopak");
                        }}
                      >
                        Indopak
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full mb-5">
                <p className="mb-3">Arabic Font</p>
                <div className="dropdown dropdown-bottom w-full">
                  <div
                    tabIndex={0}
                    role="button"
                    className="w-full border p-4 rounded-lg grid grid-cols-3 items-center"
                  >
                    <p className="col-span-2">{arabicFont}</p>
                    <div className="flex justify-end">
                      <Image
                        src="/assets/icons/dropdown.svg"
                        alt=""
                        width={45}
                        height={45}
                        className="w-4"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
                  >
                    <li>
                      <a
                        onClick={() => {
                          setArabicFont("KFGQ");
                        }}
                      >
                        KFGQ
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setArabicFont("Me Quran");
                        }}
                      >
                        Me Quran
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setArabicFont("Al Mushaf");
                        }}
                      >
                        Al Mushaf
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setArabicFont("Amiri Quran");
                        }}
                      >
                        Amiri Quran
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <p className="mb-3">Arabic Font Size</p>
                <div className="w-full flex items-center">
                  <input
                    type="range"
                    min="18"
                    max="40"
                    value={arabicFontSize}
                    className="range range-xs range-success"
                    step="1"
                    onChange={(e) => {
                      setArabicFontSize(e.target.value);
                    }}
                  />
                  <p className="ml-2 font-medium">{arabicFontSize}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div
              className={
                sidebarItemView === "appearance"
                  ? "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer p-2 rounded-md border-l-4 border-[#1FA45B]"
                  : "flex items-center gap-5 bg-[#f7f8fa] cursor-pointer px-3 py-2 rounded"
              }
              onClick={() => {
                setSidebarItemVies("appearance");
              }}
            >
              <div className="bg-[#e8f0f5] p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    sidebarItemView === "appearance" ? "#1FA45B" : "#868686"
                  }
                >
                  <path
                    d="M8 2.75H5C3.75736 2.75 2.75 3.75736 2.75 5V8C2.75 9.24264 3.75736 10.25 5 10.25H8C9.24264 10.25 10.25 9.24264 10.25 8V5C10.25 3.75736 9.24264 2.75 8 2.75Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19 2.75H16C14.7574 2.75 13.75 3.75736 13.75 5V8C13.75 9.24264 14.7574 10.25 16 10.25H19C20.2426 10.25 21.25 9.24264 21.25 8V5C21.25 3.75736 20.2426 2.75 19 2.75Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19 13.75H16C14.7574 13.75 13.75 14.7574 13.75 16V19C13.75 20.2426 14.7574 21.25 16 21.25H19C20.2426 21.25 21.25 20.2426 21.25 19V16C21.25 14.7574 20.2426 13.75 19 13.75Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 13.75H5C3.75736 13.75 2.75 14.7574 2.75 16V19C2.75 20.2426 3.75736 21.25 5 21.25H8C9.24264 21.25 10.25 20.2426 10.25 19V16C10.25 14.7574 9.24264 13.75 8 13.75Z"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p
                className={
                  sidebarItemView === "appearance"
                    ? "font-medium text-[#1FA45B]"
                    : "font-medium text-gray-600"
                }
              >
                Appearance Settings
              </p>
            </div>
            <div
              className={
                sidebarItemView === "appearance"
                  ? "p-4 flex gap-3 border-x border-b rounded-b-md"
                  : "h-0 overflow-hidden"
              }
            >
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text">Night Mode</span>
                  <input type="checkbox" className="toggle toggle-accent" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
