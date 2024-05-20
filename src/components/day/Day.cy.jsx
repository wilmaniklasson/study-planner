import React from 'react';
import Day from './Day';
import { useStore } from '../../data/store';
import { weekdays } from '../../utils/weekdays';


describe('Day component', () => {
  let initialState;

  before(() => {
    // Spara initialt tillstånd före alla tester
    initialState = useStore.getState();
  });

  beforeEach(() => {
    // Återställ tillståndet innan varje test
    useStore.setState(initialState, true); 
  });

  weekdays.forEach(({ key, name }) => {
    it('renders the day name and todos for ${name}', () => {
      const day = useStore.getState().todos[key] || [];

      cy.mount(<Day day={day} dayName={name} dayKey={key} />);

      cy.contains('h2', name).should('be.visible');
      day.forEach(todo => {
        cy.contains('li', todo.text).should('be.visible');
      });
    });

    it('can open and close the new todo input for ${name}', () => {
      const day = useStore.getState().todos[key] || [];

      cy.mount(<Day day={day} dayName={name} dayKey={key} />);

      cy.get('.new-task-btn').click();
      cy.get('input').should('be.visible');
      cy.get('button').contains('Avbryt').click();
      cy.get('input').should('not.exist');
    });
  });
});
