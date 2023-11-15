const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

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

app.start = app.listen = function(){
  return server.listen.apply(server, arguments)
}

app.start(port, function() {
  io.on("connection", (socket) => {
    console.log("hello")
  })

  console.log(`Express app running on port ${port}`)
})