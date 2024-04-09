import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => { // store todos locally when [todos] changes
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    // print(localStorage.getItem("ITEMS"))
  }, [todos])

  function addTodo(title){
    setTodos((currentTodos) => {
        return [...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false }]
    })

  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // state is immutable
          // below mutates state, bad
          // todo.completed = completed
          // when changing state, we create a new state object
          return { ...todo, completed }
        }
        // if we dont match ids 
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // setNewItem("val")
  // you can only return a single element
  // everything returned must be contained within a single element
  // can use div or fragment <>, empty tag
  return (
    <>
    {/* pass a Prop (addTodo) to our custom component */}
    <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}