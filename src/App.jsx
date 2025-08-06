import React from 'react'
import Counter from './components/middleWare/Counter'
import { User } from './components/fetchUser/FetchUser'
import Todolist from './components/Todo/TodoList'

function App() {
  return (
    <div>
      <Todolist/>
      {/* <User/> */}
      {/* <Counter/> */}
    </div>
  )
}

export default App
