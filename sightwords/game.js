const WORDS = ["and", "they", "that", "I", "he", "at", "are", "be", "as", "this", "his", "have"];

function wordSlug(word) {
  return word === "I" ? "i" : word;
}

const LINE_CLIPS = {
  "See the word": "audio/see-the-word.mp3",
  "Hear the word": "audio/hear-the-word.mp3",
  "Hi Cassy! Look at the word, then tap a friend.": "audio/intro-see.mp3",
  "Hi Cassy! Listen, then tap the matching word.": "audio/intro-hear.mp3",
  "Look at the word.": "audio/look-at-the-word.mp3",
  "Look at the big word, then tap a friend.": "audio/look-tap-friend.mp3",
  "Star clips for Cassy!": "audio/reward-clips.mp3",
  "Cassy got a super cape!": "audio/reward-cape.mp3",
  "A golden crown!": "audio/reward-crown.mp3",
  "Rainbow trail unlocked!": "audio/reward-trail.mp3",
  "A squishy for Cassy!": "audio/reward-squishy.mp3",
  "A NeeDoh to squeeze!": "audio/reward-needoh.mp3",
  "A sparkly new dress!": "audio/reward-dress.mp3",
  "More squishies!": "audio/reward-squishies.mp3",
  "Cassy got a puppy!": "audio/reward-dog.mp3",
  "A dragon is flying around!": "audio/reward-dragon.mp3",
  "A snuggly toy for Cassy!": "audio/reward-toy.mp3",
  "A leash for the puppy!": "audio/reward-leash.mp3",
  "Butterflies!": "audio/reward-butterflies.mp3",
  "Sparkly boots for Cassy!": "audio/reward-boots.mp3",
  "Fairy wings!": "audio/reward-wings.mp3",
  "A kitten friend!": "audio/reward-kitten.mp3",
  "Party balloons!": "audio/reward-balloons.mp3",
  "Shooting stars!": "audio/reward-stars.mp3",
  "A magical unicorn!": "audio/reward-unicorn.mp3",
  "A castle!": "audio/reward-castle.mp3",
  "Cassy knows all her words!": "audio/complete.mp3",
};

WORDS.forEach((word) => {
  const slug = wordSlug(word);
  LINE_CLIPS[`Yes, Cassy! That says ${word}.`] = `audio/yes-${slug}.mp3`;
  LINE_CLIPS[`Oops. That was ${word}. Look again.`] = `audio/oops-look-${slug}.mp3`;
  LINE_CLIPS[`Oops. That was ${word}. Listen again.`] = `audio/oops-listen-${slug}.mp3`;
});

const FRIENDS = [
  { id: "pip", name: "Pip" },
  { id: "blaze", name: "Blaze" },
  { id: "nova", name: "Nova" },
];

const EMPTY_GEAR = {
  squishy: false,
  clips: false,
  needoh: false,
  cape: false,
  dress: false,
  squishies: false,
  crown: false,
  dog: false,
  toy: false,
  leash: false,
  trail: false,
  butterflies: false,
  dragon: false,
  boots: false,
  wings: false,
  kitten: false,
  balloons: false,
  stars: false,
  unicorn: false,
  castle: false,
};

