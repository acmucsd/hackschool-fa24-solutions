const Activities = require("../models/activityModel");

// Create a GET async function to get all activities using the activity model schema
const getActivity = async (req, res) => {
    const activity = await Activities.find();
    res.status(200).json(activity);
}

// Create a POST async function to add an activity using the activity model schema
const postActivity = async (req, res) => {
    const { destination, activitySpot, rating, review } = req.body;

    if (!destination || !activitySpot || !rating) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const newActivity = await Trips.create(req.body);
    res.status(200).json(newActivity);
}

module.exports = { getActivity, postActivity };