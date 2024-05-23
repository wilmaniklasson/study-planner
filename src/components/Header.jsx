import React from 'react';
import { useStore } from '../data/store.js';

const Header = () => {
    const totalTodos = useStore(state => state.todos.length);
    const completedTodos = useStore(state => state.todos.filter(todo => todo.done).length);
    const restartWeek = useStore(state => state.restartWeek);

    return (
        <header>
            <h1>Min vecka</h1>
            <p className='completedTodos'>{completedTodos}/{totalTodos} Uppgifter klara</p>
            <button onClick={restartWeek} className="restart-week">Starta om vecka</button>
        </header>
    );
};

export default Header;
