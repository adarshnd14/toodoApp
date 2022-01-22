import React, {useState} from 'react'
// import { withRouter } from 'react-router-dom'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import './Todo.css'


function TodoApp(props){

    const [todos,settodos]=useState([])
    const [newTodo,setnewTodo]=useState({
        task:'',
        completed:false
    })
    

    return(
        
        <div className="form shadow col-6" >
            <AddTodo  todos={todos} settodos={settodos} newTodo={newTodo} setnewTodo={setnewTodo}/>
            <TodoList  todos={todos} settodos={settodos} newTodo={newTodo} setnewTodo={setnewTodo}/>
        </div>
    )
}

export default TodoApp