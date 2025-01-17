import { useState } from "react";
import styles from "./DisplayTable.module.css";
import SearchBar from "../SearchBar";
import HeroInfo from "../HeroInfo";
import fetchHeroData from "../../api/superHeroApi";

// Define search states
const SearchStatus = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const DisplayTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [heroInfo, setHeroInfo] = useState(null);
  const [searchStatus, setSearchStatus] = useState(SearchStatus.INITIAL);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    if (searchStatus === SearchStatus.ERROR) {
      setSearchStatus(SearchStatus.INITIAL);
    }

    if (!searchTerm.trim()) return;

    setSearchStatus(SearchStatus.LOADING);

    try {
      const heroData = await fetchHeroData(searchTerm);
      if (heroData.results) {
        setHeroInfo(heroData.results);
        setSearchStatus(SearchStatus.SUCCESS);
      }
      if (heroData.error) {
        setErrorMessage(
          "Sorry! We could not find any Hero. Please try another one."
        );
        setSearchStatus(SearchStatus.ERROR);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage(error.message || "Failed to fetch hero data");
      setSearchStatus(SearchStatus.ERROR);
    }
  };

  const handleTermChange = (term) => {
    setSearchTerm(term);
  };

  const renderContent = () => {
    switch (searchStatus) {
      case SearchStatus.INITIAL:
        return null;
      case SearchStatus.LOADING:
        return (
          <div className={styles.loadingWrapper}>
            <div className={styles.spinner}></div>
            <p>Searching for hero...</p>
          </div>
        );
      case SearchStatus.SUCCESS:
        return <HeroInfo heroInfo={heroInfo} />;
      case SearchStatus.ERROR:
        return (
          <div className={styles.error}>
            <p>{errorMessage}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <SearchBar onTermChange={handleTermChange} onSearch={handleSearch} />
      {renderContent()}
    </div>
  );
};

export default DisplayTable;
