import React from 'react';
import { useStore } from '../data/store.js';
import Day from "./day/Day";
import PrioList from "./prio-list/PrioList.jsx";
import { splitTodosIntoDays } from '../utils/list.js';
import { weekdays } from '../utils/weekdays.js';
import Header from './Header.jsx';


const Main = () => {
    const todos = useStore(state => state.todos);
    const days = splitTodosIntoDays(todos);
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.done).length;

    console.log(todos);

    // Hämta toggleTodo-funktionen från useStore
    const toggleTodo = useStore(state => state.toggleTodo);

    const restartWeek = () => {
        todos.forEach(todo => {
            if (todo.done) {
                toggleTodo(todo.id);
            }
        });
    };
    
    return (
        <main>
            <Header
                restartWeek={restartWeek}
                totalTodos={totalTodos}
                completedTodos={completedTodos}
                toggleTodo={toggleTodo} // Skicka toggleTodo som en prop till Header
            />
            <div className="day-view">
                {days.map((dayTodos, index) => (
                    <Day 
                        key={weekdays[index].key} // Använder dayKey som nyckel
                        day={dayTodos} 
                        dayName={weekdays[index].name} 
                        dayKey={weekdays[index].key}
                    />
                ))}
            </div>
            <hr />
            <PrioList />
        </main>
    );
};

export default Main;
