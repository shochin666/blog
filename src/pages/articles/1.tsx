import { NextPage } from "next";
import Image from "next/image";
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
import Image1 from "../../../public/article1/Image1.png";
import Image2 from "../../../public/article1/Image2.png";
import Image3 from "../../../public/article1/Image3.png";
import Image4 from "../../../public/article1/Image4.png";
import Image5 from "../../../public/article1/Image5.png";
import Image6 from "../../../public/article1/Image6.png";
import Image7 from "../../../public/article1/Image7.png";
import Image8 from "../../../public/article1/Image8.png";
import Image9 from "../../../public/article1/Image9.png";
import Image10 from "../../../public/article1/Image10.png";
import Image11 from "../../../public/article1/Image11.png";
import { ReturnButton } from "components/ReturnButton";
import Link from "next/link";

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
          <div className="absolute right-0 z-0">
            <Image
              src={TitleBackground.src}
              alt="背景"
              height={150}
              width={150}
            />
          </div>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px]">
          環境構築
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600">
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <div className="h-6 my-auto">
              <Image src={Arrow.src} alt="題目" width={28} height={28} />
            </div>
            <h3
              ref={content1Ref}
              id="content1"
              className="text-lg text-sky-500 ml-2 my-auto"
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
          <div className="flex my-8 h-12">
            <div className="mr-4">
              <Image src={LinkIcon.src} alt="リンク" height={48} width={4} />
            </div>
            <Link href="https://code.visualstudio.com/download">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                vscode 公式サイト
              </a>
            </Link>
          </div>
          <div className="mx-auto shadow-md my-12">
            <Image src={Image1.src} alt="画像1" height={400} width={750} />
          </div>

          <p>
            多くの方はmacかwindowsのOSが搭載されたPCをお使いかと思います。自分のPCに合わせたパッケージをダウンロードしてください。(2022年9月時点で画像のバージョン)
            <br />
            ダウンロードしたパッケージを解凍してデスクトップにアプリを配置しておきましょう。
          </p>
          <div className="flex sm:-ml-4 mt-20 mb-4">
            <div className="h-6 my-auto">
              <Image src={Arrow.src} alt="題目" width={28} height={28} />
            </div>
            <h3
              ref={content2Ref}
              id="content2"
              className="text-lg text-sky-500 ml-2 my-auto"
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
              <div>
                <Image
                  src={Image2.src}
                  alt="画像2"
                  height={220}
                  width={280}
                  className="rounded-lg"
                />
              </div>
              <TbArrowBigRightLine className="my-auto text-3xl text-green-400 animate-pulse" />
              <div className="rounded-lg my-auto hidden sm:block">
                <Image src={Image3.src} alt="画像3" height={100} width={80} />
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="flex flex-col justify-between mx-auto mt-12 mb-28">
              <Image
                src={Image2.src}
                alt="画像2"
                height={280}
                width={220}
                className="rounded-lg mx-auto"
              />
              <TbArrowBigDownLine className="my-8 mx-auto text-[40px] text-green-400 animate-pulse" />
              <div className="mx-auto">
                <Image
                  src={Image3.src}
                  alt="画像3"
                  height={100}
                  width={80}
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-gray-600 text-2xl sm:text-3xl mx-[20px] mt-8">
          コードを書く
        </h2>
        <hr className="mx-[20px] mb-4" />
        <div className="w-[90%] mx-auto text-gray-600 mb-32">
          <div className="flex sm:-ml-4 mt-8 mb-4">
            <div className="h-6 my-auto">
              <Image src={Arrow.src} alt="題目" width={28} height={28} />
            </div>
            <h3
              ref={content3Ref}
              id="content3"
              className="text-lg text-sky-500 ml-2 my-auto"
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
              <div>
                <Image src={Image4.src} alt="画像4" height={280} width={56} />
              </div>
              <div className="flex flex-col py-4 px-8 justify-between">
                <p>
                  vscodeの左側に左の画像のようなアイコンが複数表示されているので、拡張機能を選択します。
                  <br />
                  そして<span className="text-blue-400">Live Server</span>
                  と検索をかけると以下のプラグインが表示されるのでインストールしておきましょう。
                </p>
                <div>
                  <Image
                    src={Image5.src}
                    alt="画像5"
                    height={160}
                    width={900}
                    className="mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="flex flex-col my-16">
              <div className="flex py-4 justify-between">
                <div>
                  <Image src={Image4.src} alt="画像4" height={400} width={80} />
                </div>
                <p className="mx-4 my-auto">
                  vscodeの左側に左の画像のようなアイコンが複数表示されているので、拡張機能を選択します。
                </p>
              </div>
              <div className="mt-8">
                <p>
                  そして<span className="text-blue-400">Live Server</span>
                  と検索をかけると以下のプラグインが表示されるのでインストールしておきましょう。
                </p>
                <div>
                  <Image
                    src={Image5.src}
                    alt="画像5"
                    height={70}
                    width={400}
                    className="mx-auto rounded-lg mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-4">
            <div className="h-6 my-auto">
              <Image src={Arrow.src} alt="題目" width={28} height={28} />
            </div>
            <h3
              ref={content4Ref}
              id="content4"
              className="text-lg text-sky-500 ml-2 my-auto"
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
          <div className="mx-auto my-12 w-fit">
            <Image src={Image6.src} alt="画像6" height={80} width={200} />
          </div>
          <p>
            準備が整ったところで、実際に index.html
            を選択してファイルを編集してみましょう。
            <br />
            以下のリンクからそのままコードをコピーして自分のindex.htmlに貼り付けてみてください。
          </p>
          <div className="flex my-8 h-12">
            <div className="mr-4">
              <Image src={LinkIcon.src} alt="リンク" height={48} width={4} />
            </div>
            <Link href="https://github.com/shochin666/demo/blob/main/index.html">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                index.html
              </a>
            </Link>
          </div>
          <p>
            基本的なHTMLの骨組みとなり、このコードの内側にコードをネスト(入れ子)してHTMLファイルを作成していきます。
            <br />
            <br />
            ではbodyタグの中に以下のコードを記述してみましょう。
          </p>
          <div className="w-fit mx-auto my-12">
            <Image src={Image7.src} alt="画像7" height={90} width={300} />
          </div>
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
              &quot; Hello world! &quot;
            </span>
            が表示されます。
          </p>
          <div className="w-fit shadow-md mx-auto mt-12 mb-20">
            <Image src={Image8.src} alt="画像8" height={380} width={600} />
          </div>
          <div className="flex sm:-ml-4 mt-24 mb-4">
            <Image
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
          <div className="w-fit my-12 mx-auto">
            <Image src={Image9.src} alt="画像9" height={120} width={420} />
          </div>
          <p>
            さらに既に書いたh1タグにclass属性を付与してあげます。このクラス名と同じ名前でstyles.cssに記述したスタイルがh1タグに当たります。ここでは
            <span className="text-blue-400">&quot; message &quot;</span>
            というクラス名をつけてみましょう。
          </p>
          <div className="w-fit my-12 mx-auto">
            <Image src={Image10.src} alt="画像10" height={20} width={320} />
          </div>
          <p>
            style.cssに先ほどのクラス名に対応した記述を書いていきます。以下のリンクからコードをコピーしてstyle.cssに貼り付けてみましょう。
          </p>
          <div className="flex my-8 h-12">
            <div className="mr-4">
              <Image src={LinkIcon.src} alt="リンク" height={48} width={4} />
            </div>
            <Link href="https://github.com/shochin666/demo/blob/main/style.css">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#009c3e] my-auto"
              >
                style.css
              </a>
            </Link>
          </div>
          <span className="px-2 py-1 rounded-md shadow-inner mr-1 bg-gray-50">
            command + S
          </span>
          で保存してブラウザをリロードしてみましょう。無事にHTMLファイルにスタイルが当たって文字の色が変わって表示されました!!
          <div className="w-fit shadow-md mx-auto my-12">
            <Image src={Image11.src} alt="画像11" height={380} width={620} />
          </div>
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
          <div className="w-fit mx-auto mt-8">
            <Image src={Success.src} alt="成功" height={200} width={280} />
          </div>
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
