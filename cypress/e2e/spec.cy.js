describe('empty spec', function () {
    it('passes', function () {
        cy.visit('http://localhost:3000');
        cy.contains('그래야만');
    });
});
