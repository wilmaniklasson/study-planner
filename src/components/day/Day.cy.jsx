import React from 'react';
import Day from './Day';

describe('<Day />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Day day={[]} dayName="Monday" dayKey="monday" />);
    });

    it('renders the same amount of todos as are in the props', () => {
        const testTodos = [
            { id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' },
	        { id: 2, day: 'mo', done: true, late: false, text: 'Lektion i skolan 9-16' },
	        { id: 3, day: 'mo', done: false, late: true, text: 'Övning 1' },
        ];

        cy.mount(<Day day={testTodos} dayName="Monday" dayKey="monday" />);
        cy.get('.item').should('have.length', testTodos.length);
    });

});
