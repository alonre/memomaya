const animals = [
  { name: 'סוס', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cavallo_lipizzano.jpg' },
  { name: 'סוס', type: 'name', image: null },
  { name: 'כבשה', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg/640px-Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg' },
  { name: 'כבשה', type: 'name', image: null },
  { name: 'ג׳ירפה', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg' },
  { name: 'ג׳ירפה', type: 'name', image: null },
  { name: 'זברה', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'זברה', type: 'name', image: null },
  { name: 'קוף', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1661962655543-b88aafe382e9?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'קוף', type: 'name', image: null },
  { name: 'פינגווין', type: 'image', image: 'https://images.unsplash.com/photo-1551306416-bdf623f9bccc?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'פינגווין', type: 'name', image: null },
  { name: 'קנגורו', type: 'image', image: 'https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?q=80&w=2595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'קנגורו', type: 'name', image: null },
  { name: 'דולפין', type: 'image', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'דולפין', type: 'name', image: null },
  { name: 'נמר', type: 'image', image: 'https://images.unsplash.com/photo-1551972251-12070d63502a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'נמר', type: 'name', image: null },
  { name: 'קואלה', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg' },
  { name: 'קואלה', type: 'name', image: null }
];

class MemoryGame {
  constructor(animals) {
      this.gameBoard = document.getElementById('game-board');
      this.timerDisplay = document.getElementById('timer');
      this.movesDisplay = document.getElementById('moves');
      this.resultMessage = document.getElementById('result-message');
      this.restartBtn = document.getElementById('restart-btn');
      this.gameResult = document.getElementById('game-result');
      this.startPrompt = document.getElementById('start-prompt');
      this.startBtn = document.getElementById('start-btn');

      this.animals = animals;
      this.moves = 0;
      this.timeLeft = 120;
      this.selectedCards = [];
      this.matchedPairs = 0;
      this.gameStarted = false;

      this.restartBtn.addEventListener('click', () => this.resetGame());
      this.startBtn.addEventListener('click', () => this.startGame());
      this.initGame();
  }

  shuffleCards() {
      return this.animals.sort(() => Math.random() - 0.5);
  }

  createCard(animal) {
      const card = document.createElement('div');
      card.classList.add('card');
      
      // Create card inner element
      const cardInner = document.createElement('div');
      cardInner.classList.add('card-inner');
      
      // Create card back with logo
      const cardBack = document.createElement('div');
      cardBack.classList.add('card-back');
      const backImg = document.createElement('img');
      backImg.src = 'logo_cropped.png';
      backImg.alt = 'Card Back';
      cardBack.appendChild(backImg);
      
      // Create card front
      const cardFront = document.createElement('div');
      cardFront.classList.add('card-front');
      
      if (animal.type === 'image') {
          const frontImg = document.createElement('img');
          frontImg.src = animal.image;
          frontImg.alt = animal.name;
          cardFront.appendChild(frontImg);
      } else {
          const nameElement = document.createElement('p');
          nameElement.textContent = animal.name;
          cardFront.appendChild(nameElement);
      }
      
      // Assemble the card
      cardInner.appendChild(cardBack);
      cardInner.appendChild(cardFront);
      card.appendChild(cardInner);
      card.addEventListener('click', () => this.flipCard(card));
      return card;
  }

  initGame() {
      const shuffledAnimals = this.shuffleCards();
      this.gameBoard.innerHTML = '';
      shuffledAnimals.forEach(animal => {
          this.gameBoard.appendChild(this.createCard(animal));
      });
      
      // Show start prompt instead of starting timer immediately
      this.startPrompt.classList.remove('hidden');
  }
  
  startGame() {
      // Hide the start prompt and start the timer
      this.startPrompt.classList.add('hidden');
      this.gameStarted = true;
      this.startTimer();
  }

  flipCard(card) {
      // Prevent card flipping if the game hasn't started yet
      if (!this.gameStarted || 
          this.selectedCards.length >= 2 || 
          card.classList.contains('flipped') || 
          card.classList.contains('matched')) return;

      card.classList.add('flipped');
      this.selectedCards.push(card);

      if (this.selectedCards.length === 2) {
          this.moves++;
          this.movesDisplay.textContent = `מהלכים: ${this.moves}`;
          this.checkMatch();
      }
  }

  checkMatch() {
      const [card1, card2] = this.selectedCards;
      
      // Get the animal name from each card
      const getName = (card) => {
          const frontContent = card.querySelector('.card-front');
          const img = frontContent.querySelector('img');
          const nameElement = frontContent.querySelector('p');
          
          if (img) {
              return img.alt; // Use alt text for image cards
          } else if (nameElement) {
              return nameElement.textContent; // Use text content for name cards
          }
          return null;
      };
      
      const name1 = getName(card1);
      const name2 = getName(card2);
      
      const isMatch = name1 && name2 && name1 === name2;

      if (isMatch) {
          this.matchedPairs++;
          card1.classList.add('matched');
          card2.classList.add('matched');
          card1.classList.add('flipped');  // Keep cards flipped (open)
          card2.classList.add('flipped');  // Keep cards flipped (open)
          card1.style.pointerEvents = 'none';
          card2.style.pointerEvents = 'none';
          this.selectedCards = [];

          if (this.matchedPairs === this.animals.length / 2) {
              this.endGame(true);
          }
      } else {
          setTimeout(() => {
              card1.classList.remove('flipped');
              card2.classList.remove('flipped');
              this.selectedCards = [];
          }, 1000);
      }
  }

  startTimer() {
      this.timer = setInterval(() => {
          this.timeLeft--;
          const minutes = Math.floor(this.timeLeft / 60);
          const seconds = this.timeLeft % 60;
          this.timerDisplay.textContent = `זמן: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

          if (this.timeLeft <= 0) {
              this.endGame(false);
          }
      }, 1000);
  }

  endGame(won) {
      clearInterval(this.timer);
      this.gameResult.classList.remove('hidden');
      this.resultMessage.textContent = won 
          ? `כל הכבוד! ניצחת תוך ${this.moves} מהלכים!` 
          : 'הזמן נגמר! נסה שוב.';
  }

  resetGame() {
      clearInterval(this.timer);
      this.moves = 0;
      this.timeLeft = 120;
      this.selectedCards = [];
      this.matchedPairs = 0;
      this.gameStarted = false;
      this.movesDisplay.textContent = 'מהלכים: 0';
      this.timerDisplay.textContent = 'זמן: 2:00';
      this.gameResult.classList.add('hidden');
      // Show the start prompt again
      this.initGame();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MemoryGame(animals);
});