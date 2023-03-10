import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import masterBall from "@/assets/icon_master_ball.svg";
import searchIcon from "@/assets/icon_search.svg";
import QuizIcon from "@/assets/quiz_icon.jpeg";
import SearchDialog from "@/components/Dialog/SearchDialog";

type HeaderProps = {
  search?: (nameJa: string) => void;
};

export const Header = ({ search }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const searchDialogProps = {
    isOpen,
    close: closeModal,
    search,
  };

  return (
    <>
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Image src={masterBall} alt="Master Ball" width="48" height="48" />
            <span className="ml-4 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ポケモン図鑑
            </span>
          </div>
          {search && (
            <>
              <button className="cursor-pointer">
                <span>
                  <Link href="/pokemon/quiz">
                    <Image
                      src={QuizIcon}
                      alt="SearchIcon Icon"
                      className="text-center"
                      width="48"
                      height="48"
                    />
                  </Link>
                </span>
                <span className="text-white">クイズ</span>
              </button>
              <button className="cursor-pointer" onClick={openModal}>
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
            </>
          )}
        </div>
      </nav>
      <SearchDialog {...searchDialogProps} />
    </>
  );
};