const STREAK_REWARDS = {
  2: {
    gear: "squishy",
    kicker: "Squishy time!",
    title: "A squishy for Cassy!",
    body: "Tap it to squeeze. So squishy!",
  },
  3: {
    gear: "clips",
    kicker: "3 in a row!",
    title: "Star clips for Cassy!",
    body: "Cassy's hair sparkles. Keep the streak going!",
  },
  4: {
    gear: "needoh",
    kicker: "Squeeze it!",
    title: "A NeeDoh to squeeze!",
    body: "A gooey NeeDoh blob. Mash it!",
  },
  5: {
    gear: "cape",
    kicker: "On fire!",
    title: "Cassy got a super cape!",
    body: "Five in a row. She looks so brave.",
  },
  6: {
    gear: "dress",
    kicker: "Dress up!",
    title: "A sparkly new dress!",
    body: "Twirl time. Cassy looks so fancy!",
  },
  7: {
    gear: "squishies",
    kicker: "Toy pile!",
    title: "More squishies!",
    body: "A mint one and a grape one. Squeeze them all!",
  },
  8: {
    gear: "crown",
    kicker: "Word queen!",
    title: "A golden crown!",
    body: "Eight in a row. Cassy is a sight-word star.",
  },
  9: {
    gear: "toy",
    kicker: "Snuggle time!",
    title: "A snuggly toy for Cassy!",
    body: "A tiny bunny to hold. So cute!",
  },
  10: {
    gear: "dog",
    kicker: "Woof woof!",
    title: "Cassy got a puppy!",
    body: "Tap the puppy. It wiggles!",
  },
  11: {
    gear: "leash",
    kicker: "Walkies!",
    title: "A leash for the puppy!",
    body: "Now Cassy can take her puppy for a walk!",
  },
  12: {
    gear: "trail",
    kicker: "Legendary streak!",
    title: "Rainbow trail unlocked!",
    body: "Twelve in a row. Cassy is unstoppable!",
  },
  14: {
    gear: "butterflies",
    kicker: "Flutter flutter!",
    title: "Butterflies!",
    body: "Pretty butterflies are dancing in the sky!",
  },
  13: {
    gear: "boots",
    kicker: "Stomp stomp!",
    title: "Sparkly boots for Cassy!",
    body: "Rainbow boots for stomping around!",
  },
  15: {
    gear: "dragon",
    kicker: "Look up!",
    title: "A dragon is flying around!",
    body: "A sparkly dragon is looping through the sky!",
  },
  16: {
    gear: "wings",
    kicker: "Fly!",
    title: "Fairy wings!",
    body: "Cassy can flutter like a fairy!",
  },
  17: {
    gear: "kitten",
    kicker: "Meow!",
    title: "A kitten friend!",
    body: "A tiny kitten wants to play too!",
  },
  18: {
    gear: "balloons",
    kicker: "Party time!",
    title: "Party balloons!",
    body: "Tap the balloons. They bounce!",
  },
  20: {
    gear: "stars",
    kicker: "Make a wish!",
    title: "Shooting stars!",
    body: "Stars are streaking across the sky!",
  },
  22: {
    gear: "unicorn",
    kicker: "Magic!",
    title: "A magical unicorn!",
    body: "A unicorn is galloping through the clouds!",
  },
  25: {
    gear: "castle",
    kicker: "Once upon a time!",
    title: "A castle!",
    body: "Cassy's word world got a castle!",
  },
};

const STORAGE_KEY = "cassy-word-world-v1";

const els = {
  start: document.getElementById("screen-start"),
  game: document.getElementById("screen-game"),
  overlay: document.getElementById("overlay"),
  hello: document.getElementById("hello-bubble"),
  startCassy: document.getElementById("start-cassy"),
  gameCassy: document.getElementById("game-cassy"),
  overlayCassy: document.getElementById("overlay-cassy"),
  play: document.getElementById("btn-play"),
  home: document.getElementById("btn-home"),
  reset: document.getElementById("btn-reset"),
  replay: document.getElementById("btn-replay"),
  overlayBtn: document.getElementById("btn-overlay"),
  overlayKicker: document.getElementById("overlay-kicker"),
  overlayTitle: document.getElementById("overlay-title"),
  overlayBody: document.getElementById("overlay-body"),
  coach: document.getElementById("coach"),
  prompt: document.getElementById("prompt-word"),
  signBoard: document.querySelector(".sign-board"),
  choices: document.getElementById("choices"),
  mastery: document.getElementById("mastery"),
  streak: document.getElementById("streak-count"),
  streakFlame: document.getElementById("streak-flame"),
  coins: document.getElementById("coin-count"),
  best: document.getElementById("best-count"),
  startStats: document.getElementById("start-stats"),
  particles: document.getElementById("particles"),
  confirm: document.getElementById("btn-confirm"),
};

const audio = createAudio();

const state = {
  mode: "see",
  coins: 0,
  streak: 0,
  best: 0,
  gear: { ...EMPTY_GEAR },
  celebratedAll: false,
  stars: Object.fromEntries(WORDS.map((word) => [word, 0])),
  target: "Are",
  options: [],
  heard: null,
  selected: null,
  busy: false,
  lastTarget: null,
};

