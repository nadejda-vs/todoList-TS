type TasksType={
   id:number
    subtitle:string
    isDone:boolean
}

type PropsType={
    title:string
    tasks:Array<TasksType>
}




export function ToDoList(props:PropsType) {

    return (
        <div>

        <div>{props.title}</div>
            <input/>
            <button>Add new task</button>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone} /><span>{props.tasks[0].subtitle}</span></li><li><input type="checkbox" checked={props.tasks[1].isDone} /><span>{props.tasks[1].subtitle}</span></li><li><input type="checkbox" checked={props.tasks[2].isDone} /><span>{props.tasks[2].subtitle}</span></li>

                    </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}