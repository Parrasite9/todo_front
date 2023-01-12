import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/Header.js'
import Form from './components/Form.js'



const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])


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
            <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  )
}

export default App