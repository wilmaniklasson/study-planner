import React from 'react';
import Main from './Main';
import { useStore } from '../data/store';


describe('<Main />', () => {
    it('renders', () => {
        cy.mount(<Main />);
    });

    it('renders the same amount of todos as are in the store', () => {
        const testTodos = [
            { id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' },
            { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
            { id: 3, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
            { id: 4, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' },
        ];
              
      useStore.setState({ todos: testTodos });

      cy.mount(<Main />);
      cy.get('.item').should('have.length', testTodos.length);


    });
});

