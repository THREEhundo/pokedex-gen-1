const deleteIcon = document.querySelectorAll('.fa-trash')
const thumbIcon = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteIcon).forEach(elem =>
	elem.addEventListener('click', deleteTrainer)
)
Array.from(thumbIcon).forEach(elem =>
	elem.addEventListener('click', addOneLike)
)

async function deleteTrainer() {
	const trainer = this.parentNode.childNodes[1].innerText
	const gym = this.parentNode.childNodes[3].innerText

	try {
		const res = await fetch('deleteTrainer', {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'trainer': trainer,
				'gym': gym
			})
		})
		const data = await res.json()
		console.log(data)
		if (res.ok) {
			this.parentNode.remove()
		} else {
			console.error('Failed to delete trainer:', res.statusText)
		}
	} catch (err) {
		console.error(err)
	}
}
async function addOneLike() {
	const trainer = this.parentNode.childNodes[1].innerText
	const gym = this.parentNode.childNodes[3].innerText
	const likesElem = this.parentNode.childNodes[5]
	const likes = Number(likesElem.innerText)

	try {
		const res = await fetch('addOneLike', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'trainer': trainer,
				'gym': gym,
				'likes': likes
			})
		})
		const data = await res.json()
		console.log(data)

		likesElem.innerText = likes + 1
	} catch (err) {
		console.error(err)
	}
}
