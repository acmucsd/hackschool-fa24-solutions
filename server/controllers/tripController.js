const Trips = require('../models/tripModel');

const getTrip = async (req, res) => {
    const trip = await Trips.find();
    res.status(200).json(trip);
}

const postTrip = async (req, res) => {
    const { trip } = req.body;
    const { destination, startDate, endDate, journalEntry } = trip;

    if (!destination || !startDate || !journalEntry) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) {
        return res.status(400).json({ error: 'End date must be after start date' });
    }
    else {
        const newTrip = await Trips.create(req.body);
        res.status(200).json(newTrip);
    }
}

module.exports = { getTrip, postTrip };