loadProgress();
renderStart();

document.querySelectorAll(".mode-card").forEach((card) => {
  card.addEventListener("click", () => {
    state.mode = card.dataset.mode;
    document.querySelectorAll(".mode-card").forEach((other) => {
      other.classList.toggle("selected", other === card);
    });
    audio.tap();
    speak(state.mode === "see" ? "See the word" : "Hear the word");
  });
});

els.play.addEventListener("click", () => {
  audio.unlock();
  unlockVoice();
  audio.tap();
  startGame();
});

els.home.addEventListener("click", () => {
  audio.tap();
  showStart();
});

els.reset.addEventListener("click", () => {
  if (!confirm("Reset Cassy's stars, coins, and streak rewards?")) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, {
    coins: 0,
    streak: 0,
    best: 0,
    gear: { ...EMPTY_GEAR },
    celebratedAll: false,
    stars: Object.fromEntries(WORDS.map((word) => [word, 0])),
  });
  renderStart();
});

function replayIfIdle() {
  if (state.busy) return;
  replayPrompt();
}

els.replay.addEventListener("click", (event) => {
  event.stopPropagation();
  replayIfIdle();
});

document.getElementById("word-sign").addEventListener("click", replayIfIdle);

els.overlayBtn.addEventListener("click", () => {
  audio.tap();
  hideOverlay();
  nextRound();
});

els.confirm.addEventListener("click", () => {
  audio.tap();
  confirmChoice();
});

document.addEventListener("click", (event) => {
  const toy = event.target.closest(
    ".squishy, .needoh, .pet-dog, .pet-kitten, .balloons, .sky-dragon, .sky-unicorn, .sky-castle, .butterfly, .held-toy"
  );
  if (!toy) return;
  toy.classList.remove("pop");
  void toy.offsetWidth;
  toy.classList.add("pop");
  audio.tap();
});

function startGame() {
  state.streak = 0;
  state.heard = null;
  state.selected = null;
  els.start.classList.add("hidden");
  els.game.classList.remove("hidden");
  renderCassy(els.gameCassy, "heart");
  updateHud();
  renderMastery();
  const intro =
    state.mode === "see"
      ? "Hi Cassy! Look at the word, then tap a friend."
      : "Hi Cassy! Listen, then tap the matching word.";
  nextRound(true);
  speak(intro).then(() => {
    if (state.mode === "hear") speakTarget();
  });
}

function showStart() {
  stopSpeech();
  els.game.classList.add("hidden");
  els.overlay.classList.add("hidden");
  els.start.classList.remove("hidden");
  renderStart();
}

function renderStart() {
  renderCassy(els.startCassy, "heart");
  syncFunLayer();
  const totalStars = WORDS.reduce((sum, word) => sum + state.stars[word], 0);
  els.startStats.textContent = `Best streak ${state.best}  •  ${state.coins} coins  •  ${totalStars}/${WORDS.length * 3} stars`;
}

function nextRound(first = false) {
  state.busy = false;
  state.heard = null;
  state.selected = null;
  setConfirmReady(false);
  state.target = pickTarget();
  state.options = pickOptions(state.target);
  state.lastTarget = state.target;
  renderRound();
  updateHud();
  renderMastery();
  setCassyMood("idle");

  if (state.mode === "see") {
    els.coach.textContent = "Tap a friend to hear. Then tap That's the one!";
    if (!first) speak("Look at the word.");
  } else {
    els.coach.textContent = "Tap a word to hear it. Then tap That's the one!";
    if (!first) speakTarget();
  }
}

function renderRound() {
  els.signBoard.classList.toggle("hear-mode", state.mode === "hear");
  els.prompt.textContent = state.mode === "see" ? state.target : "Listen!";
  els.choices.innerHTML = "";

  state.options.forEach((word, index) => {
    const friend = FRIENDS[index];
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.dataset.word = word;
    button.dataset.index = String(index);

    if (state.mode === "see") {
      const wrap = document.createElement("div");
      wrap.className = "avatar-wrap";
      wrap.innerHTML = avatarMarkup(friend.id, "small");
      button.append(wrap);

      const name = document.createElement("span");
      name.className = "friend-name";
      name.textContent = friend.name;

      const hint = document.createElement("span");
      hint.className = "hint";
      hint.textContent = "Tap to hear";

      button.append(name, hint);
    } else {
      const printed = document.createElement("span");
      printed.className = "printed";
      printed.textContent = word;
      const hint = document.createElement("span");
      hint.className = "hint";
      hint.textContent = "Tap to hear";
      button.append(printed, hint);
    }

    button.addEventListener("click", () => onChoice(button, word, friend));
    els.choices.append(button);
  });
}

