import { NextPage } from "next";
import { useRef } from "react";
import { Template } from "../../components/Template";
import { useOffsetTop } from "hooks/useOffsetTop";

import { Link as Scroll } from "react-scroll";
import { TbArrowBigRightLine, TbArrowBigDownLine } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";

import LinkIcon from "../../../public/linkIcon.png";
import TitleBackground from "../../../public/titleBackground.png";
import Arrow from "../../../public/Arrow.png";
import Logo from "../../../public/logo.png";
import Air from "../../../public/article6/air.png";
import SnowGames from "../../../public/article6/undraw_snow_games_tq9r.svg";
import HeatTech from "../../../public/article6/HeatTech.webp";
import { ReturnButton } from "components/ReturnButton";
import Link from "next/link";
import Head from "next/head";

const Article: NextPage = () => {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const content4Ref = useRef(null);
  const content5Ref = useRef(null);
  const content1SectionOffset = useOffsetTop(content1Ref);
  const content2SectionOffset = useOffsetTop(content2Ref);
  const content3SectionOffset = useOffsetTop(content3Ref);
  const content4SectionOffset = useOffsetTop(content4Ref);
  const content5SectionOffset = useOffsetTop(content5Ref);
  return (
    <Template>
      <>
        <Head>
          <title>rev4 lab.|HTML・CSSをさらに深く理解する</title>
          <meta name="description" content="HTML・CSSをさらに深く理解する" />
          <meta
            name="keyword"
            content="rev4, ブログ, HTML, CSS, react, プログラミング, 初心者"
          />
          <meta property="twitter:title" content="rev4 lab." />
          <meta name="twitter:createor" content="rev4" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="rev4の日常ブログ" />
          <link rel="icon" href={Logo.src} />
        </Head>
        <nav className="fixed h-[360px] right-[16px] top-12 z-20 flex-col mx-auto py-2 w-60 gap-4 rounded-lg px-4 hidden sm:flex">
          <p className="font-bold text-gray-500">目次</p>
          <Scroll
            to="content1"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            1. vscodeのインストール
          </Scroll>
          <Scroll
            to="content2"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            2. 開発用ディレクトリ(フォルダ)の作成
          </Scroll>
          <Scroll
            to="content3"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            3. Live Serverのインストール
          </Scroll>
          <Scroll
            to="content4"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            4. vscodeを使ってHTMLファイルを編集
          </Scroll>
          <Scroll
            to="content5"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer text-gray-500 hover:text-blue-400"
          >
            5. CSSを当ててデザインを整える
          </Scroll>
        </nav>
        <div className="relative h-[200px] mt-[60px]">
          <h1 className="absolute text-2xl sm:text-3xl text-gray-600 sm:font-bold z-10 top-20 left-5">
            エアリズムとの契約解除?!
            <br />
            ついにヒートテックと新規契約か...
          </h1>
          <p className="absolute text-right text-gray-400 z-10 right-6 top-8">
            更新日 : 2022/12/31
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
          すべてはここから始まった...
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          <p>
            今年もいよいよ東京にも寒さがやってまいりました。私は最近あまり物欲がなく(正確には忙しくて物欲が失せてしまった)服にいたってはここ1年間自主的に買う機会がほとんどありませんでした。
            <br />
            そんな私でも普段から肌身離さず身につけているものがあるのですが、それがエアリズムです。エアリズムの良さはいくらでもあるので後ほど話すとして、真冬でもエアリズムをバッチリ着こなしている私を見かねて「こんな寒いのにエアリズム着てるとマジで風邪引くよ」とよく友人が言ってくれるのです。しかし、エアリズムが生まれて21年で出会ってきた中で最高の肌触りだと確信している私、ヘビーエアリズマーは簡単に引くことができません。そこで先日聖地ユニクロに出向いて最新のヒートテックを試したのですがこれまた"最高"の肌触りに進化していたわけなんです。さすがにこのような事態は想定していなかったので焦っていた私はあまり記憶がありませんが気づけば紙袋に入ったヒートテックを手に提げていたのでした。
            <br />
            それからというものの私は最高の2022awを健康に送らせていただいております^^
          </p>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          ユニクロが生み出した神下着 ー エアリズム ー
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          <img
            src={Air.src}
            height={300}
            width={800}
            alt="エアリズム"
            className="px-0 sm:px-16 pt-2
             sm:pt-8 mx-auto"
          />
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3 className="text-lg text-sky-500 ml-2 my-auto">歴史</h3>
          </div>
          <p>
            いまやユニクロの看板商品となったエアリズム。
            <br />
            2007年にメンズは「シルキードライ」、レディースは「サラファイン」という商品名でss向けのインナーウェア事業が始まりました。2012年にそれらは統一され、「エアリズム」へと生まれ変わったのです。
          </p>
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3 className="text-lg text-sky-500 ml-2 my-auto">特徴</h3>
          </div>
          <div className="p-6 shadow-lg rounded-lg my-8">
            <h4 className="text-lg font-bold text-gray-600">
              ドライ
              <br />
              <p className="text-sm mt-1 text-gray-600">
                汗を瞬時に吸収・拡散。
              </p>
            </h4>
            <p>極細繊維の毛細管現象により、汗を瞬時に吸収・拡散して乾かす。</p>
            <h4 className="text-lg font-bold mt-4 text-blue-500">
              肌面平滑性
              <br />
              <p className="text-sm mt-1 text-gray-900">
                凹凸の少ない、なめらかな肌ざわり。
              </p>
            </h4>
            <p>シルクとほぼ同じなめらかさで、肌にやさしい低摩擦。</p>
            <h4 className="text-lg font-bold mt-4 text-blue-500">
              ストレッチ
              <br />
              <p className="text-sm mt-1 text-gray-900">
                よく伸び、身体にフィットする
              </p>
            </h4>
            <p>横に約2倍、縦に約1.5倍の伸縮性。</p>
            <h4 className="text-lg font-bold mt-4 text-blue-500">
              接触冷感
              <br />
              <p className="text-sm mt-1 text-gray-900">
                着た瞬間、ひんやり快適。
              </p>
            </h4>
            <p>平滑性が高い素材だから、肌から生地への熱移動量が大きい。</p>
            <h4 className="text-lg font-bold mt-4 text-gray-600">
              消臭
              <br />
              <p className="text-sm mt-1 text-gray-900">
                気になるにおいを抑える消臭効果。
              </p>
            </h4>
            汗などのにおいの元を吸着・中和して消臭する。
            <h4 className="text-lg font-bold mt-4 text-gray-600">
              抗菌防臭
              <br />
            </h4>
            においの元になる雑菌の増殖を抑制し、汗や生乾きなどの嫌なにおいを抑えます。
            <h4 className="text-lg font-bold mt-4 text-blue-500">
              吸放湿
              <br />
            </h4>
            呼吸する繊維が衣服内を除湿するから、いつもサラッと快適。
          </div>
          <p className="mt-4">
            以上が公式特集サイトに掲載されているエアリズムの特徴です。実際に使っていてどれも実感しますね〜。
            <br />
            私は基礎代謝がかなりいいのでよく汗をかく暑がりなのですが、特に
            <br />
            <span className="text-blue-500 inline-block my-4 align-center font-bold">
              肌面平滑性・ストレッチ・接触冷感・吸放湿
            </span>
            <br />
            の4つがエアリズムが併せ持つ素晴らしい機能だと実感していてこれに沼って季節関係なく着てしまうわけです。
            <br />
            さらに、最近ではこの素材を使ったシーツや裏地だけエアリズムのコットンTシャツが発売されるなど、その肌触りの良さが人気の秘密みたいです。
            <br />
            <img
              src={SnowGames.src}
              alt="雪合戦"
              height={200}
              width={200}
              className="my-8 mx-auto"
            />
            そんなエアリズム狂の私ですが、さすがに今年の冬は寒すぎて接触冷感が裏目に出てしまいさすがの私でも耐えきれませんでした🥶🥶🥶
          </p>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          最強の進化を遂げた ー ヒートテック ー
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          <img
            src={HeatTech.src}
            height={300}
            width={800}
            alt="ヒートテック"
            className="px-0 sm:px-16 pt-2
             sm:pt-8 mx-auto"
          />
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="h-6 my-auto"
            />
            <h3 className="text-lg text-sky-500 ml-2 my-auto">
              実はユニクロ独自の技術ではなかった？
            </h3>
          </div>
          <ReturnButton />
        </div>
      </>
    </Template>
  );
};

export default Article;
