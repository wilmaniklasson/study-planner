import { create } from "zustand";
import { getToday } from "../utils/date.js";

const useStore = create(set => ({
  todos: [
    { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
	{ id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
	{ id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
	{ id: 5, day: 'on', done: true, late: false, text: 'Övning 2' },
	{ id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' },
	{ id: 7, day: 'to', done: false, late: false, text: 'Övning 3' },
  ],
  todayName: getToday(),
  setTodos: todos => set({ todos }),

  setTodayName: newDay => set({ todayName: newDay }),

  updateTodo: (id, newText) => set(state => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  })),

  toggleTodo: id => set(state => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  })),


  addTodo: (day, text) => set(state => ({
    todos: [
      ...state.todos,
      { id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1, day: day, done: false, late: false, text: text }
    ]
  })),

  removeTodo: id => set(state => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}));

export { useStore };




