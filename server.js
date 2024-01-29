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

// GET /
app.get('/', async (req, res) => {
	try {
		const pokemonData = await db.collection('pokemon').find().toArray()
		const trainersData = await db.collection('trainers').find().toArray()

		res.render('index.ejs', {
			pokemon: pokemonData,
			trainers: trainersData
		})
	} catch (err) {
		console.error(err)
		res.status(500).send('Internal Server Error')
	}
})

// POST /addTrainer
app.post('/addTrainer', (req, res) => {
	db.collection('trainers')
		.insertOne({ name: req.body.trainer, gym: req.body.gym, likes: 0 })
		.then(result => {
			console.log('Trainer Added')
			res.redirect('/')
		})
		.catch(err => console.error(err))
})

// DELETE /deleteTrainer
app.delete('/deleteTrainer', (req, res) => {
	console.log(req.body)
	db.collection('trainers')
		.deleteOne({ name: req.body.trainer })
		.then(result => {
			console.log('Trainer deleted')
			res.json('Trainer deleted')
		})
		.catch(err => console.error(err))
})

// PUT /addOneLike,
app.put('/addOneLike', (req, res) => {
	db.collection('trainers')
		.updateOne(
			{
				name: req.body.trainer,
				gym: req.body.gym,
				likes: req.body.likes
			},
			{
				$set: {
					likes: req.body.likes + 1
				}
			},
			{
				sort: { _id: -1 },
				upsert: true
			}
		)
		.then(result => {
			console.log('Added One Like')
			res.json('Like Added')
		})
		.catch(error => console.error(error))
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
