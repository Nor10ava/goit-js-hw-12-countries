export default function fetchCountries(searchQuery) {
  searchQuery.preventDefault();
  const value = refs.input.value;
  fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(response => response.json())
    .then(createGrid)
    .catch(error => console.log(error));
}
