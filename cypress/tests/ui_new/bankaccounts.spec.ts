describe('Bank Account Management Feature', () => {
  it('should allow a user to add a new bank account', () => {
    cy.visit('/bank-accounts'); // Navigate to the Bank Accounts page
    cy.getBySel('add-bank-account').click(); // Click on "Add Bank Account"
    cy.getBySel('bank-account-form').within(() => {
      cy.get('input[name="accountName"]').type('Savings Account'); // Fill in the account name
      cy.get('input[name="accountNumber"]').type('123456789'); // Fill in the account number
      cy.get('input[name="routingNumber"]').type('987654321'); // Fill in the routing number
      cy.get('select[name="accountType"]').select('Savings'); // Select the account type
      cy.root().submit(); // Submit the form
    });
    cy.getBySel('bank-account-list').should('contain', 'Savings Account'); // Assert the new bank account is added
  });
});
