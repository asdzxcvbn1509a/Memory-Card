const showBtn = document.getElementById("show");
const hiddenBtn = document.getElementById("btn-hidden");
const addContainer = document.getElementById("add-container");
const cardContainer = document.getElementById("card-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const currentEl = document.getElementById("current");
const clearBtn = document.getElementById("clear");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const addCard = document.getElementById("add-card");

let currentActiveCard = 0;
let cardsEl = [];
const cardData = getCardData();

function createCard() {
  cardData.forEach((data, index) => {
    createSingleCard(data, index);
  });
}

function createSingleCard(data, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (index === 0) {
    card.classList.add("active");
  }

  card.innerHTML = `<div class="inner-card">
          <div class="inner-card-front">
            <p>${data.question}</p>
          </div>
          <div class="inner-card-back">
            <p>${data.answer}</p>
          </div>
        </div>`;
  card.addEventListener("click", () => {
    card.classList.toggle("show-answer");
  });

  cardsEl.push(card);
  cardContainer.appendChild(card);
  updateCurrentQuestion();
}

function updateCurrentQuestion() {
  if (cardsEl.length === 0) {
    currentEl.innerText = "0 / 0";
    return;
  }
  currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

createCard();
updateCurrentQuestion();

function openAddPanel() {
  addContainer.classList.add("show");
  addContainer.setAttribute("aria-hidden", "false");
  questionEl.focus();
}

function closeAddPanel() {
  addContainer.classList.remove("show");
  addContainer.setAttribute("aria-hidden", "true");
}

showBtn.addEventListener("click", openAddPanel);
hiddenBtn.addEventListener("click", closeAddPanel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && addContainer.classList.contains("show")) {
    closeAddPanel();
  }
});

nextBtn.addEventListener("click", () => {
  if (cardsEl.length === 0) return;
  cardsEl[currentActiveCard].className = "card left";
  if (currentActiveCard < cardsEl.length - 1) {
    currentActiveCard++;
  }
  cardsEl[currentActiveCard].className = "card active";
  updateCurrentQuestion();
});

prevBtn.addEventListener("click", () => {
  if (cardsEl.length === 0) return;
  cardsEl[currentActiveCard].className = "card right";
  if (currentActiveCard > 0) {
    currentActiveCard--;
  }
  cardsEl[currentActiveCard].className = "card active";
  updateCurrentQuestion();
});

addCard.addEventListener("click", () => {
  const question = questionEl.value;
  const answer = answerEl.value;

  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };
    createSingleCard(newCard);
    questionEl.value = "";
    answerEl.value = "";
    addContainer.classList.remove("show");
    cardData.push(newCard);
    setCardData(cardData);
  }
});

function setCardData(cards) {
  localStorage.setItem("cards", JSON.stringify(cards));
  window.location.reload();
}

function getCardData() {
  const cards = JSON.parse(localStorage.getItem("cards"));
  return cards === null ? [] : cards;
}

clearBtn.addEventListener("click", () => {
  localStorage.clear();
  cardContainer.innerHTML = "";
  window.location.reload();
});
