import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)

    const increase = () => {
        setValue(value + 1)
    }

    const decrease = () => {
        setValue(value - 1)
    }
  return (
    <div>
        <button onClick={decrease} role='decrease'>-</button>
        <p role='value'>{value}</p>
        <button onClick={increase} role='increase'>+</button>
    </div>
  )
}

export default Counter