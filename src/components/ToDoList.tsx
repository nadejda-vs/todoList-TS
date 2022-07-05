import {TaskList} from "./taskList";
import {FilterButtonValuesType} from "../App";
import {ChangeEvent, useState} from "react";

export type TasksType = {
    id: string
    subtitle: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TasksType>
    deleteTask: (id: string) => void
    changeFilter: (value: FilterButtonValuesType) => void
    addTask: (subtitle: string) => void
}


export function ToDoList(props: PropsType) {
    const [newTaskSubtitle, setNewTaskSubtitle] = useState('')
    const onNewTaskSubtitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskSubtitle(e.currentTarget.value)
    }
    const addTask = () => {
        props.addTask(newTaskSubtitle);
        setNewTaskSubtitle('');
    }
    const onAllClickHandler = () => {
        props.changeFilter('all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }
    return (
        <div>
            <div>{props.title}</div>
            <input
                value={newTaskSubtitle}
                onChange={onNewTaskSubtitle}
            />
            <button onClick={addTask}>Add new task</button>
            <TaskList task={props.tasks}
                      deleteTask={props.deleteTask}
            />
            <button onClick={onAllClickHandler}>All
            </button>
            <button onClick={onActiveClickHandler}>Active
            </button>
            <button onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    )
}