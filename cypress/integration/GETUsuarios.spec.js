describe('Products api', () => {
  context('GET /usuarios', () => {
      it('should return a list with all usuarios', () => {
          cy.request({
              method: 'GET',
              url: 'https://serverest.dev/usuarios'
          }).should((response) => {
              cy.log(JSON.stringify(response.body));
              expect(response.status).to.eq(200);
              expect(response.body.usuarios[0]).to.have.all.keys(
                  'nome', 'email', 'password', 'administrador', '_id'
                  );
                });
      });
  });
});