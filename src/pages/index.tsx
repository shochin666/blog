import type { NextPage } from "next";

import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import Icon from "../../public/Icon.jpeg";
import { useEffect, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import styles from "../styles/index.module.css";

type hoge = {
  title: string;
};

const Home: NextPage = () => {
  const tmplist: hoge[] = [
    { title: "kae1" },
    { title: "kae2" },
    { title: "kae3" },
    { title: "kae4" },
    { title: "kae5" },
    { title: "kae6" },
    { title: "kae7" },
    { title: "kae8" },
    { title: "kae9" },
    { title: "kae10" },
  ];

  // 初期値は揃える必要がある
  const [maxShowContents, setMaxShowContents] = useState(3);
  const [addedlist, setAddedlist] = useState<hoge[]>(tmplist.slice(0, 3));
  const [newShowList, setNewShowList] = useState<hoge[]>([]);

  const hage = () => {
    setNewShowList(tmplist.slice(maxShowContents, maxShowContents + 3));
    setAddedlist([...addedlist, ...newShowList]);
    setMaxShowContents(maxShowContents + 3);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-200 to-sky-300 w-full h-[1800px]">
        <div className="w-full">
          <div className="w-full h-[100px] flex justify-between">
            <div>a</div>
            <div>b</div>
          </div>
          <div className="flex mx-[20px]">
            <div className="bg-white h-[1800px] w-[240px]"></div>
            <div>
              <div
                id="articles"
                className="grid grid-cols-3 gap-[20px] h-min ml-[20px] mt-[200px] animate-pulse"
              >
                {addedlist.map((value) => {
                  return (
                    <div className="bg-white bg-opacity-30 rounded-lg mx-auto h-[100px] w-[280px]">
                      {value.title}
                    </div>
                  );
                })}

                {newShowList.map((value, i) => {
                  return (
                    <div className="bg-white bg-opacity-30 rounded-lg mx-auto h-[100px] w-[280px]">
                      {value.title}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  hage();
                }}
                className="block mx-auto"
              >
                read more
              </button>
            </div>
            <div className="fixed right-[20px] bg-white bg-opacity-30 rounded-lg w-[240px] flex flex-col py-[20px]">
              <img
                src={Icon.src}
                alt="アイコン"
                height={120}
                width={120}
                className="rounded-full mx-auto"
              />
              <p className="text-white font-bold text-2xl text-center">rev4</p>
              <p className="text-gray-600 text-sm mx-4 mt-6">
                現在、物理学科に通う大学3年生。
                <br />
                PowerPlantを運営しており、フロントエンドをメインに個人開発しています。
                <br />
              </p>
              <div className="flex justify-around text-white text-xl mt-4">
                <a href="#" className="text-white hover:text-gray-100 text-2xl">
                  <AiFillGithub />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <BsTwitter />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
