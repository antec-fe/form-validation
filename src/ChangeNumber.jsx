import { useState, useref } from "react"
import Modal from './Modal'

function ChangeNumber () {
    const inputRef = useRef()
	let [isOpen, setIsOpen] = useState(false) // [state, setState]
	let [errorText, setErrorText] = useState('')

	const increase = () => {
		if (inputRef.current.value < 10) {
			inputRef.current.value++
			setIsOpen(false)
		} else {
			setIsOpen(true)
			setErrorText('Dəyər 10-dan yuxarı olmamalıdır')
		}
	}
	
	const decrease = () => {
		if (inputRef.current.value > 0) {
			inputRef.current.value--
			setIsOpen(false)
		} else {
			setIsOpen(true)
			setErrorText('Dəyər 0-dan aşağı olmamalıdır')
		}
	}

	const onClose = () => {
		isOpen = false
	}

	return (
		<>
			<input ref={inputRef} type="text" defaultValue={5} />
			<button onClick={increase}>Artır</button>
			<button onClick={decrease}>Azalt</button>
			<Modal isOpen={isOpen} close={onClose} text={errorText}/>
		</>
	)
}

export default ChangeNumber