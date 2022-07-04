import {TaskList} from "./taskList";

export type TasksType={
   id:number
    subtitle:string
    isDone:boolean
}

type PropsType={
    title:string
    tasks:Array<TasksType>
    deleteTask:(id:number)=>void
}


export function ToDoList(props:PropsType) {
    return (
        <div>
        <div>{props.title}</div>
            <input/>
            <button>Add new task</button>
            <TaskList task={props.tasks}
                      deleteTask={props.deleteTask}
            />
            <button >All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}