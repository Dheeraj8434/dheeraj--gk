// ==========================================
// DHEERAJ GK - WEBSITE SCRIPT
// ==========================================


// ==========================================
// 1. CURRENT AFFAIRS
// ==========================================

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
    title: "भारत की अंतरिक्ष एवं तकनीकी उपलब्धियां",
    description: "ISRO और भारतीय तकनीकी क्षेत्र से जुड़े महत्वपूर्ण अपडेट।",
    points: [
      "भारतीय अंतरिक्ष कार्यक्रम लगातार नई उपलब्धियां हासिल कर रहा है।",
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


// ==========================================
// 2. STATIC GK
// ==========================================

const staticGK = [

  {
    category: "इतिहास",
    title: "भारतीय इतिहास के महत्वपूर्ण तथ्य",
    description: "प्राचीन, मध्यकालीन और आधुनिक भारत से जुड़े बार-बार पूछे जाने वाले तथ्य।",
    points: [
      "प्राचीन भारत से जुड़े महत्वपूर्ण तथ्य।",
      "मध्यकालीन भारत से जुड़े महत्वपूर्ण तथ्य।",
      "आधुनिक भारत के महत्वपूर्ण घटनाक्रम।"
    ]
  },

  {
    category: "भूगोल",
    title: "भारत का भूगोल",
    description: "नदियां, पर्वत, झीलें, राज्य और राष्ट्रीय उद्यान।",
    points: [
      "भारत की प्रमुख नदियां।",
      "भारत की प्रमुख पर्वत श्रेणियां।",
      "महत्वपूर्ण झील एवं राष्ट्रीय उद्यान।"
    ]
  }

];


// ==========================================
// 3. BIHAR GK
// ==========================================

const biharGK = [

  {
    category: "बिहार GK",
    title: "बिहार के प्रमुख तथ्य",
    description: "बिहार से जुड़े परीक्षा उपयोगी वन-लाइनर और सामान्य ज्ञान।",
    points: [
      "बिहार की राजधानी पटना है।",
      "बिहार के महत्वपूर्ण ऐतिहासिक स्थल।",
      "बिहार की प्रमुख नदियां।"
    ]
  },

  {
    category: "बिहार GK",
    title: "प्रमुख नदियां और स्थल",
    description: "गंगा, कोसी, गंडक और बिहार के महत्वपूर्ण भौगोलिक तथ्य।",
    points: [
      "गंगा बिहार की प्रमुख नदी है।",
      "कोसी नदी को बिहार का शोक कहा जाता है।",
      "गंडक भी बिहार की महत्वपूर्ण नदी है।"
    ]
  }

];


// ==========================================
// 4. DAILY QUIZ
// ==========================================
//
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// यहां से तुम रोज नए सवाल आसानी से जोड़ सकते हो।
// हर सवाल इसी FORMAT में डालना है।
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

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
    explanation: "चिलिका झील भारत के शुरुआती Ramsar स्थलों में शामिल थी।"
  },


  // 👇 नया सवाल यहां से जोड़ सकते हो

  {
    question: "भारत का राष्ट्रीय पशु कौन-सा है?",
    options: [
      "शेर",
      "बाघ",
      "हाथी",
      "गैंडा"
    ],
    answer: 1,
    explanation: "भारत का राष्ट्रीय पशु बाघ है।"
  },


  {
    question: "भारत का संविधान कब लागू हुआ?",
    options: [
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "26 नवंबर 1949",
      "2 अक्टूबर 1950"
    ],
    answer: 1,
    explanation: "भारतीय संविधान 26 जनवरी 1950 को लागू हुआ।"
  }

];


// ==========================================
// 5. ALL CONTENT
// ==========================================

const allContent = [
  ...currentAffairs,
  ...staticGK,
  ...biharGK
];


// ==========================================
// 6. ELEMENTS
// ==========================================

const items = document.getElementById("items");
const searchInput = document.getElementById("search");
const dateElement = document.getElementById("date");
const quizArea = document.getElementById("quizArea");
const progress = document.getElementById("progress");
const themeBtn = document.getElementById("themeBtn");


