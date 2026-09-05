// ===============================
// DHEERAJ GK - Website Script
// ===============================

// ---------- Current Affairs ----------
const currentAffairs = [
  {
    category: "राष्ट्रीय",
    title: "भारत की ऊर्जा एवं खाद्य सुरक्षा पर महत्वपूर्ण पहल",
    description: "ऊर्जा, खाद्य सुरक्षा और रणनीतिक नीतियों से जुड़े महत्वपूर्ण अपडेट।",
    points: [
      "भारत की ऊर्जा सुरक्षा को मजबूत करने पर जोर।",
      "खाद्य सुरक्षा और रणनीतिक नीतियों पर विशेष ध्यान।",
      "प्रतियोगी परीक्षाओं के लिए महत्वपूर्ण तथ्य।"
    ]
  },
  {
    category: "विज्ञान एवं प्रौद्योगिकी",
    title: "भारत की अंतरिक्ष एवं तकनीकी उपलब्धियाँ",
    description: "ISRO और भारतीय तकनीकी क्षेत्र से जुड़े महत्वपूर्ण अपडेट।",
    points: [
      "भारतीय अंतरिक्ष कार्यक्रम लगातार नई उपलब्धियाँ हासिल कर रहा है।",
      "उपग्रह एवं प्रक्षेपण मिशन परीक्षा की दृष्टि से महत्वपूर्ण हैं।"
    ]
  },
  {
    category: "अर्थव्यवस्था",
    title: "भारत की अर्थव्यवस्था से जुड़े महत्वपूर्ण अपडेट",
    description: "सरकारी योजनाओं, आर्थिक नीतियों और विकास से जुड़े तथ्य।",
    points: [
      "आर्थिक नीतियों से जुड़े महत्वपूर्ण सरकारी निर्णय।",
      "विकास एवं रोजगार से जुड़े अपडेट।"
    ]
  }
];


// ---------- Daily Quiz ----------
const quizQuestions = [
  {
    question: "भारत का पहला Ramsar स्थल कौन-सा था?",
    options: [
      "चिलिका झील",
      "केवलादेव राष्ट्रीय उद्यान",
      "लोकटक झील",
      "वुलर झील"
    ],
    answer: 0,
    explanation: "चिलिका झील भारत का पहला Ramsar स्थल था।"
  },
  {
    question: "भारत में Ramsar Convention के तहत आर्द्रभूमियों का संरक्षण किससे संबंधित है?",
    options: [
      "वन्यजीव संरक्षण",
      "आर्द्रभूमि संरक्षण",
      "समुद्री सुरक्षा",
      "खनिज संरक्षण"
    ],
    answer: 1,
    explanation: "Ramsar Convention विशेष रूप से अंतरराष्ट्रीय महत्व की आर्द्रभूमियों के संरक्षण और उपयोग से संबंधित है।"
  },
  {
    question: "भारत का अंतरिक्ष कार्यक्रम मुख्य रूप से किस संस्था से जुड़ा है?",
    options: [
      "DRDO",
      "ISRO",
      "CSIR",
      "BARC"
    ],
    answer: 1,
    explanation: "ISRO भारत की प्रमुख अंतरिक्ष अनुसंधान संस्था है।"
  },
  {
    question: "PIB का पूरा नाम क्या है?",
    options: [
      "Press Information Bureau",
      "Public Information Board",
      "Press India Bureau",
      "Public India Bureau"
    ],
    answer: 0,
    explanation: "PIB का पूरा नाम Press Information Bureau है।"
  },
  {
    question: "भारत का राष्ट्रीय पशु कौन-सा है?",
    options: [
      "सिंह",
      "हाथी",
      "बाघ",
      "हिरण"
    ],
    answer: 2,
    explanation: "बाघ भारत का राष्ट्रीय पशु है।"
  }
];


// ---------- DOM Elements ----------
const itemsContainer = document.getElementById("items");
const quizArea = document.getElementById("quizArea");
const progress = document.getElementById("progress");
const searchInput = document.getElementById("search");
const themeBtn = document.getElementById("themeBtn");
const showAllBtn = document.getElementById("showAll");


