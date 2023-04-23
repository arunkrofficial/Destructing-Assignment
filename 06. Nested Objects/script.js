const form = document.querySelector('form');
const output = document.querySelector('#output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const person = {
    name: form.elements.name.value,
    address: {
      street: form.elements.street.value,
      city: form.elements.city.value,
      state: form.elements.state.value,
      zip: form.elements.zip.value
    }
  };
  
  const { name, street } = extractPersonInfo(person);
  
  output.innerHTML = `
    <p>Name: ${name}</p>
    <p>Street: ${street}</p>
  `;
});

function extractPersonInfo(person) {
  const { name, address: { street } } = person;
  return { name, street };
}
