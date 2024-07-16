const generateBtn = document.getElementById("generate");
const generatedPass = document.getElementById("password");

generateBtn.addEventListener("click", () => {
  const length = document.getElementById("length").value;
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
  }

  let password = "";
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  if (characters != "") generatedPass.textContent = password;
  console.log(password);
});
