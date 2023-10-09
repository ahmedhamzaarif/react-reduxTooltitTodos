import React from 'react'
import AddTodo from './components/AddTodo'
import ToDos from './components/ToDos'
import './App.css'

const App = () => {
  return (
    <div>
      <AddTodo/>
      <ToDos/>
    </div>
  )
}

export default App