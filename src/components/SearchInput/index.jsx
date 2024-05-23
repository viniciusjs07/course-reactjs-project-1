import PropTypes from 'prop-types';
import './styles.css';

export const SearchInput = ({ searchValue, handleSearch }) => {
  return (
    <input
      className="search-input"
      type="search"
      placeholder="Pesquise seu post aqui"
      value={searchValue}
      onChange={(event) => handleSearch(event)}
    ></input>
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  handleSearch: PropTypes.func,
};
