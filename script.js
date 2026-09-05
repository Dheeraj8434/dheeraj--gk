const current=[
["राष्ट्रीय","भारत की ऊर्जा एवं खाद्य सुरक्षा पर महत्वपूर्ण पहल","ऊर्जा, खाद्य सुरक्षा और रणनीतिक नीतियों से जुड़े प्रमुख अपडेट पढ़ें।"],
["विज्ञान","अंतरिक्ष और विज्ञान से जुड़े महत्वपूर्ण तथ्य","परीक्षा के लिए मिशन, उपग्रह और वैज्ञानिक उपलब्धियों के चुनिंदा तथ्य।"],
["बिहार","बिहार से जुड़े महत्वपूर्ण करेंट अफेयर्स","बिहार की योजनाओं, नियुक्तियों और महत्वपूर्ण घटनाओं के अपडेट।"]
];
const staticGK=[
["इतिहास","भारतीय इतिहास के महत्वपूर्ण तथ्य","प्राचीन, मध्यकालीन और आधुनिक भारत से जुड़े बार-बार पूछे जाने वाले तथ्य।"],
["भूगोल","भारत का भूगोल","नदियाँ, पर्वत, झीलें, राज्य और राष्ट्रीय उद्यान के महत्वपूर्ण तथ्य।"]
];
const bihar=[
["बिहार GK","बिहार के प्रमुख तथ्य","राज्य से जुड़े परीक्षा उपयोगी वन-लाइनर और सामान्य ज्ञान।"],
["बिहार GK","प्रमुख नदियाँ और स्थल","गंगा, कोसी, गंडक और बिहार के महत्वपूर्ण भौगोलिक तथ्य।"]
];
let data=[...current,...staticGK,...bihar];
const items=document.getElementById("items");
function render(list=data){items.innerHTML=list.map(x=>`<article class="item"><span class="tag">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")||'<div class="empty">कोई परिणाम नहीं मिला।</div>'}
render();
document.getElementById("date").textContent=new Date().toLocaleDateString("hi-IN",{day:"numeric",month:"short"});
document.getElementById("search").addEventListener("input",e=>{const q=e.target.value.toLowerCase();render(data.filter(x=>x.join(" ").toLowerCase().includes(q)))});
document.querySelectorAll(".card").forEach(b=>b.onclick=()=>{let f=b.dataset.filter;if(f==="current")render(current);else if(f==="static")render(staticGK);else if(f==="bihar")render(bihar);else document.getElementById("quiz").scrollIntoView({behavior:"smooth"});});
document.getElementById("showAll").onclick=()=>render(data);
document.querySelectorAll(".bottomnav button").forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll).scrollIntoView({behavior:"smooth"}));
document.getElementById("themeBtn").onclick=()=>{document.body.classList.toggle("dark");document.getElementById("themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾"};
const quiz=[
["भारत का पहला Ramsar स्थल कौन-सा था?",["चिलिका झील","केवलादेव राष्ट्रीय उद्यान","लोकटक झील","वुलर झील"],0],
["बिहार की राजधानी क्या है?",["गया","पटना","दरभंगा","मुजफ्फरपुर"],1],
["भारत का राष्ट्रीय पशु कौन है?",["सिंह","हाथी","बाघ","गैंडा"],2],
["भारतीय संविधान कब लागू हुआ?",["15 अगस्त 1947","26 नवंबर 1949","26 जनवरी 1950","2 अक्टूबर 1950"],2],
["भारत का सर्वोच्च न्यायालय कहाँ स्थित है?",["मुंबई","नई दिल्ली","कोलकाता","चेन्नई"],1]
];
let qi=0,score=0;
function showQ(){const q=quiz[qi];document.getElementById("progress").textContent=`${qi+1} / ${quiz.length}`;document.getElementById("quizArea").innerHTML=`<div class="qtext">${q[0]}</div>${q[1].map((o,i)=>`<button class="option" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}`;document.querySelectorAll(".option").forEach(x=>x.onclick=()=>answer(+x.dataset.i))}
function answer(i){const q=quiz[qi];document.querySelectorAll(".option").forEach((x,n)=>{x.disabled=true;if(n===q[2])x.classList.add("correct");if(n===i&&i!==q[2])x.classList.add("wrong")});if(i===q[2])score++;document.getElementById("quizArea").insertAdjacentHTML("beforeend",`<button class="next">${qi===quiz.length-1?"परिणाम देखें":"अगला प्रश्न →"}</button>`);document.querySelector(".next").onclick=()=>{if(qi===quiz.length-1){document.getElementById("quizArea").innerHTML=`<div class="qtext">🎉 आपका स्कोर: ${score}/${quiz.length}</div><p style="color:#667085;font-size:13px">फिर से प्रयास करने के लिए नीचे बटन दबाएँ।</p><button class="next" onclick="qi=0;score=0;showQ()">फिर से Quiz दें</button>`}else{qi++;showQ()}}}
showQ();