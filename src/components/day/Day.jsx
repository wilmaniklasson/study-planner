import React, { useState } from 'react';
import { useStore } from '../../data/store';
import Item from './Item';

const Day = ({ day, dayName, dayKey }) => {
    const [newTodo, setNewTodo] = useState('');
    const [showInput, setShowInput] = useState(false);
    const addTodo = useStore(state => state.addTodo);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            addTodo(dayKey, newTodo);  // Use the dayKey to add the todo to the correct day
            setNewTodo('');
            setShowInput(false);
        }
    };

    return (
        <div className="day">
            <h2>{dayName}</h2>
            <ul>
                {day.map(todo => (
                    <Item key={todo.id} item={todo} />
                ))}
            </ul>
            {showInput ? (
                <form onSubmit={handleAddTodo}>
                    <input 
                        type="text" 
                        value={newTodo} 
                        onChange={(e) => setNewTodo(e.target.value)} 
                        placeholder="Skriv din uppgift här" 
                        autoFocus 
                    />
                    <button type="submit">Spara</button>
                    <button type="button" onClick={() => setShowInput(false)}>Avbryt</button>
                </form>
            ) : (
                <button className="new-task-btn "onClick={() => setShowInput(true)}>Ny uppgift</button>
            )}
        </div>
    );
};

export default Day;
