//====================================================
// IMPORTS
//====================================================

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//====================================================
// CONFIGS
//====================================================

const app = express()
const port = 3000

//====================================================
// MONGO CONNECTION
//====================================================

mongoose.connect('mongodb://127.0.0.1:27017/todo-app');
// tas pats kas: mongodb://localhost:27017/books_db
// bet localhost neveikia :(((

const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

//====================================================
// MONGO DATABASE SCHEMA
//====================================================

const ToDoList = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todo', ToDoList)

//====================================================
// MIDDLEWARES
//====================================================

app.use(cors({ origin: 'http://localhost:27017 ' }))
app.use(express.json()) // use json

//====================================================
// ROUTES
//====================================================

// imti visas knygas
app.get('/todos', async (req, res) => {
  // 1
  //   res.send({message: 'GET /books NOT IMPLEMENTED'})

  // 2
  //const results = await Book.find()
  //return res.send(results)

  // 3
  try {
    const results = await Todo.find() // db.todos.find()
    return res.send(results)
} catch (error) {
    res.status(500).send({message: error.message})
}
})

// imti viena konkrecia knyga
app.get('/todo/:id', async (req, res) => {
    // 1 
    // res.send({message: 'GET /books NOT IMPLEMENTED'})

    // 2
    // console.log(req.params.id);
    // res.send({message: 'some book', id: req.params.id})

    // 3 
    try {
        let results = await  Todo.findById(req.params.id)
        if (!results) {
            return res.status(404).send({message: 'Todo not found'})
        }
        return res.send(results)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

// sukurti naują knygą
app.post('/todo', async (req, res) => {
    // 1
    // res.send({message: 'POST /books NOT IMPLEMENTED'})

    // 2 
    // res.send({message: 'new book', recieved_data: req.body})

    // 3
    try {
        if (req.body.title == null) {
            return res.status(400).send({message: 'Todo title is required'})
        }

        let todo = new Todo(req.body)

        // if (req.body.publishedYear < 1455) {
        //     return res.send({message: 'Book published year cannot be less than 1455'})
        // }

        // if (req.body.author == null) {
        //     book.author = 'Unknown'
        // }

        await todo.save()
        return res.send(todo)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

// atnaujinti konkrečią knygą
app.patch('/todo/:id', async (req, res) => {
    // 1
    // res.send({message: 'PATCH /books/:id NOT IMPLEMENTED'})

    // 2
    try {
        let todo = await Todo.findById(req.params.id)
        if (!todo) {
            return res.status(404).send({message: 'Todo not found'})
        }

        // jeigu title atėjo, perrašau dabartinės knygos title į naują
        if (req.body.title != null) {
            todo.title = req.body.title
        }

        // jeigu author atėjo, perrašau dabartinės knygos author į naują
        if (req.body.description != null) {
            todo.description = req.body.description
        }

        // jeigu description atėjo, perrašau dabartinės knygos description į naują
        if (req.body.completed != null) {
            todo.completed = req.body.completed
        }

        await todo.save()
        return res.send(todo)

    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})

// ištrinti konkrečią knygą
app.delete('/todo/:id', async (req, res) => {
    // 1
    // res.send({message: 'DELETE /books/:id NOT IMPLEMENTED'})

    // 2
    try {
        await Todo.findByIdAndDelete(req.params.id)
        return res.send({message: 'ToDo deleted successfully'})
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