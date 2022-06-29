const settingsBtn = document.querySelector('#settings-button')
const settings = document.querySelector('#settings')
const difficultySelect = document.querySelector('#difficulty')
const word = document.querySelector('#word')
const inputText = document.querySelector('#input-text')
const scoreEl = document.querySelector('span#score')
const timeEl = document.querySelector('span#time')
const endGameEl = document.querySelector('#end-game-container')

const wordList = [
    'ukraine', 
    'michael',
    'hula-baloo',
    'singing',
    'procurement',
    'independent',
    'steps-online',
    'good',
    'south',
    'gold',
    'home',
    'artificial',
    'steering',
    'nine',
    'fame',
    'dismiss',
    'basement',
    'stupefy',
    'amazingly',
    'beautiful',
    'difficult',
    'game',
    'is',
    'smooth',
    'able',
    'agility',
    'consecrate',
    'sing',
    'airplane',
    'drop'
];

//focus on input field on load 
inputText.focus();

//initialize random word variable
let randomWord;

//initialize score variable
let score = 0;

//initialize time number
let time = 10;
const timeInterval = setInterval(updateTime, 1000);

//counting down time

//generate random word function
function getRandomWord() {
    return wordList[Math.floor(Math.random()* wordList.length)]
};


// updateTime function
function updateTime() {
    time--;
    timeEl.innerHTML = `${time}s`
    if (time===0){
        clearInterval(timeInterval);
        //end Game
        gameOver();
    }
}

function gameOver() {
    endGameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Here is your final score ${score}</p>
    <button onclick="window.location.reload()">Reload</button>`;
    endGameEl.style.display = 'flex';
}

//function to add word to dom 
function addWordToDom() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;    
};

function updateScore(){
    score += 2;
    scoreEl.innerHTML = score;
};

addWordToDom();

//listening for input events and matching words
inputText.addEventListener('input', (e) => {
    let typedWord = e.target.value;
    if (typedWord === randomWord){
        addWordToDom();
        updateScore();

        //to clear input field after correct attempt
        e.target.value = '';

        //time difficulty functionality
        if (difficultySelect.value === 'Hard')
            time += 1;
            else if (difficultySelect.value === 'Medium')
                time += 2;
                else if (difficultySelect.value === 'Easy')
                   time += 4;
        updateTime();
    }
})

//settings button functionality 
//button on click

difficultySelect.addEventListener('change', () => {
    // if(difficultySelect.value === 'easy') 
    
    console.log(difficultySelect.value);
})

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('show');
});



