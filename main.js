/* =====================================
   作品情報
===================================== */

const works = {

  1: {

    className: "1組",

    title: "英語カルタ",

    category: "英語を使って楽しもう",

    color: "#D94B4B",

    description:
      "1組のみんなが作った英語カルタです。\n英語カルタと神経衰弱ともに楽しめる物です。読み札にも絵や英単語が描いてあるため、読み手も英語を楽しめるようになっています！",

    howto:
      "① カードを並べます。\n② 読み札を聞きます。\n③ 読まれたカードを探します。\n④ 見つけたらカードを取ります。",

    photo: null,

    point:
      "ここに1組が制作で工夫したことを入れます。",

    // 音源を追加したら、ここに音源ファイルのURLを設定
    audioLink: null

  },


  2: {

    className: "2組",

    title: "英語カルタ",

    category: "英語を使って楽しもう",

    color: "#E88AA4",

    description:
      "2組のみんなが作った英語カルタです。\n子どもでもわかりやすい馴染みのある単語で作っており、QRで音声を流すことも可能です。１人でも家族でも！",

    howto:
      "① カードを並べます。\n② 読み札を聞きます。\n③ 読まれたカードを探します。",

    photo: null,

    point:
      "ここに2組が制作で工夫したことを入れます。",

    // 音源を追加したら、ここに音源ファイルのURLを設定
    audioLink: null

  },


  3: {

    className: "3組",

    title: "国語カルタ",

    category: "言葉を楽しもう",

    color: "#D9B62B",

    description:
      "3組のみんなが作った国語カルタです。\nQRで音声の読み上げ機能をつけたカルタを作りました。お店での待ち時間に使って欲しいです！",

    howto:
      "3組のかるたサイトで遊び方を確認してください。",

    photo: null,

    point:
      "ここに3組が制作で工夫したことを入れます。",

    externalLink:
      "https://kotonoha-karuta.netlify.app/"

  },


  4: {

    className: "4組",

    title: "絵本「だぁれの？」の歌",

    category: "みんなで歌おう",

    color: "#E87B32",

    description:
      "4組のみんなが作った歌です。\n地域の子どもたちが楽しく歌ってくれるように絵本の世界観そのままにして作りました。５組の「だぁれの？」という絵本の歌です。絵本のQRを読み込んで聞いてみて下さい！",

    howto:
      "音源を聞きながら、一緒に歌ってみてください。",

    photo: null,

    point:
      "ここに4組が歌づくりで工夫したことを入れます。",

    // 音源を追加したら、ここに音源ファイルのURLを設定
    audioLink: null

  },


  5: {

    className: "5組",

    title: "絵本",

    category: "お話を楽しもう",

    color: "#8064A8",

    description:
      "5組のみんなが作った絵本です。\n五日市のコイン通りに置いてある十二支の銅像を入れた五日市ならではの絵本を作りました。繰り返し読んでも楽しめる絵本となっています！",

    howto:
      "絵本を見ながら、お話を楽しんでください。",

    photo: null,

    point:
      "ここに5組が絵本づくりで工夫したことを入れます。"

  },


  6: {

    className: "6組",

    title: "サイエンスグッズ",

    category: "科学を楽しもう",

    color: "#4D83C4",

    description:
      "6組のみんなが作ったサイエンスグッズです。\nお家でも再現しやすく、アレンジしやすいように、身の回りのものを使ってつくりました。ぜひ、チャレンジしてみてください！",

    howto:
      "ここにサイエンスグッズの使い方を入れます。",

      photo: null,

    point:
      "ここに6組が制作で工夫したことを入れます。"

  },


  7: {

    className: "7組",

    title: "絵本",

    category: "お話を楽しもう",

    color: "#5A9A63",

    description:
      "7組のみんなが作った絵本です。\n各グループで工夫して絵本を６冊作りました。子どもが興味を持てるようなキャラにしました。たくさん読んでください！",

    howto:
      "絵本を見ながら、お話を楽しんでください。",


    photo: null,

    point:
      "ここに7組が絵本づくりで工夫したことを入れます。"

  }

};


/* =====================================
   クラスページを開く
===================================== */

function openClass(classNumber) {
  var work = works[classNumber];

  document.getElementById("top-page").classList.add("hidden");

  document.getElementById("work-page").classList.remove("hidden");


  /* クラスカラー */

  document
    .getElementById("work-page")
    .style.setProperty(
      "--current-color",
      work.color
    );


  /* 基本情報 */

  document
    .getElementById("work-class")
    .textContent =
      work.className;

  document
    .getElementById("work-title")
    .textContent =
      work.title;

  document
    .getElementById("work-category")
    .textContent =
      work.category;

  document
    .getElementById("work-description")
    .textContent =
      work.description;

  document
    .getElementById("work-howto")
    .textContent =
      work.howto;

  document
    .getElementById("work-point")
    .innerHTML =
      work.point;
  /* =================================
     写真
  ================================= */

  const photoArea =
    document.getElementById("photo-area");

  photoArea.innerHTML = "";

  if (work.photo) {

    const image =
      document.createElement("img");

    image.src = work.photo;

    image.className = "work-photo";

    image.alt =
      work.className + "の作品";

    photoArea.appendChild(image);

  } else {

    photoArea.innerHTML =
      `<div class="photo-placeholder">
        作品の写真をここに掲載できます
      </div>`;

  }

/* =================================
   外部サイト
================================= */

const descriptionBox =
  document
    .getElementById("work-description")
    .parentElement;

/* 前に表示した外部サイトボタンを消す */

descriptionBox.querySelectorAll(".external-link").forEach(button => button.remove());


/* 外部サイトが設定されている場合だけ表示 */

if (work.externalLink) {

  const button =
    document.createElement("a");

  button.href =
    work.externalLink;

  button.target = "_blank";

  button.rel = "noopener noreferrer";

  button.className =
    "external-link";

  button.textContent =
    "3組 ことのはカルタ サイトを見る";

  descriptionBox.appendChild(button);

}



/* 1・2・4組の音源ボタン */
if ([1, 2, 4].includes(Number(classNumber))) {
  const audioButton = document.createElement(work.audioLink ? "a" : "button");
  audioButton.className = "external-link";
  audioButton.textContent = classNumber === 4 ? "歌を聞く" : "読み上げ音声を聞く";

  if (work.audioLink) {
    audioButton.href = work.audioLink;
    audioButton.target = "_blank";
    audioButton.rel = "noopener noreferrer";
  } else {
    audioButton.type = "button";
    audioButton.disabled = true;
    audioButton.title = "音源URLを設定すると再生できます";
  }

  descriptionBox.appendChild(audioButton);
}
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =====================================
   トップに戻る
===================================== */

function goHome() {

  document
    .getElementById("work-page")
    .classList.add("hidden");

  document
    .getElementById("top-page")
    .classList.remove("hidden");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
