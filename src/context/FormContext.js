import React, { useState } from 'react'

export const FormContext = React.createContext();
export function FormProvider(props) {
    const [formSent, handleForm] = useState(null)
    return (
        <FormContext.Provider value={{ formSent, handleForm }}>
            {props.children}
        </FormContext.Provider>
    )
}