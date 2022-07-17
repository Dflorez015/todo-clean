import { Task } from "domain/entities/task";
import { TaskRepository } from "./repository";

export const addNewTask = (state: TaskRepository, title: string): Task[] => {
    const { taskList } = state;
    const length = taskList.length
    if (length === 0) {
        return [...taskList, { title: title, id: "1", checked: false }]
    }
    return [...taskList, { title: title, id: `${length + 1}`, checked: false }]
}

export const editTaskOnList = (state: TaskRepository, newTask: Task): TaskRepository => {
    const { taskList, checkedTaskList } = state;
    if (newTask.checked) {
        const editedTaskList = taskList.filter((task) => task.id !== newTask.id)
        return { ...state, taskList: editedTaskList, checkedTaskList: [...checkedTaskList, newTask] }
    }
    else {
        const editedCheckedTaskList = checkedTaskList.filter((task) => task.id !== newTask.id)
        return { ...state, taskList: [...taskList, newTask], checkedTaskList: editedCheckedTaskList }
    }

}