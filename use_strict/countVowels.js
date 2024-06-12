function countVowelsInString(str) {
  "use strict";

  const foundVowels = str.match(/[aeiou]/gi);

  return foundVowels ? foundVowels.length : null;
}

const totalVowels = countVowelsInString(
  "Practice summer 2024. Modsen. JavaScript. React. Redux"
);

console.log(`Количество гласных: ${totalVowels}`); // Количество гласных: 14
