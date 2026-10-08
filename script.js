const form = document.getElementById("form");
const result = document.getElementById("result");
const feeInput = document.getElementById("annual-fee");
const creditInput = document.getElementById("credit-value");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fee = Number(feeInput.value);
  const credits = Number(creditInput.value);
  const net = fee - credits;

  result.textContent = "Estimated annual cost after credits: $" + net + ".";
});