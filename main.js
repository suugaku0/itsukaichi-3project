/* =====================================
   作品情報（ここに生徒2〜3人の意見をそれぞれ設定できます）
===================================== */

const works = {

  1: {

    className: "1組",

    title: "英語カルタ",

    category: "英語を使って楽しもう",

    color: "#D94B4B",
    bgColor: "#FDF2F2",

    description:
      "1組のみんなが作った英語カルタです。\n英語カルタと神経衰弱ともに楽しめる物です。読み札にも絵や英単語が描いてあるため、読み手も英語を楽しめるようになっています！",

    howto:
      "① カードを並べます。\n② 読み札を聞きます。\n③ 読まれたカードを探します。\n④ 見つけたらカードを取ります。",

    photo: "https://raw.githubusercontent.com/suugaku0/itsukaichi-3project/main/Images/3-1.png",

    // 担任の先生 ＋ 生徒の意見（2〜3人分をここに追加できます）
    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "子どもたちが主体的に素材を選べるよう、安全面に配慮しながらコーナーの配置を工夫しました。"
      },
      {
        role: "student",
        author: "生徒 Aさん",
        text: "みんなで意見を出し合って、初めて英語に触れる子でも楽しく遊べるようにイラストを大きくしました！"
      },
      {
        role: "student",
        author: "生徒 Bくん",
        text: "カルタの札がめくりやすいように、角を丸くして手に取りやすい形にするのをがんばりました。"
      }
    ],

    audioLink: null

  },


  2: {

    className: "2組",

    title: "英語カルタ",

    category: "英語を使って楽しもう",

    color: "#E88AA4",
    bgColor: "#FDF6F8",

    description:
      "2組のみんなが作った英語カルタです。\n子どもでもわかりやすい馴染みのある単語で作っており、QRで音声を流すことも可能です。１人でも家族でも！",

    howto:
      "① カードを並べます。\n② 読み札を聞きます。\n③ 読まれたカードを探します。",

    photo: "https://raw.githubusercontent.com/suugaku0/itsukaichi-3project/main/Images/3-2.png",

    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "子どもたちが何度も繰り返し遊びたくなるような難易度のバランスにこだわりました。"
      },
      {
        role: "student",
        author: "生徒 Aさん",
        text: "親しみやすい単語を選んで、発音もQRコードですぐ聞けるように工夫しました。"
      },
      {
        role: "student",
        author: "生徒 Bさん",
        text: "色合いがパッと見て明るく可愛くなるように、みんなで相談してデザインを決めました！"
      }
    ],

    audioLink: null

  },


  3: {

    className: "3組",

    title: "国語カルタ",

    category: "言葉を楽しもう",

    color: "#D9B62B",
    bgColor: "#FCF9EE",

    description:
      "3組のみんなが作った国語カルタです。\nQRで音声の読み上げ機能をつけたカルタを作りました。お店での待ち時間に使って欲しいです！",

    howto:
      "3組のかるたサイトで遊び方を確認してください。",

    photo: "https://raw.githubusercontent.com/suugaku0/itsukaichi-3project/main/Images/3-3.png",

    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "地域の飲食店などでも気軽に手にとって遊べるサイズ感と耐久性を意識しました。"
      },
      {
        role: "student",
        author: "生徒 Aくん",
        text: "待ち時間でもワクワクしてもらえるように、クスッと笑える言葉選びにたくさん工夫を凝らしました！"
      }
    ],

    externalLink:
      "https://kotonoha-karuta.netlify.app/"

  },


  4: {

    className: "4組",

    title: "絵本「だぁれの？」の歌",

    category: "みんなで歌おう",

    color: "#E87B32",
    bgColor: "#FEF6F0",

    description:
      "4組のみんなが作った歌です。\n地域の子どもたちが楽しく歌ってくれるように絵本の世界観そのままにして作りました。５組の「だぁれの？」という絵本の歌です。絵本のQRを読み込んで聞いてみて下さい！",

    howto:
      "音源を聞きながら、一緒に歌ってみてください。",

    photo: null,

    lyrics:
       "歌の歌詞を入力します",
    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "5組の絵本の世界観としっかりリンクするように、メロディの雰囲気を統一させました。"
      },
      {
        role: "student",
        author: "生徒 Aさん",
        text: "小さな子どもでもすぐに口ずさめるような、覚えやすいリズムにこだわって作りました！"
      },
      {
        role: "student",
        author: "生徒 Bくん",
        text: "みんなで何度も歌い直して、一番聴き取りやすいスピードを追求しました。"
      }
    ],

    audioLink: null

  },


  5: {

    className: "5組",

    title: "絵本",

    category: "お話を楽しもう",

    color: "#8064A8",
    bgColor: "#F4F2F8",

    description:
      "5組のみんなが作った絵本です。\n五日市のコイン通りに置いてある十二支の銅像を入れた五日市ならではの絵本を作りました。繰り返し読んでも楽しめる絵本となっています！",

    howto:
      "絵本を見ながら、お話を楽しんでください。",

    photo: "https://raw.githubusercontent.com/suugaku0/itsukaichi-3project/main/Images/3-5.png",

    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "地元の名所や銅像に親しみを持ってもらえるようなストーリー構成に指導しました。"
      },
      {
        role: "student",
        author: "生徒 Aさん",
        text: "コイン通りの銅像を探しながら読めるように、細部までイラストを丁寧に描きました！"
      }
    ]

  },


  6: {

    className: "6組",

    title: "サイエンスグッズ",

    category: "理科を楽しもう",

    color: "#4D83C4",
    bgColor: "#EFF4F9",

    description:
      "6組のみんなが作ったサイエンスグッズです。\nお家でも再現しやすく、アレンジしやすいように、身の回りのものを使ってつくりました。ぜひ、チャレンジしてみてください！",

    howto:
      "ここにサイエンスグッズの使い方を入れます。",

    photo: "https://raw.githubusercontent.com/suugaku0/itsukaichi-3project/main/Images/3-6.png",

    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "安全に配慮しつつ、科学の不思議を直感的に楽しめる工作の仕組みを考えました。"
      },
      {
        role: "student",
        author: "生徒 Aくん",
        text: "おうちにある身近な材料だけで簡単に作れるように、何度も試作品を作って直しました！"
      }
    ]

  },


  7: {

    className: "7組",

    title: "絵本",

    category: "お話を楽しもう",

    color: "#5A9A63",
    bgColor: "#F1F7F2",

    description:
      "7組のみんなが作った絵本です。\n各グループで工夫して絵本を６冊作りました。子どもが興味を持てるようなキャラにしました。たくさん読んでください！",

    howto:
      "絵本を見ながら、お話を楽しんでください。",

    photo: "https://raw.githubusercontent.com/suugaku0/itsukaichi-3project/main/Images/3-7.png",

    points: [
      {
        role: "teacher",
        author: "担任の先生",
        text: "グループごとの個性が光りつつ、子どもたちが夢中になるキャラクター造形をサポートしました。"
      },
      {
        role: "student",
        author: "生徒 Aさん",
        text: "みんなでアイデアを出し合って、続きが気になるような楽しいストーリーに仕上げました！"
      },
      {
        role: "student",
        author: "生徒 Bさん",
        text: "絵のタッチをグループみんなで合わせて、一体感が出るようにこだわりました。"
      }
    ]

  }

};


