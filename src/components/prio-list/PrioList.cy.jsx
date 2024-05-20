import React from 'react'
import PrioList from './PrioList'

describe('<PrioList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PrioList />)
  })

  //Som en student vill jag kunna söka efter todo items som innehåller en viss text, så att jag lätt kan se om en viss sak finns med i priolistan.

  // kolla om det finns en input
  // skriv in text i input
  // kolla om det finns en knapp
  // klicka på knappen
  // kolla om det finns en lista
  // kolla om texten finns i listan

  it('checks if there is an input', () => {
    cy.mount(<PrioList />)

    // Check if the search input exists
    cy.get('input[placeholder="Filtrera uppgifter"]').should('exist');
  });
})