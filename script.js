const generateBtn = document.getElementById("generate");
const generatedPass = document.getElementById("password");
const actualPassLength = document.getElementById("actual-pass-length");
const length = document.getElementById("length").value;
const lengthForChange = document.getElementById("length");
actualPassLength.textContent = length;
lengthForChange.addEventListener("change", (event) => {
  actualPassLength.textContent = event.target.value;
});

generateBtn.addEventListener("click", () => {
  let includeUppercase = document.getElementById("uppercase").checked;
  let includeLowercase = document.getElementById("lowercase").checked;
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSymbols = document.getElementById("symbols").checked;

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = "";
  if (includeUppercase) characters += uppercaseLetters;
  if (includeLowercase) characters += lowercase;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;
  if (characters === "") {
    alert(`please select at least one checkbox`);
    generatedPass.textContent = "Generated Password";
  }

  let password = "";
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  if (characters != "") {
    generatedPass.textContent = password || "Generated Password";
  }
});
