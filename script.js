//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");
    
    let counterValue = parseInt(counterElement.textContent) || 0;
    counterElement.textContent = counterValue;

    incrementButton.addEventListener("click", function () {
        alert(`Current value: ${counterValue}`);
        counterValue++;
        counterElement.textContent = counterValue;
    });
});
