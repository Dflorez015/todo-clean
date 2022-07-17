import create from 'zustand'
import { TaskRepository } from './repository'
import { addNewTask, editTaskOnList } from './useCase'

export const taskStore = create<TaskRepository>((set) => ({
    taskList: [],
    addTask: (title) => set((state) => ({ ...state, taskList: addNewTask(state, title) })),
    editTask: (task) => set((state) => ({ ...state, taskList: editTaskOnList(state, task) }))
}))