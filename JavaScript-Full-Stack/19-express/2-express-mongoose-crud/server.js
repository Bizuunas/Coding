//====================================================
// IMPORTS
//====================================================

const express = require('express')
const mongoose = require('mongoose')

//====================================================
// CONFIGS
//====================================================

const app = express()
const port = 3000

//====================================================
// MONGO CONNECTION
//====================================================

mongoose.connect('mongodb://127.0.0.1:27017/books_db');
// tas pats kas: mongodb://localhost:27017/books_db
// bet localhost neveikia :(((

const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

//====================================================
// MIDDLEWARES
//====================================================

app.use(express.json()) // use json

//====================================================
// ROUTES
//====================================================

// imti visas knygas
app.get('/books', (req, res) => {
  res.send({message: 'GET /books NOT IMPLEMENTED'})
})

// imti viena konkrecia knyga
app.get('/books/:id', (req, res) => {
    res.send({message: 'GET /books NOT IMPLEMENTED'})
})

// sukurti naują knygą
app.post('/books', (req, res) => {
    res.send({message: 'POST /books NOT IMPLEMENTED'})
})

// atnaujinti konkrečią knygą
app.patch('/books/:id', (req, res) => {
    res.send({message: 'PATCH /books/:id NOT IMPLEMENTED'})
})

// ištrinti konkrečią knygą
app.delete('/books/:id', (req, res) => {
    res.send({message: 'DELETE /books/:id NOT IMPLEMENTED'})
})

//====================================================
// START SERVER
//====================================================

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})