function onChoice(button, word, friend) {
  if (state.busy) return;
  if (speech.promptPlaying && state.mode === "hear") return;

  state.selected = word;
  state.heard = word;
  clearChoiceStyles();
  button.classList.add("listening");
  setConfirmReady(true);

  if (state.mode === "see") {
    const avatar = button.querySelector(".avatar");
    avatar?.classList.add("talk");
    els.coach.textContent = `That's ${friend.name}. Tap That's the one! if this is ${state.target}.`;
    speak(word, "choice");
    window.setTimeout(() => avatar?.classList.remove("talk"), 700);
    return;
  }

  els.coach.textContent = `You tapped ${word}. Tap That's the one! if this matches.`;
  speak(word, "choice");
}

function confirmChoice() {
  if (state.busy || !state.selected) return;
  const word = state.selected;
  const button = els.choices.querySelector(`.choice[data-word="${word}"]`);
  state.busy = true;
  setConfirmReady(false);
  clearChoiceStyles();
  if (word === state.target) {
    button?.classList.add("correct");
    handleCorrect();
  } else {
    button?.classList.add("wrong");
    handleWrong(word);
  }
}

function setConfirmReady(ready) {
  els.confirm.disabled = !ready;
  els.confirm.classList.toggle("ready", ready);
}

function handleCorrect() {
  audio.success();
  burst();
  state.streak += 1;
  state.best = Math.max(state.best, state.streak);
  state.coins += 10 + state.streak * 2;
  state.stars[state.target] = Math.min(3, state.stars[state.target] + 1);
  saveProgress();
  updateHud();
  renderMastery();
  setCassyMood("cheer");

  const reward = STREAK_REWARDS[state.streak];
  const unlockedReward = Boolean(reward && !state.gear[reward.gear]);
  const justFinishedAll =
    !state.celebratedAll && WORDS.every((word) => state.stars[word] >= 3);
  els.coach.textContent = streakMessage();

  if (unlockedReward) {
    state.gear[reward.gear] = true;
    saveProgress();
    showOverlay(reward);
    speak(`Yes, Cassy! That says ${state.target}.`).then(() => speak(reward.title));
    return;
  }

  if (justFinishedAll) {
    state.celebratedAll = true;
    saveProgress();
    showOverlay({
      kicker: "Word world complete",
      title: "Cassy knows them all!",
      body: `${WORDS.join(", ")}. Best streak: ${state.best}. Keep playing for more toys!`,
    });
    speak(`Yes, Cassy! That says ${state.target}.`).then(() => speak("Cassy knows all her words!"));
    return;
  }

  speak(`Yes, Cassy! That says ${state.target}.`).then(() => {
    window.setTimeout(() => nextRound(), 300);
  });
}

function handleWrong(word) {
  audio.oops();
  state.streak = 0;
  saveProgress();
  updateHud();
  setCassyMood("sad");
  els.coach.textContent = `That was ${word}. Try again!`;
  speak(state.mode === "hear" ? `Oops. That was ${word}. Listen again.` : `Oops. That was ${word}. Look again.`).then(
    () => {
      state.busy = false;
      state.heard = null;
      state.selected = null;
      setConfirmReady(false);
      clearChoiceStyles();
      setCassyMood("idle");
      if (state.mode === "hear") speakTarget();
    }
  );
}

function replayPrompt() {
  if (state.mode === "see") {
    els.coach.textContent = "Look at the word. Tap a friend to hear. Then tap That's the one!";
    speak("Look at the big word, then tap a friend.");
  } else {
    speakTarget();
  }
}

function speakTarget() {
  setCassyMood("talk");
  speak(state.target).then(() => setCassyMood("idle"));
}

