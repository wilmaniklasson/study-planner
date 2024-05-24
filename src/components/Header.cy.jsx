import React from 'react'
import Header from './Header'
import { useStore } from '../data/store'

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />)
  })


it('renders the same amount of todos as are in the store', () => {
  const testTodos = [
      { id: 1, day: 'mo', done: false, late: false, text: 'Göra klart inlämning' },
      { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
      { id: 3, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
      { id: 4, day: 'mo', done: false, late: false, text: 'Göra klart inlämning' },
      { id: 5, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
      { id: 6, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
  ];
        
   
  useStore.setState({ todos: testTodos });

  const completed = testTodos.filter(todo => todo.done).length;
  const total = testTodos.length;
  const expectedText = `${completed}/${total} Uppgifter klara`;

  cy.mount(<Header />);
  cy.get('.completedTodos').should('have.text', expectedText);
});

it('correctly triggers restartWeek function on button click', () => {
  const restartWeek = cy.spy().as('restartWeekSpy');
  useStore.setState({ restartWeek });

  cy.mount(<Header />);
  cy.get('.restart-week').click();
  cy.get('@restartWeekSpy').should('have.been.calledOnce');
});
});