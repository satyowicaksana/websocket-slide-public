if(process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const cors = require('cors')
const PORT = process.env.PORT
app.use(cors())

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>')
})

io.on('connection', (socket) => {
  socket.on('change slide', slide => {
    socket.broadcast.emit('set slide', slide)
  })
})

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})