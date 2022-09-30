import { NextPage } from "next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import Head from "next/head";
import Logo from "../../../public/ad/powerplant/Logo.png";
import LpBack1 from "../../../public/ad/powerplant/LpBack1.png";
import LpBack2 from "../../../public/ad/powerplant/LpBack2.png";
import Studying from "../../../public/ad/powerplant/undraw_online_test_re_kyfx.svg";
import Help1 from "../../../public/ad/powerplant/LpHelp1.png";
import Help2 from "../../../public/ad/powerplant/LpHelp2.png";
import MobileHelp1 from "../../../public/ad/powerplant/MobileLpHelp1.png";
import MobileHelp2 from "../../../public/ad/powerplant/MobileLpHelp2.png";
import MobileHelp3 from "../../../public/ad/powerplant/MobileLpHelp3.png";
import LeftBracket from "../../../public/ad/powerplant/LeftBracket.png";
import RightBracket from "../../../public/ad/powerplant/RightBracket.png";
import DownArrow from "../../../public/ad/powerplant/DownArrow.png";
import ThunderForTitle from "../../../public/ad/powerplant/ThunderForTitle.png";
import Link from "next/link";

const PowerPlantLp: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>パワプラ | 楽単をサクッと見つけられるサイト</title>
        <meta
          name="description"
          content="履修登録したいけどもっと楽に単位が欲しい!!それ全部パワプラが解決します！"
        />
        <meta
          name="keyword"
          content="パワプラ, ぱわぷら, powerplant, 楽, 楽単, サクッと, 簡単, 単位, 履修, 履修登録"
        />
        <link rel="canonical" href="https://powerplant-f5557.web.app/landing" />
        <link rel="icon" href={Logo.src} />
      </Head>
      <div className="bg-gray-800 lg:bg-white overflow-hidden">
        <div className="relative h-[2050px] lg:h-[2300px] text-white">
          <h1 className="absolute text-gray-800 lg:text-white font-extrabold z-30 left-4 lg:left-12 top-[30px] text-[20px] lg:text-[40px] flex">
            POWER PLANT APP
            <img
              src={ThunderForTitle.src}
              alt="稲妻"
              className="mx-auto animate-pulse lg:hidden -mt-[20px]"
              height={40}
              width={40}
            />
          </h1>
          <div className="absolute z-0 w-full">
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1.0],
              }}
              exit={{
                opacity: 0,
                scale: [1, 0],
              }}
              transition={{
                ease: "easeOut",
                duration: 2.0,
              }}
              src={LpBack2.src}
              alt="モバイル版背景"
              width={240}
              height={50}
              className="mt-[24px] ml-[8px] lg:hidden"
            />
            <img
              src={LpBack1.src}
              alt="PC版背景"
              width={2000}
              height={50}
              className="hidden lg:block"
            />
          </div>
          <div className="absolute text-gray-600 font-extrabold z-30 top-40 lg:top-60 text-[20px] w-full flex flex-col">
            <p className="absolute text-[16px] left-1 lg:left-20 -top-16 lg:-top-24 text-white rounded-xl bg-gray-700 lg:bg-transparent p-2">
              Q: 突然ですが、現状の大学生活いかがですか？
            </p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                y: [20, 0],
                opacity: [0, 1.0],
              }}
              exit={{
                opacity: 0,
                scale: [1, 0],
              }}
              transition={{
                ease: "easeOut",
                duration: 1.0,
              }}
              className="flex flex-col lg:flex-row gap-8 items-center mx-auto"
            >
              <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl p-8 lg:p-20">
                <img
                  src={Studying.src}
                  alt="勉強"
                  width={200}
                  height={200}
                  className="mx-auto"
                />

                <p className="text-[16px] lg:text-[20px] font-medium text-blue-400 text-center whitespace-nowrap mt-8 lg:ml-8 ">
                  ・GPAは3近くとっておきたい！ <br />
                  ・資格とって就活対策！ <br />
                  ・バイトと遊びも両立したい！
                </p>
              </div>
            </motion.div>
            <div className="mx-4 mt-16 lg:mt-32 text-white lg:text-gray-600">
              <p className="text-[16px] text-gray-400 lg:text-gray-600 mb-[20px] lg:ml-40">
                でも実際は...
              </p>
              <div className="text-center text-[16px] whitespace-normal lg:text-[20px] font-normal mx-auto ">
                <p>
                  <span className="text-orange-400 font-bold text-[24px] whitespace-nowrap">
                    単位
                  </span>
                  が欲しくてGPAなんて気にしてられない！
                </p>
                <p className="my-4">
                  学校の
                  <span className="text-orange-400 font-bold text-[24px] whitespace-nowrap">
                    勉強が忙しすぎ
                  </span>
                  て <br /> 資格の勉強なんてやる暇ない！ <br />
                </p>
                <p>
                  全然バイト入る暇なくて金銭的に
                  <span className="text-orange-400 font-bold text-[24px] whitespace-nowrap">
                    詰み！
                  </span>
                </p>
              </div>
              <p className="text-[16px] lg:text-gray-600 mt-[20px] lg:mt-8 lg:ml-40 text-gray-400">
                ほとんどの人がこのサイクルだと思います笑 <br />
              </p>
              <p className="text-[16px] lg:text-gray-600 mt-[20px] lg:mt-8 lg:ml-40 text-gray-400">
                これらに共通することは...
              </p>
            </div>
            {/* モバイル版 */}
            <div className="font-normal text-white relative lg:hidden">
              <div className="flex justify-center h-[120px]">
                <span className="absolute left-[8%] top-[20px] z-10">
                  <img
                    src={LeftBracket.src}
                    alt="左括弧"
                    height={20}
                    width={20}
                  />
                </span>
                <p className="my-auto text-center">
                  根本的な原因はだいたいの場合 <br />
                  <span className="text-blue-400 font-bold">履修の組み方</span>
                  が問題
                </p>

                <span className="absolute right-[8%] bottom-[22px]">
                  <img
                    src={RightBracket.src}
                    alt="右括弧"
                    height={20}
                    width={20}
                  />
                </span>
              </div>
              <div className="flex flex-col absolute z-30 right-0 left-0 mx-auto top-[130px]">
                <img
                  src={DownArrow.src}
                  alt="下向き矢印"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <img
                  src={DownArrow.src}
                  alt="下向き矢印"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <div className="rounded-xl bg-gray-700 absolute px-1 py-4 mx-auto right-0 left-0 w-[95%] md:w-[50%] h-[260px] top-[200px]">
                <img
                  src={Logo.src}
                  alt="ロゴ"
                  className="mx-auto animate-pulse"
                  height={56}
                  width={56}
                />

                <p className="text-[16px] mt-[4px] w-full lg:text-center text-center px-2">
                  そこで楽単をみんなのレビューを通して探せるアプリ
                  <br />
                  <span className="text-blue-400 font-bold whitespace-nowrap">
                    POWERPLANT
                  </span>
                  を使ってやりたいことに回せる時間を増やしませんか？
                </p>
                <button
                  onClick={() => {
                    router.push("/");
                  }}
                  className="lg:hidden rounded-lg py-4 bg-gradient-to-r bg-yellow-400 text-white shadow-xl w-[90%] text-[18px] right-0 left-0 mx-auto absolute bottom-4"
                >
                  パワプラを使ってみる
                </button>
              </div>
            </div>
            <div className="font-normal mt-8 relative hidden lg:block">
              <div className="flex justify-center h-[160px]">
                <span className="absolute left-[30%] top-[16px]">
                  <img
                    src={LeftBracket.src}
                    alt="左括弧"
                    height={32}
                    width={32}
                  />
                </span>
                <p className="my-auto text-center">
                  根本的な原因はだいたいの場合 <br />
                  <span className="text-blue-400 font-bold">履修の組み方</span>
                  が問題
                </p>
                <span className="absolute right-[30%] bottom-[80px]">
                  <img
                    src={RightBracket.src}
                    alt="右括弧"
                    height={32}
                    width={32}
                  />
                </span>
              </div>
              <p className="text-[16px] mt-8 mx-8 lg:text-center">
                そこで楽単をみんなのレビューを通して探せるアプリ
                <span className="text-blue-400 font-bold">POWERPLANT</span>
                を使ってやりたいことに回せる時間を増やしませんか？
              </p>
            </div>
            {/* モバイル版 */}
            <div className="lg:hidden mt-[320px]">
              <div className="mt-[100px] mb-[40px] flex overflow-x-scroll">
                <img
                  alt="ヘルプ3"
                  src={MobileHelp3.src}
                  width={390}
                  height={400}
                  className="rounded-lg mx-auto mb-8 px-4 w-[520px] h-[500px]"
                />
                <img
                  alt="ヘルプ1"
                  src={MobileHelp1.src}
                  width={300}
                  height={400}
                  className="rounded-lg mx-auto mb-8 px-4 w-[520px] h-[500px]"
                />
                <img
                  alt="ヘルプ2"
                  src={MobileHelp2.src}
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto px-4 w-[520px] h-[500px]"
                />
              </div>
              <hr className="w-[90%] mx-auto border-gray-600" />
              <div className="text-white flex justify-around my-[12px]">
                <Link href="https://github.com/shochin666">
                  <a className="text-[30px]">
                    <AiFillGithub />
                  </a>
                </Link>
                <Link href="https://twitter.com/gg_pafeiwasi">
                  <a className="text-[30px] text-blue-500">
                    <BsTwitter />
                  </a>
                </Link>
                <Link href="https://powerplant-f5557.web.app/">
                  <a className="text-[30px] text-blue-500">
                    <img src={Logo.src} alt="ロゴ" height={28} width={28} />
                  </a>
                </Link>
              </div>
            </div>

            {/* PC版 */}
            <div className="hidden lg:block">
              <div className="flex flex-col mt-[40px] animate-bounce">
                <img
                  src={DownArrow.src}
                  alt="下向き矢印"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <img
                  src={DownArrow.src}
                  alt="下向き矢印"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <div className="mt-[80px] relative flex">
                <img
                  alt="ヘルプ1"
                  src={Help1.src}
                  width={400}
                  height={650}
                  className="rounded-lg mx-auto absolute left-[24%]"
                />
                <img
                  alt="ヘルプ2"
                  src={Help2.src}
                  width={400}
                  height={650}
                  className="rounded-lg mx-auto absolute top-[100px] right-[24%]"
                />
              </div>
            </div>

            {/* PC版 */}
            <button
              onClick={() => {
                router.push("/");
              }}
              className="hidden lg:block rounded-lg py-4 bg-gradient-to-r bg-yellow-400  text-white shadow-lg fixed w-[90%] mx-auto right-0 left-0 bottom-[20px] text-[18px]"
            >
              パワプラを使ってみる
            </button>
            {/* <h2>
              大学生の間に何かしてガクチカにしたい！ <br />
              けど勉強で手いっぱい...
              <br />
              資格が欲しいのに勉強する時間が足りない！
              <br />
              履修聞くためだけにサークル入る必要ある？
            </h2> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerPlantLp;
