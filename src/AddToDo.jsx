import React, { useState } from 'react'
import {addTask as addToDo} from './slices/ToDoSlice'
import { useDispatch } from 'react-redux';

function AddToDo() {
    const [task,setTask]=useState("");
    const dispatch=useDispatch()
    function addTask(){
        if(task)
            dispatch(addToDo(task))
        setTask("")
    }
  return (
    <div className='container'>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter your task"/>
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default AddToDo