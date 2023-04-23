const form = document.getElementById('form');
const textInput = document.getElementById('text');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const text = textInput.value.toLowerCase().trim();
	const words = text.split(' ');
	const wordCount = new Map();

	for (const word of words) {
		if (wordCount.has(word)) {
			wordCount.set(word, wordCount.get(word) + 1);
		} else {
			wordCount.set(word, 1);
		}
	}

	let resultHTML = '';
	for (const [word, count] of wordCount) {
		resultHTML += `<p>${word}: ${count}</p>`;
	}

	resultDiv.innerHTML = resultHTML;
});
