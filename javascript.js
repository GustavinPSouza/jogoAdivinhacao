var randomNumber;
var attempts;

    function newGame() {
      randomNumber = Math.floor(Math.random() * 101);
      attempts = 0;
      document.getElementById("result").innerHTML = "";
      document.getElementById("guess").value = "";
    }

    function checkGuess() {
      var guess = parseInt(document.getElementById("guess").value);

      if (isNaN(guess) || guess < 0 || guess > 100) {
        alert("Por favor, digite um número válido entre 0 e 100.");
        return;
      }

      attempts++;

      if (guess === randomNumber) {
        var points = 100 - attempts + 1;
        document.getElementById("result").innerHTML = "Parabéns! Você acertou em " + attempts + " tentativa(s). Pontuação: " + points;
      } else if (guess < randomNumber) {
        document.getElementById("result").innerHTML = "Tente um número maior.";
      } else {
        document.getElementById("result").innerHTML = "Tente um número menor.";
      }
    }

    newGame();