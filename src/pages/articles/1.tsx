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
import { ReturnButton } from "components/ReturnButton";

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
            [初心者向け]HTML・CSS作成からLive Serverの立ち上げ
          </h1>
          <p className="absolute text-right text-gray-400 z-10 right-6 top-8">
            更新日 : 2022/9/15
          </p>
          <img
            src={TitleBackground.src}
            alt="背景"
            height={150}
            width={150}
            className="absolute right-0 z-0"
          />
        </div>
        {/* <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">もくじ</h2>
        <hr className="mx-[20px] mb-4" /> */}
        {/* <nav className="flex flex-col mx-auto w-min gap-4 border-4 border-green-300 rounded-lg px-12 py-4 mt-12 mb-24 shadow-xl">
          <Scroll
            to="content1"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer whitespace-nowrap w-min text-gray-500 hover:text-blue-400"
          >
            1. vscodeのインストール
          </Scroll>
          <Scroll
            to="content2"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer whitespace-nowrap w-min text-gray-500 hover:text-blue-400"
          >
            2. 開発用ディレクトリ(フォルダ)の作成
          </Scroll>
          <Scroll
            to="content3"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer whitespace-nowrap w-min text-gray-500 hover:text-blue-400"
          >
            3. Live Serverのインストール
          </Scroll>
          <Scroll
            to="content4"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer whitespace-nowrap w-min text-gray-500 hover:text-blue-400"
          >
            4. vscodeを使ってHTMLファイルを編集
          </Scroll>
          <Scroll
            to="content5"
            smooth={true}
            offset={-80}
            className="hover:cursor-pointer whitespace-nowrap w-min text-gray-500 hover:text-blue-400"
          >
            5. CSSを当ててデザインを整える
          </Scroll>
        </nav> */}

        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          環境構築
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600">
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="my-auto"
            />
            <h3
              ref={content1Ref}
              id="content1"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              vscodeのインストール
            </h3>
          </div>
          <p className="my-2">
            IDE(総合開発環境)といえば、まずこれな気がします。 <br />
            Microsoft社製のIDEでさまざまなプラグインがインストールできたり、個人の好みに合わせてテキストの色やテーマをカスタマイズできるのでモチベーションにも繋がります。
            <br />
            <br />
            以下のリンクをクリックしてダウンロードページに移動します。
          </p>
          <div className="flex h-10 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://code.visualstudio.com/download"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              vscode 公式サイト
            </a>
          </div>
          <img
            src={Img1.src}
            alt="画像1"
            height={400}
            width={600}
            className="mx-auto shadow-md my-12"
          />
          <p>
            多くの方はmacかwindowsのOSが搭載されたPCをお使いかと思います。自分のPCに合わせたパッケージをダウンロードしてください。(2022年9月時点で画像のバージョン)
            <br />
            ダウンロードしたパッケージを解凍してデスクトップにアプリを配置しておきましょう。
          </p>
          <div className="flex sm:-ml-4 mt-20 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="my-auto"
            />
            <h3
              ref={content2Ref}
              id="content2"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              開発用ディレクトリ(フォルダ)の作成
            </h3>
          </div>
          <p className="my-2">
            ダウンロード中に今回開発に使うディレクトリを作成してしまいましょう。
            <br />
            デスクトップで右クリックして
            <span className="text-blue-400">新規フォルダ作成</span>
            を押してフォルダ名を
            <span className="text-blue-400">demo</span>
            としておきましょう。 <br />
          </p>
          <div className="hidden sm:block">
            <div className="flex justify-between w-[500px] mx-auto mt-12 mb-28">
              <img
                src={Img2.src}
                alt="画像2"
                height={360}
                width={300}
                className="rounded-lg"
              />
              <TbArrowBigRightLine className="my-auto text-3xl text-green-400 animate-pulse" />
              <img
                src={Img3.src}
                alt="画像3"
                height={100}
                width={80}
                className="rounded-lg my-auto"
              />
            </div>
          </div>
          <div className="sm:hidden">
            <div className="flex flex-col justify-between mx-auto mt-12 mb-28">
              <img
                src={Img2.src}
                alt="画像2"
                height={360}
                width={300}
                className="rounded-lg mx-auto"
              />
              <TbArrowBigDownLine className="my-8 mx-auto text-[40px] text-green-400 animate-pulse" />
              <img
                src={Img3.src}
                alt="画像3"
                height={100}
                width={80}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px] mt-8">
          コードを書く
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
            <h3
              ref={content3Ref}
              id="content3"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              Live Serverのインストール
            </h3>
          </div>
          <p>
            作成したdemoフォルダをフォルダをvscodeのアイコンの上に重ねるようにドラッグするとvscode内でdemoフォルダを開いた状態で展開されます。
            <br />
            作成したHTMLファイルをブラウザで確認するために必要な
            <span className="text-blue-400">Live Server</span>
            というプラグインを先にインストールしておきます。
          </p>
          <div className="hidden sm:block">
            <div className="flex my-16">
              <img src={Img4.src} alt="画像4" height={160} width={44} />
              <div className="flex flex-col py-4 px-8 justify-between">
                <p>
                  vscodeの左側に左の画像のようなアイコンが複数表示されているので、拡張機能を選択します。
                  <br />
                  そして<span className="text-blue-400">Live Server</span>
                  と検索をかけると以下のプラグインが表示されるのでインストールしておきましょう。
                </p>
                <img
                  src={Img5.src}
                  alt="画像5"
                  height={400}
                  width={620}
                  className="mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="flex flex-col my-16">
              <div className="flex py-4 justify-between">
                <img src={Img4.src} alt="画像4" height={100} width={24} />
                <p className="mx-4 my-auto">
                  vscodeの左側に左の画像のようなアイコンが複数表示されているので、拡張機能を選択します。
                </p>
              </div>
              <div className="mt-8">
                <p>
                  そして<span className="text-blue-400">Live Server</span>
                  と検索をかけると以下のプラグインが表示されるのでインストールしておきましょう。
                </p>
                <img
                  src={Img5.src}
                  alt="画像5"
                  height={400}
                  width={620}
                  className="mx-auto rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="my-auto"
            />
            <h3
              ref={content4Ref}
              id="content4"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              vscodeを使ってHTMLファイルを編集
            </h3>
          </div>
          <p>
            左上のフォルダ名がDEMOとなっていることを確認したら、マウスホバーした時に現れるアイコンの一番左側のアイコンを押すとファイルがdemoフォルダ直下に作成できるので、
            <span className="text-blue-400">index.html</span>
            と入力してベースとなるHTMLファイルを作成します。同じ手順で同階層に
            <span className="text-blue-400">style.css</span>
            も作成します。
            <br />
            <br />
            左上の表示が画像のようになっていれば完了です。
          </p>
          <img
            src={Img6.src}
            alt="画像6"
            height={40}
            width={200}
            className="mx-auto my-12"
          />
          <p>
            準備が整ったところで、実際に index.html
            を選択してファイルを編集してみましょう。
            <br />
            以下のリンクからそのままコードをコピーして自分のindex.htmlに貼り付けてみてください。
          </p>
          <div className="flex h-10 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://github.com/shochin666/demo/blob/main/index.html"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              index.html
            </a>
          </div>
          <p>
            基本的なHTMLの骨組みとなり、このコードの内側にコードをネスト(入れ子)してHTMLファイルを作成していきます。
            <br />
            <br />
            ではbodyタグの中に以下のコードを記述してみましょう。
          </p>
          <img
            src={Img7.src}
            alt="画像7"
            height={250}
            width={300}
            className="mx-auto my-12"
          />
          <p>
            <span className="px-2 py-1 rounded-md shadow-inner mr-1 bg-gray-50">
              command + S
            </span>
            で保存して右下にある
            <span className="text-blue-400">Go Live</span>を押してみてください。
            <br />
            <br />
            ブラウザが自動的に立ち上がりデフォルトでは
            <span className="text-blue-400">http://127.0.0.1:5500</span>
            もしくは
            <span className="text-blue-400">
              http://127.0.0.1:5500/index.html
            </span>
            に接続され、
            <span className="font-extrabold whitespace-nowrap">
              " Hello world! "
            </span>
            が表示されます。
          </p>
          <img
            src={Img8.src}
            alt="画像8"
            height={380}
            width={600}
            className="shadow-md mx-auto mt-12 mb-20"
          />
          <div className="flex sm:-ml-4 mt-24 mb-4">
            <img
              src={Arrow.src}
              alt="題目"
              width={28}
              height={28}
              className="my-auto"
            />
            <h3
              ref={content5Ref}
              id="content5"
              className="text-lg text-sky-500 my-auto ml-2"
            >
              CSSを当ててデザインを整える
            </h3>
          </div>
          <p>
            先のセクションでHTMLファイルを作成しましたが、まだCSSが当たっていないのでダサいままです。なので、CSSファイルを編集してスタイルを当てて文字に色をつけてあげます。
            <br />
            ではindex.htmlに戻り、titleタグ直上に以下のようにlinkタグを記述します。これにより同階層にあるstyle.cssをindex.htmlから呼び出すことができました。
            <br />
          </p>
          <img
            src={Img9.src}
            alt="画像9"
            height={180}
            width={380}
            className="my-12 mx-auto"
          />
          <p>
            さらに既に書いたh1タグにclass属性を付与してあげます。このクラス名と同じ名前でstyles.cssに記述したスタイルがh1タグに当たります。ここでは
            <span className="text-blue-400">" message "</span>
            というクラス名をつけてみましょう。
          </p>
          <img
            src={Img10.src}
            alt="画像10"
            height={10}
            width={380}
            className="my-12 mx-auto"
          />
          <p>
            style.cssに先ほどのクラス名に対応した記述を書いていきます。以下のリンクからコードをコピーしてstyle.cssに貼り付けてみましょう。
          </p>
          <div className="flex h-10 my-8">
            <img
              src={LinkIcon.src}
              alt="リンク"
              height={28}
              width={4}
              className="mr-4"
            />
            <a
              href="https://github.com/shochin666/demo/blob/main/style.css"
              className="hover:underline my-auto text-[#009c3e]"
              target="_blank"
              rel="noopener noreferrer"
            >
              style.css
            </a>
          </div>
          <span className="px-2 py-1 rounded-md shadow-inner mr-1 bg-gray-50">
            command + S
          </span>
          で保存してブラウザをリロードしてみましょう。無事にHTMLファイルにスタイルが当たって文字の色が変わって表示されました!!
          <img
            src={Img11.src}
            alt="画像11"
            height={380}
            width={620}
            className="shadow-md mx-auto my-12"
          />
          <p>
            これでHTMLファイル作成からCSSを当てて表示することができました。おめでとうございます!!
            <br />
            他にもたくさんのスタイルをCSSは準備してくれているのでリファレンスなどで調べながらたくさんコードを書いて上達したいですね!!
            <br />
          </p>
          <p className="underline underline-offset-4 leading-6 sm:leading-3 my-12">
            最後にvscodeを閉じる前に右下の
            <AiOutlineStop className="inline text-blue-400 align-middle sm:align-top" />
            <span className="text-blue-400">Port: 5500</span>
            を押してローカルサーバーを必ず落としましょう。
          </p>
          <p>これにて今回の記事は終了となります。お疲れ様でした!!</p>
          <img
            src={Success.src}
            alt="成功"
            height={520}
            width={520}
            className="mx-auto mt-8"
          />
          <p className="text-[#00c34e] text-3xl font-bold text-center">
            Success!
          </p>
          <ReturnButton />
        </div>
      </>
    </Template>
  );
};

export default Article;
