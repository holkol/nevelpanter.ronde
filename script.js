const quizData = [
    {
        question: "Waarvoor gebruikt een nevelpanter zijn staart?",
        a: "als sjaal",
        b: "voor evenwicht",
        c: "om vrouwtjes te versieren",
        d: "voor niks",
        correct: "b",
    },
    {
        question: "Wat kan een nevelpanter niet?",
        a: "springen",
        b: "rennen",
        c: "brullen",
        d: "spinnen",
        correct: "c",
    },
    {
        question: "Wat is er bijzonder aan pasgeboren nevelpanters?",
        a: "ze zijn blind",
        b: "ze zijn doof",
        c: "ze hebben nog geen staart",
        d: "hun neus ziet blauw",
        correct: "a",
    },
    {
        question: "Waar komt de nevelpanter voor?",
        a: "Amerika",
        b: "Azië",
        c: "in de dierentuin",
        d: "Afrika",
        correct: "b",
    },
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Je had ${score}/${quizData.length} vragen juist</h2>
 
                <button onclick="location.reload()">opnieuw</button>
            `
        }
    }
})