//====================================================
// IMPORTS
//====================================================

const express = require('express');
const mongoose = require('mongoose');

//====================================================
// CONFIGS
//====================================================

const app = express()
const port = 3000

//====================================================
// MONGO CONNECTION
//====================================================

mongoose.connect('mongodb://127.0.0.1:27017/pacientai_db');
// tas pats kas: mongodb://localhost:27017/books_db
// bet localhost neveikia :(((

const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

//====================================================
// MONGO DATABASE SCHEMA
//==================================================== 

const PacientuSchema = new mongoose.Schema({
    vardas: String,
    pavarde: String,
    gimimoData: String,
    adresas: String,
    socialinePadetis: String,
    lytis: String
});

const Pacient = mongoose.model('Pacient', PacientuSchema)

//====================================================
// MIDDLEWARES
//====================================================

app.use(express.json()) // use json

//====================================================
// ROUTES
//====================================================

// imti visas knygas
app.get('/pacientai', async (req, res) => {
    // 1
    //   res.send({message: 'GET /books NOT IMPLEMENTED'})
  
    // 2
    //const results = await Book.find()
    //return res.send(results)
  
    // 3
    try {
      const results = await Pacient.find() // db.books.find()
      return res.send(results)
    } catch (error) {
      res.status(500).send({message: error.message})
    }
    })
  
  // imti viena konkrecia knyga
  app.get('/pacient/:id', async (req, res) => {
      // 1 
      // res.send({message: 'GET /books NOT IMPLEMENTED'})
  
      // 2
      // console.log(req.params.id);
      // res.send({message: 'some book', id: req.params.id})
  
      // 3 
      try {
          let results = await Pacient.findById(req.params.id)
          if (!results) {
              return res.status(404).send({message: 'Pacientas nerastas'})
          }
          return res.send(results)
      } catch (error) {
          return res.status(500).send({message: error.message})
      }
  })
  
  // sukurti naują knygą
  app.post('/pacient', async (req, res) => {
      // 1
      // res.send({message: 'POST /books NOT IMPLEMENTED'})
  
      // 2 
      // res.send({message: 'new book', recieved_data: req.body})
  
      // 3
      try {
          if (req.body.vardas == null) {
              return res.status(400).send({message: 'Paciento vardas yra būtinas'})
          }
  
          let pacient = new Pacient(req.body)
  
          // if (req.body.publishedYear < 1455) {
          //     return res.send({message: 'Book published year cannot be less than 1455'})
          // }
  
          // if (req.body.author == null) {
          //     book.author = 'Unknown'
          // }
  
          await pacient.save()
          return res.send(pacient)
      } catch (error) {
          return res.status(500).send({message: error.message})
      }
  })
  
  // atnaujinti konkrečią knygą
  app.patch('/pacient/:id', async (req, res) => {
      // 1
      // res.send({message: 'PATCH /books/:id NOT IMPLEMENTED'})
  
      // 2
      try {
          let pacient = await Pacient.findById(req.params.id)
          if (!pacient) {
              return res.status(404).send({message: 'Pacientas nerastas'})
          }
  
            //   // jeigu title atėjo, perrašau dabartinės knygos title į naują
            //   if (req.body.title != null) {
            //       book.title = req.body.title
            //   }
    
            //   // jeigu author atėjo, perrašau dabartinės knygos author į naują
            //   if (req.body.author != null) {
            //       book.author = req.body.author
            //   }
    
            //   // jeigu description atėjo, perrašau dabartinės knygos description į naują
            //   if (req.body.description != null) {
            //       book.description = req.body.description
            //   }
    
            //   // jeigu publishedYear atėjo, perrašau dabartinės knygos publishedYear į naują
            //   if (req.body.publishedYear != null) {
            //       book.publishedYear = req.body.publishedYear
            //   }
    
            //   // jeigu publishedYear atėjo, perrašau dabartinės knygos publishedYear į naują
            //   if (req.body.publishedYear != null) {
            //       if (req.body.publishedYear > new Date().getFullYear()) {
            //           return res.status(400).send({message: 'Book published year cannot be more than current year'})
            //       } else {
            //           pacient.publishedYear = req.body.publishedYear
            //       }
            //   }
    
            //   // jeigu price atėjo, perrašau dabartinės knygos price į naują
            //   if (req.body.price != null) {
            //     pacient.price = req.body.price
            //   }
  
          await pacient.save()
          return res.send(pacient)
  
      } catch (error) {
          return res.status(500).send({message: error.message})
      }
  })
  
  // ištrinti konkrečią knygą
  app.delete('/pacient/:id', async (req, res) => {
      // 1
      // res.send({message: 'DELETE /books/:id NOT IMPLEMENTED'})
  
      // 2
      try {
          await Pacient.findByIdAndDelete(req.params.id)
          return res.send({message: 'Pacientas sėkmingai pašalintas'})
      } catch (error) {
          return res.status(500).send({message: error.message})
      }
  })
  
  //====================================================
  // START SERVER
  //====================================================
  
  app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })