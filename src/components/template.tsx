import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AiFillGithub } from "react-icons/ai";
import { BsSnow2, BsTwitter } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GiSnowman } from "react-icons/gi";

import Icon from "../../public/Icon.jpeg";
import Logo from "../../public/logo.png";
import Hexagon from "../../public/hexagon.png";
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
  {
    title: "これだけは知っておいてほしい！マークダウン記法まとめ",
    category: "Markdown",
    url: "/articles/3",
  },
];

export const tryTmplist: hoge[] = [
  // {
  //   title: "blenderを試してみた",
  //   category: "blender",
  //   url: "/try/1",
  // },
];

export const Template = (props: Props) => {
  const router = useRouter();
  const { children } = props;

  return (
    <>
      <Head>
        <title>rev4 lab.</title>
        <meta name="description" content="rev4の日常ブログ" />
        <meta
          name="keyword"
          content="rev4, ブログ, HTML, CSS, react, プログラミング, 初心者"
        />
        <meta property="twitter:title" content="rev4 lab." />
        <meta name="twitter:createor" content="rev4" />
        {/* <meta
          property="twitter:image"
          content="https://powerplant-f5557.web.app/TwitterLogo.png"
        /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="rev4の日常ブログ" />
        {/* <link rel="canonical" href="https://powerplant-f5557.web.app/" /> */}
        <link rel="icon" href={Logo.src} />
      </Head>

      <div className="font-ubuntu">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full fixed top-0 h-[60px] flex justify-between mb-4 px-[2%] bg-white z-40">
              <div className="mt-4">
                <a href="/" className="flex">
                  <img src={Logo.src} alt="背景" height={40} width={40} />
                  <p className="font-bold text-2xl whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ml-2 sm:ml-4">
                    rev4 lab.
                  </p>
                </a>
              </div>
              <div className="flex h-2 mr-32 sm:h-6 -mt-20 sm:mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10,
                    repeat: Infinity,
                    delay: 1.6,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 12,
                    repeat: Infinity,
                    delay: 0.8,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[9px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.5,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[20px]"
                >
                  <BsSnow2 />
                </motion.div>
                <GiSnowman className="text-[32px] text-sky-300 mt-[90px]" />
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 9.4,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.8,
                    repeat: Infinity,
                    delay: 1.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[8px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 11,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 9.8,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[6px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[14px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.2,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.6,
                    repeat: Infinity,
                    delay: 1.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 8.8,
                    repeat: Infinity,
                    delay: 2.8,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[16px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10,
                    repeat: Infinity,
                    delay: 1.6,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 12,
                    repeat: Infinity,
                    delay: 0.8,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[9px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.5,
                    repeat: Infinity,
                    delay: 2.7,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[20px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 9.4,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.8,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[8px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 11,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 9.8,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[6px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 12,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[14px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.2,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.6,
                    repeat: Infinity,
                    delay: 1.8,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.5,
                    repeat: Infinity,
                    delay: 2.8,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[20px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 9.4,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.2,
                    repeat: Infinity,
                    delay: 2.5,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[8px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 11,
                    repeat: Infinity,
                    delay: 2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[13px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.3,
                    repeat: Infinity,
                    delay: 2.1,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[8px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 12,
                    repeat: Infinity,
                    delay: 2.1,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[14px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10,
                    repeat: Infinity,
                    delay: 2.2,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[13px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 10.6,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[10px]"
                >
                  <BsSnow2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{
                    ease: "easeOut",
                    duration: 8.8,
                    repeat: Infinity,
                    delay: 2.4,
                  }}
                  animate={{ opacity: 0.8, y: [0, 160] }}
                  exit={{ opacity: 0 }}
                  className="text-sky-300 text-[16px]"
                >
                  <BsSnow2 />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mx-[20px]">
              <div className="h-[1800px] w-[18%] hidden sm:block pt-40"></div>
              <div className="w-full sm:w-[64%] sm:shadow-md relative z-30">
                {children}
              </div>
              <div className="sm:hidden bg-gray-900 rounded-lg py-8 flex flex-col shadow-lg mt-8 mb-14 overflow-hidden relative">
                <div className="flex gap-10 absolute -top-[60px] z-10">
                  <motion.div
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      delay: 1,
                    }}
                    animate={{
                      opacity: 0.8,
                      x: [0, 200, -50, 300, -100, 400, -200, 600],
                      y: [200, 300, -400, 800, 200, -200, 300],
                    }}
                    exit={{ opacity: 0 }}
                    className="bg-blue-500 w-8 h-8 rounded-full z-20 absolute"
                  ></motion.div>
                  <motion.div
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                    }}
                    animate={{
                      opacity: 0.8,
                      x: [10, -200, 200, 100, 500, -100, 400],
                      y: [200, 560, 50, 100, 400, -430, 80],
                    }}
                    exit={{ opacity: 0 }}
                    className="bg-blue-500 w-8 h-8 rounded-full z-20 absolute"
                  ></motion.div>
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute -top-[24px] -left-[60.5px] z-20">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[12px] z-10">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[48px] -left-[60.5px] z-20">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[84px] z-10">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[120px] -left-[60.5px] z-20">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[156px] z-10">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[192px] -left-[60.5px] z-20">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[228px] z-10">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[264px] -left-[60.5px] z-20">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[300px] z-10">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[336px] -left-[60.5px] z-20">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <div className="flex gap-10 absolute top-[372px] z-10">
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                  <img src={Hexagon.src} alt="六角形" height={80} width={80} />
                </div>
                <img
                  src={Icon.src}
                  alt="アイコン"
                  height={120}
                  width={120}
                  className="rounded-full mx-auto z-20"
                />
                <p className="text-[#79FFAF] mt-2 font-bold text-2xl text-center z-20">
                  rev4
                </p>
                <p className="text-gray-400 text-sm mx-4 mt-4 z-20">
                  物理学科に通う大学3年生。
                  <br />
                  フロントエンドをメインに個人開発しています。
                  <br />
                </p>
                <div className="flex justify-around text-white text-xl mt-4 z-20">
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
              {/* PC版 */}
              <div className="w-[18%] hidden sm:block">
                {/* <div className="mt-[140px] mx-4">
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
                </div> */}
                <div className="fixed right-[16px] bg-gray-900 rounded-lg w-[16%] flex flex-col py-[20px] shadow-lg bottom-[40px] overflow-hidden">
                  <div className="flex gap-10 absolute -top-[60px] z-10">
                    <motion.div
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        delay: 1,
                      }}
                      animate={{
                        opacity: 0.8,
                        x: [0, 200, 50, 300, -100, 100, -200, 0],
                        y: [200, 100, -400, 800, 200, -200, 300],
                      }}
                      exit={{ opacity: 0 }}
                      className="bg-blue-500 w-8 h-8 rounded-full z-20 absolute"
                    ></motion.div>
                    <motion.div
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                      }}
                      animate={{
                        opacity: 0.8,
                        x: [10, -200, 90, 100, 200, -100, 400],
                        y: [200, 560, 50, 100, 400, -430, 80],
                      }}
                      exit={{ opacity: 0 }}
                      className="bg-blue-500 w-8 h-8 rounded-full z-20 absolute"
                    ></motion.div>
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute -top-[24px] -left-[60.5px] z-20">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[12px] z-10">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[48px] -left-[60.5px] z-20">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[84px] z-10">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[120px] -left-[60.5px] z-20">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[156px] z-10">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[192px] -left-[60.5px] z-20">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[228px] z-10">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[264px] -left-[60.5px] z-20">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[300px] z-10">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[336px] -left-[60.5px] z-20">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <div className="flex gap-10 absolute top-[372px] z-10">
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                    <img
                      src={Hexagon.src}
                      alt="六角形"
                      height={80}
                      width={80}
                    />
                  </div>
                  <img
                    src={Icon.src}
                    alt="アイコン"
                    height={120}
                    width={120}
                    className="rounded-full mx-auto z-20"
                  />
                  <p className="text-[#79FFAF] mt-2 font-bold text-2xl text-center z-20">
                    rev4
                  </p>
                  <p className="text-gray-400 text-sm mx-4 mt-4 z-20">
                    現在、物理学科に通う大学3年生。
                    <br />
                    PowerPlantを運営しており、フロントエンドをメインに個人開発しています。
                    <br />
                  </p>
                  <div className="flex justify-around text-white text-xl mt-4 z-20">
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
    </>
  );
};
