import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Template } from "../components/template";
import ArticleDecoration from "../../public/ArticleDecoration.png";
import styles from "../styles/index.module.css";
import { hoge, tmplist } from "../components/template";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  // 初期値は揃える必要がある
  const [maxShowContents, setMaxShowContents] = useState(4);
  const [addedlist, setAddedlist] = useState<hoge[]>(tmplist.slice(0, 4));
  const [newShowList, setNewShowList] = useState<hoge[]>([]);

  const loadMoreArticles = () => {
    setNewShowList(tmplist.slice(maxShowContents, maxShowContents + 4));
    setAddedlist([...addedlist, ...newShowList]);
    setMaxShowContents(maxShowContents + 4);
  };
  return (
    <Template>
      <>
        <h1 className="text-gray-600 text-3xl mx-[20px] mt-[80px] sm:mt-28">
          Tech
        </h1>
        <hr className="mx-[20px] sm:mb-12" />
        <div className="grid grid-cols-1 gap-[20px] h-min text-center">
          {addedlist.map((value) => {
            return (
              <>
                <div className="hidden sm:block">
                  <button
                    className={styles.articles}
                    onClick={() => {
                      router.push(value.url);
                    }}
                  >
                    <img
                      src={ArticleDecoration.src}
                      alt="デコレーション"
                      height={80}
                      width={80}
                      className="absolute right-0 bottom-0"
                    />
                    <p className="text-[8px] text-gray-400 absolute mx-auto right-0 left-0 top-5">
                      {value.category}
                    </p>
                    <p className="font-bold text-lg mx-auto right-0 left-0 top-10 absolute">
                      {value.title}
                    </p>
                  </button>
                </div>
                <div className="sm:hidden mx-auto">
                  <button
                    className="shadow-lg pb-8 text-center relative bg-white rounded-[8px] mx-auto h-[110px] w-[350px]"
                    onClick={() => {
                      router.push(value.url);
                    }}
                  >
                    <img
                      src={ArticleDecoration.src}
                      alt="デコレーション"
                      height={80}
                      width={80}
                      className="absolute right-0 bottom-0"
                    />
                    <p className="text-sm text-gray-400 absolute mx-auto right-0 left-0 top-5">
                      {value.category}
                    </p>
                    <p className="font-bold text-lg mx-auto right-0 left-0 top-10 absolute">
                      {value.title}
                    </p>
                  </button>
                </div>
              </>
            );
          })}

          {newShowList.map((value, i) => {
            return (
              <>
                <div className="hidden sm:block">
                  <button
                    className={styles.articles}
                    onClick={() => {
                      router.push(value.url);
                    }}
                  >
                    <img
                      src={ArticleDecoration.src}
                      alt="デコレーション"
                      height={80}
                      width={80}
                      className="absolute right-0 bottom-0"
                    />
                    <p className="text-[8px] text-gray-400 absolute mx-auto right-0 left-0 top-5">
                      {value.category}
                    </p>
                    <p className="font-bold text-lg mx-auto right-0 left-0 top-10 absolute">
                      {value.title}
                    </p>
                  </button>
                </div>
                <div className="sm:hidden mx-auto">
                  <button
                    className="shadow-lg pb-8 text-center relative bg-white rounded-[8px] h-[110px] w-[350px]"
                    onClick={() => {
                      router.push(value.url);
                    }}
                  >
                    <img
                      src={ArticleDecoration.src}
                      alt="デコレーション"
                      height={80}
                      width={80}
                      className="absolute right-0 bottom-0"
                    />
                    <p className="text-sm text-gray-400 absolute mx-auto right-0 left-0 top-5">
                      {value.category}
                    </p>
                    <p className="font-bold text-lg mx-auto right-0 left-0 top-10 absolute">
                      {value.title}
                    </p>
                  </button>
                </div>
              </>
            );
          })}
        </div>
        {addedlist.length == tmplist.length && newShowList.length == 0 ? (
          <div className="my-[72px]"></div>
        ) : (
          <button
            onClick={() => {
              loadMoreArticles();
            }}
            className="block mx-auto my-6 text-blue-500"
          >
            read more
          </button>
        )}
      </>
    </Template>
  );
};

export default Home;
