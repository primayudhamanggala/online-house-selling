const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema

let houseSchema = new Schema({
  owner       : String,
  address     : String,
  contact     : String,
  image       : String,
  description : String,
  price       : Number,
  lat         : Number,
  lng         : Number
})

let House = mongoose.model('House', houseSchema)

module.exports = House;
