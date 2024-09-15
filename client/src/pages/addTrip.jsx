import styles from "@/styles/TripForm.module.css";

const AddTrip = () => {
  return (
    <div class={styles.addTrip}>
      <h2>Add a Trip</h2>
      <form class={styles.tripForm}>
        <label for="destination">Destination:</label>
        <input type="text" class="destination" name="destination" required />

        <label for="start-date">Start Date:</label>
        <input type="date" class="start-date" name="start-date" required />

        <label for="end-date">End Date:</label>
        <input type="date" class="end-date" name="end-date" required />

        <label for="entry">Journal Entry:</label>
        <textarea class="entry" name="entry" required></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTrip;
