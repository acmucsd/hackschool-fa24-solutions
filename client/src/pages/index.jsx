import TripCard from "@/components/TripCard";
import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Your Trips</h2>
      <div className={styles.trip_container}>
      <TripCard destination="Hello" startDate={Date('2019-09-10')} endDate={Date('2019-09-14')} journalEntry="Hello"/>
      </div>
    </div>
  );
};

export default Home;
