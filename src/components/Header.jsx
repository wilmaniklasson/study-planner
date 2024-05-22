import React from 'react';
import { useStore } from '../data/store';

const Header = () => {
    const todos = useStore(state => state.todos);
    const toggleTodo = useStore(state => state.toggleTodo);
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.done).length;

    const restartWeek = () => {
        todos.forEach(todo => {
            if (todo.done) {
                toggleTodo(todo.id);
            }
        });

    };

    return (
        <>
            <header>
                <h1>Min vecka</h1>
				<p className='completedTodos'>{completedTodos}/{totalTodos} Uppgifter klara</p>
                <button onClick={restartWeek} className="restart-week">Starta om vecka</button>
            </header>
        </>
    );
};

export default Header;
