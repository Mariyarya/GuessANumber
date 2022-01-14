'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Salut Denis ❤';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 30;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //aceasta fraza genereaza nr de la 0 pana la 20

let score = 20; //indicam scorul

// document.querySelector('.number').textContent = secretNumber; il comentez ca sa nu se vada pe pagina dar o duc acolo unde ghiceste nr corect

let highscore = 0; //initializem variabila care o sa tina minte scorul, el initial e 0

const displayMessage = function (message) {
   document.querySelector('.message').textContent = message;
}




document.querySelector('.check').addEventListener('click', function () {
   //  console.log(document.querySelector('.guess').value);
   const guess = Number(document.querySelector('.guess').value);
   //  document.querySelector('.message').textContent = 'Salut Denis ❤';
   console.log(guess, typeof guess); //ne arata ca ce preluam din input e string

   // whwn there is no input
   if (!guess) {
      // document.querySelector('.message').textContent = 'No number ⛔'
      displayMessage('No number ⛔')


      //when player wins
   } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = ' 🎉 Correct Number 🎉';
      displayMessage('🎉 Correct Number 🎉');

      document.querySelector('.number').textContent = secretNumber; //generam acest nr secret

      // selectam body ca in caz ca se indeplineste acest cod pai sa se schimbe backgroundul

      document.querySelector('body').style.backgroundColor = 'pink';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }

      //when guess is wrong
   } else if (guess !== secretNumber) {
      if (score > 1) {
         // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high ☝🏿': 'Too low 🤏';

         displayMessage(guess > secretNumber ? 'Too high ☝🏿' : 'Too low 🤏');

         score--; // score = score - 1 ii spunem sa faca aici -1 din scorul general 20
         document.querySelector('.score').textContent = score;
      } else {
         // document.querySelector('.message').textContent = ' You lost the game! ❗❗❗❗';
         displayMessage(' You lost the game! ❗❗❗❗');

         document.querySelector('.score').textContent = 0;
      }
   }
});

//when guess is to high
//    } else if (guess > secretNumber) {
//       if (score > 1) {
//          document.querySelector('.message').textContent = 'Too high ☝🏿';
//          score--; // score = score - 1 ii spunem sa faca aici -1 din scorul general 20
//          document.querySelector('.score').textContent = score;
//       } else {
//          document.querySelector('.message').textContent = ' You lost the game! ❗❗❗❗';
//          document.querySelector('.score').textContent = 0;
//       }


//       //when guess is too low
//    } else if (guess < secretNumber) {
//       if (score > 1) {
//          document.querySelector('.message').textContent = 'Too low 🤏';
//          score--; // score = score - 1
//          document.querySelector('.score').textContent = score;
//       } else {
//          document.querySelector('.message').textContent = ' You lost the game! ❗❗❗❗';
//          document.querySelector('.score').textContent = 0;
//       }
//    }
// }); 

document.querySelector('.again').addEventListener('click', () => {
   score = 20; //restartam scorul
   secretNumber = Math.trunc(Math.random() * 20) + 1; //restartam secret number

   // document.querySelector('.message').textContent = 'Start guessing..'; //restartam mesajul
displayMessage('Start guessing...')


   document.querySelector('.score').textContent = score; //resetam scorul

   document.querySelector('.number').textContent = '?'; //resetam nr secret cu ?

   document.querySelector('.guess').value = ''; //resetam inputul cu ' ' gol fiindca nu stim ce ne o sa fie introdus

   //resetam culoarea si marimea
   document.querySelector('body').style.backgroundColor = 'rgb(170, 104, 104)';
   document.querySelector('.number').style.width = '15rem';
});


