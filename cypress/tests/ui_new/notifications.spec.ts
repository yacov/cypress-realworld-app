describe('Notification System Feature', () => {
  it('should notify the user of a received transaction', () => {
    cy.enableNotifications('user1'); // Ensure notifications are enabled for the user
    cy.simulateTransactionReceived('user1', 100); // Simulate receiving a new transaction
    cy.getBySel('notification-received-transaction').should('be.visible'); // Assert that the user receives a notification about the new transaction
  });
});
