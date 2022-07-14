import { Task } from "-/entities/task"
import { HandleInput } from "./formElements"

export interface InputText {
    id:              string
    name:            string
    type:            string
    errorMessage:    string
    placeholder:     string
    label:           string
    pattern?:        string
    required:        true
}

export interface InputProps {
    attributes: InputText
    handleFunction:  (e: HandleInput) => void
    value: string
}

export interface TaskProps {
    task: Task
}