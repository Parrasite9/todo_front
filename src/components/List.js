import {useState, useEffect} from 'react'

const List = ({todos, setTodos, setEditTodo}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }

    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{...item, completed: !item.completed}
            }
            return item;
        }))
    }
    return (
        <>
            {todos.map((todo) => (
                <>
                    <li className='list-item' key={todo.id}>
                        <input type='text' value={todo.title} className='list' className={`list ${todo.completed ? "complete" : ""}`} onChange={(e) => e.preventDefault()} />
                    </li>

                    {/* COMPLETED ITEM BUTTON  */}
                    <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                        <i className='fa fa-check-circle'></i>
                    </button>

                    {/* EDIT ITEM BUTTON  */}                    
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>

                    {/* DELETE ITEM BUTTON  */}
                    <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </>
            ))}
        </>
    )
}

export default List