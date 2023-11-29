import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex p-4 sm:p-5 border-b bg-purple-200">
      <div className="flex font-medium text-xs sm:text-sm items-center max-w-[900px] mx-auto w-full">
        <Link href={"/"} className="hidden sm:inline">
          Mateus Lins Sales
        </Link>
        <Link href={"/"} className="sm:hidden">
          MS
        </Link>
      </div>
    </header>
  );
};

export default Header;
