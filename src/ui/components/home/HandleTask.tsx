import { IoSendSharp } from 'react-icons/io5';
import { useState } from 'react'
import { FormInput } from '@components/common/Inputs';
import { InputWrapper } from '@style/home-styled';
import { SubmitBtn } from '@style/comon-styled';
import { taskStore } from '@store/task';
import { homeAddinput } from '@constants/forms/homeForm';
import { FormSubmit, HandleInput } from '@ts/form-elements-type';

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
