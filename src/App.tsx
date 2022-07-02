import React from 'react';

import './App.css';
import {ToDoList} from "./components/ToDoList";

function App() {
    let tasks1=[
        {id:1,subtitle:"Read a book.",isDone:true},
        {id:2,subtitle:"Go on a walk with dog",isDone:true},
        {id:3,subtitle:" Learn Typescript",isDone:false},
        {id:4,subtitle:" Learn English words",isDone:false},
    ]
    let tasks2=[
        {id:1,subtitle:"HTML",isDone:true},
        {id:2,subtitle:"JS",isDone:true},
        {id:3,subtitle:"HTML",isDone:false},
        {id:4,subtitle:"TypeScript",isDone:false},
    ]
    return ( <>
         <ToDoList title="What to DO" tasks={ tasks1}/>
         <ToDoList title="What to learn"tasks={ tasks2} />
               </>
          );
}

export default App;
