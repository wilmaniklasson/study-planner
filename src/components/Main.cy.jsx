import React from 'react'
import Main from './Main'
/* Som en student vill jag att veckans alla dagar ska visas, så att jag kan välja fritt när jag vill göra mina uppgifter. */

describe('<Main />', () => {
  it('renders', () => {
    cy.mount(<Main />)
  })

  it('renders the correct day name', () => {
    cy.mount(<Main />)
    cy.get('.day-view').each((days, index) => {
      const weekdays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
      expect(days).to.contain(weekdays[index])
    })
  })
    
})