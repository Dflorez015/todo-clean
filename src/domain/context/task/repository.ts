import { Task } from "-/entities/task";

export interface TaskRepository {
    taskList: Task[],
    addTask: (title: string) => void;
    editTask: (task: Task) => void;
}