import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Title from '../components/Title'
import './App.css';

const App = () => (
  <div className="App">
    <Title />
    <AddTodo className="AddBox"/>
    <VisibleTodoList className="List"/>
    <Footer />
  </div>
)

export default App
