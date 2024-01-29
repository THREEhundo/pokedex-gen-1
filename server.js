const express = require('express')
const app = express()
const pokedex = require('./base1')
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

let db,
	dbConnectionStr = process.env.DB_STRING,
	dbName = 'pokedex'

MongoClient.connect(dbConnectionStr).then(client => {
	console.log(`Connected to ${dbName} Database`)
	db = client.db(dbName)
})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

// GET /api/pokedex
app.get('/api/pokedex', (req, res) => {
	db.collection('pokemon')
		.find()
		.toArray()
		.then(data => {
			res.render('index.ejs', { pokemon: data })
		})
		.catch(err => console.error(err))
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
