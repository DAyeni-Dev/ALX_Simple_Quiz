
function checkAnswer() {
   
    const correctAnswer = "4";

    const selectedOption = document.querySelector('input[name="quiz"]: checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "#28a745"; 
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "#dc3545"; 
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
