import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Image width={50} height={50} src="/travel.png"></Image>
        <Link href="/">HackTravels</Link>
      </div>
      <div className={styles.nav_buttons}>
        <Link href="/addTrip">Add A Trip</Link>
      </div>
    </div>
  );
};

export default Navbar;
