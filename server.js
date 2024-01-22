const express = require('express')
const app = express()
const pokedex = require('./base1')
const PORT = 8000

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

// GET /api/pokedex
app.get('/api/pokedex', (req, res) => {
	res.json(pokedex)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
