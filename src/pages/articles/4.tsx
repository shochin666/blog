import { NextPage } from "next";

import { useRef } from "react";
import { Template } from "../../components/Template";
import { useOffsetTop } from "hooks/useOffsetTop";

import { Link as Scroll } from "react-scroll";

import Logo from "../../../public/logo.png";
import WorkFlow from "../../../public/article4/WorkFlow.png";
import WorkFlowMobile from "../../../public/article4/WorkFlowMobile.png";
import WorkFlow2 from "../../../public/article4/WorkFlow2.png";
import Talking from "../../../public/article4/undraw_getting_coffee_re_f2do (1).svg";
import LinkIcon from "../../../public/linkIcon.png";
import TitleBackground from "../../../public/titleBackground.png";
import { ReturnButton } from "components/ReturnButton";
import Link from "next/link";
import Head from "next/head";

const Article: NextPage = () => {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content1SectionOffset = useOffsetTop(content1Ref);
  const content2SectionOffset = useOffsetTop(content2Ref);

  return (
    <Template>
      <>
        <Head>
          <title>rev4 lab.|コンパイラ型 vs インタプリタ型</title>
          <meta name="description" content="コンパイラ型 vs インタプリタ型" />
          <meta
            name="keyword"
            content="rev4, ブログ, HTML, CSS, react, プログラミング, 初心者, コンパイラ型, コンパイラ, インタプリタ型, インタプリタ"
          />
          <meta property="twitter:title" content="rev4 lab." />
          <meta name="twitter:createor" content="rev4" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="rev4の日常ブログ" />
          <link rel="icon" href={Logo.src} />
        </Head>
        <nav className="fixed h-[360px] right-[16px] top-12 z-20 flex-col mx-auto py-2 w-60 gap-2.5 rounded-lg px-4 hidden sm:flex">
          <p className="font-bold text-gray-500">目次</p>
          <Scroll
            to="content1"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            1. コンパイラ型
          </Scroll>
          <Scroll
            to="content2"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            2. インタプリタ型
          </Scroll>
        </nav>
        <div className="relative h-[200px] mt-[60px]">
          <h1 className="absolute text-2xl sm:text-3xl text-gray-600 sm:font-bold z-10 top-20 left-5">
            コンパイラ型
            <br className="sm:hidden" />
            &nbsp;vs&nbsp;インタプリタ型
          </h1>
          <p className="absolute text-right text-gray-400 z-10 right-6 top-8">
            更新日 : 2022/10/8
          </p>
          <img
            src={TitleBackground.src}
            alt="背景"
            height={150}
            width={150}
            className="absolute right-0 z-0"
          />
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          きっかけ
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          <img
            src={Talking.src}
            alt="会議"
            height={200}
            width={200}
            className="mx-auto my-12"
          />
          <p>
            学校でのC言語の授業中に言語仕様についての話題が上がり、みんなが理解できていなかったので気になり、深掘りしてみました。
            <br />
            その時のアウトプットとして掲載しました。
          </p>
        </div>
        <h2
          ref={content1Ref}
          id="content1"
          className="text-gray-600 text-2xl sm:text-3xl mx-[20px]"
        >
          コンパイラ型
        </h2>
        <hr className="mx-[20px] mb-4" />
        <p className="text-sm font-medium text-right mx-[20px] leading-[4px]">
          ( C言語, C++, Javaなど )
        </p>
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          <p className="underline underline-offset-2 mt-8">
            コンパイラ型では以下の手続きで機械語に変換したプログラムを実行します。
          </p>
          <ul className="mt-8 mb-4 sm:mb-20">
            <li className="border-4 border-blue-300 rounded-lg py-2 px-2">
              <span className="text-sm">メリット</span>
              <br />
              <span className="font-bold">処理速度が速い</span>
            </li>
            <li className="border-4 border-gray-200 rounded-lg py-2 px-2 mt-4">
              <span className="text-sm">デメリット</span>
              <br />
              <span className="font-bold">
                全体をコンパイルするまで処理結果がわからない、他の実行環境になると実行できないことがある
              </span>
            </li>
          </ul>
          <p className="mt-8">
            我々が理解できる自然言語ではコンピューターが理解できないのでプログラミング言語が必要でした。
            <br />
            <br />
            さらにさまざまなプログラミング言語で書かれたコードは文法によって書き方が異なると処理の際にまた困ってしまいます。
            <br />
            <br />
            実際にCPUなどと直接会話できる言語は
            <Link href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%BB%E3%83%B3%E3%83%96%E3%83%AA%E8%A8%80%E8%AA%9E">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                アセンブリ言語
              </a>
            </Link>
            と
            <Link href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E6%A2%B0%E8%AA%9E">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                機械語
              </a>
            </Link>
            の2つなので、それらに近づけることを目標とするわけです。
          </p>
          <img
            src={WorkFlow.src}
            alt="ワークフロー"
            height={300}
            width={520}
            className="mx-auto my-8 hidden sm:block"
          />
          <img
            src={WorkFlowMobile.src}
            alt="ワークフローモバイル"
            height={380}
            width={240}
            className="mx-auto mt-8 mb-4 sm:hidden"
          />
          <p>
            そこで特定の言語と他の言語の処理を統一させ(アセンブルやビルドと呼ばれる)、機械語などに変換するのが
            <span className="text-blue-400">コンパイラ</span>です。
            <br />
            <br />
            私が授業で学んだ最初のコンパイラ型の言語がC言語だったのですが、正しく動作するかもわからないコードをいちいちコンパイルして実行するのはとても不便だなと感じました。
            <br />
            <br />
            コードが膨大で処理速度を気にする必要があるとき以外は恩恵を肌で感じることはないかと思います。
            <br />
            <br />
            余談ですが、web開発をしているとお世話になるであろう
            <span className="text-blue-400">TypeScript</span>
            ですが、JavaScriptにコンパイルするような同レベル間の言語の翻訳に用いられるコンパイラは
            <Link href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                トランスパイラ
              </a>
            </Link>
            や
            <Link href="https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                クロスコンパイラ
              </a>
            </Link>
            と呼ばれます。
          </p>
        </div>
        <h2
          ref={content2Ref}
          id="content2"
          className="text-gray-600 text-2xl sm:text-3xl mx-[20px]"
        >
          インタプリタ型
        </h2>
        <hr className="mx-[20px] mb-4" />
        <p className="text-sm font-medium text-right mx-[20px] leading-[4px]">
          ( Ruby, Python, JavaScriptなど )
        </p>
        <div className="w-[90%] mb-32 mx-auto text-gray-600">
          <p className="mt-8 underline underline-offset-2">
            インタプリタ型の言語は記述したコードを逐次処理していく処理です。
          </p>
          <ul className="mt-8 mb-4 sm:mb-20">
            <li className="border-4 border-blue-300 rounded-lg py-2 px-2">
              <span className="text-sm">メリット</span>
              <br />
              <span className="font-bold">
                コードをすぐに実行できるのでエラーを見つけやすい
              </span>
            </li>
            <li className="border-4 border-gray-200 rounded-lg py-2 px-2 mt-4">
              <span className="text-sm">デメリット</span>
              <br />
              <span className="font-bold">
                コードの記述と解釈が繰り返させれるのでコンパイル型に比べて比べて処理速度が遅い
              </span>
            </li>
          </ul>
          <img
            src={WorkFlow2.src}
            alt="ワークフロー2"
            height={300}
            width={480}
            className="my-8 mx-auto"
          />
          <p>
            そのため、何度もプログラムを再解釈するので動的型付けなど、動的な機能を実現するのに向いています。
            <br />
            <br />
            <span className="text-blue-400">Jupyter Notebook</span>
            をお使いになったことがある方だときっとイメージしやすいと思います。
          </p>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">まとめ</h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20 pb-28">
          <p className="mb-4">
            今回はプログラマーなら専門分野問わず避けては通れない2つの処理方法を紹介しました。
            <br />
            言語ごとに処理速度が異なるので、用途に合わせて言語を選定する必要がある際は、今一度、その言語が果たしてプロジェクトに適切なのかなど確認するきっかけになればいいかと！
          </p>
          <div className="flex my-6 h-12">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={48}
              width={4}
              className="mr-4"
            />
            <Link href="https://www3.cuc.ac.jp/~miyata/classes/prg1/02/2way.html">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                インタープリタ方式とコンパイル方式
              </a>
            </Link>
          </div>
          <div className="flex my-6 h-12">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={48}
              width={4}
              className="mr-4"
            />
            <Link href="https://ja.wikipedia.org/wiki/%E6%A9%9F%E6%A2%B0%E8%AA%9E">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                Wikipedia - 機械語
              </a>
            </Link>
          </div>
          <div className="flex my-6 h-12">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={48}
              width={4}
              className="mr-4"
            />
            <Link href="https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%BB%E3%83%B3%E3%83%96%E3%83%AA%E8%A8%80%E8%AA%9E">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                Wikipedia - アセンブリ言語
              </a>
            </Link>
          </div>
          <div className="flex my-6 h-12">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={48}
              width={4}
              className="mr-4"
            />
            <Link href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                Wikipedia - トランスパイラ
              </a>
            </Link>
          </div>
          <div className="flex my-6 h-12">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={48}
              width={4}
              className="mr-4"
            />
            <Link href="https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                Wikipedia - クロスコンパイラ
              </a>
            </Link>
          </div>
          <p>以上のサイトを参考にさせていただきました。</p>

          <ReturnButton />
        </div>
      </>
    </Template>
  );
};

export default Article;
