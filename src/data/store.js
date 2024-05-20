import { create } from "zustand";
import { getToday } from "../utils/date.js";

const useStore = create(set => ({
    todos: [
    { id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' },
    { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
    { id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
    { id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
    { id: 5, day: 'on', done: true, late: false, text: 'Övning 2' },
    { id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' },
    { id: 7, day: 'to', done: false, late: false, text: 'Övning 3' },
    { id: 8, day: 'fr', done: false, late: false, text: 'Övning 4' },
    { id: 9, day: 'fr', done: false, late: false, text: 'Övning 5' },
    { id: 10, day: 'sa', done: false, late: false, text: 'Övning 6' },
    { id: 11, day: 'su', done: false, late: false, text: 'Övning 7' },
    ],
	
	todayName: getToday(),
	setTodayName: (newDay) => set({ todayName: newDay }),

	updateTodo: (id, newText) => set((state) => ({
		todos: state.todos.map(todo =>
		  todo.id === id ? { ...todo, text: newText } : todo
		)
	})),

	toggleTodo: (id) => set(state => ({
        // Itererar över alla todos och toggla 'done' statusen för den todo som matchar med id
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
    })),
    

	resetTodos: () => set(state => ({ todos: [] })),
  	setTodos: (newTodos) => set({ todos: newTodos }),

      addTodo: (day, text) => set(state => ({
        todos: [
            ...state.todos,
            { id: state.todos.length + 1, day: day, done: false, late: false, text: text } // sätter done till false som default
        ]
    })),
		  removeTodo: (id) => set(state => ({
			todos: state.todos.filter(todo => todo.id !== id)
		  }))
}));
	

export { useStore }

