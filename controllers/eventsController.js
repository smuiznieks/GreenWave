const db = require('../models');

module.exports = {
  createEvent: function(req, res) {
    db.Event.create(req.body)
    .then(event => res.send(event))
    .catch(err => res.status(500).send(err));
  },
  findAll: function(req, res) {
    db.Event.find().sort({ date: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  getMyEvents: function(req, res) {
    db.Event.find({ createdBy: req.params.username }).sort({ date: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  updateEvent: function(req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  updateAttendees: function(req, res) {
    db.Event.update({ _id: req.params.id}, { $push: { attendees: req.body.attendees }})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  updateRsvp: function(req, res) {
    db.Rsvp.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  getRsvp: function(req, res) {
    db.Rsvp.find({ user: req.params.username})
    .populate('eventId')
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
