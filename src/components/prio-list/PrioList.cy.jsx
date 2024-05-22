import React from 'react';
import PrioList from './PrioList';
import { useStore } from '../../data/store';

describe('<PrioList />', () => {
  const testTodos = [
    { id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' },
    { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
    { id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
    { id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
    { id: 5, day: 'on', done: false, late: false, text: 'Övning 7' },
  ];

  it('renders', () => {
    cy.mount(<PrioList />)
  });

  it('checks if there is an input', () => {
    cy.mount(<PrioList />);
    cy.get('input[placeholder="Filtrera uppgifter"]').should('exist');
  });

  it('can type in the input field', () => {
    cy.mount(<PrioList />);
    cy.get('input[placeholder="Filtrera uppgifter"]').type('Övning 7');
    cy.get('input[placeholder="Filtrera uppgifter"]').should('have.value', 'Övning 7');
  });

  it('checks if the list exists and contains "Övning 7"', () => {
    useStore.setState({ todos: testTodos }); // Lägg till testTodos i store
    cy.mount(<PrioList />);
    cy.get('input[placeholder="Filtrera uppgifter"]').type('Övning 7');
    cy.get('.prio-items').should('contain.text', 'Övning 7');
  });

  it('checks if the list filters correctly', () => {
    useStore.setState({ todos: testTodos }); // Lägg till testTodos i store
    cy.mount(<PrioList />);
    cy.get('input[placeholder="Filtrera uppgifter"]').type('Övning 7');
    cy.get('.prio-items').should('contain.text', 'Övning 7');
    cy.get('.prio-items').should('not.contain.text', 'Övning 1');
  });
});
