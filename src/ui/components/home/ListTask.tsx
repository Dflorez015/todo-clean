import { Fragment, FC } from "react"
import { TaskListWrapper, TaskStyleWrapper } from "@style/home-styled"
import { StyleRadioInput } from "@style/comon-styled"
import { taskStore } from "@store/task"
import { TaskProps } from "@ts/components-props"


export function ListTask() {

    const taskList = taskStore(state => [...state.taskList, ...state.checkedTaskList])

    return (
        <TaskListWrapper>
            {taskList.map((task, index) => (
                <Fragment key={index}>
                    <Task task={task} />
                </Fragment>
            ))}
        </TaskListWrapper>
    )
}


export const Task: FC<TaskProps> = ({ task }) => {

    const editTask = taskStore((state => state.editTask))

    const handleInput = () => {
        const newTask = { ...task, checked: !task.checked }
        editTask(newTask)
    }

    return (
        <TaskStyleWrapper>
            <StyleRadioInput type="checkbox" checked={task.checked} onChange={handleInput} />
            <h5>{task.title}</h5>
        </TaskStyleWrapper>
    )
}
