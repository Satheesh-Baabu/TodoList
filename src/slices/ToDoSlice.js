import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

const ToDoSlice=createSlice({
    name:'ToDo',
    initialState,
    reducers:{
        addTask(state,action){
            state.push({text:action.payload,completed:false})
        },
        deleteTask(state,action)
        {
            return state.filter((val,index)=>index!=action.payload)
        },
        editTask(state,action)
        {
            const {index,editText}=action.payload;
            state[index].text= editText;
        },
        toggleComplete(state,action)
        {
            const index=action.payload;
            state[index].completed=!state[index].completed;
        }
    }
})

export const {addTask,deleteTask,editTask,toggleComplete}=ToDoSlice.actions;

export default ToDoSlice.reducer;