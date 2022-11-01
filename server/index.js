const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')
const { Socket } = require('dgram')
app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
  origin: 'http://localhost:4001',
  methods: ['GET', 'Post'],
  }
})

io.on('connection', (socket)=> {
  console.log(socket.id)

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id)
  })
})

server.listen(4001, () => {
  console.log('Server is running')
})