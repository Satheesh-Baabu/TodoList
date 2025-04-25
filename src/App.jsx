import { Provider } from "react-redux"
import AddToDo from "./AddToDo"
import ViewTask from "./ViewTask"
import { store } from "./store"
function App() {

  return (
    <Provider store={store}>
      <h1>TO-DO List</h1>
      <AddToDo/><br/>
      <ViewTask />
    </Provider> 
  )
}

export default App
