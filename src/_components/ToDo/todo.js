import React, { useState, useEffect } from 'react';
import './todo.css';

export default function Todo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false}]);
            setInputValue('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <form onSubmit={addTodo} className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="add a new todo..."
                />
                <button type="submit" className="add-button">
                    <img src="assets/todoadd.svg" alt="add todo"></img>
                    </button>
            </form>
            <ul className="todo-list">
                {todos.map(todo => (   
                    <li key={todo.id} className="todo-item-wrapper">
                        <p>●</p>
                        <div className="todo-item">
                            <p onClick={() => toggleCompleted(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none', textDecorationColor: 'var(--brown)'}}>
                                {todo.text}
                            </p>
                            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                                <img src="assets/todoremove.svg" alt="delete todo" />
                            </button>
                        </div>
                    </li>
                 ))}
            </ul>
        </div>
    )
    
}