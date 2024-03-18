import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHandHoldingHeart } from "react-icons/fa";
import logo from "@/public/dua-logo.svg";
import IconHome from "@/public/Home.svg";
import IconAllDuas from "@/public/AllDuas.svg";
import IconMemorize from "@/public/Memorize.svg";
import IconBookmark from "@/public/Bookmark.svg";
import IconRuqyah from "@/public/Ruqyah.svg";
import IconDuaQA from "@/public/DuaQ&A.svg";
import IconBook from "@/public/Book.svg";

const NavBarLeft = () => {
  return (
    <nav className="flex flex-row items-center p-5 rounded-3xl bg-base-100 lg:h-[calc(100vh-40px)] lg:flex-col fixed lg:static bottom-0 w-full justify-between lg:w-fit lg:mt-6 mx-6">
      <div className="w-fit">
        <Link href="/">
          <Image className="" width={50} src={logo} alt="Dua" />
        </Link>
      </div>
      <NavItem href="/" icon={<Image src={IconHome} alt="icon" />} />
      <NavItem href="/" icon={<Image src={IconAllDuas} alt="icon" />} />
      <NavItem href="/" icon={<Image src={IconMemorize} alt="icon" />} />
      <NavItem href="/" icon={<Image src={IconBookmark} alt="icon" />} />
      <NavItem href="/" icon={<Image src={IconRuqyah} alt="icon" />} />
      <NavItem href="/" icon={<Image src={IconDuaQA} alt="icon" />} />
      <NavItem href="/" icon={<Image src={IconBook} alt="icon" />} />
      <div className="bg-green-600 p-3 rounded-lg w-fit lg:mt-6">
        <Link href={"/"} className="text-2xl text-base-100">
          <FaHandHoldingHeart />
        </Link>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon }) => {
  return (
    <div className=" bg-slate-200 rounded-full w-fit lg:mt-2">
      <Link href={href} className="text-2xl text-slate-500">
        {icon}
      </Link>
    </div>
  );
};

export default NavBarLeft;
