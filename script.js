const quizData = [
  {
    question: "She ___ to school every day.",
    choices: ["go", "goes", "going", "gone"],
    answer: "goes"
  },
  {
    question: "I have ___ apple in my bag.",
    choices: ["a", "an", "the", "some"],
    answer: "an"
  },
  {
    question: "They ___ playing soccer now.",
    choices: ["is", "was", "are", "am"],
    answer: "are"
  },
  {
    question: "___ you like pizza?",
    choices: ["Do", "Does", "Did", "Doing"],
    answer: "Do"
  },
  {
    question: "He ___ a book yesterday.",
    choices: ["read", "reads", "is reading", "reading"],
    answer: "read"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  choicesEl.innerHTML = "";
  current.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(choice) {
  const correct = quizData[currentQuestion].answer;
  if (choice === correct) {
    score++;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    endQuiz();
  }
});

function endQuiz() {
  document.getElementById("question-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreEl.textContent = `You got ${score} out of ${quizData.length} correct.`;
}

loadQuestion();
nextBtn.disabled = true;
