// import { configureStore } from "@reduxjs/toolkit";
// import ToDoReducer from './slices/ToDoSlice'

// export const store=configureStore({
//         devTools:true,
//         reducer:{
//             todos:ToDoReducer
//         }
//     }
// )


import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./slices/ToDoSlice";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todoState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Get persisted state if available
const persistedState = loadState();

export const store = configureStore({
  // devTools: true,
  reducer: {
    todos: ToDoReducer,
  },
  preloadedState: {
    todos: persistedState ? persistedState.todos : [],
  },
});

// Subscribe to store updates and save to localStorage
store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});