function pickTarget() {
  const weak = WORDS.filter((word) => state.stars[word] < 3);
  const pool = weak.length ? weak : WORDS;
  let choice = pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1) {
    while (choice === state.lastTarget) {
      choice = pool[Math.floor(Math.random() * pool.length)];
    }
  }
  return choice;
}

function pickOptions(target) {
  const others = WORDS.filter((word) => word !== target);
  shuffle(others);
  const options = [target, others[0], others[1]];
  return shuffle(options);
}

function streakMessage() {
  if (state.streak >= 25) return `Castle streak! ${state.streak} in a row!`;
  if (state.streak >= 22) return `Unicorn magic! ${state.streak} in a row!`;
  if (state.streak >= 15) return `Dragon streak! ${state.streak} in a row!`;
  if (state.streak >= 10) return `Puppy party! Streak ${state.streak}!`;
  if (state.streak >= 8) return `Cassy is a word queen! Streak ${state.streak}!`;
  if (state.streak >= 5) return `On fire! ${state.streak} in a row!`;
  if (state.streak >= 3) return `Nice streak, Cassy! ${state.streak} in a row!`;
  return "Yes! You got it, Cassy!";
}

function updateHud() {
  els.streak.textContent = String(state.streak);
  els.coins.textContent = String(state.coins);
  els.best.textContent = String(state.best);
  els.streakFlame.classList.toggle("hot", state.streak >= 3);
  renderCassy(els.gameCassy, currentCassyMood());
}

function renderMastery() {
  els.mastery.innerHTML = WORDS.map((word) => {
    const stars = "★".repeat(state.stars[word]) + "☆".repeat(3 - state.stars[word]);
    return `<span class="mastery-chip">${word} ${stars}</span>`;
  }).join("");
}

function showOverlay(reward) {
  els.overlayKicker.textContent = reward.kicker;
  els.overlayTitle.textContent = reward.title;
  els.overlayBody.textContent = reward.body;
  renderCassy(els.overlayCassy, "cheer");
  els.overlay.classList.remove("hidden");
  burst();
}

function hideOverlay() {
  els.overlay.classList.add("hidden");
}

function clearChoiceStyles() {
  els.choices.querySelectorAll(".choice").forEach((choice) => {
    choice.classList.remove("listening", "correct", "wrong");
  });
}

function currentCassyMood() {
  if (state.streak >= 5) return "cheer";
  return "idle";
}

function setCassyMood(mood) {
  renderCassy(els.gameCassy, mood);
}

function renderCassy(mount, mood) {
  if (!mount) return;
  const gear = [
    state.gear.clips ? "has-clips" : "",
    state.gear.cape ? "has-cape" : "",
    state.gear.dress ? "has-dress" : "",
    state.gear.crown ? "has-crown" : "",
    state.gear.trail ? "has-trail" : "",
    state.gear.toy ? "has-toy" : "",
    state.gear.boots ? "has-boots" : "",
    state.gear.wings ? "has-wings" : "",
    mood,
  ]
    .filter(Boolean)
    .join(" ");
  const sceneBits = [
    state.gear.dog && state.gear.leash ? "has-leash" : "",
  ]
    .filter(Boolean)
    .join(" ");
  mount.innerHTML = `
    <div class="cassy-scene ${sceneBits}">
      ${state.gear.dog && state.gear.leash ? `<span class="leash"></span>` : ""}
      ${avatarMarkup("cassy", "", gear)}
      ${state.gear.dog ? dogMarkup() : ""}
      ${state.gear.kitten ? kittenMarkup() : ""}
      ${state.gear.balloons ? balloonsMarkup() : ""}
      ${toyPileMarkup()}
    </div>
  `;
  syncFunLayer();
}

function toyPileMarkup() {
  if (!state.gear.squishy && !state.gear.needoh) return "";
  return `
    <div class="toy-pile">
      ${state.gear.squishy ? squishyMarkup("peach") : ""}
      ${state.gear.needoh ? needohMarkup() : ""}
      ${state.gear.squishies ? `${squishyMarkup("mint")}${squishyMarkup("grape")}` : ""}
    </div>
  `;
}

