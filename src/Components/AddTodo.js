import React from 'react'


function AddTodo(props) {

    const addTodo = () => {

        const todosCopy = [...props.todos]

        const index = todosCopy.findIndex((todo) => {
            return todo.task === props.newTodo.task
        })
        if (index === -1) {
            todosCopy.push(props.newTodo)
            props.settodos(todosCopy)
        } else {
            console.error('todo already present');
        }
    }

    const handleChange = (event) => {
        const newTodoCopy = { ...props.newTodo }
        newTodoCopy.task = event.target.value
        newTodoCopy.completed = false
        props.setnewTodo(newTodoCopy)
        // console.log("handle change running");
    }

    return (
        <div>
            <input type={'text'} name='task' value={props.newTodo.task}
                onChange={(event) => {
                    handleChange(event)
                }} className='border border-success m-2 pl-3 form-control rounded-pill shadow' />

            <button onClick={() => { addTodo() }} className='btn btn-light rounded-circle inside'><i class="fas fa-plus-circle " /></button>
        </div>
    )
}

export default AddTodo