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

    // Create new event
    createEvent: function(eventData) {
        return axios.post('/api/events', eventData)
    },

    // Edit an existing event
    updateEvent: function(eventData) {
        return axios.put(`/api/events/${eventData._id}`, eventData);
    },

    // Get events created by user
    getMyEvents: function() {
        return axios.get('/api/events')
    },

    // Get all events
    getAllEvents: function() {
        return axios.get('/api/events')
    },

    // Delete an event
    deleteEvent: function(id) {
        return axios.delete('/api/events/' + id);
    },

    // Create new location
    createLocation: function(locData) {
        return axios.post('/api/locations', locData)
    },

    // Edit an existing location
    updateLocation: function(locationData) {
        return axios.put(`/api/locations/${locationData._id}`, locationData);
    },

    // Get locations created by user
    getMyLocations: function() {
        return axios.get('/api/locations');
    },

    // Get all locations
    getAllLocations: function() {
        return axios.get('/api/locations');
    },

    deleteLocation: function(id) {
        return axios.delete('/api/locations/' + id);
    }
}
