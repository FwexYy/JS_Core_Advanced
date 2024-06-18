function sumDigit(num) {
  const convertToString = num.toString();
  const firstDigit = parseInt(convertToString[0]);
  const secondDigit = parseInt(convertToString[convertToString.length - 1]);

  const sumDigit = firstDigit + secondDigit;

  console.log(`Сумма первой и последней цифры числа ${num} равна: ${sumDigit}`);
}

sumDigit(62309); // 15
sumDigit(39120); // 2
sumDigit(98765); // 14
