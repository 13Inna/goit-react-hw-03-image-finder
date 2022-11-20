const API_KEY = "25372785-76718de9448bcd53825dc3fa4";
const BASE_URL = 'https://pixabay.com/api/?key=';
const OPTION = '}&image_type=photo&orientation=horizontal&per_page=12';




export default function fetchImage(search= '', page = 1) {
  return fetch(
    BASE_URL + API_KEY + `&q=${search}` + OPTION + `&page=${page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Nothing`));
  });
}