function squishyMarkup(flavor) {
  return `
    <button class="squishy ${flavor}" type="button" aria-label="Squishy">
      <span class="toy-eye left"></span>
      <span class="toy-eye right"></span>
      <span class="toy-smile"></span>
    </button>
  `;
}

function needohMarkup() {
  return `
    <button class="needoh" type="button" aria-label="NeeDoh">
      <span class="toy-eye left"></span>
      <span class="toy-eye right"></span>
      <span class="toy-smile"></span>
    </button>
  `;
}

function dogMarkup() {
  return `
    <button class="pet-dog" type="button" aria-label="Puppy">
      <span class="dog-ear left"></span>
      <span class="dog-ear right"></span>
      <span class="dog-head">
        <span class="dog-eye left"></span>
        <span class="dog-eye right"></span>
        <span class="dog-nose"></span>
      </span>
      <span class="dog-body"></span>
      <span class="dog-tail"></span>
      <span class="dog-leg front-left"></span>
      <span class="dog-leg front-right"></span>
      <span class="dog-leg back-left"></span>
      <span class="dog-leg back-right"></span>
    </button>
  `;
}

function kittenMarkup() {
  return `
    <button class="pet-kitten" type="button" aria-label="Kitten">
      <span class="kit-ear left"></span>
      <span class="kit-ear right"></span>
      <span class="kit-head">
        <span class="kit-eye left"></span>
        <span class="kit-eye right"></span>
        <span class="kit-nose"></span>
      </span>
      <span class="kit-body"></span>
      <span class="kit-tail"></span>
    </button>
  `;
}

function balloonsMarkup() {
  return `
    <button class="balloons" type="button" aria-label="Balloons">
      <span class="balloon pink"></span>
      <span class="balloon gold"></span>
      <span class="balloon blue"></span>
    </button>
  `;
}

function syncFunLayer() {
  const layer = document.getElementById("fun-layer");
  if (!layer) return;
  const show =
    state.gear.dragon ||
    state.gear.butterflies ||
    state.gear.stars ||
    state.gear.unicorn ||
    state.gear.castle;
  layer.classList.toggle("hidden", !show);
  layer.classList.toggle("has-dragon", Boolean(state.gear.dragon));
  layer.classList.toggle("has-butterflies", Boolean(state.gear.butterflies));
  layer.classList.toggle("has-stars", Boolean(state.gear.stars));
  layer.classList.toggle("has-unicorn", Boolean(state.gear.unicorn));
  layer.classList.toggle("has-castle", Boolean(state.gear.castle));
}

function avatarMarkup(kind, size = "", extra = "") {
  return `
    <div class="avatar ${kind} ${size} ${extra}">
      <div class="cape"></div>
      <div class="wings">
        <span class="wing left"></span>
        <span class="wing right"></span>
      </div>
      <div class="trail"></div>
      <div class="pigtail left"></div>
      <div class="pigtail right"></div>
      <div class="hair"></div>
      <div class="clip left"></div>
      <div class="clip right"></div>
      <div class="crown"></div>
      <div class="arm left"><span class="hand"></span></div>
      <div class="arm right">
        <span class="hand"></span>
        <span class="held-toy" aria-label="Snuggly toy">
          <span class="teddy-ear left"></span>
          <span class="teddy-ear right"></span>
          <span class="teddy-head"></span>
          <span class="teddy-body"></span>
        </span>
      </div>
      <div class="torso"><div class="star"></div></div>
      <div class="dress">
        <span class="dress-bow"></span>
        <span class="dress-sparkle"></span>
      </div>
      <div class="leg left"><span class="boot"></span></div>
      <div class="leg right"><span class="boot"></span></div>
      <div class="head">
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="mouth"></div>
      </div>
      <svg class="hand-heart" viewBox="0 0 24 22" aria-hidden="true">
        <path
          d="M12 20S4 14.4 4 9.4C4 6.4 6.2 4.2 9 4.2c1.5 0 2.6.8 3 1.8.4-1 1.5-1.8 3-1.8 2.8 0 5 2.2 5 5.2C20 14.4 12 20 12 20z"
          fill="#fff"
          stroke="#ff4fa0"
          stroke-width="2.6"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  `;
}

