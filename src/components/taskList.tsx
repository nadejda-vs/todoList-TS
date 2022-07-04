import {TasksType} from "./ToDoList";

type TaskType = {
    task: Array<TasksType>
    deleteTask:(id:number)=>void
}

export function TaskList(props: TaskType) {
    return (
        <ul>
            {props.task.map((t) => (<li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.subtitle}</span>
                <button onClick={()=>{
                    props.deleteTask(t.id)
                }}>
                    x</button></li>
                ))}
        </ul>
    )
}