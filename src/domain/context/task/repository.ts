import { Task } from "domain/entities/task";

export interface TaskRepository {
    taskList: Task[],
    checkedTaskList: Task[],
    addTask: (title: string) => void;
    editTask: (task: Task) => void;
}