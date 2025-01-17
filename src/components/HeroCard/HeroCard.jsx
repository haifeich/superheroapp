import Favourite from "../Favourite";
import styles from "./HeroCard.module.css";

const HeroCard = ({ hero }) => {
  const { id, name, biography, powerstats, image } = hero;
  return (
    <article className={styles.wrapper}>
      <div className={styles.cardHeader}>
        <div>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.subtitle}>{biography["full-name"]}</p>
        </div>
        <Favourite id={id} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <img src={image.url} alt={name} className={styles.image} />
        </div>

        <div className={styles.statsContainer}>
          <h3 className={styles.statsTitle}>Power Stats</h3>
          <div className={styles.statsGrid}>
            {Object.entries(powerstats).map(([stat, value]) => (
              <div key={stat} className={styles.statItem}>
                <span className={styles.statLabel}>{stat}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroCard;
