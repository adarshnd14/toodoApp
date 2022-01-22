import React from 'react'
// import { withRouter } from 'react-router-dom'

function TodoList(props) {

    const completeTodo = (index) => {
        console.log(index);
        const todosCopy = [...props.todos]
        todosCopy[index].completed = !todosCopy[index].completed
        props.settodos(todosCopy)
    }

    const deleteTodo = (index) => {
        const todosCopy = [...props.todos]
        const filteredTodos = todosCopy.filter((wasteValue, i) => {
            return i !== index
        })
        props.settodos(filteredTodos)
    }

    return (
        <div>
            {props.todos.length > 0 ? props.todos.map((todo, index) => {
                return <div key={index} className='todoList'>
                    <table className='table myTable' width="50">
                        <tbody >
                            <tr>
                                <td class="text-center text-wrap">
                                    <span style={{textAlign:'center', paddingTop:'10px'},todo.completed ? { textDecoration: 'line-through' } : {}}
                                        className={'border border-primary', todo.completed ? 'todoListcompleted ' : 'todoListPending'}>  {todo.task}</span>
                                </td>
                                <td>
                                    <button onClick={() => { completeTodo(index) }} className='shadow completedButton btn rounded-pill border border-primary m-2'>Completed</button>
                                </td>
                                <td>
                                    <button onClick={() => { deleteTodo(index) }} className='shadow deleteButton btn rounded-pill border border-danger m-2 '>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            }) : <p style={{ color: 'gray' }}>{'Add Todos...'}</p>}

        </div>
    )
}

export default TodoList