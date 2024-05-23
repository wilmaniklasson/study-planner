import React from 'react';

const Header = ({ restartWeek, totalTodos, completedTodos }) => {
    return (
        <header>
            <h1>Min vecka</h1>
            <p className='completedTodos'>{completedTodos}/{totalTodos} Uppgifter klara</p>
            <button onClick={restartWeek} className="restart-week">Starta om vecka</button>
        </header>
    );
};

export default Header;
