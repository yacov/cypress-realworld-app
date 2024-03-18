describe('User Settings Management Feature', () => {
  it('should allow a user to update profile information', () => {
    cy.visit('/user-settings'); // Navigate to the User Settings page
    cy.getBySel('profile-form').within(() => {
      cy.get('input[name="firstName"]').clear().type('John'); // Update first name
      cy.get('input[name="lastName"]').clear().type('Doe'); // Update last name
      cy.get('input[name="email"]').clear().type('john.doe@example.com'); // Update email
      cy.root().submit(); // Submit the form
    });
    cy.getBySel('profile-updated').should('be.visible'); // Assert that the user's profile information is updated
  });
});
