import { NextPage } from "next";

import { Template } from "components/template";
import { Return } from "components/return";

import { TbArrowBigRightLine, TbArrowBigDownLine } from "react-icons/tb";
import { AiOutlineStop } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";

import LinkIcon from "../../../public/linkIcon.png";
import TitleBackground from "../../../public/titleBackground.png";
import Arrow from "../../../public/Arrow.png";
import Success from "../../../public/article1/undraw_game_day_ucx9.png";
import Img1 from "../../../public/article1/img1.png";
import Img2 from "../../../public/article1/img2.png";
import Img3 from "../../../public/article1/img3.png";
import Img4 from "../../../public/article1/img4.png";
import Img5 from "../../../public/article1/img5.png";
import Img6 from "../../../public/article1/img6.png";
import Img7 from "../../../public/article1/img7.png";
import Img8 from "../../../public/article1/img8.png";
import Img9 from "../../../public/article1/img9.png";
import Img10 from "../../../public/article1/img10.png";
import Img11 from "../../../public/article1/img11.png";

const Article: NextPage = () => {
  return (
    <Template>
      <>
        <div className="relative h-[200px] mt-[60px]">
          <h1 className="absolute text-2xl sm:text-3xl text-gray-600 sm:font-bold z-10 top-20 left-5">
            HTML・CSSをさらに深く理解する
          </h1>
          <p className="absolute text-right text-gray-400 z-10 right-6 top-8">
            更新日時 : 2022/9/15
          </p>
          <img
            src={TitleBackground.src}
            alt="背景"
            height={150}
            width={150}
            className="absolute right-0 z-0"
          />
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">目的</h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-20">
          前回の記事でHTML・CSSを用いてローカルサーバーを立てて開発環境を構築しました。しかし、個人開発ができるまでにはこれから学ぶべき知識がまだまだ多くあります。
          <br />
          そこで今回はHTML・CSSを用いて開発する際に用いる知識を身につけるためにこれはおさえておいた方がいいだろうと思った参考サイトをまとめてみました。
          <br />
          <br />
          最初は全然書けないのはみんな同じです。これから
          <span className="text-blue-400">
            さらにウェブアプリ開発を頑張りたい！
          </span>
          と思っているのであればぜひ取り組んで更なるスキルアップを目指しましょう！
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          参考サイト
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-32">
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="my-auto"
            />
            <h3 className="text-lg text-sky-500 my-auto ml-2">HTML</h3>
          </div>
          <div className="flex h-10 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://zero-plus.io/media/html-tags-and-usage/"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTMLのよく使うタグ一覧！この15個さえ押さえればOK！
            </a>
          </div>
          <p>
            実際のコーディングは特殊な場合を除いて限られた個数のタグを多用します。
            <br />
            <span className="text-blue-400">
              まずは実際の開発で用いるHTMLタグを習得したい、早く開発に手をつけたい
            </span>
            という方向けです。
            <br />
            <br />
            初心者目線でわかりやすく書いてあるのでおすすめです！
          </p>
          <div className="flex h-10 mt-20 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://webukatu.com/wordpress/blog/5628/"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              【初心者向け】HTMLタグ一覧！ よく使うものをまとめました
            </a>
          </div>
          <p>
            同じように初心者目線で書かれているのでとても学習しやすく、さらにHTMLの概要が説明されていたりと、
            <span className="text-blue-400">根本からHTMLの基礎を学びたい</span>
            という方に向いてます！
          </p>
          <div className="flex h-10 mt-20 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://qiita.com/7note/items/988274920e28cb00fa25"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              【初心者向け】HTMLのタグ一覧を覚えておきたい重要度別に分けてみた
            </a>
          </div>
          <p>
            タイトルからお察しいただけたかと思いますが、上から重要度順に並んでいるので
            <span className="text-blue-400">
              どれから手をつけていいのかわからない
            </span>
            方にとってはいいかもしれません。
            <br />
            <br />
            内容はチートシートのように記述されており、実際のコードを書いて具体的は使用法が記述されている訳ではないのである程度コードの概要がつかめたら、
            <span className="text-blue-400">
              開発する際に補助的に使用するのもいいな
            </span>
            と個人的に思いました！
          </p>
          <div className="flex h-10 mt-20 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://yoshikawaweb.com/element/"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML5 入れ子チートシート
            </a>
          </div>
          <p>
            <span className="text-blue-400">基礎的なHTMLを完全に理解した</span>
            方は勉強の手助けとしてとても勉強になるかと思い選ばせていただきました。
            <br />
            HTMLタグには制約があり、
            <span className="text-blue-400">
              このタグにはこのタグを入れることができない
            </span>
            といった開発を進めていくと陥るワナから救ってくれるかもしれません。
            <br />
            <br />
            今後のエラー回避の予防として活躍してくれるおすすめのサイトです！
          </p>
          <div className="flex sm:-ml-4 mt-28 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="my-auto"
            />
            <h3 className="text-lg text-sky-500 my-auto ml-2">CSS</h3>
          </div>
          <div className="flex h-10 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://webliker.info/material/html-css-super-beginner03/"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              #06 CSSの書き方を覚えよう
            </a>
          </div>
          <p>
            HTMLを学習したもののスタイルの当て方がわからない方はしっかりとCSSの基本文法から学んでいきましょう！
            <br />
            こちらのサイトでは全般的な説明がなされており、CSSの基本文法が初心者目線でしっかりと書かれています。
            <br />
            <br />
            <span className="text-blue-400">図解が多く</span>
            初心者にとって理解がかなり捗るかと思います！
          </p>
          <div className="flex h-10 mt-20 mb-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://webliker.info/css/07370/"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              あなたはいくつ知ってる？CSSのセレクタ40個を総まとめ【チートシート付き】
            </a>
          </div>
          <p>
            こちらの記事はCSSを基礎からというより、一通りCSSの基礎は理解できたので
            <span className="text-blue-400">
              CSSセレクタを学び開発を効率よく円滑に進めたい
            </span>
            という方向けになっています。
            <br />
            実際に用いるコードと実行結果が横並びで記載されていてすぐに確認しながら学習を進められるようになっています。
          </p>
          <div className="flex h-10 mt-20 mb-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://qiita.com/7note/items/c90ba916f23d29229ac4"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              【初心者向け】CSSのプロパティ一覧を覚えておきたい重要度別に分けてみた
            </a>
          </div>
          <p>
            お気づきかもしれませんが
            <a
              href="https://qiita.com/7note/items/988274920e28cb00fa25"
              className="underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              【初心者向け】HTMLのタグ一覧を覚えておきたい重要度別に分けてみた
            </a>
            の姉妹編となります。同様に重要度別で並んでいるので学習の手助けになるかと思い参考にさせていただきました。
          </p>
          <div className="flex h-10 mt-20 mb-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/Reference"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS リファレンス
            </a>
          </div>
          <p>
            CSSのバイブルと言ってもいいほど学習者なら必ず1度は目にしたことがあるでしょうMDNのCSSリファレンスの紹介です。
            <br />
            <br />
            こちらは
            <span className="text-blue-400">
              一旦CSSの基礎を学び終えた方が開発時に辞書のように使う
            </span>
            のがいいのかと思います！
          </p>
          <p className="mt-20">
            以上8つのサイトを紹介させていただきしましたがどうだったでしょうか？
            <br />
            更なるスキルアップのために頑張っていきましょう！お疲れ様でした！
          </p>
          <Return />
        </div>
      </>
    </Template>
  );
};

export default Article;
