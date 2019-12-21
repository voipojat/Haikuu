import React, { useState } from 'react'

function useInputState(initial) {
    const [value, changeValue] = useState(initial);
    const handleChange = input => {
        changeValue(input.target.value);
    }
    return [value, handleChange]
}

export default useInputState