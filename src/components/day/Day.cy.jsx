import React from 'react';
import Day from './Day';

describe('<Day />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Day day={[]} dayName="Monday" dayKey="monday" />);
    });

    it('renders the same amount of todos as are in the props', () => {
        const testTodos = [
            { id: 1, text: "Buy milk" },
            { id: 2, text: "Walk the dog" },
            { id: 3, text: "Read a book" },
        ];

        cy.mount(<Day day={testTodos} dayName="Monday" dayKey="monday" />);
        cy.get('.item').should('have.length', testTodos.length);
    });

});
