import React, {useState} from 'react';

import './App.css';
import {TasksType, ToDoList} from "./components/ToDoList";

export type FilterButtonValuesType = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id: 1, subtitle: "Read a book.", isDone: true},
            {id: 2, subtitle: "Go on a walk with dog", isDone: true},
            {id: 3, subtitle: " Learn Typescript", isDone: false},
            {id: 4, subtitle: " Learn English words", isDone: false},
        ]
    )

    function deleteTask(id: number) {
        let filteredTask = tasks.filter(t => t.id !== id)
        setTasks(filteredTask)
    }

    let [filter, setFilter] = useState('all')

    function changeFilter(value: FilterButtonValuesType) {
        setFilter(value)
    }

    let filterTasksForTodoList = tasks
    if (filter === "completed") {
        filterTasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        filterTasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    return (
        <>
            <ToDoList title="What to DO"
                      tasks={filterTasksForTodoList}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
            />
        </>
    );
}

export default App;
