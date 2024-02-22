/* eslint-disable react/prop-types */


import { useState } from 'react'

function Input ({ label, onChange, validation, ...props }) {

    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        const val = event.target.value
        setValue(val)
        onChange(val)
        validate(val)
    }

    const validate = (val) => {
        if (props.type === 'text') {
            if (validation.minLength && val.length < validation.minLength) {
                setError(`${label} ${validation.minLength} simvoldan kiçik ola bilməz`)
            } else if (validation.maxLength && val.length > validation.maxLength) {
                setError(`${label} ${validation.maxLength} simvoldan böyük ola bilməz`)
            } else {
                setError(null)
            }
        } else if (props.type === "number") {
            if (validation.min !== undefined && val < validation.min) {
                setError(`${label} ${validation.min}-dan kiçik ola bilməz`)
            } else if (validation.max !== undefined && val > validation.max) {
                setError(`${label} ${validation.max}-dan böyük ola bilməz`)
            } else {
                setError(null)
            }
        }
    }
    
    let extraProps = {}
    if (props.type === "number") {
        extraProps = {
            min: 0,
            max: 100
        }
    }

    return (
        <>
            <label htmlFor="name">{label}</label>
            <input
                className={error ? 'error' : null}
                placeholder={label}
                value={value}
                onChange={handleChange}
                {...props}
                {...extraProps}
            />
            <div className='error-text'>{error}</div>
        </>
    )
}

export default Input