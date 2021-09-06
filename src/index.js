import debounce from '../node_modules/lodash.debounce';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import './styles.css';

const refs = {
  input: document.querySelector('#search'),
  container: document.querySelector('#container'),
};

function createGrid(data) {
  if (data.length > 1 && data.length <= 10) {
    const list = data.map(item => `<li>${item.name}</li>`).join('');
    refs.container.innerHTML = `<ul>${list}</ul>`;
  }
  if (data.length >= 11) {
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }
  if (data.length === 1) {
    const markupLanguage = data[0].languages.map(item => `<li>${item.name}</li>`).join('');
    refs.container.innerHTML = `
      <div>    
        <h1>${data[0].name}</h1>
        <ul class="countries_info">
            <li>Capital: ${data[0].capital}</li>
            <li>Population: ${data[0].population}</li>
            <li>languages:
                <ul class="language_info">
                    ${markupLanguage}
                </ul>
            </li>
        </ul>
      </div>
        <img src="${data[0].flag}">
        `;
  }
}

refs.input.addEventListener('input', debounce(fetchCountries, 500));
