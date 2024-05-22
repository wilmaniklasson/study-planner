import React from 'react'
import PrioList from './PrioList'

describe('<PrioList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
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


  it('checks if the list exists and contains (Övning 7)', () => {
    cy.mount(<PrioList />);
    cy.get('input[placeholder="Filtrera uppgifter"]').type('Övning 7');
    cy.get('.prio-items').should('contain.text', 'Övning 7');
  });


  it('checks if the list filters correctly', () => {
    cy.mount(<PrioList />);
    cy.get('input[placeholder="Filtrera uppgifter"]').type('Övning 7');
    cy.get('.prio-items').should('contain.text', 'Övning 7');
    cy.get('.prio-items').should('not.contain.text', 'Övning 1');
  })
});
