import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodo] = useState([]);

   const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
     return;  
    }

    const newTodos = [todo, ...todos];
console.log(newTodos)
    setTodo(newTodos);
   };

   const updateTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    } 
    
    setTodo(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    
   }

   const removeTodo = id => {
    const removeArr = [...Todo].filter(todo => todo.id !== id)

    setTodo(removeArr);
   };

   

   const completeTodo = id => {
    let updatedTodos = Todo.map(todo => {
     if (todo.id === id) {
        todo.isComplete = !todo.isComplete
     }   
     return todo;
    });
    setTodo(updatedTodos);
   };
   return (
    <div>
        <h1>What's the plan for today?</h1>
     <TodoForm onSubmit={addTodo} />
     <Todo
     todos={todos}
     completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );

 }
export default TodoList;