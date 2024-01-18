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

mongoose.connect('mongodb://127.0.0.1:27017/mern-todo');

const db = mongoose.connection

db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Connected to database successfully'))

//====================================================
// MONGO DATABASE SCHEMA
//====================================================

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String, 
        default: Date.now()
    },
})

const Todo = mongoose.model('ToDo', TodoSchema)

//====================================================
// MIDDLEWARES
//====================================================

app.use(express.json()) // use json


//====================================================
// ROUTES
//====================================================

app.get('/todos', async (req, res) => {
    try {
    const results = await Todo.find()
    return res.send(results)
} catch (error) {
    res.status(500).send({message: error.message})
}
})

app.post('/todo/new', async (req, res) => { 
    try {
        if (req.body.text == null) {
            return res.status(400).send({message: 'Todo text is required'})
        }

        let todo = new Todo(req.body)

       await todo.save()
        return res.send(todo)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
});

app.delete('/todo/delete/:id', async (req, res) => { 
    try {
        await Todo.findByIdAndDelete(req.params.id)
        return res.send({message: 'Todo deleted successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
});

app.put('/todo/complete/:id', async (req, res) => {

    const todo = await Todo.findById(req.params.id)
    
    todo.complete = !todo.complete
    
    todo.save()
    
    res.json(todo)
    

    // try {
    //     await Todo.findById(req.params.id)
    //     return res.send({message: 'Todo deleted successfully'})
    // } catch (error) {
    //     return res.status(500).send({message: error.message})
    // }
});


//====================================================
// START SERVER
//====================================================

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })