const STORAGE_KEY = "nurie-daily-v1";
const today = new Date();
const isoToday = toISODate(today);

const colors = [
  { name: "すみれ", value: "#8b668f", unlock: 0 },
  { name: "若葉", value: "#78a867", unlock: 0 },
  { name: "珊瑚", value: "#e88772", unlock: 0 },
  { name: "空", value: "#6d9cc8", unlock: 0 },
  { name: "蜂蜜", value: "#e8bd5b", unlock: 0 },
  { name: "あずき", value: "#9b4d58", unlock: 2 },
  { name: "湖", value: "#3f7f8c", unlock: 5 },
  { name: "夜明け", value: "#f2a65e", unlock: 7 }
];

const scenes = {
  easy: [
    { id: "sun", shape: "circle", attrs: { cx: 540, cy: 154, r: 54 } },
    { id: "hillLeft", shape: "path", attrs: { d: "M61 514 C176 402 288 406 395 518 L395 642 L61 642 Z" } },
    { id: "hillRight", shape: "path", attrs: { d: "M318 521 C438 404 562 394 659 512 L659 642 L318 642 Z" } },
    { id: "treeTop", shape: "path", attrs: { d: "M162 274 C120 280 95 319 103 358 C64 373 58 430 97 456 C92 501 146 531 184 504 C222 536 279 504 274 457 C315 428 304 370 262 358 C267 313 222 274 181 291 C176 281 170 276 162 274 Z" } },
    { id: "treeTrunk", shape: "path", attrs: { d: "M168 456 C174 489 170 536 154 584 L223 584 C208 535 205 494 213 456 Z" } },
    { id: "petalTop", shape: "path", attrs: { d: "M454 333 C482 360 486 386 454 422 C422 386 426 360 454 333 Z" } },
    { id: "petalRight", shape: "path", attrs: { d: "M543 422 C516 450 490 454 454 422 C490 390 516 394 543 422 Z" } },
    { id: "petalBottom", shape: "path", attrs: { d: "M454 511 C426 484 422 458 454 422 C486 458 482 484 454 511 Z" } },
    { id: "petalLeft", shape: "path", attrs: { d: "M365 422 C392 394 418 390 454 422 C418 454 392 450 365 422 Z" } },
    { id: "flowerCenter", shape: "circle", attrs: { cx: 454, cy: 422, r: 32 } }
  ],
  normal: [
    { id: "sun", shape: "circle", attrs: { cx: 540, cy: 154, r: 54 } },
    { id: "cloud", shape: "path", attrs: { d: "M198 164 C207 129 247 111 280 128 C298 100 342 107 354 141 C389 140 414 165 409 199 L189 199 C169 190 173 169 198 164 Z" } },
    { id: "hillLeft", shape: "path", attrs: { d: "M61 514 C176 402 288 406 395 518 L395 642 L61 642 Z" } },
    { id: "hillRight", shape: "path", attrs: { d: "M318 521 C438 404 562 394 659 512 L659 642 L318 642 Z" } },
    { id: "treeTop", shape: "path", attrs: { d: "M162 274 C120 280 95 319 103 358 C64 373 58 430 97 456 C92 501 146 531 184 504 C222 536 279 504 274 457 C315 428 304 370 262 358 C267 313 222 274 181 291 C176 281 170 276 162 274 Z" } },
    { id: "treeTrunk", shape: "path", attrs: { d: "M168 456 C174 489 170 536 154 584 L223 584 C208 535 205 494 213 456 Z" } },
    { id: "petalTop", shape: "path", attrs: { d: "M454 333 C482 360 486 386 454 422 C422 386 426 360 454 333 Z" } },
    { id: "petalRight", shape: "path", attrs: { d: "M543 422 C516 450 490 454 454 422 C490 390 516 394 543 422 Z" } },
    { id: "petalBottom", shape: "path", attrs: { d: "M454 511 C426 484 422 458 454 422 C486 458 482 484 454 511 Z" } },
    { id: "petalLeft", shape: "path", attrs: { d: "M365 422 C392 394 418 390 454 422 C418 454 392 450 365 422 Z" } },
    { id: "flowerCenter", shape: "circle", attrs: { cx: 454, cy: 422, r: 32 } },
    { id: "pond", shape: "path", attrs: { d: "M403 576 C467 527 574 532 619 585 C578 639 458 641 403 576 Z" } }
  ],
  slow: [
    { id: "sun", shape: "circle", attrs: { cx: 540, cy: 154, r: 54 } },
    { id: "cloud", shape: "path", attrs: { d: "M198 164 C207 129 247 111 280 128 C298 100 342 107 354 141 C389 140 414 165 409 199 L189 199 C169 190 173 169 198 164 Z" } },
    { id: "hillLeft", shape: "path", attrs: { d: "M61 514 C176 402 288 406 395 518 L395 642 L61 642 Z" } },
    { id: "hillRight", shape: "path", attrs: { d: "M318 521 C438 404 562 394 659 512 L659 642 L318 642 Z" } },
    { id: "treeTop", shape: "path", attrs: { d: "M162 274 C120 280 95 319 103 358 C64 373 58 430 97 456 C92 501 146 531 184 504 C222 536 279 504 274 457 C315 428 304 370 262 358 C267 313 222 274 181 291 C176 281 170 276 162 274 Z" } },
    { id: "treeTrunk", shape: "path", attrs: { d: "M168 456 C174 489 170 536 154 584 L223 584 C208 535 205 494 213 456 Z" } },
    { id: "petalTop", shape: "path", attrs: { d: "M454 333 C482 360 486 386 454 422 C422 386 426 360 454 333 Z" } },
    { id: "petalRight", shape: "path", attrs: { d: "M543 422 C516 450 490 454 454 422 C490 390 516 394 543 422 Z" } },
    { id: "petalBottom", shape: "path", attrs: { d: "M454 511 C426 484 422 458 454 422 C486 458 482 484 454 511 Z" } },
    { id: "petalLeft", shape: "path", attrs: { d: "M365 422 C392 394 418 390 454 422 C418 454 392 450 365 422 Z" } },
    { id: "flowerCenter", shape: "circle", attrs: { cx: 454, cy: 422, r: 32 } },
    { id: "pond", shape: "path", attrs: { d: "M403 576 C467 527 574 532 619 585 C578 639 458 641 403 576 Z" } },
    { id: "bridge", shape: "path", attrs: { d: "M392 555 C458 507 556 510 626 558 L607 591 C548 556 463 554 409 590 Z" } },
    { id: "bird", shape: "path", attrs: { d: "M470 236 C496 211 524 216 542 246 C516 241 494 247 470 236 Z M542 246 C565 219 594 221 614 248 C589 246 567 252 542 246 Z" } }
  ]
};

const state = loadState();
let selectedColor = colors[0].value;
let currentDifficulty = state.lastDifficulty || "easy";
let history = [];

const sceneLayer = document.querySelector("#sceneLayer");
const paletteEl = document.querySelector("#palette");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const toast = document.querySelector("#toast");

init();

function init() {
  document.querySelector("#todayLabel").textContent = formatDate(today);
  document.querySelector("#monthLabel").textContent = `${today.getFullYear()} / ${today.getMonth() + 1}`;
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.difficulty === currentDifficulty);
    button.addEventListener("click", () => setDifficulty(button.dataset.difficulty));
  });
  document.querySelector("#undoButton").addEventListener("click", undo);
  document.querySelector("#clearButton").addEventListener("click", clearToday);
  renderPalette();
  renderScene();
  renderCalendar();
  renderRewards();
  renderGarden();
}

function renderScene() {
  sceneLayer.textContent = "";
  const filled = getTodayEntry().fills[currentDifficulty] || {};
  scenes[currentDifficulty].forEach((region) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", region.shape);
    Object.entries(region.attrs).forEach(([key, value]) => el.setAttribute(key, value));
    el.dataset.region = region.id;
    el.classList.add("paint-region");
    el.setAttribute("tabindex", "0");
    el.setAttribute("fill", filled[region.id] || "#fffdf8");
    el.addEventListener("click", () => paint(region.id, el));
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        paint(region.id, el);
      }
    });
    sceneLayer.appendChild(el);
  });

  addLines();
  updateProgress();
}

function addLines() {
  const lines = [
    ["path", { d: "M109 421 C139 450 169 464 212 456 C241 449 263 431 276 404" }, "detail-line"],
    ["path", { d: "M160 502 C179 486 195 487 214 505" }, "detail-line"],
    ["path", { d: "M438 586 C480 604 540 607 594 585" }, "detail-line"],
    ["path", { d: "M69 642 L657 642" }, "line-art"]
  ];

  if (currentDifficulty !== "easy") {
    lines.push(["path", { d: "M215 181 C246 170 274 171 305 184 M317 181 C342 170 369 173 390 190" }, "detail-line"]);
  }

  lines.forEach(([shape, attrs, className]) => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", shape);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    el.classList.add(className);
    sceneLayer.appendChild(el);
  });
}

function renderPalette() {
  paletteEl.textContent = "";
  const completed = getCompletedCount();
  colors.forEach((color) => {
    const button = document.createElement("button");
    button.className = "swatch";
    button.style.setProperty("--swatch", color.value);
    button.setAttribute("aria-label", color.name);
    button.title = color.unlock > completed ? `${color.unlock}日完成で解放` : color.name;
    button.classList.toggle("is-selected", selectedColor === color.value);
    button.classList.toggle("is-locked", color.unlock > completed);
    button.addEventListener("click", () => {
      if (color.unlock > completed) {
        showToast(`${color.name}は${color.unlock}日完成で解放`);
        return;
      }
      selectedColor = color.value;
      renderPalette();
    });
    paletteEl.appendChild(button);
  });
}

function paint(regionId, element) {
  const entry = getTodayEntry();
  entry.fills[currentDifficulty] = entry.fills[currentDifficulty] || {};
  const previous = entry.fills[currentDifficulty][regionId] || "";
  if (previous === selectedColor) return;
  history.push({ regionId, previous, difficulty: currentDifficulty });
  entry.fills[currentDifficulty][regionId] = selectedColor;
  element.setAttribute("fill", selectedColor);
  saveState();
  updateProgress();
}

function undo() {
  const last = history.pop();
  if (!last) return;
  const entry = getTodayEntry();
  entry.fills[last.difficulty] = entry.fills[last.difficulty] || {};
  if (last.previous) {
    entry.fills[last.difficulty][last.regionId] = last.previous;
  } else {
    delete entry.fills[last.difficulty][last.regionId];
  }
  saveState();
  renderScene();
}

function clearToday() {
  getTodayEntry().fills[currentDifficulty] = {};
  history = [];
  saveState();
  renderScene();
}

function setDifficulty(difficulty) {
  currentDifficulty = difficulty;
  state.lastDifficulty = difficulty;
  history = [];
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.difficulty === difficulty);
  });
  saveState();
  renderScene();
}

function updateProgress() {
  const entry = getTodayEntry();
  const filled = entry.fills[currentDifficulty] || {};
  const total = scenes[currentDifficulty].length;
  const completed = Object.keys(filled).length;
  const percent = Math.round((completed / total) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;

  if (completed === total && !entry.completed) {
    entry.completed = true;
    entry.completedAt = new Date().toISOString();
    saveState();
    showToast("今日の一枚が完成しました");
    renderCalendar();
    renderRewards();
    renderGarden();
    renderPalette();
  }
}

function renderCalendar() {
  const grid = document.querySelector("#calendarGrid");
  grid.textContent = "";
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  for (let i = 0; i < first.getDay(); i += 1) {
    const empty = document.createElement("div");
    empty.className = "day-cell is-empty";
    grid.appendChild(empty);
  }

  for (let day = 1; day <= last.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const key = toISODate(date);
    const cell = document.createElement("div");
    cell.className = "day-cell";
    cell.textContent = String(day);
    cell.classList.toggle("is-today", key === isoToday);
    cell.classList.toggle("is-done", Boolean(state.days[key]?.completed));
    grid.appendChild(cell);
  }

  document.querySelector("#streakCount").textContent = String(getStreak());
}

function renderRewards() {
  const completed = getCompletedCount();
  const next = colors.find((color) => color.unlock > completed);
  const title = document.querySelector("#rewardTitle");
  const text = document.querySelector("#rewardText");
  if (next) {
    title.textContent = `${next.name}まであと${next.unlock - completed}枚`;
    text.textContent = "完成した絵はカレンダーに残り、庭の景色とパレットが少しずつ増えていきます。";
  } else {
    title.textContent = "すべての色が開きました";
    text.textContent = "明日は別の配色で、同じ庭をまったく違う雰囲気にできます。";
  }
}

function renderGarden() {
  const completed = getCompletedCount();
  let unlocked = 0;
  document.querySelectorAll(".garden-item").forEach((item) => {
    const isUnlocked = Number(item.dataset.unlock) <= completed;
    item.classList.toggle("is-unlocked", isUnlocked);
    if (isUnlocked) unlocked += 1;
  });
  document.querySelector("#galleryCount").textContent = `${unlocked} / 5`;
}

function getTodayEntry() {
  state.days[isoToday] = state.days[isoToday] || { fills: {}, completed: false };
  state.days[isoToday].fills = state.days[isoToday].fills || {};
  return state.days[isoToday];
}

function getCompletedCount() {
  return Object.values(state.days).filter((day) => day.completed).length;
}

function getStreak() {
  let streak = 0;
  const cursor = new Date(today);
  while (state.days[toISODate(cursor)]?.completed) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { days: {}, lastDifficulty: "easy" };
    const parsed = JSON.parse(raw);
    return { days: parsed.days || {}, lastDifficulty: parsed.lastDifficulty || "easy" };
  } catch {
    return { days: {}, lastDifficulty: "easy" };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(date);
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
