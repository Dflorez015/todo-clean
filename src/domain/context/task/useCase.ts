import { Task } from "~/domain/entities/task";
import { TaskRepository } from "./repository";

export const addNewTask = (state: TaskRepository, title: string): Task[] => {
    const { taskList } = state;
    const length = taskList.length
    if (length === 0) {
        return [...taskList, { title: title, id: "1", checked: false }]
    }
    return [...taskList, { title: title, id: `${length + 1}`, checked: false }]
}

export const editTaskOnList = (state: TaskRepository, newTask: Task) => {
    const { taskList } = state;
    const indexTask = taskList.findIndex(task => task.id === newTask.id)
    let newTaskList = [...taskList]
    newTaskList[indexTask] = newTask
    return [...newTaskList]
}