describe('Transaction Feeds Feature', () => {
  it('should display recent transactions correctly', () => {
    cy.loginByXstate('user1'); // Log in as user1
    cy.task('seedTransactions', { user: 'user1', count: 5 }); // Seed 5 transactions for user1
    cy.visit('/transactions'); // Navigate to the transaction feed page
    cy.getBySel('transaction-list').should('be.visible'); // Assert the transaction list is visible
  });
});
