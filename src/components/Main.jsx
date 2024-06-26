import React from 'react';
import { useStore } from '../data/store.js';
import Day from "./day/Day";
import PrioList from "./prio-list/PrioList.jsx";
import { splitTodosIntoDays } from '../utils/list.js';
import { weekdays } from '../utils/weekdays.js';

const Main = () => {
    const todos = useStore(state => state.todos);
    const days = splitTodosIntoDays(todos);

    return (
        <main>
            <div className="day-view">
                {days.map((dayTodos, index) => (
                    <Day 
                        key={weekdays[index].key}
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
