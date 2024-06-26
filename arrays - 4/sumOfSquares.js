function squareSum(num) {
  return num.reduce((sum, value) => sum + value ** 2, 0);
}

const result = squareSum([1, 2, 3, 4, 5]); // Сумма квадратов элементов массива равна: 55
console.log(`Сумма квадратов элементов массива равна: ${result}`);