/* =====================================
   クラスページを開く
===================================== */

function openClass(classNumber) {

  const work = works[classNumber];

  document
    .getElementById("top-page")
    .classList.add("hidden");

  document
    .getElementById("work-page")
    .classList.remove("hidden");


  /* クラスカラー */

  const workPage = document.getElementById("work-page");
  workPage.style.setProperty("--current-color", work.color);
  workPage.style.setProperty("--student-bg", work.bgColor || "#f7fafc");


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


  /* =================================
     制作の工夫（複数人の吹き出しを自動生成）
  ================================= */
  const pointContainer = document.getElementById("work-point-container");
  pointContainer.innerHTML = "";

  if (work.points && work.points.length > 0) {
    work.points.forEach(p => {
      const itemDiv = document.createElement("div");
      
      if (p.role === "teacher") {
        itemDiv.className = "comment-item teacher";
        itemDiv.innerHTML = `
          <div class="comment-author">${p.author}</div>
          <div class="comment-bubble-wrapper">
            <div class="comment-icon">教</div>
            <div class="comment-bubble">${p.text}</div>
          </div>
        `;
      } else {
        itemDiv.className = "comment-item student";
        itemDiv.innerHTML = `
          <div class="comment-author">${p.author}</div>
          <div class="comment-bubble-wrapper">
            <div class="comment-icon">生</div>
            <div class="comment-bubble">${p.text}</div>
          </div>
        `;
      }
      pointContainer.appendChild(itemDiv);
    });
  } else {
    const fallbackDiv = document.createElement("div");
    fallbackDiv.className = "comment-item teacher";
    fallbackDiv.innerHTML = `
      <div class="comment-author">制作の工夫</div>
      <div class="comment-bubble-wrapper">
        <div class="comment-icon">※</div>
        <div class="comment-bubble">${work.point || "準備中"}</div>
      </div>
    `;
    pointContainer.appendChild(fallbackDiv);
  }


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

  }else if([4].includes(Number(classNumber))){
     photoArea.innerHTML = 
        `<div class="lyrics">
           ${work.lyrics}
         </div>
        `;
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

descriptionBox.querySelectorAll(".external-link").forEach(button => button.remove());

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

/*======================================
    トップへ戻るボタンの表示制御
======================================*/
const pageTopBtn = document.getElementById('page-top');

// 1. スクロール位置に応じてボタンを表示/非表示切り替え
window.addEventListener('scroll', () => {
  // 200px以上スクロールしたら 'is-active' クラスを付与
  if (window.scrollY > 200) {
    pageTopBtn.classList.add('is-active');
  } else {
    pageTopBtn.classList.remove('is-active');
  }
});

// 2. ボタンクリック時に最上部へスムーズスクロール
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' /* なめらかにスクロール */
  });
});