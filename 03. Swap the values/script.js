// Get the input fields and swap button
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const swapBtn = document.getElementById("swapBtn");

// Add event listener to the swap button
swapBtn.addEventListener("click", swapVariables);

// Function to swap the values of two variables
function swapVariables() {
  // Destructure the values of x and y into an array
  [xInput.value, yInput.value] = [yInput.value, xInput.value];
  // Update the result element with the new values
  document.getElementById("result").textContent = `New values: X=${xInput.value}, Y=${yInput.value}`;
}