// ---------- Current Affairs Display ----------
function showCurrentAffairs(data = currentAffairs) {

  if (!itemsContainer) return;

  if (data.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty">
        कोई Current Affairs नहीं मिला।
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = data.map((item) => `
    <article class="item">
      <div class="tag">${item.category}</div>

      <h3>${item.title}</h3>

      <p>${item.description}</p>

      <ul>
        ${item.points.map(point => `<li>${point}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}


// ---------- Quiz ----------
let currentQuestion = 0;
let score = 0;

function showQuiz() {

  if (!quizArea) return;

  if (currentQuestion >= quizQuestions.length) {

    progress.textContent = `${quizQuestions.length} / ${quizQuestions.length}`;

    quizArea.innerHTML = `
      <div class="quiz-result">
        <h2>🎉 Quiz पूरा हुआ!</h2>

        <p>
          आपका स्कोर:
          <strong>${score} / ${quizQuestions.length}</strong>
        </p>

        <button onclick="restartQuiz()" class="quiz-btn">
          फिर से खेलें
        </button>
      </div>
    `;

    return;
  }

  const q = quizQuestions[currentQuestion];

  progress.textContent =
    `${currentQuestion + 1} / ${quizQuestions.length}`;

  quizArea.innerHTML = `
    <div class="quiz-question">

      <h3>${q.question}</h3>

      <div class="options">
        ${q.options.map((option, index) => `
          <button
            class="option"
            onclick="selectAnswer(${index})">
            ${String.fromCharCode(65 + index)}. ${option}
          </button>
        `).join("")}
      </div>

    </div>
  `;
}


// ---------- Answer ----------
function selectAnswer(selected) {

  const q = quizQuestions[currentQuestion];
  const buttons = document.querySelectorAll(".option");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (selected === q.answer) {

    score++;

    buttons[selected].classList.add("correct");

  } else {

    buttons[selected].classList.add("wrong");

    buttons[q.answer].classList.add("correct");
  }

  quizArea.innerHTML += `
    <div class="answer-box">

      <p>
        <strong>
          ${selected === q.answer ? "✅ सही उत्तर!" : "❌ गलत उत्तर!"}
        </strong>
      </p>

      <p>${q.explanation}</p>

      <button onclick="nextQuestion()" class="quiz-btn">
        अगला प्रश्न →
      </button>

    </div>
  `;
}


// ---------- Next Question ----------
function nextQuestion() {
  currentQuestion++;
  showQuiz();
}


// ---------- Restart ----------
function restartQuiz() {

  currentQuestion = 0;
  score = 0;

  showQuiz();
}


// ---------- Search ----------
if (searchInput) {

  searchInput.addEventListener("input", function () {

    const query = this.value.toLowerCase().trim();

    if (!query) {
      showCurrentAffairs();
      return;
    }

    const filtered = currentAffairs.filter(item => {

      const text = `
        ${item.category}
        ${item.title}
        ${item.description}
        ${item.points.join(" ")}
      `.toLowerCase();

      return text.includes(query);
    });

    showCurrentAffairs(filtered);

  });
}


// ---------- Filter Buttons ----------
document.querySelectorAll("[data-filter]").forEach(button => {

  button.addEventListener("click", function () {

    const filter = this.dataset.filter;

    if (filter === "current") {
      showCurrentAffairs();
    }

    else if (filter === "static") {

      itemsContainer.innerHTML = `
        <article class="item">
          <div class="tag">Static GK</div>
          <h3>भारतीय इतिहास के महत्वपूर्ण तथ्य</h3>
          <p>प्राचीन, मध्यकालीन और आधुनिक भारत से जुड़े परीक्षा उपयोगी तथ्य।</p>
        </article>

        <article class="item">
          <div class="tag">भूगोल</div>
          <h3>भारत का भूगोल</h3>
          <p>नदियाँ, पर्वत, झीलें, राज्य और राष्ट्रीय उद्यान से जुड़े महत्वपूर्ण तथ्य।</p>
        </article>
      `;

    }

    else if (filter === "bihar") {

      itemsContainer.innerHTML = `
        <article class="item">
          <div class="tag">बिहार GK</div>
          <h3>बिहार के प्रमुख तथ्य</h3>
          <p>बिहार से जुड़े परीक्षा उपयोगी सामान्य ज्ञान के महत्वपूर्ण तथ्य।</p>
        </article>

        <article class="item">
          <div class="tag">बिहार GK</div>
          <h3>बिहार की प्रमुख नदियाँ</h3>
          <p>गंगा, कोसी, गंडक और बिहार की अन्य महत्वपूर्ण नदियाँ।</p>
        </article>
      `;

    }

    else if (filter === "quiz") {
      showQuiz();
    }

  });

});


// ---------- Show All ----------
if (showAllBtn) {

  showAllBtn.addEventListener("click", function () {
    showCurrentAffairs();
  });

}


// ---------- Theme ----------
if (themeBtn) {

  themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const darkMode =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "dheerajGKDark",
      darkMode ? "1" : "0"
    );

  });

}


// ---------- Load Saved Theme ----------
if (localStorage.getItem("dheerajGKDark") === "1") {
  document.body.classList.add("dark");
}


// ---------- Start Website ----------
showCurrentAffairs();
showQuiz();
