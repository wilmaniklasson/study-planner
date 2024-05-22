import React from 'react';
import Item from './Item';

describe('Item component', () => {
  const todoItem = { id: 1, day: 'mo', done: true, late: false, text: 'Göra klart inlämning' };

  it('renders', () => {
    cy.mount(<Item item={todoItem} />);
  });

  it('can toggle todo', () => {
    cy.mount(<Item item={todoItem} />);
    cy.get('input[type="checkbox"]').click();
  });

  it('can edit todo', () => {
    cy.mount(<Item item={todoItem} />);
    cy.get('span').contains('✏️').click();
    cy.get('input[type="text"]').type('Göra klart inlämning');
    cy.get('button').contains('Spara').click();
  });

  it('can remove todo', () => {
    cy.mount(<Item item={todoItem} />);
    cy.get('span').contains('🗑️').click();
  });
});
