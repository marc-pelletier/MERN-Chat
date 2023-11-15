const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')


require('dotenv').config()

//Database
require('./config/database')

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))
app.use(require('./config/checkToken'))

// API Routes
app.use('/api/users', require('./routes/api/users'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})