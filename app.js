let secretNumber;
let guess;

function generateSecretNumber() {
  // Gera um número aleatório entre 1 e 100
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function playGame() {
  let attempts = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly) {
    guess = parseInt(prompt('Digite o seu palpite:'));
    attempts++;

    if (guess === secretNumber) {
      alert(`Parabéns! Você acertou o número secreto em ${attempts} tentativas.`);
      guessedCorrectly = true;
    } else if (guess < secretNumber) {
      alert('O número digitado é menor que o número secreto. Tente novamente.');
    } else if (guess > secretNumber) {
      alert('O número digitado é maior que o número secreto. Tente novamente.');
    }
  }
}

generateSecretNumber();
playGame();