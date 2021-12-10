describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should show spotify streaming platform when a user clicks on a Music Player Link', () => {
    cy.get('div.Links__Wrapper:nth-child(3) > div.Link > button.Link__Wrapper')
      .should('contain.text', 'Perfect')
      .click();
    cy.get(
      'div.MusicLink__Wrapper:nth-child(1) > div.MusicDetail:nth-child(1) > div.MusicDetail__PlatformName',
    ).should('contain.text', 'Spotify');
  });

  it('should show a list of shows when a user clicks on the shows list link', () => {
    cy.get('div.Links__Wrapper:nth-child(2) > div.Link > button.Link__Wrapper')
      .should('contain.text', 'Show')
      .click();
    cy.get('div.SubLink__Wrapper').should('be.visible');
  });

  it('should close music player link when a user clicks on the music player link and then on a shows list link', () => {
    cy.get('div.Links__Wrapper:nth-child(3) > div.Link > button.Link__Wrapper')
      .should('contain.text', 'Perfect')
      .click();
    cy.get(
      'div.MusicLink__Wrapper:nth-child(1) > div.MusicDetail:nth-child(1) > div.MusicDetail__PlatformName',
    ).should('contain.text', 'Spotify');

    cy.get('div.Links__Wrapper:nth-child(2) > div.Link > button.Link__Wrapper')
      .should('contain.text', 'Show')
      .click();
    cy.get('div.SubLink__Wrapper').should('be.visible');
    cy.get(
      'div.MusicLink__Wrapper:nth-child(1) > div.MusicDetail:nth-child(1) > div.MusicDetail__PlatformName',
    ).should('not.exist');
  });
});

export {};
