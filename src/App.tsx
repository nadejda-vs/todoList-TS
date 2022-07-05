import React, {useState} from 'react';

import './App.css';
import {TasksType, ToDoList} from "./components/ToDoList";
import {v1} from "uuid";

export type FilterButtonValuesType = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id: v1(), subtitle: "Read a book.", isDone: true},
            {id: v1(), subtitle: "Go on a walk with dog", isDone: true},
            {id: v1(), subtitle: " Learn Typescript", isDone: false},
            {id: v1(), subtitle: " Learn English words", isDone: false},
        ]
    )

    function deleteTask(id: string) {
        let filteredTask = tasks.filter(t => t.id !== id)
        setTasks(filteredTask)
    }

    function addTask(subtitle: string) {
        let newTask = [{id: v1(), subtitle: subtitle, isDone: true}];
        let newTasks = [...newTask, ...tasks]
        setTasks(newTasks)
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
                      addTask={addTask}
            />
        </>
    );
}

export default App;
