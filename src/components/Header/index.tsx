import Image from "next/image";
import { useState } from "react";
import masterBall from "@/assets/icon_master_ball.svg";
import searchIcon from "@/assets/icon_search.svg";

const Header = () => {
  const [isSearchMode, setSearchMode] = useState(false);

  const toggleSearchMode = () => {
    setSearchMode(!isSearchMode);
  };

  return (
    <>
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Image
              src={masterBall}
              alt="Flowbite Logo"
              width="36"
              height="36"
            />
            <span className="ml-4 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ポケモン図鑑
            </span>
          </div>
          <button className="cursor-pointer">
            <span>
              <Image
                src={searchIcon}
                alt="SearchIcon Icon"
                className="text-center"
                width="48"
                height="48"
              />
            </span>
            <span className="text-white">けんさく</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
