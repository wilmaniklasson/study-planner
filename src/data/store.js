import { create } from "zustand";
import { getToday } from "../utils/date.js";

const useStore = create(set => ({
  todos: [],
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
  })),


restartWeek: () => set(state => ({
  todos: state.todos.map(todo => ({ ...todo, done: false }))
}))

  
}));

export { useStore };




