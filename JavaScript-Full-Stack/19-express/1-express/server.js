const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//http://localhost:3000/
app.get('/', (req, res) => {
//   res.send({message: 'Labas, programavime!', date: new Date()})
    res.send({message: 'Labas, programavime!'})
})

app.get('/about', (req, res) => {
    res.send({message: 'About us', content: 'We are the Best!'})
})

app.get('/contact', (req, res) => {
    let title = 'Contact us'
    let phone = '+370600 00000'
    let email = 'info@web.com'
    res.send({title, phone, email})
})

// REST API
// GET: /posts
// GET: /posts/:id
// POST: /posts
// PACH: /posts/:id
// DELETE: /posts/:id

app.get('/posts', (req, res) => {
    res.send({message: 'All posts'})
})

app.get('/posts/:id', (req, res) => {
    // console.log(req.params); 
    res.send({message: `Posts with id ${req.params.id}`})
})

app.post('/posts', (req, res) => {
    console.log(req.body);
    res.send({message: 'Post created', data_recieverd: req.body})
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})