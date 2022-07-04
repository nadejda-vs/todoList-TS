import React, {useState} from 'react';

import './App.css';
import {ToDoList} from "./components/ToDoList";

function App() {

 let [tasks,setTasks]=useState(
     [
         {id: 1, subtitle: "Read a book.", isDone: true},
         {id: 2, subtitle: "Go on a walk with dog", isDone: true},
         {id: 3, subtitle: " Learn Typescript", isDone: false},
         {id: 4, subtitle: " Learn English words", isDone: false},
     ]
 )

    function deleteTask(id:number){
     let filteredTask=tasks.filter(t=>t.id!==id)
        setTasks(filteredTask)
    }
    return (
        <>
            <ToDoList title="What to DO"
                      tasks={tasks}
                      deleteTask={deleteTask}/>

        </>
    );
}
export default App;
