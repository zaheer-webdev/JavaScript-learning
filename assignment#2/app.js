let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let guess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (guess === secretNumber) {
        result.innerHTML = "🎉 Correct! You guessed the number!";
    } 
    else if (guess < secretNumber) {
        result.innerHTML = "📈 Too low! Try again.";
    } 
    else {
        result.innerHTML = "📉 Too high! Try again.";
    }
}