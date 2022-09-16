import { BsArrowReturnLeft } from "react-icons/bs";

export const Return = () => {
  return (
    <>
      <div className="relative">
        <a
          href="/"
          className="flex flex-col absolute right-4 sm:right-20 top-4 duration-200 hover:text-blue-400"
        >
          <BsArrowReturnLeft className="text-3xl mx-auto" />
          <span className="block text-center">return</span>
        </a>
      </div>
    </>
  );
};
