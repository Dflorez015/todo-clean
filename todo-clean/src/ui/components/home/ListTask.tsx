import { TaskListWrapper, TaskStyleWrapper } from '+/utils/style/home-styled'
import { StyleRadioInput } from '+/utils/style/util-styled'
import { taskStore } from '-/context/task'
import { FC, Fragment } from 'react'
import { TaskProps } from '+/utils/interface/components-props'
import { HandleInput } from '~/ui/utils/interface/formElements'

export default function ListTask() {

    const taskList = taskStore(state => state.taskList)

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

    const handleInput = (e: HandleInput) => {
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
