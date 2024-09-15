import styles from "../styles/TripForm.module.css";

const AddActivity = () => {
  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>
        What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
      </p>
      <form className={styles.tripForm}>
        <label for="destination">Choose your trip:</label>
        <select name="destinationPicker" className="destinationPicker">
          <option value="Honolulu, Hawaii">Honolulu, Hawaii</option>
          <option value="London, UK">London, UK</option>
        </select>
        <label for="activity">Activity:</label>
        <input type="text" className="activity" name="activity" required />
        <label for="rating">Rating (1-5):</label>
        <select name="rating" className="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label for="review">Review:</label>
        <textarea className="review" name="review" required></textarea>

        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivity;