import { InputText } from "+/utils/interface/components-props";

export const homeAddinput: InputText = {
    id: "1",
    name: "new_task",
    type: "text",
    errorMessage: "La tarea debe tener entre 2 a 20 caracteres.",
    placeholder: "Agregar una nueva tarea",
    label: '',
    required: true,
}