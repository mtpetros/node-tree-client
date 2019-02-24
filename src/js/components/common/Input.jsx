import React from 'react'

const Input = (props) => {
  const {
    label,
    type,
    name,
    value,
    setKey,
    formatter
  } = props

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target

    if (formatter) {
      setKey(name, formatter(value))
      return e.preventDefault()
    }

    setKey(name, value)
    e.preventDefault()
  }

  return (
    <div className='input'>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default Input
