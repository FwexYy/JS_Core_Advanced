function simulateAPIRequest(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      const result = url.slice(-1);
      resolve(result);
    }, delay);
  });
}

async function fetchFromMultipleAPIs(urls) {
  try {
    const allPromises = urls.map(simulateAPIRequest);
    const responses = await Promise.all(allPromises);
    return responses;
  } catch (err) {
    console.error(`Ошибка при получении данных: ${err.message}`);
    throw err;
  }
}

const apiEndpoints = [
  "https://example.com/data1",
  "https://example.com/data2",
  "https://example.com/data3",
  "https://example.com/data4",
];

(async () => {
  try {
    const finalResult = await fetchFromMultipleAPIs(apiEndpoints);
    console.log("Объединенный результат:", finalResult);
  } catch (err) {
    console.error("Произошла ошибка:", err.message);
  }
})();
