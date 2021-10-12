const quizData = [
    {
        question: "What’s the national flower of Japan?",
        a: "Petunia",
        b: "Lillies",
        c: "Rose",
        d: "Cherry Blossoms",
        correct: "d",
    },
    {
        question: "What’s the smallest country in the world?",
        a: "Mauritius",
        b: "Vatican",
        c: "China",
        d: "Kiribati",
        correct: "b",
    },
    {
        question: "Where is Billie Eilish from?",
        a: "Los Angeles",
        b: "Maine",
        c: "New York",
        d: "Miami",
        correct: "a",
    },
    {
        question:" Where was the first modern Olympic Games held?",
        a: "Tokyo",
        b: "London",
        c: "Athens",
        d: "Seoul",
        correct: "c",
    },
    {
        question: "Name Disney’s first film",
        a: "The Sleeping Beauty",
        b: "Snow White",
        c: "Cinderella",
        d: "Beauty and the Beast",
        correct: "b",
    },
    {
        question: "What is the name of the coffee shop in the sitcom Friends?",
        a: "Central Park",
        b: "Central Perk",
        c: "Central Cafe",
        d: "Park Cafe",
        correct: "b",
    },
    {
        question: "What is the name of the only kpop group to be nominated for the Grammys?",
        a: "BTS",
        b: "BigBang",
        c: "Blackpink",
        d: "Super Junior",
        correct: "a",
    },
    {
        question: "Mohiniattam dance from developed originally in which state?",
        a: "Tamil Nadu",
        b: "Meghalaya",
        c: "Manipur",
        d: "Kerela",
        correct: "d",
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
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
