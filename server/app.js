const express     = require('express'),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      app         = express()
      cors        = require('cors')


let dbURI         = 'mongodb://localhost/house'

mongoose.connect(dbURI)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

const house = require('./routes/house')

app.use('/', house)

app.listen(process.env.PORT || 3000)
