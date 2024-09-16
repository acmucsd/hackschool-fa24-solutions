import axios from 'axios';

// Use the port number that is defined in your .env file
const serverURL = `http://localhost:4000`;

const TravelApi = {
    getTrip: () => axios.get(`${serverURL}/api/trip`),

    postTrip: (payload) => axios.post(`${serverURL}/api/trip`, payload),

    getActivity: () => axios.get(`${serverURL}/api/activity`),

    postActivity: (payload) => axios.post(`${serverURL}/api/activity`, payload)
}

export default TravelApi;