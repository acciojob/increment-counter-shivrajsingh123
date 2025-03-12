document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");
    
    let counterValue = parseInt(counterElement.textContent) || 0;
    counterElement.textContent = counterValue;

    incrementButton.addEventListener("click", function () {
        alert(counterValue); // Changed: Only alert the raw number
        counterValue++;
        counterElement.textContent = counterValue;
    });
});
