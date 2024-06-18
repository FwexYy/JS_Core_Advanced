function randomNumber() {
  return new Promise((resolve, reject) => {
    const newNumber = Math.floor(Math.random() * 11);

    setTimeout(() => {
      if (newNumber >= 1 && newNumber <= 5) {
        resolve(newNumber);
      } else {
        reject(new Error(`Сгенерированное число больше 5`));
      }
    }, newNumber * 1000);
  });
}

const handleSuccess = (result) => {
  console.log("Успех. Сгенерированное число:", result);
};

const handleError = (error) => {
  console.error(error.message);
};

randomNumber().then(handleSuccess).catch(handleError);
