function numberСheck(num1, num2) {
  if (num2 === 0) {
    throw new Error("Второе число является нулем");
  }

  return num1 / num2;
}

try {
  console.log(numberСheck(189, 100)); // 1.89
  console.log(numberСheck(19, 0)); // Генерация ошибки
} catch (error) {
  console.log(error.message); // Второе число является нулем
}
