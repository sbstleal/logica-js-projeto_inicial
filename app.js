let secretNumber;
let guess;
let maxRange = 50;

function generateSecretNumber() {
  // Gera um número aleatório entre 1 e o valor determinado na variável maxRange
  secretNumber = Math.floor(Math.random() * maxRange) + 1;
}

function playGame() {
  let attempts = 0;
  let guessedCorrectly = false;
  let wordAttempt;

  while (!guessedCorrectly) {
    guess = parseInt(prompt(`Digite o seu palpite, um número entre 1 e ${maxRange}:`));
    wordAttempt = attempts > 1 ? 'tentativas' : 'tentativa';   
    attempts++;

    if (guess === secretNumber) {
      alert(`Parabéns! Você acertou o número secreto em ${attempts} ${wordAttempt}.`);
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