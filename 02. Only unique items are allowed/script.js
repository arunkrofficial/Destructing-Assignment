function removeDuplicates() {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number);
    const uniqueNumbers = [...new Set(numbers)];
    document.getElementById('result').textContent = uniqueNumbers.join(', ');
  }
  