import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask as deleteToDo } from './slices/ToDoSlice'
import { editTask as editToDo ,toggleComplete} from './slices/ToDoSlice'

function ViewTask() {
  const allTask=useSelector((state)=>state.todos)
  const dispatch=useDispatch()
  function deleteTask(index)
  {
    dispatch(deleteToDo(index))
  }
  function editTask(index,t)
  {
    const editText=prompt("Edit your task",t)
    if(editText)
      dispatch(editToDo({index,editText}))
  }
  function toggleTask(index)
  {
    dispatch(toggleComplete(index))
  }
  return (
    <div className="container">
      <h1>All Tasks</h1>
      <table>
        <thead>
          <tr>
            <th style={{width:"25%"}}>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allTask.map((task, index) => (
            <tr key={index}>
            <td style={{ textDecoration: task.completed ? 'line-through' : 'none',width:"25%"}}>
              {task.text}
            </td>
            <td>{task.completed ? 'Completed' : 'Pending'}</td>
            <td className="action-buttons">
              <button onClick={() => toggleTask(index)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => editTask(index, task.text)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewTask