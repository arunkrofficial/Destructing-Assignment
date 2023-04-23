function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
  }
  
  const extractButton = document.getElementById('extractButton');
  extractButton.addEventListener('click', () => {
    const inputArray = document.getElementById('inputArray').value;
    const arr = inputArray.split(',').map(Number);
    const result = extractElements(arr);
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.textContent = result.join(',');
  });
  