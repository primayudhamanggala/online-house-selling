const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema

let houseSchema = new Schema({
  owner       : String,
  address     : String,
  contact     : String,
  image       : String,
  description : String,
  price       : Number,
  mapLocation : Array
})

let House = mongoose.model('House', houseSchema)

module.exports = House;
