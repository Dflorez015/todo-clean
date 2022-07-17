import { InputText } from "@ts/components-props";

export const homeAddinput: InputText = {
    id: "1",
    name: "new_task",
    type: "text",
    errorMessage: "La tarea debe tener entre 3 a 50 caracteres.",
    placeholder: "Agregar una nueva tarea",
    pattern: ".{3,50}",
    label: '',
    required: true,
}