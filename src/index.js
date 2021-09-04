const refs = {
  input: document.querySelector('#search'),
  container: document.querySelector('#container'),
};
const handlerSubmit = e => {
  e.preventDefault();
  const value = refs.input.value;
  fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
};
function renderCollection(data) {
  data.forEach(el => createGrid(el));
}
function createGrid(data) {
  const list = data.map(item => `<li>${item.name}</li>`).join('');
  refs.container.innerHTML = `<ul>${list}</ul>`;
}

refs.input.addEventListener('input', handlerSubmit);
