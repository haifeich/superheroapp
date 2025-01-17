import { useState, useEffect } from "react";
import { Star } from "react-feather";
import styles from "./Favourite.module.css";

const Favourite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const savedHeroes =
      JSON.parse(localStorage.getItem("favoriteHeroes")) || [];
    setIsFavorite(savedHeroes.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const savedHeroes =
      JSON.parse(localStorage.getItem("favoriteHeroes")) || [];

    if (isFavorite) {
      // Remove from favorites
      const updatedHeroes = savedHeroes.filter((heroId) => heroId !== id);
      localStorage.setItem("favoriteHeroes", JSON.stringify(updatedHeroes));
      setIsFavorite(false);
    } else {
      // Add to favorites
      const updatedHeroes = [...savedHeroes, id];
      localStorage.setItem("favoriteHeroes", JSON.stringify(updatedHeroes));
      setIsFavorite(true);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={styles.action}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Star
        size={24}
        fill={isFavorite ? "gold" : "none"}
        color={isFavorite ? "gold" : "gray"}
      />
    </button>
  );
};

export default Favourite;
