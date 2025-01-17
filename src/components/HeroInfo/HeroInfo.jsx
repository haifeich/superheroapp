import HeroCard from "../HeroCard";
import styles from "./HeroInfo.module.css";

const HeroInfo = ({ heroInfo }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {heroInfo.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

export default HeroInfo;
