function splitTodosIntoDays(todos) {
	const mo = todos.filter(t => t.day === 'mo')
	const ti = todos.filter(t => t.day === 'ti')
	const on = todos.filter(t => t.day === 'on')
    const to = todos.filter(t => t.day === 'to')
    const fr = todos.filter(t => t.day === 'fr')
    const lo = todos.filter(t => t.day === 'lo')
    const so = todos.filter(t => t.day === 'so')


	return [mo, ti, on, to, fr, lo, so]
}
export { splitTodosIntoDays };




 
  