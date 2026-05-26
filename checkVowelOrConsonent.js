function checkVowelOrConsonent(char) {
  if (typeof char === "number") {
    console.log("Invalid Character");
    return;
  }
  if (!char && char.length !== 1) {
    console.log("Please enter a single character");
    return;
  }
  let chars = char.toLowerCase();

  let vowels = "aeiou";
  if (vowels.includes(chars)) {
    console.log(chars, ": is Vowesl");
  } else {
    console.log(chars, ": is Consonent");
  }
}

checkVowelOrConsonent("e");
checkVowelOrConsonent("A");
checkVowelOrConsonent("");
