import { useState } from 'react'
import Input from './Input'
import './App.css'

// Ad - min 3, max 15
// Email - içində @ işarəsi olsun, . olsun, @ işarəsindən öncə ən azı 3 simvol olsun
// Yaş - min 12, max 100

function App() {
	const [name, setName] = useState({
		value: "",
		error: null
	})

	const [age, setAge] = useState({
		value: 12,
		error: null
	})

	const formSubmit = (event) => {
		event.preventDefault()
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

		if (age.value < 12) {
			setAge({
				...age,
				error: 'Yaş 12-dən kiçik ola bilməz'
			})
		} else if (age.value > 100) {
			setAge({
				...age,
				error: 'Yaş 100-dən böyük ola bilməz'
			})
		} else {
			setAge({
				...age,
				error: null
			})
		}
	}

	return (
		<form onSubmit={formSubmit} onKeyUp={validate}>

			<Input
				id="firstName"
				name="firstName"
				type="text"
				label="Ad"
				onChange={(x) => console.log(x)}
				validation={{ minLength: 3}}
			/>
			<Input
				id="lastName"
				name="lastName"
				type="number"
				label="Soyad"
				onChange={(x) => console.log(x)}
				validation={{ min: 10}}

			/>


			{/* <label htmlFor="name">Ad</label>
			<input
				id="name"
				className={name.error ? 'error' : null}
				type="text"
				placeholder="Ad"
				value={name.value}
				onChange={e => setName({ ...name, value: e.target.value })}
			/>
			<div className='error-text'>{name.error}</div> */}

			<label htmlFor="email">Email</label>
			<input id="email" type="text" placeholder="E-poçt"/>

			<label htmlFor="age">Yaş</label>
			<input
				id="age"
				className={age.error ? 'error' : null}
				type="number"
				placeholder="Yaş"
				min={10}
				value={age.value}
				onChange={(event) => { setAge({ ...age, value: event.target.value }) }}
			/>
			<div className='error-text'>{age.error}</div>

			<button>Göndər</button>
		</form>
	)	
}

export default App
