import { BsArrowReturnLeft } from "react-icons/bs";
import Link from "next/link";

export const ReturnButton = () => {
  return (
    <>
      <div className="relative">
        <Link href="/">
          <a className="flex flex-col absolute right-4 sm:right-20 top-4 duration-200 hover:text-blue-400">
            <BsArrowReturnLeft className="text-3xl mx-auto" />
            <span className="block text-center">TOP</span>
          </a>
        </Link>
      </div>
    </>
  );
};
