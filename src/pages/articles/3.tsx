import { NextPage } from "next";

import { useRef } from "react";
import { Template } from "../../components/Template";
import { useOffsetTop } from "hooks/useOffsetTop";

import { Link as Scroll } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbArrowBigRightLine, TbArrowBigDownLine } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";

import Logo from "../../../public/logo.png";
import LinkIcon from "../../../public/linkIcon.png";
import TitleBackground from "../../../public/titleBackground.png";
import Arrow from "../../../public/Arrow.png";
import { ReturnButton } from "components/ReturnButton";
import Head from "next/head";

const Article: NextPage = () => {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const content4Ref = useRef(null);
  const content5Ref = useRef(null);
  const content6Ref = useRef(null);
  const content7Ref = useRef(null);
  const content8Ref = useRef(null);
  const content1SectionOffset = useOffsetTop(content1Ref);
  const content2SectionOffset = useOffsetTop(content2Ref);
  const content3SectionOffset = useOffsetTop(content3Ref);
  const content4SectionOffset = useOffsetTop(content4Ref);
  const content5SectionOffset = useOffsetTop(content5Ref);
  const content6SectionOffset = useOffsetTop(content5Ref);
  const content7SectionOffset = useOffsetTop(content5Ref);
  const content8SectionOffset = useOffsetTop(content5Ref);
  return (
    <Template>
      <>
        <Head>
          <title>
            rev4 lab.|これだけは知っておいてほしい！マークダウン記法まとめ
          </title>
          <meta
            name="description"
            content="これだけは知っておいてほしい！マークダウン記法まとめ"
          />
          <meta
            name="keyword"
            content="rev4, ブログ, HTML, CSS, react, プログラミング, 初心者, Markdown, マークダウン"
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
            1. 見出し
          </Scroll>
          <Scroll
            to="content3"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            2. リンクの埋め込み
          </Scroll>
          <Scroll
            to="content4"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            3. 画像の貼り付け
          </Scroll>
          <Scroll
            to="content5"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            4. 引用
          </Scroll>
          <Scroll
            to="content6"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            5. フォントスタイル
          </Scroll>
          <Scroll
            to="content7"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            6. 箇条書き
          </Scroll>
          <Scroll
            to="content2"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            7. コードの記述
          </Scroll>
          <Scroll
            to="content8"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            8. テーブル(表)
          </Scroll>
        </nav>
        <div className="relative h-[200px] mt-[60px]">
          <h1 className="absolute text-2xl sm:text-3xl text-gray-600 sm:font-bold z-10 top-20 left-5">
            これだけは知っておいてほしい！マークダウン記法まとめ
          </h1>
          <p className="absolute text-right text-gray-400 z-10 right-6 top-8">
            更新日 : 2022/9/24
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
          <p>
            最近のIT企業では社内での報告や伝達がマークダウンで行われることが多いかと思います。
            (私がインターンで勤務していた会社ではそうでした)
            <br />
            あまりしっかりと練習することがないマークダウンの記法をあらためて本気で勉強しよう！もう少し伝わりやすく報告するために記法を学びたい！と思う方に向けて記事を書きました。
            <br />
            自分も今回の記事を書いていくうちに知らなかったことや発見がたくさんあり勉強になりました。
            <br />
            ぜひ、これを機に勉強してみましょう！
          </p>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          基本的な文法
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mb-32 mx-auto text-gray-600">
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content1Ref}
              id="content1"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              見出し
            </h3>
          </div>
          <p className="my-12">
            まずは基本的な書き方を紹介します。これさえできていれば差し支えなく文章が作成できます。
            <br />
            忘れがちですが、
            <span className="text-blue-400">
              基本的に記号とテキストの間には半角スペースを挿入するように！
            </span>
          </p>
          <div className="flex flex-col gap-10 mt-6">
            <div className="flex flex-col">
              <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap">
                <span className="my-auto">#</span>
                <span className="my-auto ml-2">見出し大</span>
              </div>
              <div className="flex flex-col ml-4 mt-4">
                <span className="my-auto text-sm flex mb-1">
                  <MdOutlineKeyboardArrowRight className="my-auto" />
                  実行結果
                </span>
                <span className="text-3xl my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner">
                  見出し大
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap">
                <span className="my-auto">##</span>
                <span className="my-auto ml-2">見出し中</span>
              </div>
              <div className="flex flex-col ml-4 mt-4">
                <span className="my-auto text-sm flex mb-1">
                  <MdOutlineKeyboardArrowRight className="my-auto" />
                  実行結果
                </span>
                <span className="text-xl my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner">
                  見出し中
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap">
                <span className="my-auto">###</span>
                <span className="my-auto ml-2">見出し小</span>
              </div>
              <div className="flex flex-col ml-4 mt-4">
                <span className="my-auto text-sm flex mb-1">
                  <MdOutlineKeyboardArrowRight className="my-auto" />
                  実行結果
                </span>
                <span className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner">
                  見出し小
                </span>
              </div>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-8">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content3Ref}
              id="content3"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              リンク埋め込み
            </h3>
          </div>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min flex flex-col my-4 sm:whitespace-nowrap">
            <span className="my-auto">
              [rev4の日常ブログ](https://◯◯◯◯◯◯◯◯.com)
            </span>
          </div>
          <p className="my-12">のように</p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">[タイトル](遷移先のURL)</span>
          </div>
          <p className="my-12">の形で記述すればリンクの貼り付けが可能です。</p>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
              <span className="my-auto hover:text-blue-400 hover:underline">
                rev4の日常ブログ
              </span>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-8">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content4Ref}
              id="content4"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              画像の貼り付け
            </h3>
          </div>
          <p className="mb-12">リンクの埋め込みととても似ていますが</p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min flex flex-col my-4 sm:whitespace-nowrap">
            <span className="my-auto">
              ![rev4の日常ブログのロゴ](https://◯◯◯◯◯◯◯◯.com/Image/1)
            </span>
          </div>
          <p className="my-12">のように</p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">![代替テキスト](画像のURL)</span>
          </div>
          <p className="my-12">の形で記述すればリンクの貼り付けが可能です。</p>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <img
              src={Logo.src}
              alt="ロゴ"
              height={80}
              width={80}
              className="shadow-xl hover:cursor-pointer my-auto ml-12 mt-2"
            />
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-8">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content5Ref}
              id="content5"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              引用
            </h3>
          </div>
          <p className="mb-12">
            {"> "}を先頭につけて引用してきた文であることを明記できます。
          </p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">{">"} 引用してきた文章</span>
          </div>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md pt-2 pb-2 px-4 w-min whitespace-nowrap shadow-inner flex">
              <div className="w-1 h-10 bg-gray-300"></div>
              <p className="my-auto ml-2">引用してきた文章</p>
            </div>
          </div>
          <p className="mt-12">
            なお、{"> "}をネストして引用自体をネストすることもできます。
          </p>
          <div className="flex sm:-ml-4 mt-24 mb-8">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content6Ref}
              id="content6"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              フォントスタイル
            </h3>
          </div>
          <p className="mb-12">
            アンダースコア2つで囲むかアスタリスク2つで囲むとテキストを太字に出来ます。
          </p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">__太字で強調1__</span>
            <span className="my-auto">**太字で強調2**</span>
          </div>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
              <span className="my-auto font-bold">太字で強調1</span>
              <span className="my-auto font-bold">太字で強調2</span>
            </div>
          </div>
          <p className="my-12">
            アンダースコアで囲むかアスタリスクで囲むとイタリックのテキストが書けます。
          </p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">_イタリック1_</span>
            <span className="my-auto">*イタリック2*</span>
          </div>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
              <span className="my-auto italic">イタリック1</span>
              <span className="my-auto italic">イタリック2</span>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-8">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content7Ref}
              id="content7"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              箇条書き
            </h3>
          </div>
          <p className="mb-12">* + - であればどの記号でも箇条書きできます。</p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">* タスク</span>
            <span className="my-auto">+ タスク</span>
            <span className="my-auto">- タスク</span>
          </div>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
              <span className="my-auto">・タスク</span>
              <span className="my-auto">・タスク</span>
              <span className="my-auto">・タスク</span>
            </div>
          </div>
          <p className="my-12">
            優先順位などをつけたい時は番号を振るのもいいかもしれません。
          </p>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">1. タスク</span>
            <span className="my-auto">2. タスク</span>
            <span className="my-auto">3. タスク</span>
          </div>
          <div className="flex flex-col ml-4 mt-4">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
              <span className="my-auto">1. タスク</span>
              <span className="my-auto">2. タスク</span>
              <span className="my-auto">3. タスク</span>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-4">
            <div>
              <img
                src={Arrow.src}
                alt="題目"
                width={28}
                height={28}
                className="h-6 my-auto"
              />
            </div>
            <h3
              ref={content2Ref}
              id="content2"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              コードの記述
            </h3>
          </div>
          <div className="flex flex-col mt-8">
            <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col">
              <span className="my-auto">&#096;&#096;&#096;</span>
              <span className="my-auto ml-2">def main():</span>
              <span className="my-auto ml-6">print(&apos;hoge&apos;)</span>
              <span className="my-auto">&#096;&#096;&#096;</span>
            </div>
            <div className="flex flex-col ml-4 mt-4">
              <span className="my-auto text-sm flex mb-1">
                <MdOutlineKeyboardArrowRight className="my-auto" />
                実行結果
              </span>
              <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
                <span className="my-auto ml-2">def main():</span>
                <span className="my-auto ml-6">print(&apos;hoge&apos;)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <p className="my-12">
              また、記述するプログラミング言語を指定することにより
              <span className="text-blue-400">シンタックスハイライト</span>
              できます。
            </p>
            <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col mt-4">
              <span className="my-auto">&#096;&#096;&#096;python</span>
              <span className="my-auto ml-2">def main():</span>
              <span className="my-auto ml-6">print(&apos;hoge&apos;)</span>
              <span className="my-auto">&#096;&#096;&#096;</span>
            </div>
            <div className="flex flex-col ml-4 mt-4">
              <span className="my-auto text-sm flex mb-1">
                <MdOutlineKeyboardArrowRight className="my-auto" />
                実行結果
              </span>
              <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col">
                <span className="my-auto ml-2 text-[#ebd247]">
                  def
                  <span className="my-auto ml-2 text-[#8bdf4c]">main():</span>
                </span>
                <span className="my-auto ml-6">print(&apos;hoge&apos;)</span>
              </div>
            </div>
            <p className="mt-12">
              その他の言語でも同様にシンタックスハイライトを付けることができるのでぜひお使いの言語が対応しているか確認してみてください。
            </p>
          </div>
          <div className="flex flex-col mt-8">
            <p className="mb-12">
              さらに、どのファイルに記述しているのかわかるように
              <span className="text-blue-400">ファイル名を書いてあげる</span>
              と親切で読み手も理解が捗ります。以下のようにひと手間加えるだけで大丈夫です。
            </p>
            <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col mt-4">
              <span className="my-auto">&#096;&#096;&#096;python:main.py</span>
              <span className="my-auto ml-2">def main():</span>
              <span className="my-auto ml-6">print(&apos;hoge&apos;)</span>
              <span className="my-auto">&#096;&#096;&#096;</span>
            </div>
            <div className="flex flex-col ml-4 mt-4">
              <span className="my-auto text-sm flex mb-1">
                <MdOutlineKeyboardArrowRight className="my-auto" />
                実行結果
              </span>
              <div className="text-sm my-auto ml-4 rounded-md pt-8 pb-2 px-4 w-min whitespace-nowrap shadow-inner flex flex-col relative">
                <span className="absolute top-0 left-0 bg-gray-100 px-2">
                  main.py
                </span>
                <span className="my-auto ml-2 text-[#ebd247]">
                  def
                  <span className="my-auto ml-2 text-[#8bdf4c]">main():</span>
                </span>
                <span className="my-auto ml-6">print(&apos;hoge&apos;)</span>
              </div>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-8">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content8Ref}
              id="content8"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              テーブル(表)
            </h3>
          </div>
          <div className="bg-gray-900 text-gray-300 rounded-md py-2 px-4 w-min whitespace-nowrap flex flex-col my-4">
            <span className="my-auto">| column1 | column2 | column3 |</span>
            <span className="my-auto">|: --- |: --- :| --- :|</span>
            <span className="my-auto">| abc | def | ghi |</span>
          </div>
          <p className="my-12">
            表のセルに対して横方向の幅寄せをしたい時は2行目のようにコロンを挿入します。
          </p>
          <div className="flex flex-col ml-4 mt-4 mb-8">
            <span className="my-auto text-sm flex mb-1">
              <MdOutlineKeyboardArrowRight className="my-auto" />
              実行結果
            </span>
            <div className="text-sm my-auto ml-4 rounded-md py-2 px-4 whitespace-nowrap shadow-inner flex flex-col">
              <table className="border">
                <tbody>
                  <tr>
                    <td className="border">column1</td>
                    <td className="border">column2</td>
                    <td className="border">column3</td>
                  </tr>
                  <tr>
                    <td className="text-left border">abc</td>
                    <td className="text-center border">def</td>
                    <td className="text-right border">ghi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ReturnButton />
        </div>
      </>
    </Template>
  );
};

export default Article;
