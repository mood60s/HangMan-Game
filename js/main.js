//GeneRate Letters,
const Letters = 'abcdefghijklmnopqrstuvwxyz';
// Make Array from it
let LettersArray = Array.from(Letters);

// Select Letter Container
let lettersContainer = document.querySelector('.letters');
// Generate Letters
LettersArray.forEach((letter) => {
  // Create SPan
  let span = document.createElement('span');
  //Create Letter
  let theLetter = document.createTextNode(letter);
  // Append the Letter To Span
  span.appendChild(theLetter);
  span.className = `letter-box`;
  //Append span To Letter Container
  lettersContainer.appendChild(span);
});
// Object Of Words + CateGories,
const words = {
  programming: [
    'php',
    'javascript',
    'go',
    'scala',
    'fortran',
    'r',
    'mysql',
    'python',
  ],
  movies: [
    'Prestige',
    'Inception',
    'Parasite',
    'Interstellar',
    'Whiplash',
    'Momento',
    'Coco',
    'Up',
  ],
  people: ['alicia silverstone', 'keanu reeves', 'Alexander', 'Paul Walker'],
  countries: ['Syria', 'Palestine', 'Yemen', 'KSA', 'Bahrain', 'Qatar'],
};
// Logic For Random Value
let allKeys = Object.keys(words);
// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// Category
let randomPropName = allKeys[randomPropNumber];
// Category Words
let randomPropValue = words[randomPropName];
// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// Random  Word,
let RandomvalueValue = randomPropValue[randomValueNumber];
// Set Category Info
document.querySelector('.game-info .category span').innerHTML = randomPropName;
// Select Letter  Guess Element
let lettersGuessContainer = document.querySelector('.letters-guess');
// Convert Chosen word to Array
let lettersAndSpace = Array.from(RandomvalueValue);
// console.log(lettersAndSpace);
//Create Soans Depend On words,
lettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let EmptySpan = document.createElement('span');
  // If Letter Is Spacec?
  if (letter === ' ') {
    // Add Class to the Span If is has Space,
    EmptySpan.className = 'with-space';
  }
  // Append Span to The guess Container
  lettersGuessContainer.appendChild(EmptySpan);
});
// Select ALL Span Inside Guess
let guessSpans = document.querySelectorAll('.letters-guess span');
// Set  The Chose Status

//Handle Clicking On letters,Logic,
// set Wrong Attempts
let wrongAttempts = 0;
// select Draw Element
let theDraw = document.querySelector('.hangman-draw');
document.addEventListener('click', (e) => {
  let theStatus = false;
  if (e.target.className === 'letter-box') {
    e.target.classList.add('clicked');
    // The Chosen Word
    let theChosenWord = Array.from(RandomvalueValue.toLowerCase());
    // Get Letter Clicked
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    theChosenWord.forEach((wordLetter, Wordindex) => {
      // If The Clicked Letter EquaL to One Of The Chosen Word Letter
      if (theClickedLetter == wordLetter) {
        // Set status to Correct
        theStatus = true;
        // Loop on ALL Guess Spans

        guessSpans.forEach((span, spanIndex) => {
          if (Wordindex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    // Oustide Loop
    // If Letter wrong
    if (theStatus !== true) {
      wrongAttempts++;
      // add Class wrong on The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      // Play Fail Sound
      document.getElementById('fail').play();
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add('end');
        document.querySelector('#game-over').play();
      }
    } else {
      document.getElementById('success').play();
      let allFilled = true;
      guessSpans.forEach((span) => {
        if (span.innerHTML === '' && !span.classList.contains('with-space')) {
          allFilled = false;
        }
      });
      if(allFilled){
        lettersContainer.classList.add("Win")
        document.querySelector("#winner").play()
       let p = document.createElement("p")
       p.innerHTML = `🎉 Congratulations! You Won 👏 Wrong Is: ${wrongAttempts}`
       p.className= "ParagraphWinner"
        document.body.appendChild(p)
        lettersContainer.classList.add("Win-Game")
      }
    }
  }
});
// End Game Function
function endGame() {
  // Create Popup Div
  let div = document.createElement('div');
  //create text Node
  let divText = document.createTextNode(
    `Game Over, The Word Is: ${RandomvalueValue}`,
  );
  // Append text To Div,
  div.appendChild(divText);
  // add Class On DIv,
  div.classList.add('class', 'popup');
  document.body.appendChild(div);
}
// Manage Winner

console.log(RandomvalueValue)