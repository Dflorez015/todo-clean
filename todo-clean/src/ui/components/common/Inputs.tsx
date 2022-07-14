import React, { useContext } from "react"
import { InputElementWrapper } from "+/utils/style/util-styled"
import { InputProps } from "~/ui/utils/interface/components-props"

export const FormInput: React.FC<InputProps> = ({ attributes, handleFunction, value }) => {
    const { id, name, type, placeholder, required, pattern } = attributes
    return (
        <InputElementWrapper>
            <label htmlFor={name}>{attributes.label}</label>
            <input {...{ id, name, type, placeholder, required, pattern }} onChange={handleFunction} value={value} />
            <span>{attributes.errorMessage}</span>
        </InputElementWrapper>
    )
}
