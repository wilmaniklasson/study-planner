import React from 'react';
import Header from './Header';

/* Som en student vill jag kunna starta nästa vecka genom att alla todo items markeras som oavslutade, så att jag inte behöver lägga in alla todo items igen. /*

/* Som en student vill jag kunna se en sammanställning av totala antalet todos och hur många som inte är klara, så att jag får en överblick över min produktivitet. (Ex.: "15/20 klara") */

describe('<Header />', () => {
  it('renders correctly with given props', () => {
   // Skapa en stub för 'restartWeek' funktionen
    const restartWeek = cy.stub();
    const totalTodos = 6;
    const completedTodos = 2;

    cy.mount(
      <Header 
        restartWeek={restartWeek} 
        totalTodos={totalTodos} 
        completedTodos={completedTodos} 
      />
    );

    cy.get('h1').contains('Min vecka');
    cy.get('.completedTodos').should('contain', `${completedTodos}/${totalTodos} Uppgifter klara`);

    cy.get('button.restart-week').click().then(() => {
      expect(restartWeek).to.be.calledOnce;
    });
  });
});
