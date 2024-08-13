import React, {useState} from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
 const [edit, setEdit] = useState({
    id: null,
    value: ''
 });  

 const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,  
      value: ''
    })
    
 }

 if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
 }

  return todos.map((todoItem, index) => (
   <div 
   className={todoItem.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

    <div key={todoItem.id} onClick={() => completeTodo(todoItem.id)}>
      {todoItem.text}
    </div>
    <div className="icons">
      <RiCloseCircleLine 
      onClick={() => removeTodo(todoItem.id)}
      className='delete-icon'
      /> 
      <TiEdit onClick={() => setEdit({id: todoItem.id, value: todoItem.text})}
      className='edit-icon'/>
    </div>

    </div> 
  ));
   
}

export default Todo