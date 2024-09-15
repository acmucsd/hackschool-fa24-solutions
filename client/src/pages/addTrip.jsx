import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
        <label for="destination">Destination:</label>
        <input type="text" className="destination" name="destination" required />

        <label for="startDate">Start Date:</label>
        <input type="date" className="startDate" name="startDate" required />

        <label for="endDate">End Date:</label>
        <input type="date" className="endDate" name="endDate" required />

        <label for="entry">Journal Entry:</label>
        <textarea className="entry" name="entry" required></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  )
};

export default AddTrip;