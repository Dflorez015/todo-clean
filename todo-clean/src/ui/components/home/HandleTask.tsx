import { useState } from 'react'
import { FormInput } from '../common/Inputs'
import { FormSubmit, HandleInput } from '+/utils/interface/formElements'
import { homeAddinput } from '+/utils/constant/forms/homeForm'
import { InputWrapper } from '+/utils/style/home-styled'
import { SubmitBtn } from '+/utils/style/util-styled'
import { taskStore } from '-/context/task'
import { IoSendSharp } from 'react-icons/io5';

export const HandleTask = () => {
    const [newTask, setTask] = useState("")
    const addTask = taskStore((state) => state.addTask)

    const submitTask = (e: FormSubmit) => {
        e.preventDefault()
        addTask(newTask)
        setTask("")
    }

    const handleInput = (e: HandleInput) => {
        const { value } = e.target
        setTask(value)
    }

    return (
        <InputWrapper onSubmit={submitTask}>
            <FormInput attributes={homeAddinput} handleFunction={handleInput} value={newTask} />
            <SubmitBtn type="submit"> <IoSendSharp /> </SubmitBtn>
        </InputWrapper>
    )
}
