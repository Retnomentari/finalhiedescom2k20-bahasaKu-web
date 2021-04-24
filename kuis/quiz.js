const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Perhatikan kalimat berikut! \n Kami membawa alat tulis pulpen pensil dan spidol. \n Penggunaan tanda baca yang tepat pada kalimat tersebut adalah...',
        choice1: 'Kami membawa alat tulis pulpen, pensil, dan spidol.',
        choice2: 'Kami membawa alat tulis, pulpen, pensil, dan spidol',
        choice3: 'Kami membawa alat tulis; pulpen, pensil dan spidol.',
        choice4: 'Kami membawa alat tulis: pulpen, pensil, dan spidol.',
        answer: 4,
    },
    {
        question: 'Kalimat berikut yang mengandung kata tidak baku adalah ...',
        choice1: 'Azan subuh berkumandang menyambut terbitnya sang fajar.',
        choice2: 'Embusan angin menerpa kulit wajahku di sore itu.',
        choice3: 'Istri Pak Mamat melahirkan bayi perempuan.',
        choice4: 'Soekarno mengeluarkan dekret pada tanggal 5 Juli 1959.',
        answer: 3,
    },
    {
        question: 'Dia menganggap suaminya patung yang bisu. \n Kalimat tersebut menggunakan pola...',
        choice1: 'S-P-O-Pel',
        choice2: 'S-P-Pel',
        choice3: 'S-P-O-K',
        choice4: 'S-P-O',
        answer: 1,
    },
    {
        question: 'Cermati kutipan cerpen berikut! \n Kesedihan masih mendera diriku. Setelah ditinggal pergi pendamping hidupku, kini anakku satu-satunya juga telah tiada. Hujan air mata tentu saja menetes di sini; di mataku. \n Kutipan teks tersebut merupakan struktur teks bagian...',
        choice1: 'Abstrak',
        choice2: 'Orientasi',
        choice3: 'Komplikasi',
        choice4: 'Evaluasi',
        answer: 1,
    },
    {
        question: 'Sebuah penyajian konflik yang mengarah pada klimaks serta sudah mulai mendapatkan penyelesaian dari konflik disebut...',
        choice1: 'Abstrak ',
        choice2: 'Orientasi',
        choice3: 'Komplikasi',
        choice4: 'Evaluasi',
        answer: 4,
    },
    {
        question: 'Pemuda tulang punggung bangsa. Masa depan bangsa ada di tangan pemuda.... Inilah makna dari Hari Sumpah Pemuda. \n Kalimat yang tepat untuk melengkapi teks pidato tersebut adalah...',
        choice1: 'Pemuda yang bersekolah tinggi harapan semua bangsa.',
        choice2: 'Banyak pemuda yang terlibat pada hal-hal yang bersifat negatif.',
        choice3: 'Pemimpin bangsa saat ini berasal dari pemuda-pemuda pada masa lalu.',
        choice4: 'Gambaran bangsa di masa depan akan terlihat pada keadaan pemudanya saat ini.',
        answer: 4,
    },
    {
        question: 'Kalimat penutup pidato yang tepat adalah...',
        choice1: 'Berhubung waktnya mepet, pidato ini di akhiri saja.',
        choice2: 'Sebelum pidato ini saya akhiri, mohon dimaafkan kalau ada kata yang kurang berkenan.',
        choice3: 'Rasanya pidato ini tidak perlu panjang-panjang, cukup sampai di sini saja.',
        choice4: 'Sekian pidato dari saya, saya harap saudara-saudara dapat mencerna pidato saya dengan baik.',
        answer: 2,
    },
    {
        question: 'Bacalah kutipan teks berikut! \n Pelikan adalah burung yang terkenal dengan paruhnya yang memiliki kantung. Paruhnya yang meruncing panjangnya bisa lebih dari 30 cm. Paruh sebelah atas memiliki ujung yang bengkok membentuk kait. \n Jenis kalimat yang digunakan pada pernyataan umum di atas adalah...',
        choice1: 'kalimat kompleks',
        choice2: 'kalimat deskripsi',
        choice3: 'kalimat definisi',
        choice4: 'kalimat perbandingan',
        answer: 2,
    },
    {
        question: 'Jenis teks laporan hasil observasi mendeskripsikan atau menggambarkan bentuk, ciri, atau sifat umum, seperti hal-hal berikut, kecuali...',
        choice1: 'Peristiwa',
        choice2: 'Hewan',
        choice3: 'Keindahan bumi',
        choice4: 'Tumbuh-tumbuhan',
        answer: 3,
    },
    {
        question: 'Verba yang mengacu pada tindakan fisik disebut verba ...',
        choice1: 'Material',
        choice2: 'Tingkah laku',
        choice3: 'Temporal',
        choice4: 'Fiskal',
        answer: 1,
    },
    {
        question: 'Berikut ini bukan merupakan ciri-ciri kebahasaan yang terdapat dalam teks prosedur kompleks...',
        choice1: 'Menggunakan kalimat introgatif',
        choice2: 'Menggunakan kalimat alternatif',
        choice3: 'Menggunakan  kalimat deklaratif',
        choice4: 'Menggunakan partisipan manusia',
        answer: 2,
    },
    {
        question: 'Perhatikan iklan berikut! \n (1)	Datang bersama, mengembangkan usaha cepat sukses \n (2)	Narasumber 100% praktisi \n (3)	Hanya empat ratus ribu rupiah, hadiahnya melimpah \n (4) Klik kewirausahanews.com. \n Pernyataan yang berupa fakta pada iklan tersebut adalah...',
        choice1: '(1)',
        choice2: '(2)',
        choice3: '(3)',
        choice4: '(4)',
        answer: 4,
    },
    {
        question: '1. Koda ; 2. Krisis ; 3. Abstraksi ; 4. Reaksi ; 5. Orientasi \n Urutan struktur teks anekdot yang tepat adalah...',
        choice1: '3-5-4-2-1',
        choice2: '3-5-2-4-1',
        choice3: '3-4-5-2-1',
        choice4: '3-2-4-5-1',
        answer: 2,
    },
    {
        question: 'Malik  : “Tuan Abdul, saya sudah cari kemana-mana tetapi saya tidak menemukan kambing  yang punya taduk sejengkal manusia.” \n Abdul : “Bagaimana kalau kita membuat sayembara, cepat buat pengumuman keseluruh negeri bahwa kita membutuhkan seekor kambing  yang memiliki tanduk sejengkal manusia untuk disembelih. " Abstraksi yang tepat untuk kutipan teks anekdot di atas adalah...',
        choice1: 'Pada suatu hari Tuan Malik mencari kambing yang sudah seminggu menghilang.',
        choice2: 'Tuan Abdul membuat sayembara perihal pencarian kambing.',
        choice3: 'Tuan malik tidak mencari kambing yang punya tanduk sejangkal manusia.',
        choice4: 'Tuan malik dan tuan Abdul bersepakat membuat sayembara untuk mencari kambing yang memiliki tanduk sejengkal manusia.',
        answer: 1,
    },
    {
        question: 'Perhatikan iklan berikut! \n Ingin bayi sehat! \n POSYANDU aja \n Solusi tepat balita Anda \n Maksud iklan tersebut adalah...',
        choice1: 'Ajaran mendirikan posyandu',
        choice2: 'Ajakan membantu posyandu',
        choice3: 'Ajakan membawa balita ke posyandu',
        choice4: 'Ajakan menyehatkan bayi dan balita',
        answer: 3,
    }
]

const SCORE_POINTS = 20
const MAX_QUESTIONS = 15

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("end.html")
    }

    questionCounter++
    progressText.innerText =`Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]    
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000) 
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
