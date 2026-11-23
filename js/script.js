document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  /* [сложность 0=лёгкий 1=средний 2=сложный, вопрос, варианты, индекс верного] */
  var SUBJECTS = {
    english: { name: "English", icon: "🇬🇧", desc: "Грамматика и лексика", q: [
      [0,"She ___ a student.",["am","is","are","be"],1],
      [0,"Plural of \"child\"?",["childs","children","childes","childrens"],1],
      [0,"Opposite of \"hot\"?",["cold","warm","big","slow"],0],
      [0,"I ___ breakfast every day.",["have","has","having","haves"],0],
      [0,"Which word is a colour?",["Table","Green","Run","Happy"],1],
      [0,"They ___ playing football now.",["is","am","are","be"],2],
      [0,"___ apple",["a","an","the?","some"],1],
      [0,"Past form of \"go\"?",["goed","went","gone","going"],1],
      [0,"How ___ are you?",["old","years","age","long"],0],
      [0,"He ___ to school every day.",["go","goes","going","gone"],1],
      [1,"If it rains, we ___ at home.",["stay","will stay","stayed","would stay"],1],
      [1,"I have lived here ___ 2015.",["for","since","from","during"],1],
      [1,"She is ___ than her sister.",["tall","taller","tallest","more tall"],1],
      [1,"The book ___ by millions of people.",["read","is read","reads","reading"],1],
      [1,"I'm looking forward ___ you.",["to see","to seeing","seeing","see"],1],
      [1,"There isn't ___ milk in the fridge.",["some","any","many","few"],1],
      [1,"You ___ smoke here. It is forbidden.",["mustn't","don't have to","needn't","shouldn't"],0],
      [1,"Synonym of \"big\"?",["large","tiny","thin","weak"],0],
      [1,"I ___ TV when he called.",["watched","was watching","watch","have watched"],1],
      [1,"Which word is a noun?",["quickly","happiness","beautiful","run"],1],
      [2,"Had I known, I ___ come.",["would","would have","will have","had"],1],
      [2,"She suggested ___ to the cinema.",["to go","going","go","went"],1],
      [2,"By next year, I ___ here for ten years.",["will work","will have been working","work","am working"],1],
      [2,"What does \"break the ice\" mean?",["Start a conversation in an awkward situation","Destroy something frozen","Get very angry","Be very cold"],0],
      [2,"Neither of the students ___ the answer.",["know","knows","are knowing","have known"],1],
      [2,"He is not used ___ early.",["to get up","to getting up","getting up","to get"],1],
      [2,"The meeting was called ___ because of the storm.",["off","out","up","down"],0],
      [2,"I wish I ___ more time.",["have","had","would have","has had"],1],
      [2,"Not only ___ late, but he also forgot the tickets.",["he was","was he","he is","is he"],1],
      [2,"Synonym of \"ubiquitous\"?",["rare","widespread","hidden","ancient"],1]
    ]},
    math: { name: "Математика", icon: "📐", desc: "Арифметика, алгебра, геометрия", q: [
      [0,"7 + 8 = ?",["14","15","16","17"],1],
      [0,"9 × 6 = ?",["45","54","56","63"],1],
      [0,"20 − 13 = ?",["6","7","8","9"],1],
      [0,"48 ÷ 6 = ?",["6","7","8","9"],2],
      [0,"5² = ?",["10","15","25","52"],2],
      [0,"Половина от 90?",["40","45","50","35"],1],
      [0,"100 − 37 = ?",["67","63","73","53"],1],
      [0,"3 × 12 = ?",["32","36","38","42"],1],
      [0,"Какое число самое большое?",["0,5","0,75","0,25","0,6"],1],
      [0,"Сколько минут в 2 часах?",["100","120","90","180"],1],
      [1,"15% от 200 = ?",["20","25","30","35"],2],
      [1,"2x + 5 = 17. Чему равен x?",["5","6","7","8"],1],
      [1,"√144 = ?",["11","12","13","14"],1],
      [1,"Периметр прямоугольника 8 × 5?",["13","26","40","30"],1],
      [1,"3/4 + 1/4 = ?",["1","4/8","1/2","2"],0],
      [1,"Площадь треугольника: основание 10, высота 6?",["60","30","16","40"],1],
      [1,"2³ × 2² = ?",["16","32","64","10"],1],
      [1,"Среднее арифметическое чисел 4, 8, 12?",["6","8","10","12"],1],
      [1,"40% от 50 = ?",["15","20","25","10"],1],
      [1,"x ÷ 3 = 9. Чему равен x?",["3","12","27","18"],2],
      [2,"Корни уравнения x² − 9 = 0?",["только 3","±3","9","±9"],1],
      [2,"Сумма углов шестиугольника?",["540°","720°","900°","1080°"],1],
      [2,"log₁₀ 1000 = ?",["2","3","10","100"],1],
      [2,"2x − 3 = x + 4. Чему равен x?",["1","5","7","9"],2],
      [2,"Вероятность выпадения двух орлов при двух бросках монеты?",["1/2","1/4","1/3","3/4"],1],
      [2,"Производная функции x² ?",["x","2x","x²","2"],1],
      [2,"1 + 2 + 3 + … + 100 = ?",["5000","5050","5100","10100"],1],
      [2,"Площадь круга с радиусом 7 (π ≈ 22/7)?",["44","154","49","308"],1],
      [2,"Расстояние между точками (0;0) и (6;8)?",["14","10","12","8"],1],
      [2,"Сколько диагоналей у восьмиугольника?",["16","20","24","28"],1]
    ]},
    russian: { name: "Русский язык", icon: "📚", desc: "Орфография, грамматика, стили", q: [
      [0,"Выберите правильное написание:",["харошо","хорошо","хорашо","хърошо"],1],
      [0,"Сколько слогов в слове «молоко»?",["2","3","4","1"],1],
      [0,"Какая это часть речи: «красивый»?",["существительное","прилагательное","глагол","наречие"],1],
      [0,"Антоним к слову «добрый»?",["злой","мягкий","милый","весёлый"],0],
      [0,"Выберите правильное написание:",["мыш","мышь","мышъ","мышщ"],1],
      [0,"Сколько букв в русском алфавите?",["31","32","33","34"],2],
      [0,"Синоним к слову «быстро»?",["медленно","скоро","тихо","редко"],1],
      [0,"Множественное число слова «стол»?",["столы","столи","столя","столов-ы"],0],
      [0,"Где правильно написано имя собственное?",["москва","Москва","мОсква","МОсква"],1],
      [0,"Выберите существительное:",["бежать","дом","синий","быстро"],1],
      [1,"Вставьте букву: пр_красный (очень красивый)",["е","и","а","о"],0],
      [1,"«Не» с глаголами обычно пишется:",["слитно","раздельно","через дефис","по-разному"],1],
      [1,"В каком падеже слово «книгу» в предложении «Я читаю книгу»?",["родительный","дательный","винительный","творительный"],2],
      [1,"Выберите правильный вариант: ___ недели мы закончим.",["В течение","В течении","Втечение","В теченье"],0],
      [1,"Где верно расставлены знаки препинания?",["Когда я пришёл, он спал.","Когда я пришёл он спал.","Когда, я пришёл он спал.","Когда я пришёл он, спал."],0],
      [1,"В каком слове есть чередующаяся гласная в корне?",["лес","растение","стол","окно"],1],
      [1,"Определите склонение слова «земля»:",["1-е","2-е","3-е","не склоняется"],0],
      [1,"Фразеологизм «бить баклуши» означает:",["бездельничать","ссориться","работать быстро","играть"],0],
      [1,"Слово «ключ» (от замка и родник) — это:",["синоним","антоним","омоним","архаизм"],2],
      [1,"Притяжательное местоимение 3-го лица мн. числа:",["ихний","их","ихный","ихное"],1],
      [2,"В каком слове пишется НН?",["стеклянный","кожаный","серебряный","ветряной"],0],
      [2,"В каком предложении есть деепричастный оборот?",["Читая книгу, он улыбался.","Он читал книгу, которую взял.","Книга, прочитанная им, интересна.","Он читает и улыбается."],0],
      [2,"Сколько грамматических основ в предложении: «Я знаю, что он придёт, когда закончит работу»?",["2","3","4","1"],1],
      [2,"В каком слове ударение падает на второй слог?",["звонИт","тОрты","кУхонный","бАнты"],0],
      [2,"К какому стилю относится фраза «Настоящим довожу до вашего сведения»?",["научный","публицистический","официально-деловой","разговорный"],2],
      [2,"Какая форма верна: «Согласно ___»?",["приказу","приказа","приказом","приказе"],0],
      [2,"Каким способом образовано слово «самолёт»?",["сложение","приставочный","суффиксальный","переход в другую часть речи"],0],
      [2,"В каком слове все согласные звонкие?",["ржавый","стол","цвет","шаг"],0],
      [2,"В каком предложении нужно поставить тире?",["Москва столица России.","Он был учителем.","Мы идём домой.","Я люблю читать."],0],
      [2,"Какое слово является архаизмом?",["очи","глаза","смартфон","окно"],0]
    ]}
  };
  var DN = ["Лёгкий", "Средний", "Сложный"], LET = ["A", "B", "C", "D"];
  var $ = function (s) { return document.querySelector(s); };
  var el = { home: $("#screen-home"), quiz: $("#screen-quiz"), res: $("#screen-result") };
  var diff = "all", instant = true, st = null, tid = null, revFilter = "all";

  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return (m < 10 ? "0" : "") + m + ":" + (r < 10 ? "0" : "") + r; }
  function show(name) { for (var k in el) el[k].hidden = k !== name; window.scrollTo(0, 0); }

  /* Тема */
  function setTheme(t) { document.documentElement.setAttribute("data-theme", t); $("#btn-theme").textContent = t === "dark" ? "☀️" : "🌙"; store.set("ot-theme", t); }
  var saved = store.get("ot-theme");
  setTheme(saved || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("#btn-theme").addEventListener("click", function () { setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"); });

  /* Главная */
  function renderHome() {
    var best = store.get("ot-best") || {}, h = "";
    Object.keys(SUBJECTS).forEach(function (k) {
      var s = SUBJECTS[k];
      h += '<button class="subj" type="button" data-k="' + k + '"><span class="subj__i">' + s.icon + '</span><span class="subj__n">' + s.name + '</span><span class="subj__d">' + s.desc + " · " + s.q.length + ' вопросов</span><span class="subj__b">' + (best[k] != null ? "Лучший результат: " + best[k] + "%" : "Начать тест →") + "</span></button>";
    });
    $("#subjects").innerHTML = h;
  }
  $("#subjects").addEventListener("click", function (e) { var b = e.target.closest(".subj"); if (b) start(b.getAttribute("data-k")); });
  $("#seg-diff").addEventListener("click", function (e) {
    var b = e.target.closest(".seg__b"); if (!b) return;
    diff = b.getAttribute("data-d");
    [].forEach.call(this.children, function (c) { c.classList.toggle("is-on", c === b); });
  });
  $("#chk-instant").addEventListener("change", function () { instant = this.checked; });

  /* Тест */
  function start(key) {
    var items = SUBJECTS[key].q.filter(function (r) { return diff === "all" || r[0] === +diff; }).map(function (r) {
      return { d: r[0], q: r[1], o: shuffle(r[2].map(function (t, i) { return { t: t, c: i === r[3] }; })), sel: -1 };
    });
    st = { key: key, items: shuffle(items), i: 0, t0: Date.now(), locked: false, time: 0 };
    clearInterval(tid);
    tid = setInterval(function () { $("#timer").textContent = "⏱ " + fmt(Math.floor((Date.now() - st.t0) / 1000)); }, 500);
    $("#timer").textContent = "⏱ 00:00";
    show("quiz"); renderQ();
  }
  function renderQ() {
    var it = st.items[st.i], n = st.items.length;
    st.locked = false;
    $("#q-count").textContent = "Вопрос " + (st.i + 1) + " из " + n;
    $("#bar").style.width = (st.i / n * 100) + "%";
    var b = $("#q-diff"); b.textContent = DN[it.d]; b.className = "badge d" + it.d;
    $("#q-text").textContent = it.q;
    var box = $("#options"); box.className = "opts"; box.innerHTML = "";
    it.o.forEach(function (o, i) {
      var btn = document.createElement("button");
      btn.type = "button"; btn.className = "opt"; btn.setAttribute("role", "radio"); btn.setAttribute("data-i", i);
      btn.innerHTML = '<span class="k">' + LET[i] + "</span><span></span>";
      btn.lastChild.textContent = o.t;
      box.appendChild(btn);
    });
    setHint("");
    $("#btn-next").textContent = st.i === n - 1 ? "Завершить ✓" : "Далее →";
  }
  function setHint(t, err) { var h = $("#hint"); h.textContent = t; h.className = "hint" + (err ? " err" : ""); }
  function pick(i) {
    if (st.locked) return;
    var it = st.items[st.i]; it.sel = i;
    var btns = $("#options").children;
    [].forEach.call(btns, function (b, k) { b.classList.toggle("is-sel", k === i); b.setAttribute("aria-checked", k === i); });
    setHint("");
    if (instant) {
      st.locked = true; $("#options").classList.add("locked");
      [].forEach.call(btns, function (b, k) {
        if (it.o[k].c) b.classList.add("is-ok"); else if (k === i) b.classList.add("is-bad");
        if (k !== i && !it.o[k].c) b.classList.remove("is-sel");
        if (k === i) b.classList.remove("is-sel");
      });
      setHint(it.o[i].c ? "✅ Верно!" : "❌ Неверно. Правильный ответ подсвечен.");
    }
  }
  $("#options").addEventListener("click", function (e) { var b = e.target.closest(".opt"); if (b) pick(+b.getAttribute("data-i")); });
  function next() {
    if (!st || el.quiz.hidden) return;
    if (st.items[st.i].sel < 0) { setHint("Выберите вариант ответа, чтобы продолжить", true); return; }
    if (st.i < st.items.length - 1) { st.i++; renderQ(); } else finish();
  }
  $("#btn-next").addEventListener("click", next);
  $("#btn-exit").addEventListener("click", function () { if (confirm("Выйти из теста? Прогресс будет потерян.")) { clearInterval(tid); show("home"); renderHome(); } });
  document.addEventListener("keydown", function (e) {
    if (el.quiz.hidden) return;
    if (e.key >= "1" && e.key <= "4") { var n = +e.key - 1; if (n < st.items[st.i].o.length) pick(n); }
    else if (e.key === "Enter") { e.preventDefault(); next(); }
  });

  /* Результат */
  function finish() {
    clearInterval(tid);
    st.time = Math.floor((Date.now() - st.t0) / 1000);
    var n = st.items.length, ok = st.items.filter(function (it) { return it.sel >= 0 && it.o[it.sel].c; }).length;
    var pct = Math.round(ok / n * 100);
    var best = store.get("ot-best") || {};
    if (best[st.key] == null || pct > best[st.key]) { best[st.key] = pct; store.set("ot-best", best); }
    var c = pct === 100 ? ["Идеально! 🏆", "Безупречный результат — ни одной ошибки."] : pct >= 80 ? ["Отлично! 🎉", "Очень сильный результат. Совсем немного до идеала."] : pct >= 60 ? ["Хорошо 👍", "Неплохо! Посмотрите разбор ошибок и попробуйте ещё раз."] : pct >= 40 ? ["Нужно подтянуть 📖", "Есть над чем поработать — изучите разбор ниже."] : ["Не сдавайтесь 💪", "Начало положено. Разберите ошибки и пройдите тест снова."];
    $("#r-title").textContent = SUBJECTS[st.key].name + ": " + c[0];
    $("#r-comment").textContent = c[1];
    $("#r-pct").textContent = pct + "%"; $("#r-score").textContent = ok + " / " + n;
    $("#r-ok").textContent = ok; $("#r-bad").textContent = n - ok; $("#r-time").textContent = fmt(st.time);
    show("result");
    var ring = $("#ring"), cur = 0;
    ring.style.setProperty("--p", 0);
    var a = setInterval(function () { cur += 2; if (cur >= pct) { cur = pct; clearInterval(a); } ring.style.setProperty("--p", cur); }, 16);
    revFilter = "all";
    [].forEach.call($("#seg-rev").children, function (b) { b.classList.toggle("is-on", b.getAttribute("data-f") === "all"); });
    renderReview();
  }
  function renderReview() {
    var box = $("#review"); box.innerHTML = "";
    st.items.forEach(function (it, idx) {
      var good = it.sel >= 0 && it.o[it.sel].c;
      if (revFilter === "bad" && good) return;
      var right = it.o.filter(function (o) { return o.c; })[0].t;
      var d = document.createElement("div"); d.className = "rev" + (good ? "" : " bad");
      var h = document.createElement("div"); h.className = "rev__h"; h.innerHTML = "<span>Вопрос " + (idx + 1) + " · " + DN[it.d] + "</span><span>" + (good ? "✅ верно" : "❌ ошибка") + "</span>";
      var q = document.createElement("div"); q.className = "rev__q"; q.textContent = it.q;
      d.appendChild(h); d.appendChild(q);
      if (!good) { var w = document.createElement("div"); w.className = "rev__a no"; w.textContent = "Ваш ответ: " + (it.sel >= 0 ? it.o[it.sel].t : "—"); d.appendChild(w); }
      var r = document.createElement("div"); r.className = "rev__a ok"; r.textContent = "Правильный ответ: " + right; d.appendChild(r);
      box.appendChild(d);
    });
    if (!box.children.length) box.innerHTML = '<div class="rev"><div class="rev__q">Ошибок нет — отличная работа! 🎉</div></div>';
  }
  $("#seg-rev").addEventListener("click", function (e) {
    var b = e.target.closest(".seg__b"); if (!b) return;
    revFilter = b.getAttribute("data-f");
    [].forEach.call(this.children, function (c) { c.classList.toggle("is-on", c === b); });
    renderReview();
  });
  $("#btn-again").addEventListener("click", function () { start(st.key); });
  $("#btn-home").addEventListener("click", function () { show("home"); renderHome(); });

  renderHome();
});
