const SUPPORTED_LANGS = ['he', 'en', 'es', 'ko'];

const translations = {
  he: {
    ui: {
      document_title: 'משחק זיכרון חיות',
      game_title: 'משחק זיכרון חיות',
      timer_label: 'זמן',
      moves_label: 'מהלכים',
      language_label: 'שפה',
      start_button: 'התחל',
      restart_button: 'שחק שוב',
      welcome_title: 'ברוכים הבאים למשחק זיכרון חיות!',
      win_message: 'כל הכבוד! ניצחת תוך {moves} מהלכים!',
      lose_message: 'הזמן נגמר! נסה שוב.'
    },
    animals: [
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
    ]
  },
  en: {
    ui: {
      document_title: 'Animal Memory Game',
      game_title: 'Animal Memory Game',
      timer_label: 'Time',
      moves_label: 'Moves',
      language_label: 'Language',
      start_button: 'Start',
      restart_button: 'Play Again',
      welcome_title: 'Welcome to the Animal Memory Game!',
      win_message: 'Great job! You won in {moves} moves!',
      lose_message: 'Time is up! Try again.'
    },
    animals: [
      { name: 'Horse', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cavallo_lipizzano.jpg' },
      { name: 'Horse', type: 'name', image: null },
      { name: 'Sheep', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg/640px-Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg' },
      { name: 'Sheep', type: 'name', image: null },
      { name: 'Giraffe', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg' },
      { name: 'Giraffe', type: 'name', image: null },
      { name: 'Zebra', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Zebra', type: 'name', image: null },
      { name: 'Monkey', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1661962655543-b88aafe382e9?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Monkey', type: 'name', image: null },
      { name: 'Penguin', type: 'image', image: 'https://images.unsplash.com/photo-1551306416-bdf623f9bccc?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Penguin', type: 'name', image: null },
      { name: 'Kangaroo', type: 'image', image: 'https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?q=80&w=2595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Kangaroo', type: 'name', image: null },
      { name: 'Dolphin', type: 'image', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Dolphin', type: 'name', image: null },
      { name: 'Tiger', type: 'image', image: 'https://images.unsplash.com/photo-1551972251-12070d63502a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Tiger', type: 'name', image: null },
      { name: 'Koala', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg' },
      { name: 'Koala', type: 'name', image: null }
    ]
  },
  es: {
    ui: {
      document_title: 'Juego de Memoria de Animales',
      game_title: 'Juego de Memoria de Animales',
      timer_label: 'Tiempo',
      moves_label: 'Movimientos',
      language_label: 'Idioma',
      start_button: 'Comenzar',
      restart_button: 'Jugar de nuevo',
      welcome_title: '¡Bienvenido al Juego de Memoria de Animales!',
      win_message: '¡Muy bien! ¡Ganaste en {moves} movimientos!',
      lose_message: '¡Se acabó el tiempo! Inténtalo de nuevo.'
    },
    animals: [
      { name: 'Caballo', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cavallo_lipizzano.jpg' },
      { name: 'Caballo', type: 'name', image: null },
      { name: 'Oveja', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg/640px-Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg' },
      { name: 'Oveja', type: 'name', image: null },
      { name: 'Jirafa', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg' },
      { name: 'Jirafa', type: 'name', image: null },
      { name: 'Cebra', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Cebra', type: 'name', image: null },
      { name: 'Mono', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1661962655543-b88aafe382e9?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Mono', type: 'name', image: null },
      { name: 'Pingüino', type: 'image', image: 'https://images.unsplash.com/photo-1551306416-bdf623f9bccc?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Pingüino', type: 'name', image: null },
      { name: 'Canguro', type: 'image', image: 'https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?q=80&w=2595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Canguro', type: 'name', image: null },
      { name: 'Delfín', type: 'image', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Delfín', type: 'name', image: null },
      { name: 'Tigre', type: 'image', image: 'https://images.unsplash.com/photo-1551972251-12070d63502a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Tigre', type: 'name', image: null },
      { name: 'Coala', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg' },
      { name: 'Coala', type: 'name', image: null }
    ]
  },
  ko: {
    ui: {
      document_title: '동물 기억력 게임',
      game_title: '동물 기억력 게임',
      timer_label: '시간',
      moves_label: '이동',
      language_label: '언어',
      start_button: '시작',
      restart_button: '다시 하기',
      welcome_title: '동물 기억력 게임에 오신 것을 환영합니다!',
      win_message: '{moves}번 만에 이겼어요! 잘했어요!',
      lose_message: '시간이 다 되었어요! 다시 해 보세요.'
    },
    animals: [
      { name: '말', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Cavallo_lipizzano.jpg' },
      { name: '말', type: 'name', image: null },
      { name: '양', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg/640px-Stubai_-_Tiroler_Bergschaf_-BT-_01.jpg' },
      { name: '양', type: 'name', image: null },
      { name: '기린', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg' },
      { name: '기린', type: 'name', image: null },
      { name: '얼룩말', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: '얼룩말', type: 'name', image: null },
      { name: '원숭이', type: 'image', image: 'https://plus.unsplash.com/premium_photo-1661962655543-b88aafe382e9?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: '원숭이', type: 'name', image: null },
      { name: '펭귄', type: 'image', image: 'https://images.unsplash.com/photo-1551306416-bdf623f9bccc?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: '펭귄', type: 'name', image: null },
      { name: '캥거루', type: 'image', image: 'https://images.unsplash.com/photo-1551270988-87c5ea57cdfe?q=80&w=2595&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: '캥거루', type: 'name', image: null },
      { name: '돌고래', type: 'image', image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: '돌고래', type: 'name', image: null },
      { name: '호랑이', type: 'image', image: 'https://images.unsplash.com/photo-1551972251-12070d63502a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: '호랑이', type: 'name', image: null },
      { name: '코알라', type: 'image', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg' },
      { name: '코알라', type: 'name', image: null }
    ]
  }
};

function detectInitialLang() {
  const stored = localStorage.getItem('lang');
  if (stored && SUPPORTED_LANGS.includes(stored)) {
    return stored;
  }
  const nav = navigator.language || navigator.userLanguage || '';
  const lower = nav.toLowerCase();
  if (lower.startsWith('he')) return 'he';
  if (lower.startsWith('es')) return 'es';
  if (lower.startsWith('ko')) return 'ko';
  return 'en';
}

let currentLang = detectInitialLang();

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  try {
    localStorage.setItem('lang', lang);
  } catch (e) {}
}

function t(key) {
  return translations[currentLang].ui[key];
}

function getAnimals() {
  return translations[currentLang].animals;
}

function isRTL() {
return currentLang === 'he';
}

function getWinMessage(moves) {
  return translations[currentLang].ui.win_message.replace('{moves}', moves);
}

function getLoseMessage() {
  return translations[currentLang].ui.lose_message;
}

class MemoryGame {
  constructor() {
      this.gameBoard = document.getElementById('game-board');
      this.timerDisplay = document.getElementById('timer');
      this.movesDisplay = document.getElementById('moves');
      this.resultMessage = document.getElementById('result-message');
      this.restartBtn = document.getElementById('restart-btn');
      this.gameResult = document.getElementById('game-result');
      this.startPrompt = document.getElementById('start-prompt');
      this.startBtn = document.getElementById('start-btn');
      this.langSelect = document.getElementById('lang-select');

      this.animals = getAnimals();
      this.moves = 0;
      this.timeLeft = 120;
      this.selectedCards = [];
      this.matchedPairs = 0;
      this.gameStarted = false;

      this.restartBtn.addEventListener('click', () => this.resetGame());
      this.startBtn.addEventListener('click', () => this.startGame());
      this.setupLanguageSwitcher();
      this.applyLanguage();
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

  applyLanguage() {
      const htmlEl = document.documentElement;
      htmlEl.lang = currentLang;
      htmlEl.dir = isRTL() ? 'rtl' : 'ltr';

      document.title = t('document_title');
      const titleElement = document.querySelector('.game-container h1');
      if (titleElement) {
          titleElement.textContent = t('game_title');
      }

      this.timerDisplay.textContent = `${t('timer_label')}: 2:00`;
      this.movesDisplay.textContent = `${t('moves_label')}: 0`;

      const welcomeTitle = this.startPrompt.querySelector('h2');
      if (welcomeTitle) {
          welcomeTitle.textContent = t('welcome_title');
      }

      this.startBtn.textContent = t('start_button');
      this.restartBtn.textContent = t('restart_button');

      const langLabel = document.getElementById('lang-label');
      if (langLabel) {
          langLabel.textContent = `${t('language_label')}:`;
      }
  }

  setupLanguageSwitcher() {
      if (!this.langSelect) return;
      this.langSelect.value = currentLang;
      this.langSelect.addEventListener('change', (e) => {
          const newLang = e.target.value;
          if (!SUPPORTED_LANGS.includes(newLang) || newLang === currentLang) return;
          setLanguage(newLang);
          this.changeLanguage();
      });
  }

  changeLanguage() {
      clearInterval(this.timer);
      this.timeLeft = 120;
      this.moves = 0;
      this.selectedCards = [];
      this.matchedPairs = 0;
      this.gameStarted = false;
      this.animals = getAnimals();
      this.gameResult.classList.add('hidden');
      this.applyLanguage();
      this.initGame();
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
          this.movesDisplay.textContent = `${t('moves_label')}: ${this.moves}`;
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
          this.timerDisplay.textContent = `${t('timer_label')}: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

          if (this.timeLeft <= 0) {
              this.endGame(false);
          }
      }, 1000);
  }

  endGame(won) {
      clearInterval(this.timer);
      this.gameResult.classList.remove('hidden');
      this.resultMessage.textContent = won 
          ? getWinMessage(this.moves)
          : getLoseMessage();
  }

  resetGame() {
      clearInterval(this.timer);
      this.moves = 0;
      this.timeLeft = 120;
      this.selectedCards = [];
      this.matchedPairs = 0;
      this.gameStarted = false;
      this.movesDisplay.textContent = `${t('moves_label')}: 0`;
      this.timerDisplay.textContent = `${t('timer_label')}: 2:00`;
      this.gameResult.classList.add('hidden');
      // Show the start prompt again
      this.initGame();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MemoryGame();
});