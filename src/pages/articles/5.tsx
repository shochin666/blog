import { NextPage } from "next";

import { useRef } from "react";
import { Template } from "../../components/Template";
import { useOffsetTop } from "hooks/useOffsetTop";

import { Link as Scroll } from "react-scroll";

import Logo from "../../../public/logo.png";
import Derivery from "../../../public/article5/undraw_on_the_way_re_swjt.svg";
import SharingKnowledge from "../../../public/article5/undraw_sharing_knowledge_03vp.svg";
import Arrow from "../../../public/Arrow.png";
import TitleBackground from "../../../public/titleBackground.png";
import { ReturnButton } from "components/ReturnButton";
import Head from "next/head";

const Article: NextPage = () => {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const content4Ref = useRef(null);
  const content1SectionOffset = useOffsetTop(content1Ref);
  const content2SectionOffset = useOffsetTop(content2Ref);
  const content3SectionOffset = useOffsetTop(content3Ref);
  const content4SectionOffset = useOffsetTop(content4Ref);

  return (
    <Template>
      <>
        <Head>
          <title>rev4 lab.|浅いが秒で理解できるDX</title>
          <meta name="description" content="浅いが秒で理解できるDX" />
          <meta
            name="keyword"
            content="rev4, ブログ, HTML, CSS, react, プログラミング, 初心者, DX"
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
            1.きっかけ
          </Scroll>
          <Scroll
            to="content2"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            2.DXの定義
          </Scroll>
          <Scroll
            to="content3"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            3.農業におけるDX
          </Scroll>
          <Scroll
            to="content4"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            4.UberEats
          </Scroll>
        </nav>
        <div className="relative h-[200px] mt-[60px]">
          <h1 className="absolute text-2xl sm:text-3xl text-gray-600 sm:font-bold z-10 top-20 left-5">
            浅いが秒で理解できるDX
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
        <h2
          ref={content1Ref}
          id="content1"
          className="text-gray-600 text-2xl sm:text-3xl mx-[20px]"
        >
          きっかけ
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          日常的にネットニュースなどを見ているとよく見かけるのが
          <span className="text-blue-400">DX</span>という言葉。
          <br />
          しかし、漠然とテクノロジーと産業の掛け合わせ的な意味で捉えていたので今回はより一層理解を深めるために社会人や意識の高い大学向けにまとめてみました。
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">本題</h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3
              ref={content2Ref}
              id="content2"
              className="text-lg text-sky-500 ml-2 my-auto"
            >
              DXの定義
            </h3>
          </div>
          <p>
            そもそもDXは何なのか。イメージを軽く掴んでから話を進めることにしましょう。
            <br />
            <br />
            DXはDigital Transformationの略でデジタル変革、ざっと
            <span className="font-bold">
              既存のシステムをデジタルに置き換える
            </span>
            的な意味で捉えるといいかもしれません。
            <br />
            <br />
            抽象的な話ばかりではなかなかイメージがつかないと思うので、具体例を見ていくことにしましょう。
          </p>
          <div className="flex sm:-ml-4 mt-16 mb-4">
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
              className="text-lg text-sky-500 ml-2 my-auto"
            >
              農業におけるDX
            </h3>
          </div>
          <p>
            2020/3/31に閣議決定された食料・農業・農村基本計画の中で我々消費者のニーズに的確に応えられるように
            <span className="font-bold">
              データを武器にした農業経営への変革(
              <span className="text-blue-400">FaaS: Farming as a Service</span>)
            </span>
            を進めるための農業DX構想を取りまとめたそうです。
            <br />
            新たに消費者のニーズに対応し生産者が作物を作ることで作りすぎなどを防ぎ、生産者-消費者-環境の全ての間でwinwinの関係を実現しよう、というのがDXを導入することで想定されるメリットです。
            <br />
            <p className="font-bold my-4">あまりにもメリットがデカすぎる...</p>
          </p>
          <img
            src={SharingKnowledge.src}
            height={200}
            width={200}
            alt="Knowledge"
            className="mx-auto pt-12 pb-16"
          />
          <div className="flex sm:-ml-4 mt-8 mb-4">
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
              className="text-lg text-sky-500 ml-2 my-auto"
            >
              UberEats
            </h3>
          </div>
          <p>
            さて、この名を知らない人はいないと言っても過言じゃないかもしれません(私は使ったことがほとんどない)。UberEatsです。
            <br />
            我々は当たり前のようにUberEatsを使っているかもしれませんが、
            <span className="text-blue-400">実はDXの代表的な成功例</span>
            なのです。出前などを頼むと注文から届けてくれるまでお店の方が担当してくれますが、UberEatsでは依頼を受けた飲食店が食べ物を提供し、UberEatsの配達員がそれを配達だけしてくれるというシステムになっています。
          </p>
          <img
            src={Derivery.src}
            height={280}
            width={280}
            alt="デリバリー"
            className="py-16 mx-auto"
          />
          <p>
            なので、飲食店は配達にかかる人件費を削減でき、コロナ禍で注目されたフードデリバリーを提供する敷居が一気に低くなりました。さらに、配達員は自由に依頼を受けて働くことができるので、
            <span className="font-bold">winwinの関係</span>
            になってますよね！
          </p>
          <br />
          <p className="py-4">
            以上、DXを導入することのメリットを浅掘り(?)してみた回でした笑
            <br />
            <br />
            少ししたら、
            <span className="font-bold">「深いが、秒では理解できないDX」</span>
            を掲載したいと思います。
            <br />
            <br />
            ご覧いただきありがとうございました！
          </p>
          <ReturnButton />
        </div>
      </>
    </Template>
  );
};

export default Article;
