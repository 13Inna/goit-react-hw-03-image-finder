import PropTypes from 'prop-types';
import axios from 'axios';
export default function fetchImages(searchQuery, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=25372785-76718de9448bcd53825dc3fa4&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};