// ==========================================
// 7. DATE
// ==========================================

if (dateElement) {
  dateElement.textContent =
    new Date().toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "short"
    });
}


// ==========================================
// 8. SHOW CONTENT
// ==========================================

function renderContent(list) {

  if (!items) return;

  if (list.length === 0) {
    items.innerHTML = `
      <div class="item">
        <h3>कोई जानकारी नहीं मिली</h3>
        <p>कृपया दूसरा विषय या शब्द खोजें।</p>
      </div>
    `;
    return;
  }

  items.innerHTML = list.map((item, index) => {

    const points = item.points
      ? item.points.map(p => `<li>${p}</li>`).join("")
      : "";

    return `
      <article class="item">

        <span class="tag">${item.category}</span>

        <h3>${item.title}</h3>

        <p>${item.description}</p>

        ${
          points
            ? `<ul>${points}</ul>`
            : ""
        }

        <button
          class="saveBtn"
          data-index="${index}">
          ⭐ Save
        </button>

      </article>
    `;

  }).join("");

  addSaveEvents();
}


// ==========================================
// 9. SAVE SYSTEM
// ==========================================

function addSaveEvents() {

  document.querySelectorAll(".saveBtn").forEach(button => {

    button.addEventListener("click", function () {

      const index = Number(this.dataset.index);

      const saved = JSON.parse(
        localStorage.getItem("dheerajGK_saved") || "[]"
      );

      const article = this.closest(".item");

      const title =
        article.querySelector("h3")?.textContent || "";

      const description =
        article.querySelector("p")?.textContent || "";

      const exists =
        saved.some(x => x.title === title);

      if (!exists) {

        saved.push({
          title,
          description
        });

        localStorage.setItem(
          "dheerajGK_saved",
          JSON.stringify(saved)
        );

        this.textContent = "✅ Saved";

      } else {

        this.textContent = "✅ पहले से Saved";

      }

    });

  });

}


// ==========================================
// 10. CATEGORY BUTTONS
// ==========================================

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("click", function () {

    const filter = this.dataset.filter;

    if (filter === "current") {

      renderContent(currentAffairs);

    }

    else if (filter === "static") {

      renderContent(staticGK);

    }

    else if (filter === "bihar") {

      renderContent(biharGK);

    }

    else if (filter === "quiz") {

      showQuiz();

    }

    document
      .getElementById("content")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  });

});


// ==========================================
// 11. SHOW ALL CURRENT AFFAIRS
// ==========================================

const showAll =
  document.getElementById("showAll");

if (showAll) {

  showAll.addEventListener("click", function () {

    renderContent(currentAffairs);

    document
      .getElementById("content")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  });

}


// ==========================================
// 12. SEARCH
// ==========================================

if (searchInput) {

  searchInput.addEventListener("input", function () {

    const text =
      this.value.trim().toLowerCase();

    if (!text) {

      renderContent(allContent);
      return;

    }

    const result = allContent.filter(item => {

      return (
        item.title.toLowerCase().includes(text) ||
        item.description.toLowerCase().includes(text) ||
        item.category.toLowerCase().includes(text) ||
        item.points.some(p =>
          p.toLowerCase().includes(text)
        )
      );

    });

    renderContent(result);

  });

}


// ==========================================
// 13. QUIZ SYSTEM
// ==========================================

let quizIndex = 0;
let quizScore = 0;


function showQuiz() {

  if (!quizArea) return;

  if (quizQuestions.length === 0) {

    quizArea.innerHTML = `
      <h3>अभी कोई Quiz उपलब्ध नहीं है।</h3>
    `;

    return;
  }

  const q = quizQuestions[quizIndex];

  if (progress) {

    progress.textContent =
      `${quizIndex + 1} / ${quizQuestions.length}`;

  }

  quizArea.innerHTML = `

    <div class="quiz-question">

      <h3>${q.question}</h3>

      <div class="quiz-options">

        ${q.options.map((option, index) => `
          
          <button
            class="option"
            data-answer="${index}">
            ${String.fromCharCode(65 + index)}. ${option}
          </button>

        `).join("")}

      </div>

      <div id="quizResult"></div>

    </div>

  `;


  document
    .querySelectorAll(".option")
    .forEach(option => {

      option.addEventListener("click", function () {

        answerQuiz(
          Number(this.dataset.answer)
        );

      });

    });

}


