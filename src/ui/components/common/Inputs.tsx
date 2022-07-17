import React, { useState } from "react"
import { InputElementWrapper } from "@style/comon-styled"
import { InputProps } from "@ts/components-props"

export const FormInput: React.FC<InputProps> = ({ attributes, handleFunction, value }) => {
    const [focused, setFocused] = useState(false)
    const { id, name, type, placeholder, required, pattern } = attributes

    const handleBlur = () => setFocused(value !== "")

    return (
        <InputElementWrapper>
            <label htmlFor={name}>{attributes.label}</label>
            <input {...{ id, name, type, placeholder, required, pattern }} onChange={handleFunction} onBlur={handleBlur} data-focused={`${focused}`} value={value} />
            <span>{attributes.errorMessage}</span>
        </InputElementWrapper>
    )
}
