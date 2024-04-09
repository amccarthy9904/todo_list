import { TodoItem } from "./TodoItem"
/* eslint react/prop-types: 0 */
 
export function TodoList({ todos, toggleTodo, deleteTodo }){

    return (
        <ul className="list">
        {/* if we have no todos use a short circuit */}
        {todos.length === 0 && "No Todos"}

        {/*else loop through todos and render each one - use map */}
        {todos.map(todo => {
          return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
            // below and above are the same
            // id={todo.id} 
            // completed={todo.completed}
            // title={todo.title} 
            // key={todo.id}
            />
          )
        })}
      </ul>
    )
}