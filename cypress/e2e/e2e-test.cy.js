//e2e test lägg till uppgift, ta bort uppgift, redigera uppgift, bocka av uppgift, söka efter uppgift.


describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  // lägg till en uppgift
  it('should add a task', () => {
    cy.visit('/')
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Test task')
    cy.contains('Spara').click()
    cy.contains('Test task')
  })

  

  // läggeer till en uppgift och tar bort den
  it ('should  add and then remove the task', () => {
    cy.visit('/')
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Test task')
    cy.contains('Spara').click()
    cy.contains('Test task')
    cy.contains('🗑️').click()
    cy.contains('Test task').should('not.exist')
  })

  // Ändra texten på en uppgift
  it ('should edit a task', () => {
    cy.visit('/')
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Test task')
    cy.contains('Spara').click()
    cy.contains('Test task')
    cy.contains('✏️').click()
    cy.get('input[type="text"]').clear().type('Edited task')
    cy.contains('Spara').click()
    cy.contains('Edited task')
  })

  it('should toggle a task', () => {
    cy.visit('/')
    cy.get('[data-cy="checkbox"]').first().click()
    cy.get('[data-cy="checkbox"]').should('have.class', 'done')
})


  // lägg till övning 1, 2 och 3 på samma dag
  it('should add Övning 1,2 and 3', () => {
    cy.visit('/')
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 1')
    cy.contains('Spara').click()
    cy.contains('Övning 1')
 
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 2')
    cy.contains('Spara').click()
    cy.contains('Övning 2')
    
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 3')
    cy.contains('Spara').click()
    cy.contains('Övning 3')
  })

  // sök efter övning 1, 2 och 3
  it ('should search for a task', () => {
    cy.visit('/')
    cy.get('input[type="search"]').type('Övning 1')
    cy.contains('Övning 1').should('exist')
    cy.get('input[type="search"]').clear().type('Övning 2')
    cy.contains('Övning 2').should('exist')
    cy.get('input[type="search"]').clear().type('Övning 3')
    cy.contains('Övning 3').should('exist')
    cy.get('input[type="search"]').clear()
  })


  // lägg till övning 5, 6, 7 och sök efter dem
  it('should add (Övning 5, 6, 7) and search for them', () => {
    cy.visit('/')

    //Måndag övning 5
    cy.contains('Måndag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 5')
    cy.contains('Spara').click()
    cy.contains('Övning 5')
 
    //Tisdag övning 6
    cy.contains('Tisdag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 6')
    cy.contains('Spara').click()
    cy.contains('Övning 6')
    

    //Onsdag övning 7
    cy.contains('Onsdag').click()
    cy.contains('Ny uppgift').click()
    cy.get('input[type="text"]').type('Övning 7')
    cy.contains('Spara').click()
    cy.contains('Övning 7')

    //Sök efter övning 5, 6, 7
    cy.get('input[type="search"]').type('Övning 5')
    cy.contains('Övning 5').should('exist')
    cy.get('input[type="search"]').clear().type('Övning 6')
    cy.contains('Övning 6').should('exist')
    cy.get('input[type="search"]').clear().type('Övning 7')
    cy.contains('Övning 7').should('exist')
    cy.get('input[type="search"]').clear()
  })
});
