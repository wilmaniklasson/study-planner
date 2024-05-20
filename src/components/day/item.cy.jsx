import React from 'react'
import Item from './Item'
import { useStore } from '../../data/store';


describe('Item component', () => {
  let initialState;

  const todoItem = {
    id: '1',
    text: 'Test Todo',
    done: false
  };

  before(() => {
    // Spara initialt tillstånd före alla tester
    initialState = useStore.getState();
  });

  beforeEach(() => {
    // Återställer store till sitt initialt tillstånd före varje test
    useStore.setState(initialState, true);

    //Stubbar att använda som referera till senare
    const toggleTodoStub = cy.stub().as('toggleTodo');
    const updateTodoStub = cy.stub().as('updateTodo');
    const removeTodoStub = cy.stub().as('removeTodo');

    // Lägg till en todo item i butiken och ersätt metoder med stubbar
    useStore.setState(state => ({
      todos: {
        ...state.todos,
        [todoItem.id]: todoItem
      },
      toggleTodo: toggleTodoStub,
      updateTodo: updateTodoStub,
      removeTodo: removeTodoStub
    }));
  });

  it('renders the item correctly', () => {
    cy.mount(<Item item={todoItem} />);

    cy.get('label').should('contain.text', todoItem.text);
    cy.get('input[type="checkbox"]').should('not.be.checked');
  });

  it('toggles the todo status', () => {
    cy.mount(<Item item={todoItem} />);

    cy.get('input[type="checkbox"]').check();
    cy.get('@toggleTodo').should('have.been.calledWith', todoItem.id);
  });

  /* Som en student vill jag kunna ändra texten för en todo item, så att jag kan uppdatera den om något nytt händer. */

  it('edits the todo item', () => {
    cy.mount(<Item item={todoItem} />);

    cy.get('[title="Ändra"]').click();
    cy.get('input[type="text"]').clear().type('Updated Todo');
    cy.get('.save-btn').click();

    cy.get('@updateTodo').should('have.been.calledWith', todoItem.id, 'Updated Todo');
  });

  it('cancels editing the todo item', () => {
    cy.mount(<Item item={todoItem} />);

    cy.get('[title="Ändra"]').click();
    cy.get('input[type="text"]').clear().type('Updated Todo');
    cy.get('.cancel-btn').click();

    cy.get('label').should('contain.text', todoItem.text);
  });

  /* Som en student vill jag kunna ta bort en todo item, eftersom saker kan ändras. */

  it('removes the todo item', () => {
    cy.mount(<Item item={todoItem} />);

    cy.get('[title="Ta bort"]').click();
    cy.get('@removeTodo').should('have.been.calledWith', todoItem.id);
  });
});
