describe('Transaction Interactions Feature', () => {
  it('should allow a user to initiate a new transaction', () => {
    cy.visit('/transactions/new'); // Navigate to the New Transaction page
    cy.getBySel('link-bank-account').should('be.visible'); // Ensure at least one bank account is linked
    cy.getBySel('new-transaction').click(); // Click on "New Transaction"
    cy.getBySel('recipient-select').select('User2'); // Select a recipient
    cy.getBySel('transaction-amount').type('100'); // Enter the transaction amount
    cy.getBySel('confirm-transaction').click(); // Confirm the transaction
    cy.getBySel('transaction-initiated').should('be.visible'); // Assert that the transaction is initiated
  });
});
