import styles from "./SearchBar.module.css";

const SearchBar = ({ onTermChange, onSearch }) => {
  const handleTermChange = (event) => {
    onTermChange(event.target.value);
  };

  return (
    <form
      className={styles.wrapper}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <input
        type="text"
        placeholder="Enter superhero name..."
        onChange={handleTermChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