const speech = {
  gen: 0,
  promptPlaying: false,
  queuedChoice: null,
};

const voicePlayer = new Audio();

const ASSET_V = "19";

function clipFor(text) {
  const src = WORDS.includes(text) ? `audio/word-${wordSlug(text)}.mp3` : LINE_CLIPS[text] || null;
  return src ? `${src}?v=${ASSET_V}` : null;
}

function unlockVoice() {
  const unlocker = new Audio("audio/word-he.mp3");
  unlocker.muted = true;
  unlocker.play().then(() => unlocker.pause()).catch(() => {});
  WORDS.forEach((word) => {
    const preload = new Audio(clipFor(word));
    preload.preload = "auto";
  });
}

function stopSpeech() {
  speech.gen += 1;
  speech.promptPlaying = false;
  speech.queuedChoice = null;
  voicePlayer.pause();
}

function speak(text, kind = "prompt") {
  if (kind === "choice" && speech.promptPlaying) {
    speech.queuedChoice = text;
    return Promise.resolve();
  }
  speech.queuedChoice = null;
  return startSpeech(text, kind);
}

function startSpeech(text, kind) {
  const gen = ++speech.gen;
  speech.promptPlaying = kind === "prompt";
  voicePlayer.onended = null;
  voicePlayer.onerror = null;
  voicePlayer.pause();

  const src = clipFor(text);
  return new Promise((resolve) => {
    const finish = () => {
      if (gen !== speech.gen) {
        resolve();
        return;
      }
      speech.promptPlaying = false;
      const queued = speech.queuedChoice;
      speech.queuedChoice = null;
      if (queued) {
        startSpeech(queued, "choice").then(resolve);
        return;
      }
      resolve();
    };

    if (!src) {
      finish();
      return;
    }

    voicePlayer.onended = finish;
    voicePlayer.onerror = finish;
    voicePlayer.src = src;
    voicePlayer.play().catch(finish);
  });
}

function burst() {
  const colors = ["#ff4fa0", "#ffd54a", "#3dffb0", "#4fa3ff", "#ff7a18", "#fff"];
  for (let i = 0; i < 24; i += 1) {
    const speckle = document.createElement("span");
    speckle.className = "particle";
    speckle.style.left = "50%";
    speckle.style.top = "40%";
    speckle.style.background = colors[i % colors.length];
    speckle.style.setProperty("--x", `${(Math.random() - 0.5) * 420}px`);
    speckle.style.setProperty("--y", `${-80 - Math.random() * 260}px`);
    els.particles.append(speckle);
    window.setTimeout(() => speckle.remove(), 900);
  }
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function saveProgress() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      coins: state.coins,
      best: state.best,
      gear: state.gear,
      celebratedAll: state.celebratedAll,
      stars: state.stars,
    })
  );
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) return;
    state.coins = saved.coins || 0;
    state.best = saved.best || 0;
    state.gear = { ...EMPTY_GEAR, ...saved.gear };
    const stars = { ...state.stars };
    Object.entries(saved.stars || {}).forEach(([word, count]) => {
      const key = word === "I" || word === "i" ? "I" : word.toLowerCase();
      if (key in stars) stars[key] = count;
    });
    state.stars = stars;
    state.celebratedAll =
      Boolean(saved.celebratedAll) && WORDS.every((word) => (state.stars[word] || 0) >= 3);
  } catch {
    /* ignore bad save data */
  }
}

function createAudio() {
  let ctx;
  function ensure() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(freq, duration, type = "triangle", gain = 0.05) {
    const audioCtx = ensure();
    const osc = audioCtx.createOscillator();
    const node = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    node.gain.setValueAtTime(gain, audioCtx.currentTime);
    node.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(node);
    node.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  }
  return {
    unlock() {
      ensure();
    },
    tap() {
      tone(520, 0.08, "square", 0.03);
    },
    success() {
      tone(523, 0.12);
      window.setTimeout(() => tone(659, 0.12), 90);
      window.setTimeout(() => tone(784, 0.18), 180);
    },
    oops() {
      tone(220, 0.18, "sine", 0.04);
    },
  };
}

els.hello.textContent = "Hi Cassy! Let's play with words.";
