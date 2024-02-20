/* eslint-disable react/prop-types */


import { useState } from 'react'

function Input ({ label, onChange, validation, ...props }) {

    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        const val = event.target.value
        setValue(val)
        onChange(val)

        setError(null)
        if (validation.minLength) {
            if (val.length < validation.minLength) {
                setError(`${label} ${validation.minLength} simvoldan kiçik ola bilməz`)
            }
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
            />
            <div className='error-text'>{error}</div>
        </>
    )
}

export default Input