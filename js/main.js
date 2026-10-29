/* ============================================================
   Mictlán Digital · lógica de la ofrenda
   ============================================================ */

(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const data = window.DDM || {
    games: [],
    software: [],
    ofrenda: [],
    calaveritas: [],
    trivia: []
  };

  /* ----------------------------------------------------------
     Header + menú móvil
     ---------------------------------------------------------- */
  const header = $("#site-header");
  const menuBtn = $("#menu-btn");
  const navLinks = $("#nav-links");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");
  };

  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.classList.contains("open")) return;
    if (!e.target.closest(".nav") && !e.target.closest("#menu-btn")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ----------------------------------------------------------
     Enlace activo según la sección visible
     ---------------------------------------------------------- */
  const sections = $$("main section[id]");
  const navAnchors = $$("#nav-links a");

  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => navObserver.observe(section));
  }

  /* ----------------------------------------------------------
     Animaciones de aparición
     ---------------------------------------------------------- */
  function initReveal() {
    $$(".stagger").forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        child.style.transitionDelay = `${Math.min(i * 55, 440)}ms`;
      });
    });

    const elements = $$(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ----------------------------------------------------------
     Ofrenda interactiva
     ---------------------------------------------------------- */
  function renderOfrenda() {
    const grid = $("#ofrenda-grid");
    if (!grid) return;

    grid.innerHTML = data.ofrenda
      .map(
        (item) => `
        <button class="ofrenda-item reveal" type="button" aria-expanded="false" data-item="${item.id}">
          <span class="plus" aria-hidden="true">+</span>
          <span class="emoji" aria-hidden="true">${item.emoji}</span>
          <span class="item-title">${item.name}</span>
          <span class="tech">${item.tech}</span>
          <span class="item-detail"><span class="detail-text">${item.detail}</span></span>
        </button>`
      )
      .join("");

    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".ofrenda-item");
      if (!card) return;
      const wasOpen = card.getAttribute("aria-expanded") === "true";
      $$(".ofrenda-item", grid).forEach((item) => item.setAttribute("aria-expanded", "false"));
      if (!wasOpen) card.setAttribute("aria-expanded", "true");
    });
  }

  /* ----------------------------------------------------------
     Panteón de videojuegos
     ---------------------------------------------------------- */
  function renderGames() {
    const grid = $("#games-grid");
    if (!grid) return;

    grid.innerHTML = data.games
      .map(
        (game) => `
        <button class="tumba reveal" type="button" data-id="${game.id}" data-tags="${game.tags.join(" ")}" aria-label="Ver la historia de ${game.name}">
          <span class="years">${game.years}</span>
          <span class="icon" aria-hidden="true">${game.icon}</span>
          <span class="tumba-title">${game.name}</span>
          <span class="epitafio">“${game.epitaph}”</span>
          <span class="tag">${game.platform}</span>
        </button>`
      )
      .join("");
  }

  function initFilters() {
    const buttons = $$(".filtro");
    const emptyMsg = $("#games-empty");
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("active", active);
          b.setAttribute("aria-pressed", String(active));
        });

        const filter = btn.dataset.filter;
        let visible = 0;

        $$(".tumba").forEach((card) => {
          const show = filter === "todas" || card.dataset.tags.split(" ").includes(filter);
          card.classList.toggle("is-hidden", !show);
          if (show) visible++;
        });

        if (emptyMsg) emptyMsg.hidden = visible !== 0;
      });
    });
  }

  function openGame(id) {
    const game = data.games.find((g) => g.id === id);
    const dialog = $("#game-modal");
    const content = $("#modal-content");
    if (!game || !dialog || !content) return;

    content.innerHTML = `
      <div class="modal-head">
        <button class="modal-close" id="modal-close" type="button" aria-label="Cerrar">✕</button>
        <span class="icon" aria-hidden="true">${game.icon}</span>
        <h3 id="modal-title">${game.name}</h3>
        <span class="modal-years">${game.years} · ${game.platform}</span>
      </div>
      <div class="modal-body">
        <dl class="modal-meta">
          <div><dt>Nacimiento</dt><dd>${game.born}</dd></div>
          <div><dt>Último día</dt><dd>${game.died}</dd></div>
          <div><dt>Causa</dt><dd>${game.cause}</dd></div>
        </dl>
        <p class="desc">${game.desc}</p>
        <p class="modal-epitafio">“${game.epitaph}”</p>
      </div>`;

    document.body.classList.add("no-scroll");
    dialog.showModal();

    $("#modal-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener(
      "close",
      () => document.body.classList.remove("no-scroll"),
      { once: true }
    );
  }

  function initModal() {
    const dialog = $("#game-modal");
    const grid = $("#games-grid");
    if (!dialog || !grid) return;

    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".tumba");
      if (card) openGame(card.dataset.id);
    });

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  /* ----------------------------------------------------------
     Muro de software difunto
     ---------------------------------------------------------- */
  function renderSoftware() {
    const grid = $("#software-grid");
    if (!grid) return;

    grid.innerHTML = data.software
      .map(
        (item) => `
        <article class="nicho reveal">
          <span class="icon" aria-hidden="true">${item.icon}</span>
          <h3>${item.name}</h3>
          <span class="years">${item.years}</span>
          <span class="causa">${item.cause}</span>
        </article>`
      )
      .join("");
  }

  /* ----------------------------------------------------------
     Calaveritas
     ---------------------------------------------------------- */
  function initCalaverita() {
    const btn = $("#btn-calaverita");
    const titleEl = $("#verse-title");
    const linesEl = $("#verse-lines");
    const numEl = $("#verse-num");
    if (!btn || !titleEl || !linesEl || !data.calaveritas.length) return;

    let last = -1;

    const render = () => {
      let index = Math.floor(Math.random() * data.calaveritas.length);
      if (data.calaveritas.length > 1) {
        while (index === last) index = Math.floor(Math.random() * data.calaveritas.length);
      }
      last = index;

      const calaverita = data.calaveritas[index];
      titleEl.textContent = calaverita.title;
      linesEl.innerHTML = calaverita.lines
        .map(
          (line, i) =>
            `<p class="verso" style="animation-delay:${i * 80}ms">${line}</p>`
        )
        .join("");
      numEl.textContent = `Calaverita ${String(index + 1).padStart(2, "0")} / ${String(
        data.calaveritas.length
      ).padStart(2, "0")}`;
    };

    btn.addEventListener("click", render);
    render();
  }

  /* ----------------------------------------------------------
     Trivia
     ---------------------------------------------------------- */
  function initTrivia() {
    const total = data.trivia.length;
    const questionEl = $("#trivia-question");
    const optionsEl = $("#trivia-options");
    const feedbackEl = $("#trivia-feedback");
    const nextBtn = $("#trivia-next");
    const progressEl = $("#trivia-progress");
    const scoreEl = $("#trivia-score");
    const barEl = $("#trivia-bar-fill");
    if (!total || !questionEl || !optionsEl) return;

    let index = 0;
    let score = 0;
    let answered = false;
    let finished = false;

    const render = () => {
      const question = data.trivia[index];
      answered = false;
      finished = false;

      questionEl.textContent = question.q;
      progressEl.textContent = `Pregunta ${index + 1} de ${total}`;
      scoreEl.textContent = String(score);
      barEl.style.width = `${((index + 1) / total) * 100}%`;
      feedbackEl.innerHTML = "";
      nextBtn.hidden = true;
      nextBtn.textContent = "Siguiente";

      optionsEl.innerHTML = question.options
        .map(
          (option, i) => `
          <button class="option" type="button" data-index="${i}">
            <span class="letter">${String.fromCharCode(65 + i)}</span>
            <span>${option}</span>
          </button>`
        )
        .join("");
    };

    optionsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".option");
      if (!btn || answered || finished) return;

      answered = true;
      const chosen = Number(btn.dataset.index);
      const question = data.trivia[index];
      const correct = chosen === question.answer;

      $$(".option", optionsEl).forEach((option, i) => {
        option.disabled = true;
        if (i === question.answer) option.classList.add("correct");
        else if (i === chosen) option.classList.add("wrong");
        else option.classList.add("dim");
      });

      if (correct) {
        score++;
        scoreEl.textContent = String(score);
      }

      feedbackEl.innerHTML = `<strong>${correct ? "¡Correcto!" : "Casi…"}</strong> ${question.explain}`;
      nextBtn.hidden = false;
      nextBtn.textContent = index === total - 1 ? "Ver resultado" : "Siguiente";
    });

    nextBtn.addEventListener("click", () => {
      if (finished) {
        index = 0;
        score = 0;
        render();
        return;
      }

      if (index < total - 1) {
        index++;
        render();
        return;
      }

      finished = true;
      answered = true;

      const title =
        score === total
          ? "¡Ofrenda perfecta!"
          : score >= Math.ceil(total / 2)
            ? "La Catrina aprueba tu memoria"
            : "El Mictlán guarda tus recuerdos";

      questionEl.textContent = title;
      optionsEl.innerHTML = "";
      feedbackEl.innerHTML = `Acertaste <strong>${score} de ${total}</strong>. ${
        score === total
          ? "Conoces a todos los difuntos digitales."
          : "Aún quedan almas por recordar: vuelve a intentarlo."
      }`;
      progressEl.textContent = "Trivia completada";
      barEl.style.width = "100%";
      nextBtn.textContent = "Jugar otra vez";
      nextBtn.hidden = false;
    });

    render();
  }

  /* ----------------------------------------------------------
     Cuenta regresiva al 2 de noviembre
     ---------------------------------------------------------- */
  function initCountdown() {
    const el = $("#countdown");
    if (!el) return;

    const pad = (value) => String(value).padStart(2, "0");

    const update = () => {
      const now = new Date();
      const year = now.getFullYear();

      if (now.getMonth() === 10 && now.getDate() === 2) {
        el.innerHTML = "<strong>Hoy es Día de Muertos</strong> · la ofrenda está completa";
        return;
      }

      let target = new Date(year, 10, 2, 0, 0, 0);
      if (now >= target) target = new Date(year + 1, 10, 2, 0, 0, 0);

      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor(diff / 3600000) % 24;
      const minutes = Math.floor(diff / 60000) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      el.innerHTML = `<strong>${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s</strong> para el 2 de noviembre`;
    };

    update();
    window.setInterval(update, 1000);
  }

  /* ----------------------------------------------------------
     Pétalos de cempasúchil en canvas
     ---------------------------------------------------------- */
  function initPetals() {
    const canvas = $("#petalos");
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext("2d");
    const colors = ["#ff8a1f", "#ffc93c", "#ff3d81", "#ffb020", "#ff5a1f"];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let petals = [];
    let frame = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const make = () => {
      const count = width < 640 ? 20 : 42;
      petals = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 2 + Math.random() * 4,
        speed: 0.2 + Math.random() * 0.8,
        drift: 0.3 + Math.random() * 1.1,
        phase: Math.random() * Math.PI * 2,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        alpha: 0.2 + Math.random() * 0.45,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    };

    const paint = (time, animate) => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        if (animate) {
          p.y += p.speed;
          p.x += Math.sin(time * 0.0008 + p.phase) * p.drift * 0.35;
          p.angle += p.spin;
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r * 1.7, p.r, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      ctx.globalAlpha = 1;
      if (animate) frame = requestAnimationFrame(draw);
    };

    const draw = (time) => paint(time, true);

    resize();
    make();

    if (reduceMotion) {
      paint(0, false);
    } else {
      frame = requestAnimationFrame(draw);
    }

    window.addEventListener(
      "resize",
      () => {
        resize();
        make();
        if (reduceMotion) paint(0, false);
      },
      { passive: true }
    );

    document.addEventListener("visibilitychange", () => {
      if (reduceMotion) return;
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!frame) {
        frame = requestAnimationFrame(draw);
      }
    });
  }

  /* ----------------------------------------------------------
     Arranque
     ---------------------------------------------------------- */
  renderOfrenda();
  renderGames();
  renderSoftware();
  initFilters();
  initModal();
  initCalaverita();
  initTrivia();
  initCountdown();
  initPetals();
  initReveal();

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
