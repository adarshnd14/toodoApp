import './App.css';
import React from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TodoApp from './Components/TodoApp';


function App() {
  return (
    
        <div className="App">
          <h1 className='header'>Todo App</h1>
          <TodoApp />
        </div>
    
  );
}

export default App;
