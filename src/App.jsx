import { useState } from "react"
import "./App.css"

const useStateArray = (arrDefault) => {
  const [arr, setArr] = useState(arrDefault)

  return [
    arr,
    (itemNew) => setArr([...arr, itemNew]),
    (itemUpdated) =>
      setArr(arr.map((item) =>
        item._id === itemUpdated._id ? { ...itemUpdated } : item
      )),
    (id) => setArr( arr.filter((item) => item._id !== id))
  ]
}

function App() {
  console.log("State change...", Date.now())

  const [todos, addTodo, updateTodo, deleteTodo] = useStateArray([
    { _id: "t1", title: "Wake the dog" },
    { _id: "t2", title: "Code custom array hook" },
    { _id: "t3", title: "Drink some coffee" },
  ])

  const handleAdd = () => {
    const titleNew = prompt("New title: ")
    if (!titleNew) return

    addTodo({ _id: Math.random(), title: titleNew })
  }

  const handleUpdate = (item) => {
    const titleNew = prompt("New title: ", item.title)
    if (!titleNew) return
    updateTodo({ ...item, title: titleNew })
  }

  const handleDelete = (id) => deleteTodo(id)

  return (
    <div className="App">
      <header className="App-header">
        <div className="todos">
          {todos.map((todo) => (
            <div onDoubleClick={() => handleUpdate(todo)} key={todo._id}>
              <span>{todo.title}</span>
              <button onClick={() => handleDelete(todo._id)}>X</button>
            </div>
          ))}
        </div>
        <div className="todos-actions">
          <button onClick={handleAdd}>Add Todo</button>
        </div>
      </header>
    </div>
  )
}

export default App
