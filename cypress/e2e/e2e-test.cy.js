// Lägg till en uppgift.
// Redigera en uppgift.
// Bocka av en uppgift.
// Ta bort en uppgift.
// Lägg till flera uppgifter på samma dag.
// Lägg till uppgifter på olika dagar.
// Sök efter uppgifter.

describe('End-to-end tests for task management', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  // Lägg till, redigera, bocka av, ta bort och söka uppgifter
  it('should manage tasks end-to-end', () => {
    // Lägg till uppgift
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Test task')
    cy.contains('Spara').click()
    cy.contains('Test task').should('be.visible')

    // Redigera uppgift
    cy.contains('✏️').click()
    cy.get('input[type="text"]').clear().type('Edited task')
    cy.contains('Spara').click()
    cy.contains('Edited task').should('be.visible')

    // Bocka av uppgift
    cy.get('[data-cy="checkbox"]').first().click()
    cy.get('[data-cy="checkbox"]').first().should('have.class', 'done')

    // Ta bort uppgift
    cy.contains('🗑️').click()
    cy.contains('Edited task').should('not.exist')

    // Lägg till flera uppgifter
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 1')
    cy.contains('Spara').click()
    cy.contains('Övning 1').should('be.visible')

    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 2')
    cy.contains('Spara').click()
    cy.contains('Övning 2').should('be.visible')

    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 3')
    cy.contains('Spara').click()
    cy.contains('Övning 3').should('be.visible')

    // Lägg till uppgifter på olika dagar
    cy.contains('Tisdag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 4')
    cy.contains('Spara').click()
    cy.contains('Övning 4').should('be.visible')

    cy.contains('Onsdag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 5')
    cy.contains('Spara').click()
    cy.contains('Övning 5').should('be.visible')

    // Sök efter uppgifter
    cy.get('input[type="search"]').type('Övning 1')
    cy.contains('Övning 1').should('exist')
    cy.get('input[type="search"]').clear().type('Övning 4')
    cy.contains('Övning 4').should('exist')
    cy.get('input[type="search"]').clear().type('Övning 5')
    cy.contains('Övning 5').should('exist')
    cy.get('input[type="search"]').clear()
  });
});
