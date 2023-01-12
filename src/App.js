import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/Header.js'
import Form from './components/Form.js'
import List from './components/List.js'




const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <div className='container'>
        <div className='todo-container'>
          {/* <div> */}
            <Header />
          {/* </div> */}
            <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
            <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </>
  )
}

export default App