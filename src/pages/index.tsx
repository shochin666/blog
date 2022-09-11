import type { NextPage } from "next";

import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import Icon from "../../public/Icon.jpeg";
import { useEffect, useState } from "react";

import BackGround from "../../public/Background.png";
import BackGroundDecoration from "../../public/BackgroundDecoration.png";
import styles from "../styles/index.module.css";
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
    { title: "kae11" },
    { title: "kae12" },
    { title: "kae13" },
    { title: "kae14" },
    { title: "kae15" },
    { title: "kae16" },
    { title: "kae17" },
    { title: "kae18" },
    { title: "kae19" },
    { title: "kae20" },
  ];

  // 初期値は揃える必要がある
  const [maxShowContents, setMaxShowContents] = useState(6);
  const [addedlist, setAddedlist] = useState<hoge[]>(tmplist.slice(0, 6));
  const [newShowList, setNewShowList] = useState<hoge[]>([]);

  const hage = () => {
    setNewShowList(tmplist.slice(maxShowContents, maxShowContents + 3));
    setAddedlist([...addedlist, ...newShowList]);
    setMaxShowContents(maxShowContents + 3);
  };
  return (
    <div className="font-ubuntu">
      <div className="w-full h-[1800px]">
        <div className="w-full">
          <div className="w-full fixed top-0 h-[60px] flex justify-between mb-4 px-[5%] bg-white z-10">
            <div>
              <a
                href="#"
                className="absolute w-[320px] z-20 top-[20px] left-[32px]"
              >
                <img
                  src={BackGroundDecoration.src}
                  alt="ヘッダー"
                  height={300}
                  width={400}
                  className="absolute z-20"
                />
                <p className="absolute z-30 top-[12px] left-[28px] text-white font-bold text-2xl">
                  rev4 lab.
                </p>
              </a>
            </div>
            <div>b</div>
          </div>
          <div className="flex mx-[20px]">
            <div className="bg-gray-50 h-[1800px] w-[240px]"></div>
            <div>
              <div className="grid grid-cols-3 gap-[20px] h-min ml-[20px] mt-[200px] animate-pulse">
                {addedlist.map((value) => {
                  return (
                    <div className="bg-white bg-opacity-30 rounded-lg mx-auto h-[100px] w-[280px] shadow-xl">
                      {value.title}
                    </div>
                  );
                })}

                {newShowList.map((value, i) => {
                  return (
                    <div className="bg-white bg-opacity-30 rounded-lg mx-auto h-[100px] w-[280px] shadow-lg">
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
            <div className="fixed right-[20px] bg-gray-900 rounded-lg w-[240px] flex flex-col py-[20px] shadow-lg top-[80px]">
              <img
                src={Icon.src}
                alt="アイコン"
                height={120}
                width={120}
                className="rounded-full mx-auto"
              />
              <p className="text-white font-bold text-2xl text-center">rev4</p>
              <p className="text-gray-400 text-sm mx-4 mt-6">
                現在、物理学科に通う大学3年生。
                <br />
                PowerPlantを運営しており、フロントエンドをメインに個人開発しています。
                <br />
              </p>
              <div className="flex justify-around text-white text-xl mt-4">
                <a href="#" className={styles.github__button}>
                  <AiFillGithub className="text-2xl" />
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
