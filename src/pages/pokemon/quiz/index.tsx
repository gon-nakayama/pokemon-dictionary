import Link from "next/link";
import clsx from "clsx";

const QuizStart = () => {
  return (
    <>
      <div className="flex justify-center">
        <Link
          href="/pokemon/quiz/1"
          className={clsx(
            "mt-8 flex items-center justify-center rounded-full border border-gray-300 bg-blue-600 py-3 px-8 text-lg font-medium text-white shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
          )}
        >
          クイズスタート
        </Link>
      </div>
    </>
  );
};

export default QuizStart;
