import { useState } from "react"
/* eslint react/prop-types: 0 */

export function NewTodoForm({onSubmit}) {


    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        // not the right way to update, need to pass a functions to setTodos
        // setTodos([...todos, {id : crypto.randomUUID(), title: newItem, completed: false}])
        // this way the value of todos will change before the component re renders
        // setTodos((currentTodos) => {
        //     return [...currentTodos,
        //     { id: crypto.randomUUID(), title: newItem, completed: false }]
        // })
        if (newItem === "") return 
        onSubmit(newItem)
        setNewItem("")
    }

    return (

        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}