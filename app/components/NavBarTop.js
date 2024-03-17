"use client";

import Image from "next/image";
import { useState } from "react";
import profile from "@/public/top/profile1.svg";
import settings from "@/public/top/settings.svg";
import support from "@/public/top/support.svg";
import download from "@/public/top/download.svg";
import privacy from "@/public/top/privacy.svg";
import credit from "@/public/top/credit.svg";
import about from "@/public/top/about.svg";
import copyright from "@/public/top/copyright.svg";
import projects from "@/public/top/projects.svg";

const NavBarTop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic
  };

  return (
    <div className="grid grid-cols-[1fr_17%] gap-12 mb-5 mt-5">
      <div className="grid grid-cols-2 items-center">
        <div>
          <h1 className="text-2xl ml-4">Duas Page</h1>
        </div>
        <div className="flex justify-end">
          <form onSubmit={handleSubmit} className="relative flex">
            <input
              className="w-full rounded-md pl-4 pr-16 py-3 shadow-sm focus:outline-none focus:border-green-700 focus:ring-green-700 focus:ring-1 placeholder:text-mute-grey placeholder:text-sm bg-white"
              id="search"
              name="search"
              type="text"
              placeholder="Search by Dua Name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="bg-gray-100 px-4 py-2 rounded-md flex items-center justify-center absolute top-1 right-1 bottom-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-end mr-5">
        {/* Dropdown */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="flex items-center gap-2">
            <Image src={profile} alt="Avatar" width={45} height={45} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z"
                fill="#868686"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
          >
            {/* Support Us */}
            <li>
              <a href="#">
                <Image
                  src={support}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Support Us
              </a>
            </li>

            {/* Download Dua App */}
            <li>
              <a href="#">
                <Image
                  src={download}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Download Dua App
              </a>
            </li>

            {/* Privacy Policy */}
            <li>
              <a href="#">
                <Image
                  src={privacy}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Privacy Policy
              </a>
            </li>

            {/* Thanks & Credits */}
            <li>
              <a href="#">
                <Image
                  src={credit}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Thanks & Credits
              </a>
            </li>

            {/* About Us */}
            <li>
              <a href="#">
                <Image
                  src={about}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                About Us
              </a>
            </li>

            {/* Copyright Warning */}
            <li>
              <a href="#">
                <Image
                  src={copyright}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Copyright Warning
              </a>
            </li>

            {/* Our Other Projects */}
            <li>
              <a href="#">
                <Image
                  src={projects}
                  alt=""
                  width={45}
                  height={45}
                  className="w-5"
                />
                Our Other Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Settings */}
        <div className="flex items-center ml-5 2xl:hidden">
          <label
            htmlFor="drawer-sidebar"
            className="drawer-button cursor-pointer"
          >
            <Image
              src={settings}
              alt=""
              width={45}
              height={45}
              className="w-5"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBarTop;
