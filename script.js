//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;

    const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    incrementBtn.addEventListener("click", function () {
        alert(`Current value: ${counter}`); // Show alert before incrementing
        counter++;
        counterElement.textContent = counter; // Update the counter display
    });
});