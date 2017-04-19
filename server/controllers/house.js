const db = require('../models/house')

module.exports = {
  create: (req, res) => {
    db.create(req.body, (err, house) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(house)
      }
    })
  },
  getAll: (req, res) => {
    db.find({}, (err, house) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(house)
      }
    })
  },
  update: (req, res) => {
    db.findByIdAndUpdate(req.params.id, req.body, (err, house) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(house)
      }
    })
  },
  delete: (req, res) => {
    db.findByIdAndRemove(req.params.id, (err, house) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(house)
      }
    })
  }
}