// ==========================================
// 14. ANSWER QUIZ
// ==========================================

function answerQuiz(selected) {

  const q = quizQuestions[quizIndex];

  const buttons =
    document.querySelectorAll(".option");

  buttons.forEach(button => {
    button.disabled = true;
  });


  if (selected === q.answer) {

    quizScore++;

  }


  const result =
    document.getElementById("quizResult");

  if (result) {

    result.innerHTML = `

      <div class="quiz-result">

        <strong>
          ${
            selected === q.answer
              ? "🎉 सही उत्तर!"
              : "❌ गलत उत्तर"
          }
        </strong>

        <p>
          <b>सही उत्तर:</b>
          ${q.options[q.answer]}
        </p>

        <p>
          ${q.explanation || ""}
        </p>

        <button
          id="nextQuestion"
          class="nextBtn">
          ${
            quizIndex === quizQuestions.length - 1
              ? "🏆 Quiz समाप्त करें"
              : "➡️ अगला सवाल"
          }
        </button>

      </div>

    `;


    document
      .getElementById("nextQuestion")
      ?.addEventListener("click", function () {

        if (
          quizIndex ===
          quizQuestions.length - 1
        ) {

          quizArea.innerHTML = `

            <div class="quiz-result">

              <h3>🏆 Quiz पूरा हुआ!</h3>

              <p>
                आपका स्कोर:
                <b>${quizScore} / ${quizQuestions.length}</b>
              </p>

              <button
                id="restartQuiz"
                class="nextBtn">
                🔄 फिर से शुरू करें
              </button>

            </div>

          `;


          document
            .getElementById("restartQuiz")
            ?.addEventListener("click", restartQuiz);

        }

        else {

          quizIndex++;
          showQuiz();

        }

      });

  }

}


// ==========================================
// 15. RESTART QUIZ
// ==========================================

function restartQuiz() {

  quizIndex = 0;
  quizScore = 0;

  showQuiz();

}


// ==========================================
// 16. BOTTOM NAVIGATION
// ==========================================

document
  .querySelectorAll(".bottomnav button")
  .forEach(button => {

    button.addEventListener("click", function () {

      const target =
        this.dataset.scroll;

      if (target === "top") {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }

      else if (target === "content") {

        document
          .getElementById("content")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      }

      else if (target === "quiz") {

        showQuiz();

        document
          .getElementById("quiz")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      }

      else if (target === "saved") {

        showSaved();

        document
          .getElementById("content")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      }

    });

  });


// ==========================================
// 17. SAVED CONTENT
// ==========================================

function showSaved() {

  if (!items) return;

  const saved =
    JSON.parse(
      localStorage.getItem("dheerajGK_saved") || "[]"
    );


  if (saved.length === 0) {

    items.innerHTML = `
      <article class="item">
        <h3>⭐ अभी कुछ Saved नहीं है</h3>
        <p>
          किसी Current Affairs को Save करने के लिए
          ⭐ Save बटन दबाएं।
        </p>
      </article>
    `;

    return;

  }


  items.innerHTML = saved.map(item => `

    <article class="item">

      <span class="tag">Saved</span>

      <h3>${item.title}</h3>

      <p>${item.description}</p>

    </article>

  `).join("");

}


// ==========================================
// 18. DARK MODE
// ==========================================

if (themeBtn) {

  themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    localStorage.setItem(
      "dheerajGK_dark",
      document.body.classList.contains("dark")
    );

  });

}


if (
  localStorage.getItem("dheerajGK_dark") === "true"
) {

  document.body.classList.add("dark");

}


// ==========================================
// 19. DEFAULT CONTENT
// ==========================================

renderContent(currentAffairs);


// ==========================================
// 20. FIRST QUIZ LOAD
// ==========================================

showQuiz();
