import { useState } from 'react'
import './App.css'

// Ad - min 3, max 15
// Email - içində @ işarəsi olsun, . olsun, @ işarəsindən öncə ən azı 3 simvol olsun
// Yaş - min 12, max 100

function App() {
	const [name, setName] = useState({
		value: "",
		error: null
	})

	const formSubmit = (event) => {
		event.preventDefault()
		console.log(name)
		validate()
	}

	const validate = () => {
		if (name.value.length < 3) {
			setName({
				...name,
				error: 'Ad 3 simvoldan kiçik ola bilməz'
			})
		} else if (name.value.length > 15) { 
			setName({
				...name,
				error: 'Ad 15 simvoldan böyük ola bilməz'
			})
		} else {
			setName({
				...name,
				error: null
			})
		}
	}

	return (
		<form onSubmit={formSubmit}>
			<label htmlFor="name">Ad</label>
			<input
				id="name"
				type="text"
				placeholder="Ad"
				value={name.value}
				onChange={e => setName({
					...name,
					value: e.target.value
				})}
			/>
			<div className='error-text'>{name.error}</div>

			<label htmlFor="email">Email</label>
			<input id="email" type="text" placeholder="E-poçt"/>

			<label htmlFor="age">Yaş</label>
			<input id="age" type="text" placeholder="Yaş"/>

			<button>Göndər</button>
		</form>
	)	
}

export default App
