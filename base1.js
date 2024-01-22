const pokedex = [
	{
		'id': 'base1-1',
		'name': 'Alakazam',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '42',
		'hp': '80',
		'types': ['Psychic'],
		'evolvesFrom': 'Kadabra',
		'abilities': [
			{
				'name': 'Damage Swap',
				'text': "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
				'type': 'Pokémon Power'
			}
		],
		'attacks': [
			{
				'name': 'Confuse Ray',
				'cost': ['Psychic', 'Psychic', 'Psychic'],
				'convertedEnergyCost': 3,
				'damage': '30',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Confused.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '1',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.',
		'nationalPokedexNumbers': [65],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/1.png',
			'large': 'https://images.pokemontcg.io/base1/1_hires.png'
		}
	},
	{
		'id': 'base1-2',
		'name': 'Blastoise',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '52',
		'hp': '100',
		'types': ['Water'],
		'evolvesFrom': 'Wartortle',
		'abilities': [
			{
				'name': 'Rain Dance',
				'text': "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
				'type': 'Pokémon Power'
			}
		],
		'attacks': [
			{
				'name': 'Hydro Pump',
				'cost': ['Water', 'Water', 'Water'],
				'convertedEnergyCost': 3,
				'damage': '40+',
				'text': "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count."
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '2',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.',
		'nationalPokedexNumbers': [9],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/2.png',
			'large': 'https://images.pokemontcg.io/base1/2_hires.png'
		}
	},
	{
		'id': 'base1-3',
		'name': 'Chansey',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '55',
		'hp': '120',
		'types': ['Colorless'],
		'evolvesTo': ['Blissey'],
		'attacks': [
			{
				'name': 'Scrunch',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Flip a coin. If heads, prevent all damage done to Chansey during your opponent's next turn. (Any other effects of attacks still happen.)"
			},
			{
				'name': 'Double-edge',
				'cost': ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '80',
				'text': 'Chansey does 80 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '3',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.',
		'nationalPokedexNumbers': [113],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/3.png',
			'large': 'https://images.pokemontcg.io/base1/3_hires.png'
		}
	},
	{
		'id': 'base1-4',
		'name': 'Charizard',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '76',
		'hp': '120',
		'types': ['Fire'],
		'evolvesFrom': 'Charmeleon',
		'abilities': [
			{
				'name': 'Energy Burn',
				'text': "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
				'type': 'Pokémon Power'
			}
		],
		'attacks': [
			{
				'name': 'Fire Spin',
				'cost': ['Fire', 'Fire', 'Fire', 'Fire'],
				'convertedEnergyCost': 4,
				'damage': '100',
				'text': 'Discard 2 Energy cards attached to Charizard in order to use this attack.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '4',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Rare Holo',
		'flavorText':
			'Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.',
		'nationalPokedexNumbers': [6],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/4.png',
			'large': 'https://images.pokemontcg.io/base1/4_hires.png'
		}
	},
	{
		'id': 'base1-5',
		'name': 'Clefairy',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '14',
		'hp': '40',
		'types': ['Colorless'],
		'evolvesTo': ['Clefable'],
		'attacks': [
			{
				'name': 'Sing',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Asleep.'
			},
			{
				'name': 'Metronome',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '',
				'text': "Choose 1 of the Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefairy's type is still Colorless.)"
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '5',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'Its magical and cute appeal has many admirers. It is rare and found only in certain areas.',
		'nationalPokedexNumbers': [35],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/5.png',
			'large': 'https://images.pokemontcg.io/base1/5_hires.png'
		}
	},
	{
		'id': 'base1-6',
		'name': 'Gyarados',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '41',
		'hp': '100',
		'types': ['Water'],
		'evolvesFrom': 'Magikarp',
		'attacks': [
			{
				'name': 'Dragon Rage',
				'cost': ['Water', 'Water', 'Water'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': ''
			},
			{
				'name': 'Bubblebeam',
				'cost': ['Water', 'Water', 'Water', 'Water'],
				'convertedEnergyCost': 4,
				'damage': '40',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '6',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Rare Holo',
		'flavorText':
			'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.',
		'nationalPokedexNumbers': [130],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/6.png',
			'large': 'https://images.pokemontcg.io/base1/6_hires.png'
		}
	},
	{
		'id': 'base1-7',
		'name': 'Hitmonchan',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '33',
		'hp': '70',
		'types': ['Fighting'],
		'attacks': [
			{
				'name': 'Jab',
				'cost': ['Fighting'],
				'convertedEnergyCost': 1,
				'damage': '20',
				'text': ''
			},
			{
				'name': 'Special Punch',
				'cost': ['Fighting', 'Fighting', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '40',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '7',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'While seeming to do nothing, it fires punches in lightning-fast volleys that are impossible to see.',
		'nationalPokedexNumbers': [107],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/7.png',
			'large': 'https://images.pokemontcg.io/base1/7_hires.png'
		}
	},
	{
		'id': 'base1-8',
		'name': 'Machamp',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '67',
		'hp': '100',
		'types': ['Fighting'],
		'evolvesFrom': 'Machoke',
		'abilities': [
			{
				'name': 'Strikes Back',
				'text': "Whenever your opponent's attack damages Machamp (even if Machamp is Knocked Out), this power does 10 damage to the attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is Asleep, Confused, or Paralyzed when your opponent attacks.",
				'type': 'Pokémon Power'
			}
		],
		'attacks': [
			{
				'name': 'Seismic Toss',
				'cost': ['Fighting', 'Fighting', 'Fighting', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '60',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '8',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'Using its amazing muscles, it throws powerful punches that can knock its victim clear over the horizon.',
		'nationalPokedexNumbers': [68],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/8.png',
			'large': 'https://images.pokemontcg.io/base1/8_hires.png'
		}
	},
	{
		'id': 'base1-9',
		'name': 'Magneton',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '28',
		'hp': '60',
		'types': ['Lightning'],
		'evolvesFrom': 'Magnemite',
		'evolvesTo': ['Magnezone'],
		'attacks': [
			{
				'name': 'Thunder Wave',
				'cost': ['Lightning', 'Lightning', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			},
			{
				'name': 'Selfdestruct',
				'cost': ['Lightning', 'Lightning', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '80',
				'text': "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself."
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '9',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare Holo',
		'flavorText':
			'Formed by several Magnemites linked together. It frequently appears when sunspots flare up.',
		'nationalPokedexNumbers': [82],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/9.png',
			'large': 'https://images.pokemontcg.io/base1/9_hires.png'
		}
	},
	{
		'id': 'base1-10',
		'name': 'Mewtwo',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '53',
		'hp': '60',
		'types': ['Psychic'],
		'attacks': [
			{
				'name': 'Psychic',
				'cost': ['Psychic', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '10+',
				'text': 'Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.'
			},
			{
				'name': 'Barrier',
				'cost': ['Psychic', 'Psychic'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Discard 1 Psychic Energy card attached to Mewtwo in order to prevent all effects of attacks, including damage, done to Mewtwo during your opponent's next turn."
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '10',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'A scientist created this Pokémon after years of horrific gene-splicing and DNA engineering experiments.',
		'nationalPokedexNumbers': [150],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/10.png',
			'large': 'https://images.pokemontcg.io/base1/10_hires.png'
		}
	},
	{
		'id': 'base1-11',
		'name': 'Nidoking',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '23',
		'hp': '90',
		'types': ['Grass'],
		'evolvesFrom': 'Nidorino',
		'attacks': [
			{
				'name': 'Thrash',
				'cost': ['Grass', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30+',
				'text': 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.'
			},
			{
				'name': 'Toxic',
				'cost': ['Grass', 'Grass', 'Grass'],
				'convertedEnergyCost': 3,
				'damage': '20',
				'text': "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned)."
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '11',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			"Uses its powerful tail in battle to smash, constrict, then break its prey's bones.",
		'nationalPokedexNumbers': [34],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/11.png',
			'large': 'https://images.pokemontcg.io/base1/11_hires.png'
		}
	},
	{
		'id': 'base1-12',
		'name': 'Ninetales',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '32',
		'hp': '80',
		'types': ['Fire'],
		'evolvesFrom': 'Vulpix',
		'attacks': [
			{
				'name': 'Lure',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.'
			},
			{
				'name': 'Fire Blast',
				'cost': ['Fire', 'Fire', 'Fire', 'Fire'],
				'convertedEnergyCost': 4,
				'damage': '80',
				'text': 'Discard 1 Fire Energy card attached to Ninetales in order to use this attack.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '12',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.',
		'nationalPokedexNumbers': [38],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/12.png',
			'large': 'https://images.pokemontcg.io/base1/12_hires.png'
		}
	},
	{
		'id': 'base1-13',
		'name': 'Poliwrath',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '48',
		'hp': '90',
		'types': ['Water'],
		'evolvesFrom': 'Poliwhirl',
		'attacks': [
			{
				'name': 'Water Gun',
				'cost': ['Water', 'Water', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30+',
				'text': "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count."
			},
			{
				'name': 'Whirlpool',
				'cost': ['Water', 'Water', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '40',
				'text': 'If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.'
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '13',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers.',
		'nationalPokedexNumbers': [62],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/13.png',
			'large': 'https://images.pokemontcg.io/base1/13_hires.png'
		}
	},
	{
		'id': 'base1-14',
		'name': 'Raichu',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '40',
		'hp': '80',
		'types': ['Lightning'],
		'evolvesFrom': 'Pikachu',
		'attacks': [
			{
				'name': 'Agility',
				'cost': ['Lightning', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '20',
				'text': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Raichu."
			},
			{
				'name': 'Thunder',
				'cost': ['Lightning', 'Lightning', 'Lightning', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '60',
				'text': 'Flip a coin. If tails, Raichu does 30 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '14',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'Its long tail serves as a ground to protect itself from its own high-voltage power.',
		'nationalPokedexNumbers': [26],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/14.png',
			'large': 'https://images.pokemontcg.io/base1/14_hires.png'
		}
	},
	{
		'id': 'base1-15',
		'name': 'Venusaur',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '67',
		'hp': '100',
		'types': ['Grass'],
		'evolvesFrom': 'Ivysaur',
		'abilities': [
			{
				'name': 'Energy Trans',
				'text': "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed.",
				'type': 'Pokémon Power'
			}
		],
		'attacks': [
			{
				'name': 'Solarbeam',
				'cost': ['Grass', 'Grass', 'Grass', 'Grass'],
				'convertedEnergyCost': 4,
				'damage': '60',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '15',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Rare Holo',
		'flavorText':
			'This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
		'nationalPokedexNumbers': [3],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/15.png',
			'large': 'https://images.pokemontcg.io/base1/15_hires.png'
		}
	},
	{
		'id': 'base1-16',
		'name': 'Zapdos',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '64',
		'hp': '90',
		'types': ['Lightning'],
		'attacks': [
			{
				'name': 'Thunder',
				'cost': ['Lightning', 'Lightning', 'Lightning', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '60',
				'text': 'Flip a coin. If tails, Zapdos does 30 damage to itself.'
			},
			{
				'name': 'Thunderbolt',
				'cost': ['Lightning', 'Lightning', 'Lightning', 'Lightning'],
				'convertedEnergyCost': 4,
				'damage': '100',
				'text': 'Discard all Energy cards attached to Zapdos in order to use this attack.'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '16',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare Holo',
		'flavorText':
			'A legendary bird Pokémon said to appear from clouds while wielding enormous lightning bolts.',
		'nationalPokedexNumbers': [145],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/16.png',
			'large': 'https://images.pokemontcg.io/base1/16_hires.png'
		}
	},
	{
		'id': 'base1-17',
		'name': 'Beedrill',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 2'],
		'level': '32',
		'hp': '80',
		'types': ['Grass'],
		'evolvesFrom': 'Kakuna',
		'attacks': [
			{
				'name': 'Twineedle',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30×',
				'text': 'Flip 2 coins. This attack does 30 damage times the number of heads.'
			},
			{
				'name': 'Poison Sting',
				'cost': ['Grass', 'Grass', 'Grass'],
				'convertedEnergyCost': 3,
				'damage': '40',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'number': '17',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'flavorText':
			'Flies at high speed and attacks using the large, venomous stingers on its forelegs and tail.',
		'nationalPokedexNumbers': [15],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/17.png',
			'large': 'https://images.pokemontcg.io/base1/17_hires.png'
		}
	},
	{
		'id': 'base1-18',
		'name': 'Dragonair',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '33',
		'hp': '80',
		'types': ['Colorless'],
		'evolvesFrom': 'Dratini',
		'evolvesTo': ['Dragonite'],
		'attacks': [
			{
				'name': 'Slam',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30×',
				'text': 'Flip 2 coins. This attack does 30 damage times the number of heads.'
			},
			{
				'name': 'Hyper Beam',
				'cost': ['Colorless', 'Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '20',
				'text': 'If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.'
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '18',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Rare',
		'flavorText':
			'A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.',
		'nationalPokedexNumbers': [148],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/18.png',
			'large': 'https://images.pokemontcg.io/base1/18_hires.png'
		}
	},
	{
		'id': 'base1-19',
		'name': 'Dugtrio',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '36',
		'hp': '70',
		'types': ['Fighting'],
		'evolvesFrom': 'Diglett',
		'attacks': [
			{
				'name': 'Slash',
				'cost': ['Fighting', 'Fighting', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '40',
				'text': ''
			},
			{
				'name': 'Earthquake',
				'cost': ['Fighting', 'Fighting', 'Fighting', 'Fighting'],
				'convertedEnergyCost': 4,
				'damage': '70',
				'text': "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Lightning',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '19',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'flavorText':
			'A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.',
		'nationalPokedexNumbers': [51],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/19.png',
			'large': 'https://images.pokemontcg.io/base1/19_hires.png'
		}
	},
	{
		'id': 'base1-20',
		'name': 'Electabuzz',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '35',
		'hp': '70',
		'types': ['Lightning'],
		'evolvesTo': ['Electivire'],
		'attacks': [
			{
				'name': 'Thundershock',
				'cost': ['Lightning'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			},
			{
				'name': 'Thunderpunch',
				'cost': ['Lightning', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '30+',
				'text': 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage plus Electabuzz does 10 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '20',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'flavorText':
			'Normally found near power plants, it can wander away and cause major blackouts in cities.',
		'nationalPokedexNumbers': [125],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/20.png',
			'large': 'https://images.pokemontcg.io/base1/20_hires.png'
		}
	},
	{
		'id': 'base1-21',
		'name': 'Electrode',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '40',
		'hp': '80',
		'types': ['Lightning'],
		'evolvesFrom': 'Voltorb',
		'abilities': [
			{
				'name': 'Buzzap',
				'text': "At any time during your turn (before your attack), you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, choose a type of Energy. Electrode is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. You can't use this power if Electrode is Asleep, Confused, or Paralyzed.",
				'type': 'Pokémon Power'
			}
		],
		'attacks': [
			{
				'name': 'Electric Shock',
				'cost': ['Lightning', 'Lightning', 'Lightning'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': 'Flip a coin. If tails, Electrode does 10 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '21',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'flavorText':
			'It stores electrical energy under very high pressure. It often explodes with little or no provocation.',
		'nationalPokedexNumbers': [101],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/21.png',
			'large': 'https://images.pokemontcg.io/base1/21_hires.png'
		}
	},
	{
		'id': 'base1-22',
		'name': 'Pidgeotto',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '36',
		'hp': '60',
		'types': ['Colorless'],
		'evolvesFrom': 'Pidgey',
		'evolvesTo': ['Pidgeot'],
		'attacks': [
			{
				'name': 'Whirlwind',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)'
			},
			{
				'name': 'Mirror Move',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '',
				'text': 'If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.'
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '22',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'flavorText':
			'Very protective of its sprawling territory, this Pokémon will fiercely peck at any intruder.',
		'nationalPokedexNumbers': [17],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/22.png',
			'large': 'https://images.pokemontcg.io/base1/22_hires.png'
		}
	},
	{
		'id': 'base1-23',
		'name': 'Arcanine',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '45',
		'hp': '100',
		'types': ['Fire'],
		'evolvesFrom': 'Growlithe',
		'attacks': [
			{
				'name': 'Flamethrower',
				'cost': ['Fire', 'Fire', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': 'Discard 1 Fire Energy card attached to Arcanine in order to use this attack.'
			},
			{
				'name': 'Take Down',
				'cost': ['Fire', 'Fire', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '80',
				'text': 'Arcanine does 30 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '23',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'A Pokémon that has been long admired for its beauty. It runs gracefully, as if on wings.',
		'nationalPokedexNumbers': [59],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/23.png',
			'large': 'https://images.pokemontcg.io/base1/23_hires.png'
		}
	},
	{
		'id': 'base1-24',
		'name': 'Charmeleon',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '32',
		'hp': '80',
		'types': ['Fire'],
		'evolvesFrom': 'Charmander',
		'evolvesTo': ['Charizard'],
		'attacks': [
			{
				'name': 'Slash',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30',
				'text': ''
			},
			{
				'name': 'Flamethrower',
				'cost': ['Fire', 'Fire', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': 'Discard 1 Fire Energy card attached to Charmeleon in order to use this attack.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '24',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Uncommon',
		'flavorText':
			'When it swings its burning tail, it raises the temperature to unbearably high levels.',
		'nationalPokedexNumbers': [5],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/24.png',
			'large': 'https://images.pokemontcg.io/base1/24_hires.png'
		}
	},
	{
		'id': 'base1-25',
		'name': 'Dewgong',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '42',
		'hp': '80',
		'types': ['Water'],
		'evolvesFrom': 'Seel',
		'attacks': [
			{
				'name': 'Aurora Beam',
				'cost': ['Water', 'Water', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': ''
			},
			{
				'name': 'Ice Beam',
				'cost': ['Water', 'Water', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '30',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '25',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Uncommon',
		'flavorText':
			'Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.',
		'nationalPokedexNumbers': [87],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/25.png',
			'large': 'https://images.pokemontcg.io/base1/25_hires.png'
		}
	},
	{
		'id': 'base1-26',
		'name': 'Dratini',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '40',
		'types': ['Colorless'],
		'evolvesTo': ['Dragonair'],
		'attacks': [
			{
				'name': 'Pound',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '26',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Long considered a mythical Pokémon until recently, when a small colony was found living underwater.',
		'nationalPokedexNumbers': [147],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/26.png',
			'large': 'https://images.pokemontcg.io/base1/26_hires.png'
		}
	},
	{
		'id': 'base1-27',
		'name': "Farfetch'd",
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '20',
		'hp': '50',
		'types': ['Colorless'],
		'evolvesTo': ["Sirfetch'd"],
		'attacks': [
			{
				'name': 'Leek Slap',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '30',
				'text': "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Farfetch'd stays in play (even putting Farfetch'd on the Bench won't let you use it again)."
			},
			{
				'name': 'Pot Smash',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '27',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'The sprig of green onions it holds is its weapon. This sprig is used much like a metal sword.',
		'nationalPokedexNumbers': [83],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/27.png',
			'large': 'https://images.pokemontcg.io/base1/27_hires.png'
		}
	},
	{
		'id': 'base1-28',
		'name': 'Growlithe',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '18',
		'hp': '60',
		'types': ['Fire'],
		'evolvesTo': ['Arcanine'],
		'attacks': [
			{
				'name': 'Flare',
				'cost': ['Fire', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '28',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Very protective of its territory. It will bark and bite to repel intruders from its space.',
		'nationalPokedexNumbers': [58],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/28.png',
			'large': 'https://images.pokemontcg.io/base1/28_hires.png'
		}
	},
	{
		'id': 'base1-29',
		'name': 'Haunter',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '22',
		'hp': '60',
		'types': ['Psychic'],
		'evolvesFrom': 'Gastly',
		'evolvesTo': ['Gengar'],
		'attacks': [
			{
				'name': 'Hypnosis',
				'cost': ['Psychic'],
				'convertedEnergyCost': 1,
				'damage': '',
				'text': 'The Defending Pokémon is now Asleep.'
			},
			{
				'name': 'Dream Eater',
				'cost': ['Psychic', 'Psychic'],
				'convertedEnergyCost': 2,
				'damage': '50',
				'text': "You can't use this attack unless the Defending Pokémon is Asleep."
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '29',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'flavorText':
			'Because of its ability to slip through block walls, it is said to be from another dimension.',
		'nationalPokedexNumbers': [93],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/29.png',
			'large': 'https://images.pokemontcg.io/base1/29_hires.png'
		}
	},
	{
		'id': 'base1-30',
		'name': 'Ivysaur',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '20',
		'hp': '60',
		'types': ['Grass'],
		'evolvesFrom': 'Bulbasaur',
		'evolvesTo': ['Venusaur'],
		'attacks': [
			{
				'name': 'Vine Whip',
				'cost': ['Grass', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30',
				'text': ''
			},
			{
				'name': 'Poisonpowder',
				'cost': ['Grass', 'Grass', 'Grass'],
				'convertedEnergyCost': 3,
				'damage': '20',
				'text': 'The Defending Pokémon is now Poisoned.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '30',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'When the bulb on its back grows large, the Pokémon seems to lose the ability to stand on its hind legs.',
		'nationalPokedexNumbers': [2],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/30.png',
			'large': 'https://images.pokemontcg.io/base1/30_hires.png'
		}
	},
	{
		'id': 'base1-31',
		'name': 'Jynx',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '23',
		'hp': '70',
		'types': ['Psychic'],
		'attacks': [
			{
				'name': 'Doubleslap',
				'cost': ['Psychic'],
				'convertedEnergyCost': 1,
				'damage': '10×',
				'text': 'Flip 2 coins. This attack does 10 damage times the number of heads.'
			},
			{
				'name': 'Meditate',
				'cost': ['Psychic', 'Psychic', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '20+',
				'text': 'Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '31',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Merely by meditating, the Pokémon launches a powerful psychic energy attack.',
		'nationalPokedexNumbers': [124],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/31.png',
			'large': 'https://images.pokemontcg.io/base1/31_hires.png'
		}
	},
	{
		'id': 'base1-32',
		'name': 'Kadabra',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '38',
		'hp': '60',
		'types': ['Psychic'],
		'evolvesFrom': 'Abra',
		'evolvesTo': ['Alakazam'],
		'attacks': [
			{
				'name': 'Recover',
				'cost': ['Psychic', 'Psychic'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': 'Discard 1 Psychic Energy card attached to Kadabra in order to use this attack. Remove all damage counters from Kadabra.'
			},
			{
				'name': 'Super Psy',
				'cost': ['Psychic', 'Psychic', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '32',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'It emits special alpha waves from its body that induce headaches even to those just nearby.',
		'nationalPokedexNumbers': [64],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/32.png',
			'large': 'https://images.pokemontcg.io/base1/32_hires.png'
		}
	},
	{
		'id': 'base1-33',
		'name': 'Kakuna',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '23',
		'hp': '80',
		'types': ['Grass'],
		'evolvesFrom': 'Weedle',
		'evolvesTo': ['Beedrill'],
		'attacks': [
			{
				'name': 'Stiffen',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)"
			},
			{
				'name': 'Poisonpowder',
				'cost': ['Grass', 'Grass'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '33',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'flavorText':
			'Almost incapable of moving, this Pokémon can only harden its shell to protect itself from predators.',
		'nationalPokedexNumbers': [14],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/33.png',
			'large': 'https://images.pokemontcg.io/base1/33_hires.png'
		}
	},
	{
		'id': 'base1-34',
		'name': 'Machoke',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '40',
		'hp': '80',
		'types': ['Fighting'],
		'evolvesFrom': 'Machop',
		'evolvesTo': ['Machamp'],
		'attacks': [
			{
				'name': 'Karate Chop',
				'cost': ['Fighting', 'Fighting', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '50-',
				'text': 'Does 50 damage minus 10 damage for each damage counter on Machoke.'
			},
			{
				'name': 'Submission',
				'cost': ['Fighting', 'Fighting', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '60',
				'text': 'Machoke does 20 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '34',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Its muscular body is so powerful that it must wear a power-save belt to help regulate its motions.',
		'nationalPokedexNumbers': [67],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/34.png',
			'large': 'https://images.pokemontcg.io/base1/34_hires.png'
		}
	},
	{
		'id': 'base1-35',
		'name': 'Magikarp',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '8',
		'hp': '30',
		'types': ['Water'],
		'evolvesTo': ['Gyarados'],
		'attacks': [
			{
				'name': 'Tackle',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			},
			{
				'name': 'Flail',
				'cost': ['Water'],
				'convertedEnergyCost': 1,
				'damage': '10×',
				'text': 'Does 10 damage times the number of damage counters on Magikarp.'
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '35',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Uncommon',
		'flavorText':
			'In the distant past, it was stronger than its horribly weak descendants that exist today.',
		'nationalPokedexNumbers': [129],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/35.png',
			'large': 'https://images.pokemontcg.io/base1/35_hires.png'
		}
	},
	{
		'id': 'base1-36',
		'name': 'Magmar',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '24',
		'hp': '50',
		'types': ['Fire'],
		'evolvesTo': ['Magmortar'],
		'attacks': [
			{
				'name': 'Fire Punch',
				'cost': ['Fire', 'Fire'],
				'convertedEnergyCost': 2,
				'damage': '30',
				'text': ''
			},
			{
				'name': 'Flamethrower',
				'cost': ['Fire', 'Fire', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '50',
				'text': 'Discard 1 Fire Energy card attached to Magmar in order to use this attack.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '36',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Its body always burns with an orange glow that enables it to hide perfectly among flames.',
		'nationalPokedexNumbers': [126],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/36.png',
			'large': 'https://images.pokemontcg.io/base1/36_hires.png'
		}
	},
	{
		'id': 'base1-37',
		'name': 'Nidorino',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '25',
		'hp': '60',
		'types': ['Grass'],
		'evolvesFrom': 'Nidoran ♂',
		'evolvesTo': ['Nidoking'],
		'attacks': [
			{
				'name': 'Double Kick',
				'cost': ['Grass', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30×',
				'text': 'Flip 2 coins. This attack does 30 damage times the number of heads.'
			},
			{
				'name': 'Horn Drill',
				'cost': ['Grass', 'Grass', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 4,
				'damage': '50',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '37',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Uncommon',
		'flavorText':
			'An aggressive Pokémon that is quick to attack. The horn on its head secretes a powerful venom.',
		'nationalPokedexNumbers': [33],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/37.png',
			'large': 'https://images.pokemontcg.io/base1/37_hires.png'
		}
	},
	{
		'id': 'base1-38',
		'name': 'Poliwhirl',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '28',
		'hp': '60',
		'types': ['Water'],
		'evolvesFrom': 'Poliwag',
		'evolvesTo': ['Poliwrath', 'Politoed'],
		'attacks': [
			{
				'name': 'Amnesia',
				'cost': ['Water', 'Water'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn."
			},
			{
				'name': 'Doubleslap',
				'cost': ['Water', 'Water', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '30×',
				'text': 'Flip 2 coins. This attack does 30 damage times the number of heads.'
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '38',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Capable of living in or out of water. When out of water, it sweats to keep its body slimy.',
		'nationalPokedexNumbers': [61],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/38.png',
			'large': 'https://images.pokemontcg.io/base1/38_hires.png'
		}
	},
	{
		'id': 'base1-39',
		'name': 'Porygon',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '12',
		'hp': '30',
		'types': ['Colorless'],
		'evolvesTo': ['Porygon2'],
		'attacks': [
			{
				'name': 'Conversion 1',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '',
				'text': 'If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.'
			},
			{
				'name': 'Conversion 2',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Change Porygon's Resistance to a type of your choice other than Colorless."
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '39',
		'artist': 'Tomoaki Imakuni',
		'rarity': 'Uncommon',
		'flavorText':
			'A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.',
		'nationalPokedexNumbers': [137],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/39.png',
			'large': 'https://images.pokemontcg.io/base1/39_hires.png'
		}
	},
	{
		'id': 'base1-40',
		'name': 'Raticate',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '41',
		'hp': '60',
		'types': ['Colorless'],
		'evolvesFrom': 'Rattata',
		'attacks': [
			{
				'name': 'Bite',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '20',
				'text': ''
			},
			{
				'name': 'Super Fang',
				'cost': ['Colorless', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '',
				'text': "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10)."
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '40',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'It uses its whiskers to maintain its balance. It seems to slow down if they are cut off.',
		'nationalPokedexNumbers': [20],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/40.png',
			'large': 'https://images.pokemontcg.io/base1/40_hires.png'
		}
	},
	{
		'id': 'base1-41',
		'name': 'Seel',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '12',
		'hp': '60',
		'types': ['Water'],
		'evolvesTo': ['Dewgong'],
		'attacks': [
			{
				'name': 'Headbutt',
				'cost': ['Water'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '41',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'The protruding horn on its head is very hard. This horn is used for bashing through thick ice.',
		'nationalPokedexNumbers': [86],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/41.png',
			'large': 'https://images.pokemontcg.io/base1/41_hires.png'
		}
	},
	{
		'id': 'base1-42',
		'name': 'Wartortle',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '22',
		'hp': '70',
		'types': ['Water'],
		'evolvesFrom': 'Squirtle',
		'evolvesTo': ['Blastoise'],
		'attacks': [
			{
				'name': 'Withdraw',
				'cost': ['Water', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)"
			},
			{
				'name': 'Bite',
				'cost': ['Water', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '40',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '42',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'flavorText':
			'Often hides in water to stalk unweary prey. When swimming quickly, it moves its ears to maintain balance.',
		'nationalPokedexNumbers': [8],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/42.png',
			'large': 'https://images.pokemontcg.io/base1/42_hires.png'
		}
	},
	{
		'id': 'base1-43',
		'name': 'Abra',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '30',
		'types': ['Psychic'],
		'evolvesTo': ['Kadabra'],
		'attacks': [
			{
				'name': 'Psyshock',
				'cost': ['Psychic'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'number': '43',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Using its ability to read minds, it will identify impending danger and teleport to safety.',
		'nationalPokedexNumbers': [63],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/43.png',
			'large': 'https://images.pokemontcg.io/base1/43_hires.png'
		}
	},
	{
		'id': 'base1-44',
		'name': 'Bulbasaur',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '13',
		'hp': '40',
		'types': ['Grass'],
		'evolvesTo': ['Ivysaur'],
		'attacks': [
			{
				'name': 'Leech Seed',
				'cost': ['Grass', 'Grass'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': 'Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '44',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'A strange seed was planted on its back at birth. Thus, a plant sprouted and now grows with this Pokémon.',
		'nationalPokedexNumbers': [1],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/44.png',
			'large': 'https://images.pokemontcg.io/base1/44_hires.png'
		}
	},
	{
		'id': 'base1-45',
		'name': 'Caterpie',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '13',
		'hp': '40',
		'types': ['Grass'],
		'evolvesTo': ['Metapod'],
		'attacks': [
			{
				'name': 'String Shot',
				'cost': ['Grass'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '45',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.',
		'nationalPokedexNumbers': [10],
		'legalities': {
			'unlimited': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/45.png',
			'large': 'https://images.pokemontcg.io/base1/45_hires.png'
		}
	},
	{
		'id': 'base1-46',
		'name': 'Charmander',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '50',
		'types': ['Fire'],
		'evolvesTo': ['Charmeleon'],
		'attacks': [
			{
				'name': 'Scratch',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			},
			{
				'name': 'Ember',
				'cost': ['Fire', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '30',
				'text': 'Discard 1 Fire Energy card attached to Charmander in order to use this attack.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '46',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail.',
		'nationalPokedexNumbers': [4],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/46.png',
			'large': 'https://images.pokemontcg.io/base1/46_hires.png'
		}
	},
	{
		'id': 'base1-47',
		'name': 'Diglett',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '8',
		'hp': '30',
		'types': ['Fighting'],
		'evolvesTo': ['Dugtrio'],
		'attacks': [
			{
				'name': 'Dig',
				'cost': ['Fighting'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			},
			{
				'name': 'Mud Slap',
				'cost': ['Fighting', 'Fighting'],
				'convertedEnergyCost': 2,
				'damage': '30',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Lightning',
				'value': '-30'
			}
		],
		'number': '47',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'flavorText':
			'Lives about three feet underground, where it feeds on plant roots. It sometimes appears above ground.',
		'nationalPokedexNumbers': [50],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/47.png',
			'large': 'https://images.pokemontcg.io/base1/47_hires.png'
		}
	},
	{
		'id': 'base1-48',
		'name': 'Doduo',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '50',
		'types': ['Colorless'],
		'evolvesTo': ['Dodrio'],
		'attacks': [
			{
				'name': 'Fury Attack',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10×',
				'text': 'Flip 2 coins. This attack does 10 damage times the number of heads.'
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'number': '48',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.',
		'nationalPokedexNumbers': [84],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/48.png',
			'large': 'https://images.pokemontcg.io/base1/48_hires.png'
		}
	},
	{
		'id': 'base1-49',
		'name': 'Drowzee',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '50',
		'types': ['Psychic'],
		'evolvesTo': ['Hypno'],
		'attacks': [
			{
				'name': 'Pound',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			},
			{
				'name': 'Confuse Ray',
				'cost': ['Psychic', 'Psychic'],
				'convertedEnergyCost': 2,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Confused.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '49',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'Puts enemies to sleep, then eats their dreams. Occasionally gets sick from eating bad dreams.',
		'nationalPokedexNumbers': [96],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/49.png',
			'large': 'https://images.pokemontcg.io/base1/49_hires.png'
		}
	},
	{
		'id': 'base1-50',
		'name': 'Gastly',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '8',
		'hp': '30',
		'types': ['Psychic'],
		'evolvesTo': ['Haunter'],
		'attacks': [
			{
				'name': 'Sleeping Gas',
				'cost': ['Psychic'],
				'convertedEnergyCost': 1,
				'damage': '',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Asleep.'
			},
			{
				'name': 'Destiny Bond',
				'cost': ['Psychic', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Discard 1 Psychic Energy card attached to Gastly in order to use this attack. If a Pokémon Knocks Out Gastly during your opponent's next turn, Knock Out that Pokémon."
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'number': '50',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'flavorText':
			'Almost invisible, this gaseous Pokémon cloaks the target and puts it to sleep without notice.',
		'nationalPokedexNumbers': [92],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/50.png',
			'large': 'https://images.pokemontcg.io/base1/50_hires.png'
		}
	},
	{
		'id': 'base1-51',
		'name': 'Koffing',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '13',
		'hp': '50',
		'types': ['Grass'],
		'evolvesTo': ['Weezing'],
		'attacks': [
			{
				'name': 'Foul Gas',
				'cost': ['Grass', 'Grass'],
				'convertedEnergyCost': 2,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '51',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.',
		'nationalPokedexNumbers': [109],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/51.png',
			'large': 'https://images.pokemontcg.io/base1/51_hires.png'
		}
	},
	{
		'id': 'base1-52',
		'name': 'Machop',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '20',
		'hp': '50',
		'types': ['Fighting'],
		'evolvesTo': ['Machoke'],
		'attacks': [
			{
				'name': 'Low Kick',
				'cost': ['Fighting'],
				'convertedEnergyCost': 1,
				'damage': '20',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '52',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Loves to build its muscles. It trains in all styles of martial arts to become even stronger.',
		'nationalPokedexNumbers': [66],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/52.png',
			'large': 'https://images.pokemontcg.io/base1/52_hires.png'
		}
	},
	{
		'id': 'base1-53',
		'name': 'Magnemite',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '13',
		'hp': '40',
		'types': ['Lightning'],
		'evolvesTo': ['Magneton'],
		'attacks': [
			{
				'name': 'Thunder Wave',
				'cost': ['Lightning'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			},
			{
				'name': 'Selfdestruct',
				'cost': ['Lightning', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '40',
				'text': "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself."
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '53',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'flavorText':
			'Uses anti-gravity to stay suspended. Appears without warning and uses attacks like Thunder Wave.',
		'nationalPokedexNumbers': [81],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/53.png',
			'large': 'https://images.pokemontcg.io/base1/53_hires.png'
		}
	},
	{
		'id': 'base1-54',
		'name': 'Metapod',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '21',
		'hp': '70',
		'types': ['Grass'],
		'evolvesFrom': 'Caterpie',
		'evolvesTo': ['Butterfree'],
		'attacks': [
			{
				'name': 'Stiffen',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)"
			},
			{
				'name': 'Stun Spore',
				'cost': ['Grass', 'Grass'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '54',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'It is vulnerable to attack because its shell is soft, exposing its weak and tender body.',
		'nationalPokedexNumbers': [11],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/54.png',
			'large': 'https://images.pokemontcg.io/base1/54_hires.png'
		}
	},
	{
		'id': 'base1-55',
		'name': 'Nidoran ♂',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '20',
		'hp': '40',
		'types': ['Grass'],
		'evolvesTo': ['Nidorino'],
		'attacks': [
			{
				'name': 'Horn Hazard',
				'cost': ['Grass'],
				'convertedEnergyCost': 1,
				'damage': '30',
				'text': 'Flip a coin. If tails, this attack does nothing.'
			}
		],
		'weaknesses': [
			{
				'type': 'Psychic',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '55',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'Stiffens its ears to sense danger. The larger, more powerful of its horns secretes venom.',
		'nationalPokedexNumbers': [32],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/55.png',
			'large': 'https://images.pokemontcg.io/base1/55_hires.png'
		}
	},
	{
		'id': 'base1-56',
		'name': 'Onix',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '12',
		'hp': '90',
		'types': ['Fighting'],
		'evolvesTo': ['Steelix'],
		'attacks': [
			{
				'name': 'Rock Throw',
				'cost': ['Fighting'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			},
			{
				'name': 'Harden',
				'cost': ['Fighting', 'Fighting'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "During your opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)"
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless', 'Colorless'],
		'convertedRetreatCost': 3,
		'number': '56',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'As it grows, the stone portions of its body harden to become similar to a diamond, though colored black.',
		'nationalPokedexNumbers': [95],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/56.png',
			'large': 'https://images.pokemontcg.io/base1/56_hires.png'
		}
	},
	{
		'id': 'base1-57',
		'name': 'Pidgey',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '8',
		'hp': '40',
		'types': ['Colorless'],
		'evolvesTo': ['Pidgeotto'],
		'attacks': [
			{
				'name': 'Whirlwind',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '10',
				'text': 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)'
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Fighting',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '57',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
		'nationalPokedexNumbers': [16],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/57.png',
			'large': 'https://images.pokemontcg.io/base1/57_hires.png'
		}
	},
	{
		'id': 'base1-58',
		'name': 'Pikachu',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '12',
		'hp': '40',
		'types': ['Lightning'],
		'evolvesTo': ['Raichu'],
		'attacks': [
			{
				'name': 'Gnaw',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			},
			{
				'name': 'Thunder Jolt',
				'cost': ['Lightning', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '30',
				'text': 'Flip a coin. If tails, Pikachu does 10 damage to itself.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '58',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'When several of these Pokémon gather, their electricity can cause lightning storms.',
		'nationalPokedexNumbers': [25],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/58.png',
			'large': 'https://images.pokemontcg.io/base1/58_hires.png'
		}
	},
	{
		'id': 'base1-59',
		'name': 'Poliwag',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '13',
		'hp': '40',
		'types': ['Water'],
		'evolvesTo': ['Poliwhirl'],
		'attacks': [
			{
				'name': 'Water Gun',
				'cost': ['Water'],
				'convertedEnergyCost': 1,
				'damage': '10+',
				'text': "Does 10 damage plus 10 more damage for each Water Energy attached to Poliwag but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd don't count."
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '59',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'Its newly grown legs prevent it from running. It appears to prefer swimming over trying to stand.',
		'nationalPokedexNumbers': [60],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/59.png',
			'large': 'https://images.pokemontcg.io/base1/59_hires.png'
		}
	},
	{
		'id': 'base1-60',
		'name': 'Ponyta',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '40',
		'types': ['Fire'],
		'evolvesTo': ['Rapidash'],
		'attacks': [
			{
				'name': 'Smash Kick',
				'cost': ['Colorless', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': ''
			},
			{
				'name': 'Flame Tail',
				'cost': ['Fire', 'Fire'],
				'convertedEnergyCost': 2,
				'damage': '30',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '60',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'Its hooves are 10 times harder than diamonds. It can trample anything flat in moments.',
		'nationalPokedexNumbers': [77],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/60.png',
			'large': 'https://images.pokemontcg.io/base1/60_hires.png'
		}
	},
	{
		'id': 'base1-61',
		'name': 'Rattata',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '9',
		'hp': '30',
		'types': ['Colorless'],
		'evolvesTo': ['Raticate'],
		'attacks': [
			{
				'name': 'Bite',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '20',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Psychic',
				'value': '-30'
			}
		],
		'number': '61',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Bites anything when it attacks. Small and very quick, it is a common sight in many places.',
		'nationalPokedexNumbers': [19],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/61.png',
			'large': 'https://images.pokemontcg.io/base1/61_hires.png'
		}
	},
	{
		'id': 'base1-62',
		'name': 'Sandshrew',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '12',
		'hp': '40',
		'types': ['Fighting'],
		'evolvesTo': ['Sandslash'],
		'attacks': [
			{
				'name': 'Sand-attack',
				'cost': ['Fighting'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing."
			}
		],
		'weaknesses': [
			{
				'type': 'Grass',
				'value': '×2'
			}
		],
		'resistances': [
			{
				'type': 'Lightning',
				'value': '-30'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '62',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'Burrows deep underground in arid locations far from water. It only emerges to hunt for food.',
		'nationalPokedexNumbers': [27],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/62.png',
			'large': 'https://images.pokemontcg.io/base1/62_hires.png'
		}
	},
	{
		'id': 'base1-63',
		'name': 'Squirtle',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '8',
		'hp': '40',
		'types': ['Water'],
		'evolvesTo': ['Wartortle'],
		'attacks': [
			{
				'name': 'Bubble',
				'cost': ['Water'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			},
			{
				'name': 'Withdraw',
				'cost': ['Water', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': "Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)"
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '63',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.',
		'nationalPokedexNumbers': [7],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/63.png',
			'large': 'https://images.pokemontcg.io/base1/63_hires.png'
		}
	},
	{
		'id': 'base1-64',
		'name': 'Starmie',
		'supertype': 'Pokémon',
		'subtypes': ['Stage 1'],
		'level': '28',
		'hp': '60',
		'types': ['Water'],
		'evolvesFrom': 'Staryu',
		'attacks': [
			{
				'name': 'Recover',
				'cost': ['Water', 'Water'],
				'convertedEnergyCost': 2,
				'damage': '',
				'text': 'Discard 1 Water Energy card attached to Starmie in order to use this attack. Remove all damage counters from Starmie.'
			},
			{
				'name': 'Star Freeze',
				'cost': ['Water', 'Colorless', 'Colorless'],
				'convertedEnergyCost': 3,
				'damage': '20',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '64',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'flavorText':
			'Its central core glows with the seven colors of the rainbow. Some people value this core as a gem.',
		'nationalPokedexNumbers': [121],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/64.png',
			'large': 'https://images.pokemontcg.io/base1/64_hires.png'
		}
	},
	{
		'id': 'base1-65',
		'name': 'Staryu',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '15',
		'hp': '40',
		'types': ['Water'],
		'evolvesTo': ['Starmie'],
		'attacks': [
			{
				'name': 'Slap',
				'cost': ['Water'],
				'convertedEnergyCost': 1,
				'damage': '20',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Lightning',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '65',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'flavorText':
			'An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle.',
		'nationalPokedexNumbers': [120],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/65.png',
			'large': 'https://images.pokemontcg.io/base1/65_hires.png'
		}
	},
	{
		'id': 'base1-66',
		'name': 'Tangela',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '8',
		'hp': '50',
		'types': ['Grass'],
		'evolvesTo': ['Tangrowth'],
		'attacks': [
			{
				'name': 'Bind',
				'cost': ['Grass', 'Colorless'],
				'convertedEnergyCost': 2,
				'damage': '20',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.'
			},
			{
				'name': 'Poisonpowder',
				'cost': ['Grass', 'Grass', 'Grass'],
				'convertedEnergyCost': 3,
				'damage': '20',
				'text': 'The Defending Pokémon is now Poisoned.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless', 'Colorless'],
		'convertedRetreatCost': 2,
		'number': '66',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Its whole body is swathed with wide vines that are similar to seaweed. These vines shake as it walks.',
		'nationalPokedexNumbers': [114],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/66.png',
			'large': 'https://images.pokemontcg.io/base1/66_hires.png'
		}
	},
	{
		'id': 'base1-67',
		'name': 'Voltorb',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '10',
		'hp': '40',
		'types': ['Lightning'],
		'evolvesTo': ['Electrode'],
		'attacks': [
			{
				'name': 'Tackle',
				'cost': ['Colorless'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': ''
			}
		],
		'weaknesses': [
			{
				'type': 'Fighting',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '67',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'flavorText':
			'Usually found in power plants. Easily mistaken for a Monster Ball, it has zapped many people.',
		'nationalPokedexNumbers': [100],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/67.png',
			'large': 'https://images.pokemontcg.io/base1/67_hires.png'
		}
	},
	{
		'id': 'base1-68',
		'name': 'Vulpix',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '11',
		'hp': '50',
		'types': ['Fire'],
		'evolvesTo': ['Ninetales'],
		'attacks': [
			{
				'name': 'Confuse Ray',
				'cost': ['Fire', 'Fire'],
				'convertedEnergyCost': 2,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Confused.'
			}
		],
		'weaknesses': [
			{
				'type': 'Water',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '68',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'flavorText':
			'At the time of birth, it has just one tail. Its tail splits from the tip as it grows older.',
		'nationalPokedexNumbers': [37],
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/68.png',
			'large': 'https://images.pokemontcg.io/base1/68_hires.png'
		}
	},
	{
		'id': 'base1-69',
		'name': 'Weedle',
		'supertype': 'Pokémon',
		'subtypes': ['Basic'],
		'level': '12',
		'hp': '40',
		'types': ['Grass'],
		'evolvesTo': ['Kakuna'],
		'attacks': [
			{
				'name': 'Poison Sting',
				'cost': ['Grass'],
				'convertedEnergyCost': 1,
				'damage': '10',
				'text': 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.'
			}
		],
		'weaknesses': [
			{
				'type': 'Fire',
				'value': '×2'
			}
		],
		'retreatCost': ['Colorless'],
		'convertedRetreatCost': 1,
		'number': '69',
		'artist': 'Mitsuhiro Arita',
		'rarity': 'Common',
		'flavorText':
			'Often found in forests, eating leaves. It has a sharp, venomous stinger on its head.',
		'nationalPokedexNumbers': [13],
		'legalities': {
			'unlimited': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/69.png',
			'large': 'https://images.pokemontcg.io/base1/69_hires.png'
		}
	},
	{
		'id': 'base1-70',
		'name': 'Clefairy Doll',
		'supertype': 'Trainer',
		'hp': '10',
		'rules': [
			"Play Clefairy Doll as if it were a Basic Pokémon. While in play, Clefairy Doll counts a a Pokémon (instead of a Trainer card). Clefairy Doll has no attacks, can't retreat, and can't be Asleep, Confused, Paralyzed, or Poisoned. If Clefairy Doll is Knocked Out, it doesn't count as a Knocked Out Pokémon. At any time during your turn before your attack, you may discard Clefairy Doll."
		],
		'number': '70',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/70.png',
			'large': 'https://images.pokemontcg.io/base1/70_hires.png'
		}
	},
	{
		'id': 'base1-71',
		'name': 'Computer Search',
		'supertype': 'Trainer',
		'rules': [
			'Discard 2 of the other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward.'
		],
		'number': '71',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/71.png',
			'large': 'https://images.pokemontcg.io/base1/71_hires.png'
		}
	},
	{
		'id': 'base1-72',
		'name': 'Devolution Spray',
		'supertype': 'Trainer',
		'rules': [
			'Choose 1 of your own Pokémon in play and a Stage of Evolution. Discard all Evolution cards of that Stage or higher attached to that Pokémon. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it).'
		],
		'number': '72',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/72.png',
			'large': 'https://images.pokemontcg.io/base1/72_hires.png'
		}
	},
	{
		'id': 'base1-73',
		'name': 'Impostor Professor Oak',
		'supertype': 'Trainer',
		'rules': [
			'Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.'
		],
		'number': '73',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/73.png',
			'large': 'https://images.pokemontcg.io/base1/73_hires.png'
		}
	},
	{
		'id': 'base1-74',
		'name': 'Item Finder',
		'supertype': 'Trainer',
		'rules': [
			'Discard 2 of the other cards from your hand in order to put a Trainer card from your discard pile into your hand.'
		],
		'number': '74',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/74.png',
			'large': 'https://images.pokemontcg.io/base1/74_hires.png'
		}
	},
	{
		'id': 'base1-75',
		'name': 'Lass',
		'supertype': 'Trainer',
		'rules': [
			'You and your opponent show each other your hands, then shuffle all the Trainer cards from your hands into your decks.'
		],
		'number': '75',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/75.png',
			'large': 'https://images.pokemontcg.io/base1/75_hires.png'
		}
	},
	{
		'id': 'base1-76',
		'name': 'Pokémon Breeder',
		'supertype': 'Trainer',
		'rules': [
			'Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway.'
		],
		'number': '76',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/76.png',
			'large': 'https://images.pokemontcg.io/base1/76_hires.png'
		}
	},
	{
		'id': 'base1-77',
		'name': 'Pokémon Trader',
		'supertype': 'Trainer',
		'rules': [
			'Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward.'
		],
		'number': '77',
		'artist': 'Ken Sugimori',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/77.png',
			'large': 'https://images.pokemontcg.io/base1/77_hires.png'
		}
	},
	{
		'id': 'base1-78',
		'name': 'Scoop Up',
		'supertype': 'Trainer',
		'rules': [
			'Choose 1 of your Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)'
		],
		'number': '78',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/78.png',
			'large': 'https://images.pokemontcg.io/base1/78_hires.png'
		}
	},
	{
		'id': 'base1-79',
		'name': 'Super Energy Removal',
		'supertype': 'Trainer',
		'rules': [
			"Discard 1 Energy card attached to 1 of your Pokémon in order to choose 1 of your opponent's Pokémon and up to 2 Energy cards attached to it. Discard those Energy cards."
		],
		'number': '79',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Rare',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/79.png',
			'large': 'https://images.pokemontcg.io/base1/79_hires.png'
		}
	},
	{
		'id': 'base1-80',
		'name': 'Defender',
		'supertype': 'Trainer',
		'rules': [
			"Attach Defender to 1 of your Pokémon. At the end of your opponent's next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance)."
		],
		'number': '80',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/80.png',
			'large': 'https://images.pokemontcg.io/base1/80_hires.png'
		}
	},
	{
		'id': 'base1-81',
		'name': 'Energy Retrieval',
		'supertype': 'Trainer',
		'rules': [
			'Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile.'
		],
		'number': '81',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/81.png',
			'large': 'https://images.pokemontcg.io/base1/81_hires.png'
		}
	},
	{
		'id': 'base1-82',
		'name': 'Full Heal',
		'supertype': 'Trainer',
		'rules': [
			'Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.'
		],
		'number': '82',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/82.png',
			'large': 'https://images.pokemontcg.io/base1/82_hires.png'
		}
	},
	{
		'id': 'base1-83',
		'name': 'Maintenance',
		'supertype': 'Trainer',
		'rules': [
			'Shuffle 2 of the other cards from your hand into your deck in order to draw a card.'
		],
		'number': '83',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/83.png',
			'large': 'https://images.pokemontcg.io/base1/83_hires.png'
		}
	},
	{
		'id': 'base1-84',
		'name': 'PlusPower',
		'supertype': 'Trainer',
		'rules': [
			"Attach PlusPower to your Active Pokémon. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon."
		],
		'number': '84',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/84.png',
			'large': 'https://images.pokemontcg.io/base1/84_hires.png'
		}
	},
	{
		'id': 'base1-85',
		'name': 'Pokémon Center',
		'supertype': 'Trainer',
		'rules': [
			'Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.'
		],
		'number': '85',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/85.png',
			'large': 'https://images.pokemontcg.io/base1/85_hires.png'
		}
	},
	{
		'id': 'base1-86',
		'name': 'Pokémon Flute',
		'supertype': 'Trainer',
		'rules': [
			"Choose 1 Basic Pokémon card from your opponent's discard pile and put it onto his or her Bench. (You can't play Pokémon Flute if your opponent's Bench is full.)"
		],
		'number': '86',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/86.png',
			'large': 'https://images.pokemontcg.io/base1/86_hires.png'
		}
	},
	{
		'id': 'base1-87',
		'name': 'Pokédex',
		'supertype': 'Trainer',
		'rules': [
			'Look at up to 5 cards from the top of your deck and rearrange them as you like.'
		],
		'number': '87',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/87.png',
			'large': 'https://images.pokemontcg.io/base1/87_hires.png'
		}
	},
	{
		'id': 'base1-88',
		'name': 'Professor Oak',
		'supertype': 'Trainer',
		'rules': ['Discard your hand, then draw 7 cards.'],
		'number': '88',
		'artist': 'Ken Sugimori',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/88.png',
			'large': 'https://images.pokemontcg.io/base1/88_hires.png'
		}
	},
	{
		'id': 'base1-89',
		'name': 'Revive',
		'supertype': 'Trainer',
		'rules': [
			"Put 1 Basic Pokémon card from your discard pile onto your Bench. Put damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can't play Revive if your Bench is full.)"
		],
		'number': '89',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/89.png',
			'large': 'https://images.pokemontcg.io/base1/89_hires.png'
		}
	},
	{
		'id': 'base1-90',
		'name': 'Super Potion',
		'supertype': 'Trainer',
		'rules': [
			'Discard 1 Energy card attached to your own Pokémon in order to remove up to 4 damage counters from that Pokémon.'
		],
		'number': '90',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/90.png',
			'large': 'https://images.pokemontcg.io/base1/90_hires.png'
		}
	},
	{
		'id': 'base1-91',
		'name': 'Bill',
		'supertype': 'Trainer',
		'rules': ['Draw 2 cards.'],
		'number': '91',
		'artist': 'Ken Sugimori',
		'rarity': 'Common',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/91.png',
			'large': 'https://images.pokemontcg.io/base1/91_hires.png'
		}
	},
	{
		'id': 'base1-92',
		'name': 'Energy Removal',
		'supertype': 'Trainer',
		'rules': [
			"Choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it."
		],
		'number': '92',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/92.png',
			'large': 'https://images.pokemontcg.io/base1/92_hires.png'
		}
	},
	{
		'id': 'base1-93',
		'name': 'Gust of Wind',
		'supertype': 'Trainer',
		'rules': [
			"Choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon."
		],
		'number': '93',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'legalities': {
			'unlimited': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/93.png',
			'large': 'https://images.pokemontcg.io/base1/93_hires.png'
		}
	},
	{
		'id': 'base1-94',
		'name': 'Potion',
		'supertype': 'Trainer',
		'rules': ['Remove up to 2 damage counters from 1 of your Pokémon.'],
		'number': '94',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/94.png',
			'large': 'https://images.pokemontcg.io/base1/94_hires.png'
		}
	},
	{
		'id': 'base1-95',
		'name': 'Switch',
		'supertype': 'Trainer',
		'rules': [
			'Switch 1 of your own Benched Pokémon with your Active Pokémon.'
		],
		'number': '95',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Common',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/95.png',
			'large': 'https://images.pokemontcg.io/base1/95_hires.png'
		}
	},
	{
		'id': 'base1-96',
		'name': 'Double Colorless Energy',
		'supertype': 'Energy',
		'subtypes': ['Special'],
		'rules': [
			"Provides ColorlessColorless energy.\nDoesn't count as a basic Energy card."
		],
		'number': '96',
		'artist': 'Keiji Kinebuchi',
		'rarity': 'Uncommon',
		'legalities': {
			'unlimited': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/96.png',
			'large': 'https://images.pokemontcg.io/base1/96_hires.png'
		}
	},
	{
		'id': 'base1-97',
		'name': 'Fighting Energy',
		'supertype': 'Energy',
		'subtypes': ['Basic'],
		'number': '97',
		'artist': 'Keiji Kinebuchi',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/97.png',
			'large': 'https://images.pokemontcg.io/base1/97_hires.png'
		}
	},
	{
		'id': 'base1-98',
		'name': 'Fire Energy',
		'supertype': 'Energy',
		'subtypes': ['Basic'],
		'number': '98',
		'artist': 'Keiji Kinebuchi',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/98.png',
			'large': 'https://images.pokemontcg.io/base1/98_hires.png'
		}
	},
	{
		'id': 'base1-99',
		'name': 'Grass Energy',
		'supertype': 'Energy',
		'subtypes': ['Basic'],
		'number': '99',
		'artist': 'Keiji Kinebuchi',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/99.png',
			'large': 'https://images.pokemontcg.io/base1/99_hires.png'
		}
	},
	{
		'id': 'base1-100',
		'name': 'Lightning Energy',
		'supertype': 'Energy',
		'subtypes': ['Basic'],
		'number': '100',
		'artist': 'Keiji Kinebuchi',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/100.png',
			'large': 'https://images.pokemontcg.io/base1/100_hires.png'
		}
	},
	{
		'id': 'base1-101',
		'name': 'Psychic Energy',
		'supertype': 'Energy',
		'subtypes': ['Basic'],
		'number': '101',
		'artist': 'Keiji Kinebuchi',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/101.png',
			'large': 'https://images.pokemontcg.io/base1/101_hires.png'
		}
	},
	{
		'id': 'base1-102',
		'name': 'Water Energy',
		'supertype': 'Energy',
		'subtypes': ['Basic'],
		'number': '102',
		'artist': 'Keiji Kinebuchi',
		'legalities': {
			'unlimited': 'Legal',
			'standard': 'Legal',
			'expanded': 'Legal'
		},
		'images': {
			'small': 'https://images.pokemontcg.io/base1/102.png',
			'large': 'https://images.pokemontcg.io/base1/102_hires.png'
		}
	}
]
