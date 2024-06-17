function simulateAPIRequest(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      const result = url.slice(-1);
      resolve(result);
    }, delay);
  });
}

function fetchFromMultipleAPIs(urls) {
  const allPromises = urls.map(simulateAPIRequest);

  return Promise.all(allPromises)
    .then((responses) => {
      return responses;
    })
    .catch((err) => {
      console.error(`Ошибка при получении данных: ${err.message}`);
      throw err;
    });
}

const apiEndpoints = [
  "https://example.com/data1",
  "https://example.com/data2",
  "https://example.com/data3",
  "https://example.com/data4",
];

fetchFromMultipleAPIs(apiEndpoints)
  .then((finalResult) => {
    console.log("Объединенный результат:", finalResult);
  })
  .catch((err) => {
    console.error("Произошла ошибка:", err.message);
  });
