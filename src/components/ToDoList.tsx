import {TaskList} from "./taskList";
import {FilterButtonValuesType} from "../App";

export type TasksType = {
    id: number
    subtitle: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    deleteTask: (id: number) => void
    changeFilter: (value: FilterButtonValuesType) => void
}


export function ToDoList(props: PropsType) {
    return (
        <div>
            <div>{props.title}</div>
            <input/>
            <button>Add new task</button>
            <TaskList task={props.tasks}
                      deleteTask={props.deleteTask}
            />
            <button onClick={() => {
                props.changeFilter('all')
            }}>All
            </button>
            <button onClick={() => {
                props.changeFilter('active')
            }}>Active
            </button>
            <button onClick={() => {
                props.changeFilter('completed')
            }}>Completed
            </button>
        </div>
    )
}