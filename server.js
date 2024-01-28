const express = require('express')
const app = express()
const pokedex = require('./base1')
const PORT = 8000
app.use(express.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

// GET /api/pokedex
app.get('/api/pokedex', (req, res) => {
	res.json(pokedex)
})

// GET /api/pokedex/:id
app.get('/api/pokedex/:name', (req, res) => {
	const name = req.params.name.toLowerCase()

	if (pokedex.find(pokemon => pokemon.name.toLowerCase() === name)) {
		const singleCard = pokedex.find(
			pokemon => pokemon.name.toLowerCase() === name
		)
		return res
			.status(200)
			.json({ name: singleCard.name, img: singleCard.images.small })
	} else {
		return res.json(`Pokemon card not found`)
	}
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
