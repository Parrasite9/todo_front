import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/Header.js'
import Form from './components/Form.js'
import List from './components/List.js'




const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)


  // READ

  // CREATE

  // UPDATE

  // DELETE


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