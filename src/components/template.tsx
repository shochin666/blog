import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import Icon from "../../public/Icon.jpeg";
import Logo from "../../public/logo.png";
import styles from "../styles/index.module.css";

export type hoge = {
  title: string;
  category: string;
  url: string;
};

type Props = {
  children: ReactElement;
};

export const tmplist: hoge[] = [
  {
    title: "[初心者向け]HTML・CSS作成からLive Serverの立ち上げ",
    category: "HTML CSS",
    url: "/articles/1",
  },
  {
    title: "HTML・CSSをさらに深く理解する",
    category: "HTML CSS",
    url: "/articles/2",
  },
  { title: "kae3", category: "雑談", url: "/articles/1" },
  { title: "kae4", category: "雑談", url: "/articles/1" },
  { title: "kae5", category: "雑談", url: "/articles/1" },
  { title: "kae6", category: "雑談", url: "/articles/1" },
  { title: "kae7", category: "雑談", url: "/articles/1" },
];

export const Template = (props: Props) => {
  const router = useRouter();
  const { children } = props;

  return (
    <div className="font-ubuntu">
      <div className="w-full">
        <div className="w-full">
          <div className="w-full fixed top-0 h-[60px] flex justify-between mb-4 px-[5%] bg-white z-20">
            <div className="mt-4">
              <a href="/" className="flex">
                <img src={Logo.src} alt="背景" height={40} width={40} />
                <p className="font-bold text-2xl whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ml-2 sm:ml-4">
                  rev4 lab.
                </p>
              </a>
            </div>
            <div>
              <button className="hidden"></button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mx-[20px]">
            <div className="h-[1800px] w-[18%] hidden sm:block">
              {/* <div className="mt-[500px]">
                <p>カテゴリ</p>
                <div className="grid grid-cols-3 mt-4">
                  <button className={styles.category__button}>React</button>
                  <button className={styles.category__button}>React</button>
                  <button className={styles.category__button}>React</button>
                </div>
              </div> */}
            </div>
            <div className="w-full sm:w-[64%] sm:shadow-md">{children}</div>
            <div className="sm:hidden bg-gray-900 rounded-lg py-8 flex flex-col shadow-lg mt-8 mb-14">
              <img
                src={Icon.src}
                alt="アイコン"
                height={120}
                width={120}
                className="rounded-full mx-auto"
              />
              <p className="text-[#79FFAF] mt-2 font-bold text-2xl text-center">
                rev4
              </p>
              <p className="text-gray-400 text-sm mx-4 mt-4">
                物理学科に通う大学3年生。
                <br />
                フロントエンドをメインに個人開発しています。
                <br />
              </p>
              <div className="flex justify-around text-white text-xl mt-4">
                <a href="#" className={styles.github__button}>
                  <AiFillGithub className="text-2xl" />
                </a>
                <a href="#" className={styles.twitter__button}>
                  <BsTwitter />
                </a>
                <a href="#" className={styles.twitter__button}>
                  <FiMail />
                </a>
              </div>
            </div>
            <div className="w-[18%] hidden sm:block">
              <div className="mt-[140px] mx-4">
                <h2 className="font-bold text-blue-400">注目の投稿</h2>
                <div className="mx-4">
                  {tmplist.slice(0, 3).map((value) => {
                    return (
                      <>
                        <a href="#" className="hover:underline">
                          <p>{value.title}</p>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="fixed right-[16px] bg-gray-900 rounded-lg w-[240px] flex flex-col py-[20px] shadow-lg bottom-[40px]">
                <img
                  src={Icon.src}
                  alt="アイコン"
                  height={120}
                  width={120}
                  className="rounded-full mx-auto"
                />
                <p className="text-[#79FFAF] mt-2 font-bold text-2xl text-center">
                  rev4
                </p>
                <p className="text-gray-400 text-sm mx-4 mt-4">
                  現在、物理学科に通う大学3年生。
                  <br />
                  PowerPlantを運営しており、フロントエンドをメインに個人開発しています。
                  <br />
                </p>
                <div className="flex justify-around text-white text-xl mt-4">
                  <a href="#" className={styles.github__button}>
                    <AiFillGithub className="text-2xl" />
                  </a>
                  <a href="#" className={styles.twitter__button}>
                    <BsTwitter />
                  </a>
                  <a href="#" className={styles.twitter__button}>
                    <FiMail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
