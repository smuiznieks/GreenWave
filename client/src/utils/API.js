import axios from 'axios';

export default {
    // Create new user
    createUser: function(userData) {
        return axios.post('/api/users', userData)
    },

    // User authentication
    userLogin: function(loginData) {
        return axios.post('/api/auth', loginData)
    },

    // Create new location
    createLocation: function(locData) {
        return axios.post('/api/locations', locData)
    },

    // Create new event
    createEvent: function(eventData) {
        return axios.post('/api/events', eventData)
    },

    updateEvent: function(eventData) {
        return axios.put(`/api/events/${eventData._id}`, eventData);
    },

    // Get events created by user
    getMyEvents: function() {
        return axios.get('/api/events')
    },

    // Get events created by user
    getAllEvents: function() {
        return axios.get('/api/events')
    },

    // Get locations created by user
    getMyLocations: function() {
        return axios.get('/api/locations')
    },

    getAllLocations: function() {
        return axios.get("/api/locations");
      },
}
